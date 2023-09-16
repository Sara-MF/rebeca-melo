import Image from "next/image"

export default function Projeto1() {
    return (
        <main className="projeto1 content">
            <h1>Nome do Projeto 1</h1>

            <Image
                src="/temporary-picture.png"
                alt="My picture"
                width={50}
                height={50}
            />

            <p>Informações pequenas sobre o projeto</p>

            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed arcu non odio euismod. Purus non enim praesent elementum. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet luctus venenatis lectus magna. Praesent semper feugiat nibh sed. Scelerisque eu ultrices vitae auctor eu augue. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Dignissim cras tincidunt lobortis feugiat vivamus.</h6>
        </main>
    )
}
