import ContactForm from "./contact-form";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <h1 className="text-3xl text-primary font-semibold text-center mb-4">
        Contact me
      </h1>
      <div className="overflow-hidden bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm p-6">
        <div className="leading-none font-semibold">I Want To Hear From You</div>
        <div className="text-muted-foreground text-sm">Please fill out the form on this section to contact with me.<br /> or <Link href="mailto:mbilal2913@gmail.com" className="text-primary" target="_blank">Mail</Link> between 9:00 a.m. and 8:00 p.m. UTC+5, Monday through Friday</div>
        <div className="px-3">
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
