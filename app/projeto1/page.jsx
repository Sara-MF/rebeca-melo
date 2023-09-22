import Image from "next/image"
import Link from "next/link"

export default function Projeto1() {
    return (
        <main className="content">

            <div className="py-10 px-40">

                <div className="bg-sand rounded-3xl w-20 h-7 items-center mb-7">
                    <Link href={"/"} className="text-grape font-extralight text-lg">Voltar</Link>
                </div>

                <div className="relative">

                    <Image
                        src="/landscape.png"
                        alt="My picture"
                        width={2000}
                        height={400}
                        className="mb-8"
                    />

                    <p className="text-grape font-extralight text-2xl flex flex-start mb-12">Tipo do projeto</p>

                    <div className="flex flex-row text-justify gap-16 mb-20">
                        <h4 className="text-grape font-normal text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed arcu non odio euismod. Purus non enim praesent elementum. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet luctus venenatis lectus magna. Praesent semper feugiat nibh sed. Scelerisque eu ultrices vitae auctor eu augue. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Dignissim cras tincidunt lobortis feugiat vivamus.</h4>

                        <h4 className="text-grape font-normal text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed arcu non odio euismod. Purus non enim praesent elementum. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet luctus venenatis lectus magna. Praesent semper feugiat nibh sed. Scelerisque eu ultrices vitae auctor eu augue. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Dignissim cras tincidunt lobortis feugiat vivamus.</h4>
                    </div>

                    <Image
                        src="/landscape.png"
                        alt="My picture"
                        width={2000}
                        height={400}
                        className="mb-8"
                    />

                    <p className="text-grape font-extralight text-2xl flex flex-start mb-12">Tipo do projeto</p>

                    <div className="flex flex-row text-justify gap-16">
                        <h4 className="text-grape font-normal text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed arcu non odio euismod. Purus non enim praesent elementum. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet luctus venenatis lectus magna. Praesent semper feugiat nibh sed. Scelerisque eu ultrices vitae auctor eu augue. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Dignissim cras tincidunt lobortis feugiat vivamus.</h4>

                        <h4 className="text-grape font-normal text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed arcu non odio euismod. Purus non enim praesent elementum. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet luctus venenatis lectus magna. Praesent semper feugiat nibh sed. Scelerisque eu ultrices vitae auctor eu augue. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Dignissim cras tincidunt lobortis feugiat vivamus.</h4>
                    </div>

                </div>

                <div className="bg-sand rounded-3xl w-20 h-7 items-center mt-12">
                    <Link href={"/"} className="text-grape font-extralight text-lg">Voltar</Link>
                </div>

            </div>

        </main>
    )
}
