import { Timeline, TimelineItem } from "@/components/timeline"

export default function Page() {
  return (
    <main className="container mx-auto py-16">
      <Timeline>
        <TimelineItem
          label="Birth"
          date="2007"
          images={[
            { src: "/images/mac1.jpg", alt: "Childhood photo 1" },
            { src: "/images/mac2.jpg", alt: "Childhood photo 2" },
          ]}
        >
          I was born in the culturally rich region of Punjab in 2007.  
          My early years were filled with curiosity, family warmth, and a love for learning.  
          Growing up in a simple environment taught me the importance of gratitude, humility, and strong community values.
        </TimelineItem>

        <TimelineItem
          label="Migration"
          date="2019"
          reverse
          images={[
            { src: "/images/imac1.jpg", alt: "Village life" },
            { src: "/images/imac2.jpg", alt: "Moving to the city" },
            { src: "/images/imac3.jpg", alt: "City view" },
          ]}
        >
          In 2019, I moved from my native village to the city.  
          This transition marked a significant turning point — stepping into a new environment, adapting to a faster pace of life, and embracing broader educational and social opportunities.  
          It was both a challenge and a period of growth, helping me develop confidence, independence, and adaptability.
        </TimelineItem>

        <TimelineItem
          label="Matriculation"
          date="2022"
          images={[
            { src: "/images/iphone1.jpg", alt: "School memory 1" },
            { src: "/images/iphone2.jpg", alt: "School memory 2" },
          ]}
        >
          I successfully completed my matriculation from Government Batala Muslim High School in 2022.  
          This stage deepened my academic foundation and strengthened my interest in science and learning.  
          It also built discipline and perseverance, shaping the mindset I carry forward in every pursuit.
        </TimelineItem>

        <TimelineItem
          label="Dispenser Course"
          date="2022–2024"
          reverse
          images={[
            { src: "/images/iphone1.jpg", alt: "Medical training 1" },
            { src: "/images/iphone2.jpg", alt: "Medical training 2" },
          ]}
        >
          I enrolled in a two-year dispenser course from 2022 to 2024, exploring the fundamentals of healthcare and medicine.  
          The program introduced me to medical ethics, first aid, patient care, and pharmaceutical dispensing.  
          It gave me a hands-on understanding of how compassion, precision, and knowledge intersect in the medical field.
        </TimelineItem>

        <TimelineItem
          label="Preparing for College"
          date="Present"
          images={[
            { src: "/images/iphone1.jpg", alt: "Study plan 1" },
            { src: "/images/iphone2.jpg", alt: "Study plan 2" },
          ]}
        >
          I am currently preparing for the next phase of my academic journey — pursuing F.Sc. in college.  
          This period is focused on building a stronger scientific base and aligning my studies with future goals.  
          I’m refining my interests, strengthening my focus, and planning the steps toward a career dedicated to knowledge and service.
        </TimelineItem>
      </Timeline>
    </main>
  )
}
