import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import data from "./data.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ProjectsPage() {
  return (
    <div>
      <div>
        <h1 className="text-3xl text-primary font-extrabold text-center">
          My Amazing Works
        </h1>
        <p className="text-sm mt-2">
          A selection of my favorite projects showcasing experimentation,
          learning, and creative problem-solving. Explore demos and source code
          to see each idea in action.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        {data.projects.map((project) => (
          <Card
            className="shadow-md hover:shadow-lg transition-all p-4"
            key={project.name}
          >
            <CardHeader>
              <CardTitle className="mt-3">{project.name}</CardTitle>
              <CardAction>
                <Link href={`https://github.com/BilalSwl6/${project.github}`}>
                  <Button variant="secondary">Github</Button>
                </Link>
              </CardAction>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image ? `/projects/${project.image}` : "/projects/not-found.png"}
                alt={`${project.name} preview`}
                height={500}
                width={500}
                className="w-full h-58 aspect-[9/16] object-cover rounded-md mb-2"
              />
              <p>{project.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-3">
              <div className="mb-3">
                {project.tags.map((tag) => (
                  <span
                    className="border rounded px-2 py-1 text-xs mr-2"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Separator className="my-4" />
              {project.demo == "" ? (
                <>
                  <p className="text-sm text-gray-800 dark:text-white bg-primary rounded-md p-2 font-semibold text-center capitalize">{project.note}</p>
                </>
              ) : (
                <Link href={project.demo}>
                  <Button variant="default" className="full-width">
                    Demo
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
