import React from "react";
import "./Faq.css";

const faqData = [
  {
    question: "What kind of issues can I report?",
    answer:
      "You can report issues like garbage disposal, potholes, illegal construction, waterlogging, broken streetlights, pollution, and more",
  },
  {
    question: "Can I track the status of my report?",
    answer:
      "Yes, you can view the status of your report under the 'My Reports' section.",
  },
  {
    question: "Is there a way to prioritize my report?",
    answer:
      "Yes, you can mark reports as urgent if they need immediate attention, such as road accidents or fire hazards.",
  },
  {
    question: "What happens after I submit a report?",
    answer: "The respective authorities will review your report and take necessary action. You will receive updates on the progress.",
  },
  {
    question: "How long does it take for a report to be resolved?",
    answer: "Resolution time depends on the nature of the issue and the concerned department. You will be notified as progress is made.",
  },
  {
    question: "Are there rewards for submitting reports?",
    answer: "Active users may receive recognition or rewards for reporting critical issues frequently.",
  }
];

const FAQ = () => {
  const [active, setActive] = React.useState(null);

  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <div className="">
    <div className="FAQ-main">
      <h1 className="FAQ-title">Frequently Asked Questions</h1>

      {faqData.map((item, index) => (
        <div key={index} className="FAQ-item">
          <div
            className="FAQ-question"
            onClick={() => handleClick(index)}
          >
            <h3>{item.question}</h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>
          {active === index && <p className="FAQ-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
