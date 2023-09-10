import Image from "next/image"

export default function About() {
    return (
        <main class="about">

            <div class="flex flex-col items-center mt-6">
                <div class="h-20 w-20 relative">
                    <Image
                        src="/temporary-picture.png"
                        alt="My picture"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>

                <h4 class="name">Rebeca Melo</h4>

                <div class="age-pronoums">
                    <p>22 anos</p>
                    <p>Ela / Dela</p>
                </div>

            </div>

        </main>
    )
}
