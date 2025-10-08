import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex gap-3">
      <div>
        <Image
          src="https://placehold.co/400"
          alt="Portrait of Bilal"
          width={400}
          height={400}
        />
      </div>
      <div>
        {`I'm Bilal, a student passionate about new technologies.`}
      </div>
    </div>
  );
}
