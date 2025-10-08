import Image from "next/image";

export default function AboutPage() {
    return (
        <>
        <div className="flex gap-3">
            <div>
                <Image src="https://placehold.co/400" alt="Portrait of Bilal"/>
            </div>
            <div>
                {`I'm Bilal, a student and pationate about new techs`}
            </div>
        </div>
        </>
    )
} 