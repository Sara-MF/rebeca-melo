import Image from "next/image"
import Link from "next/link"

export default function Project({ name, link }) {
    return (
        <main>

            <div className="group w-fit h-fit grid place-content-evenly rounded-3xl border-4 border-grape bg-stone hover:border-2 hover:scale-125 z-0 hover:z-10 duration-1000">

                <div className="grid group-hover:m-4 duration-1000">

                    <div className="h-72 w-72 relative rounded-3xl border-grape">
                        <Link href={link}>
                            <Image
                                src="/projeto-design.jpg"
                                alt="My picture"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-3xl"
                            />
                        </Link>
                    </div>

                    <div className="h-0 scale-0 group-hover:h-4 group-hover:scale-100 group-hover:mt-4 duration-1000">
                        <h4 className="text-center text-black font-medium text-xl -mt-2 opacity-0 group-hover:opacity-100 group-hover:delay-300 duration-300">{name}</h4>
                    </div>


                </div>


            </div>

        </main>
    )
}
