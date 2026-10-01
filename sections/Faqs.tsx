import Tag from "@/components/Tag";
import { faqs } from "@/constants";

export default function Faqs() {
  return <section className="py-24">
    <div className="mx-10">
      <Tag>Faqs</Tag>
      <h2>Questions? We have got <span>answers</span></h2>
      <div>
        {faqs.map((faq) => (
          <div key={faq.question}>
            <div>
              <h3>{faq.question}</h3>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus text-lime-400"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <p>{faq.answer}</p>

            </div>

          </div>
        ))}
      </div>
    </div>
  </section>
}
