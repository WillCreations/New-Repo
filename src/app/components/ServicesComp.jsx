import Image from "next/image";
import * as styles from "@/app/Styles/index.module.css";
import Link from "next/link";
import UrlParser from "@/app/utils/UrlParser"

const ServicesComp = ({unit}) => {


    const unparsedUrl = UrlParser(unit.tag)
    console.log({unparsedUrl})


    return (
        <Link
            href={`/serviceDetails/${unparsedUrl}`}
            className={`bg-[#121212] rounded-2xl text-green-300  p-5 ${styles.Pop}`}
        >
            <div className="flex justify-center  h-40 w-full overflow-hidden py-10 my-5">
                <Image
                className="block text-center"
                src={unit.image}
                width={100}
                height={100}
                alt={unit.tag}
                />
            </div>

            <h4 className="text-2xl text-white font-extrabold">
                {unit.tag}
            </h4>
            <p className="text-sm font-mono text-left">{unit.para}</p>
        </Link>
    )
} 

export default ServicesComp