import Project from "./components/Project"

export default function Home() {
    return (
        <main className="content">

            <div className="title">
                <h1>Conheça meus projetos</h1>
            </div>

            <div className="projects">
                <Project name="Projeto 1" />
                <Project name="Projeto 2" />
                <Project name="Projeto 3" />
                <Project name="Projeto 4" />
                <Project name="Projeto 5" />
                <Project name="Projeto 6" />
                <Project name="Projeto 7" />
            </div>
        </main>
    )
}