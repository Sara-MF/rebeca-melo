import Image from "next/image"

export default function Projeto1() {
    return (
        <main className="projeto1 content">

            <Image
                src="/projeto-design.jpg"
                alt="My picture"
                width={200}
                height={200}
                className="mt-24"
            />

            <p className="text-grape font-extralight text-2xl">Tipo do projeto</p>

            <div className="flex flex-row px-40 text-justify gap-16">
                <h4 className="text-grape font-normal text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed arcu non odio euismod. Purus non enim praesent elementum. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet luctus venenatis lectus magna. Praesent semper feugiat nibh sed. Scelerisque eu ultrices vitae auctor eu augue. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Dignissim cras tincidunt lobortis feugiat vivamus.</h4>

                <h4 className="text-grape font-normal text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed arcu non odio euismod. Purus non enim praesent elementum. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet luctus venenatis lectus magna. Praesent semper feugiat nibh sed. Scelerisque eu ultrices vitae auctor eu augue. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Dignissim cras tincidunt lobortis feugiat vivamus.</h4>
            </div>
        </main>
    )
}
