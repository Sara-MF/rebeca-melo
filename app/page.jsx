import Project from "./components/Project"

export default function Home() {
    return (
        <main className="content">

            <div className="title">
                <h1>Conheça meus projetos</h1>
            </div>

            <div className="projects">
                <Project name="Projeto 1" link={"/projeto1"} />
                <Project name="Projeto 2" link={"/projeto1"} />
                <Project name="Projeto 3" link={"/projeto1"} />
                <Project name="Projeto 4" link={"/projeto1"} />
                <Project name="Projeto 5" link={"/projeto1"} />
                <Project name="Projeto 6" link={"/projeto1"} />
                <Project name="Projeto 7" link={"/projeto1"} />
            </div>
        </main>
    )
}