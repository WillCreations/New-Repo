import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
import { connectToDb } from "./(Engine)/mongodb/database";
import Product from "./(Engine)/models/productSchema";
import * as styles from "@/app/Styles/index.module.css";
import Typo from "@/app/components/Typo";
import Image from "next/image";
import Link from "next/link";
import { addClient } from "@/app/(Engine)/actions/addClient";
import Navbutton from "./components/Navbutton";
import Slide from "@/app/components/Slide";
import Testimonial from "@/app/components/Testimonial";
import ServicesComp from "@/app/components/ServicesComp";
import Contact from "@/app/components/Contact";
import SubHeader from "@/app/components/SubHeader";
import Round from "@/app/components/Round";
import Accordion from "@/app/components/Accordion";
import Offer from "@/app/components/Offer";
import { useMemo } from "react";
import Services from "@/app/static/Services";
import Offers from "@/app/static/Offers";
import Clients from "@/app/static/Clients";



export default async function Home() {
  await connectToDb();
  const Prod = await Product.find();
  // Only serialize if needed for child components
  const ProductExhibits = JSON.stringify(Prod);

  const session = await getServerSession(options);
  return (
    <div className="min-h-screen text-white ">
      <div className="bg-[#121212] px-5 xxs:px-10 lg:px-28  h-auto md:gap-5 md:grid grid-cols-2">
        <div className="flex flex-col py-20  justify-start">
          <div>
            <h1 className="text-6xl text-green-300 font-extrabold">
              Welcome to <div className="text-white trans">Eureka</div> Tech.
            </h1>
            <p className="text-justify font-mono text-sm mt-3">
              Are you ready to elevate your online presence to the next level?
              Look no further! At Eureka, we specialize in delivering top-notch
              services across a spectrum of digital domains. From full-stack web
              development to captivating graphic designs, seamless UI/UX
              experiences, compelling brand identities, and everything in
              between, we've got you covered.
            </p>
            <p className="mt-2 font-mono text-sm">
              Start building your Dream Brand Today!
            </p>
            <div className="my-5 ">
              <span>
                <span className="font-mono">Meet </span>{" "}
                <span className="text-white text-2xl font-black ">
                  Princewill Igwe.
                </span>
              </span>
              <Typo />
            </div>
          </div>

          <Navbutton />
        </div>
        <div className="w-full flex items-end justify-center md:justify-end">
          <Link href="/portfolio">
            <div
              className={` ${styles.cover} flex bg-green-300 items-end justify-center hover:scale-90  md:hover:scale-105 md:active:scale-90 w-full h-[500px] shadow-black hover:shadow-stone-950  relative cursor-pointer hover:-rotate-6 transition overflow-hidden mt-14 md:mt-0 rounded-t-2xl hover:rounded-[25px] `}
            >
              <Image
                className="object-contain top translate-y-5"
                src="/me.png"
                width={500}
                height={500}
                alt="Igwe Princewill"
              />
              <div
                className={`${styles.content} absolute px-10 py-5 w-full text center flex items-center bg-black z-[5] text-5xl font-extrabold`}
              >
                <div
                  className={`${styles.contentBox} bg-green-300 rounded-md w-10 h-10 mr-3 `}
                ></div>{" "}
                Port
                <span className="text-green-300">folio</span>
              </div>
              <div
                className={`${styles.backdrop} absolute  z-10 opacity-1  bg-black top-0 bottom-0  w-full h-full`}
              ></div>
            </div>
          </Link>
        </div>
      </div>

      <div className="mx-5 xxs:mx-10 lg:mx-28 my-28 ">
        <SubHeader tag="Ratings" />
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 ">
          {[100, 90, 80, 60, 50, 30].map((p) => {
            return (
              <div
                key={p}
                className={`${styles.Pop} flex p-5 bg-[#121212] rounded-2xl justify-center items-center`}
              >
                <Round perc={p} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-5 px-10 lg:px-28"></div>
      <div className={`px-5 xxs:px-10 lg:px-28 mt-32`}>
        <SubHeader tag="Our Services" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {Services.map((unit, index) => {
            return (
              <ServicesComp key={index} unit={unit}/>
            );
          })}
        </div>
      </div>

      <div className=" mx-5 xxs:mx-10  lg:mx-28 my-32">
        <SubHeader tag="Web Development Pricing" />

        <div className=" grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1  gap-5">
          {Offers?.map((Obj, index) => {
            return (
              <Offer key={index} colour={"[#121212]"} Obj={Obj} index={index} />
            );
          })}
        </div>
      </div>
      <div className=" px-5 xxs:px-10 bg-[#121212] lg:px-28 py-32">
        <SubHeader tag="Graphic Design Pricing" />

        <div className=" grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1  gap-5">
          {Offers?.map((Obj, index) => {
            return (
              <Offer key={index} colour={"black"} Obj={Obj} index={index} />
            );
          })}
        </div>
      </div>
      <div className="mx-5 xxs:mx-10  lg:mx-28 my-32">
        <SubHeader tag="Trending Products" />
        <Slide Prod={ProductExhibits} />
      </div>
      <div className=" px-10 lg:px-28 my-32">
        <SubHeader tag="Why Choose Us" />
        <p
          className={`text-left font-mono lg:text-center text-base ${styles.SlideIn}`}
        >
          At Eureka, we are committed to delivering excellence in every project
          we undertake. Our team of seasoned professionals combines technical
          expertise with creative flair to deliver results that exceed
          expectations. Whether you're a startup looking to establish your
          online presence or an established brand seeking to revamp your digital
          strategy, we have the skills and experience to help you succeed.
        </p>
      </div>
      <div className=" px-5 xxs:px-10 lg:px-28 my-32">
        <SubHeader tag="Testimonials" />
        <p className="text-center font-mono text-base">
          Don't take our word for it, here's what our customers have to say
          about us
        </p>
        <div className="grid grid-cols-1  lg:grid-cols-2  gap-5 my-5 w-full">
          {Clients.map((c, index) => {
            return (
              <div
                key={index}
                className={`${styles.Pop} bg-[#121212] rounded-2xl`}
              >
                <Testimonial client={c} />
              </div>
            );
          })}
        </div>
      </div>

      <div className=" px-5 xxs:px-10 lg:px-28 my-32  ">
        <SubHeader tag="FAQ" />
        <Accordion />
      </div>
      <div className="px-5 xxs:px-10 lg:px-28 my-32">
        <Contact Action={addClient} />
      </div>

      {/* <Slider Prod={Prod} /> */}
      {/* <div
        className='w-full mt-10 py-10 gap-4 flex justify-between overflow-scroll overflow-x-auto h-auto bg-gray-950'
      >
        <div  className={styles.slide2}>
          {Prod.map((p) => {
            return (
              <div key={p._id} className={styles.card} >
                <Card
                  prod={p}
                >
                  <Box
                    prod={p}
                  />
                </Card>
              </div>
            )
          })}
        </div>
      </div> */}
    </div>
  );
}
