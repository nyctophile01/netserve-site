const faqData = {
  home: [
    { q: "What is NetServe Solutions?", a: "We are a leading router service center in India." },
    { q: "Which brands do you support?", a: "We support TP-Link, D-Link, Netgear, Tenda, and more." },
    { q: "Where are you located?", a: "We are based in New Delhi with multiple service branches." },
    { q: "Do you offer home pickup services?", a: "Yes, we offer home pickup in select areas." }
  ],
  services: [
    { q: "Do you repair all routers?", a: "Yes, we support most major router brands." },
    { q: "Is firmware update included?", a: "Yes, firmware updates are part of the service." },
    { q: "What is the cost of diagnosis?", a: "Diagnosis is free for all walk-in customers." },
    { q: "Do you provide replacement parts?", a: "Yes, we use genuine parts for all replacements." }
  ],
  track: [
    { q: "How can I track my service?", a: "Enter your Order ID and click Track." },
    { q: "What does 'In Process' mean?", a: "It means your service is currently being handled." },
    { q: "How often is the status updated?", a: "The service status is updated every 24 hours." },
    { q: "What if I lost my Order ID?", a: "Contact our support team with your registered mobile/email." }
  ],
  contact: [
    { q: "Can I walk into the service center?", a: "Yes, we're open Mon–Sat 10am to 6pm." },
    { q: "Do you offer phone support?", a: "Yes, call us at +91-9876543210." },
    { q: "How can I give feedback?", a: "You can email us at support@netservesolutions.com." },
    { q: "Do you have branches outside Delhi?", a: "Yes, we have centers in major Indian cities." }
  ]
};

function loadFAQs(section) {
  const faqSection = document.getElementById("faqs");
  if (!faqSection) return;

  faqSection.innerHTML = `<h2>Frequently Asked Questions</h2>`;

  faqData[section]?.forEach(item => {
    const detail = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = item.q;
    const para = document.createElement("p");
    para.textContent = item.a;
    detail.appendChild(summary);
    detail.appendChild(para);
    faqSection.appendChild(detail);
  });
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function () {
    const href = this.getAttribute("href").substring(1);
    loadFAQs(href);
  });
});

// Default FAQs on load (home)
document.addEventListener("DOMContentLoaded", () => loadFAQs("home"));


document.getElementById('trackingForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const orderId = document.getElementById('orderID').value;
  const resultDiv = document.getElementById('trackingResult');
  resultDiv.innerHTML = `<p>Status for Order ID <strong>${orderId}</strong>: <span style="color:green;">In Process</span></p>`;
});
