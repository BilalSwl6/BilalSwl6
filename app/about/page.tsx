import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex gap-10">
      <div>
        <Image
          src="/bilal.jpeg"
          alt="Portrait of Bilal"
          height={400}
          width={400}
          className="rounded-full object-cover"
        />
      </div>
      <div className="mt-4">
        {`I'm Bilal, a student passionate about new technologies.`}
      </div>
    </div>
  );
}
