import data from "./data.json";
import Image from "next/image";
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
          <div
            className="hover:shadow-lg transition-all overflow-hidden bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm p-6"
            key={project.name}
          >
            <div 
            className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
            >
              <div className="mt-3 leading-none font-semibold">{project.name}</div>
              <div
              className="col-start-2 row-span-2 row-start-1 self-start justify-self-end"
              >
                <Link href={`https://github.com/BilalSwl6/${project.github}`}>
                  <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-9 px-4 py-2 rounded-md">Github</button>
                </Link>
              </div>
            </div>
            <div className="px-6">
              <Image
                src={project.image ? `/projects/${project.image}` : "/projects/not-found.png"}
                alt={`${project.name} preview`}
                height={500}
                width={500}
                className="w-full h-58 aspect-[9/16] object-cover rounded-md mb-2"
              />
              <p>{project.description}</p>
            </div>
            <div className="flex-col items-start space-y-3 flex px-6 [.border-t]:pt-6">
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
              <div className="my-4 w-full h-px bg-border border border-black dark:border-white rounded-sm" />
              {project.demo == "" ? (
                <>
                  <p className="text-sm bg-primary rounded-md p-2 font-semibold text-center capitalize">{project.note}</p>
                </>
              ) : (
                <Link href={project.demo} target="_blank">
                  <button className="bg-primary font-semibold hover:bg-primary/90 h-9 px-4 py-2 rounded-md ">
                    Demo
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
