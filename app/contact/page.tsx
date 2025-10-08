import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "./contact-form";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <h1 className="text-3xl text-primary font-semibold text-center mb-4">
        Contact me
      </h1>
      <Card className="p-6">
        <CardTitle>I Want To Hear From You</CardTitle>
        <CardDescription>Please fill out the form on this section to contact with me.<br /> or <Link href="mailto:mbilal2913@gmail.com" className="text-primary" target="_blank">Mail</Link> between 9:00 a.m. and 8:00 p.m. UTC+5, Monday through Friday</CardDescription>
        <CardContent>
          <div>
            <ContactForm />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
