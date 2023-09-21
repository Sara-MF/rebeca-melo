import Project from "./components/Project"

export default function Home() {
    return (
        <main className="content">

            <div className="title">
                <h1>Conheça meus projetos</h1>
            </div>

            <div className="projects">
                <Project name="Projeto 1" link={"/projeto1"} />
                <Project name="Projeto 2" link={"/projeto2"} />
                <Project name="Projeto 3" link={"/projeto3"} />
                <Project name="Projeto 4" link={"/projeto4"} />
                <Project name="Projeto 5" link={"/projeto5"} />
                <Project name="Projeto 6" link={"/projeto6"} />
                <Project name="Projeto 7" link={"/projeto7"} />
            </div>
        </main>
    )
}