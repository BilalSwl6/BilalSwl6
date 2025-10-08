import data from "./data.json";

function ProjectsPage() {
    return(
        <>
        {data.projects.map(({name}) => (
            <div key={name}>{name}</div>
        ))}
        </>
    )
}

export default ProjectsPage;