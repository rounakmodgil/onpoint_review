import React from 'react';
import {Platform} from 'react-native';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient, InMemoryCache, HttpLink} from 'apollo-client-preset';

import {onError} from 'apollo-link-error';
import {ApolloLink, Observable} from 'apollo-link';
import {TokenRefreshLink} from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';

import App from './App';
import {getAccessToken, setAccessToken} from './Pages/accessToke';

export default function App2() {
  const cache = new InMemoryCache({});

  const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable((observer) => {
        let handle;
        Promise.resolve(operation)
          .then((operation) => {
            const accessToken = getAccessToken();
            if (accessToken) {
              operation.setContext({
                headers: {
                  authorization: `bearer ${accessToken}`,
                },
              });
            }
          })
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            });
          })
          .catch(observer.error.bind(observer));

        return () => {
          if (handle) handle.unsubscribe();
        };
      }),
  );

  // const client = new ApolloClient({
  //     cache: cache,

  //     link: new HttpLink({
  //       uri: Platform.select({
  //         ios: 'http://localhost:4000/graphql',
  //         android: 'http://10.0.2.2:4000/graphql',
  //       }),
  //     }),
  //   });

  const client = new ApolloClient({
    link: ApolloLink.from([
      new TokenRefreshLink({
        accessTokenField: 'accessToken',
        isTokenValidOrUndefined: () => {
          const token = getAccessToken();
          if (!token) {
            return true;
          }
          try {
            const {exp} = jwtDecode(token);
            if (Date.now() >= exp * 1000) {
              return false;
            } else {
              return true;
            }
          } catch {
            return false;
          }
        },
        fetchAccessToken: () => {
          return fetch('http://10.0.2.2:4000/refresh_token', {
            method: 'POST',
            credentials: 'include',
          });
        },
        handleFetch: (accessToken) => {
          setAccessToken(accessToken);
        },
        handleError: (err) => {
          console.warn('Your refresh token is invalid. Try to relogin');
          console.log(err);
        },
      }),
      onError(({graphQLErrors, networkError}) => {
        console.log(graphQLErrors);
        console.log(networkError);
      }),
      requestLink,
      new HttpLink({
        uri: Platform.select({
          ios: 'http://localhost:4000/graphql',
          android: 'http://10.0.2.2:4000/graphql',
        }),
        credentials: 'include',
      }),
    ]),
    cache,
  });

  cache.writeData({
    data: {
      isConnected: true,
    },
  });

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

