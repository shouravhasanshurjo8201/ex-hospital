export default function FAQ() {
  const faqs = [
    { q: "How can I book an appointment?", a: "You can book an appointment online through our website or call our hotline." },
    { q: "Do you provide 24/7 emergency service?", a: "Yes, we have 24/7 emergency and ambulance services." },
    { q: "Which doctors are available?", a: "We have specialists in cardiology, neurology, orthopedics, maternity & more." },
    { q: "Do you accept health insurance?", a: "Yes, we accept most health insurance depending on company policy." },
  ];

  return (
    <section className="pt-16">
      <h2 className="text-3xl text-emerald-600 font-bold text-center mb-10">Frequently Asked Questions</h2>

      <div className="px-5">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="mb-4 bg-gray-100 p-4 rounded-lg shadow cursor-pointer"
          >
            <summary className="font-semibold text-lg">
              {faq.q}
            </summary>
            <p className="mt-2 text-gray-600">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
