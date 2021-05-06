import React from "react";
import Navbar from "./components/Navbar";
import Smallfooter from "./components/Smallfooter";
import "./Faq.css";

const questionaries = [
  {
    question: "What is Sigdi?",
    answer:
      "At Sigdi, we provide a platform to deliver your favourite and delicious food dishes at your doorstep made by our home chefs. We promise to maintain hygiene standards and no compromise for your Mann-Pasand taste!",
  },
  {
    question: "How can I register as a home chef at Sigdi?",
    answer:
      "As for now, the application is in the beta testing phase, so for now you can click the “Join Us” button on our website and fill in your details in the form given there. We will get in touch with you for further process.",
  },
  {
    question: "Is FSSAI registration mandatory for home chefs?",
    answer:
      "Yes, you need a food license from FSSAI to sell homemade food but if it is a small scale, only registration is required. We will get you FSSAI register if you are not already registered.",
  },
  {
    question: "Do I as a home chef need to pay any registration fee?",
    answer:
      "No, you don’t need to pay any registration fee to get yourself registered as a home chef at Sigdi.",
  },
  {
    question: "How do I download the App?",
    answer:
      "Currently, we are in the beta testing phase. Our app will be launched soon on Google Play Store and App Store.",
  },
];

function Boiler() {
  return (
    <>
      <Navbar />
      <div className="boiler-main">
        <div className="boiler-title-background">
          <h1 className="boiler-header">FAQ's</h1>
        </div>
        <div style={{ padding: "30px 20px" }}>
          {questionaries.map((ques) => (
            <>
              <h4 className="faq-question">{ques.question}</h4>
              <p className="faq-answer">{ques.answer}</p>
            </>
          ))}
        </div>
      </div>
      <Smallfooter />
    </>
  );
}

export default Boiler;
