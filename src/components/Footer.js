import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";



function Footer() {
    return (
        <div>
            <footer className="flex text-white justify-between fixed bottom-0 w-full px-2">
                <a href="https://github.com/dirac182/movie-span" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-orange-500 cursor-pointer" >
                    <p>Project Repo </p>
                    <div className="text-2xl pl-2">
                    </div>
                </a>
                <div className="flex  items-center">
                    <p className="text-xl">Created by dirac182</p>
                    <a href="https://github.com/dirac182" target="_blank" rel="noopener noreferrer" className="text-2xl pl-1 hover:text-orange-500 cursor-pointer"><FaGithub /></a>
                    <a href="https://linkedin.com/in/dmorin9696" target="_blank" rel="noopener noreferrer" className="text-2xl pl-1 hover:text-orange-500 cursor-pointer"><FaLinkedin/></a>
                </div>
                <div className="flex flex-col md:pr-16">
                    <div className="">
                        <p className="pr-2 align-bottom">Powered By:</p>
                    </div>
                    <div className="flex">
                        <div className="text-2xl md:text-4xl text-red-500"><FaReact/></div>
                        <div className="text-2xl md:text-4xl text-indigo-700"><TbBrandRedux/></div>
                        <div className="text-2xl md:text-4xl text-yellow-300"><SiJavascript/></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;