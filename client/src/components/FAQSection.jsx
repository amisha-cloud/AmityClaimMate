import React from 'react';

function FAQSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-primary text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="q1">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#a1">
                How do I report a lost item?
              </button>
            </h2>
            <div id="a1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Fill the form with a detailed description and location.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="q2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a2">
                How will I be notified if my item is found?
              </button>
            </h2>
            <div id="a2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                You will receive an email or SMS when your item is matched.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
