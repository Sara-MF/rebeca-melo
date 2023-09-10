import Image from "next/image"

export default function About() {
    return (
        <div>
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={100}
                height={24}
                priority
            />
        </div>
    )
}
