import ava from "@/assets/porto-avatar.png"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6"

const Heading = () => {
    return (
        <div className="flex gap-[40px] justify-center">
            <div className="border border-primary border-4 rounded-full h-fit w-fit">
                <img src={ava} alt="" className="w-[140px] h-[140px] md:w-[215px] md:h-[215px] rounded-full border border-white border-[8px]" />
            </div>
            <div className="flex flex-col gap-[12px] justify-center">
                <div className="flex flex-col gap-[3px]">
                    <h1 className="text-[clamp(24px,4vw,44px)] font-medium text-foreground">Bayu Rizki</h1>
                    <p className="text-[clamp(15px,2.5vw,22px)] text-foreground-subtle">Software Engineer</p>
                </div>
                <div className="flex gap-[12px]">
                    <a href="https://github.com/b1354" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-[30px] h-[30px] dark:text-foreground-subtle" />
                    </a>
                    <a href="https://linkedin.com/in/bayu-rizki" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-[30px] h-[30px] dark:text-foreground-subtle" />
                    </a>
                    <a href="https://www.facebook.com/bayurizky1354" target="_blank">
                        <FaFacebook className="w-[30px] h-[30px] dark:text-foreground-subtle" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Heading