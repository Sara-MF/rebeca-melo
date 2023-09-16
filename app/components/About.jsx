import Image from "next/image"
import { getAge } from "../utils/DateUtil"

export default function About() {
    return (
        <main className="about">

            <div className="flex flex-col items-center mt-6">
                <div className="h-48 w-48 relative">
                    <Image
                        src="/my-photo.png"
                        alt="My picture"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>

                <h4 className="name">Rebeca Melo</h4>

                <div className="age-pronoums">
                    <p>Ela / Dela | {getAge()} </p>
                </div>

                <h4 className="about-me">Sou graduanda em Design pela Universidade Federal do Ceará e estou morrendo por um emprego ;)</h4>

                <h5>Futuro link pra currículo no drive</h5>

                <h6>Desenvolvido por Sara Melo</h6>

            </div>

        </main>
    )
}
