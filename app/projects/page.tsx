import data from "./data.json";

function ProjectsPage() {
    console.log(data);
    return(
        <>
        {data.projects.map(({name, github}) => (
            <div key={name}>{name}</div>
        ))}
        </>
    )
}

export default ProjectsPage;