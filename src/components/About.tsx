import { Bitcoin, CircleCheck, Code2, Currency, Globe } from "lucide-react";
import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <div
      id="about"
      className="w-full grid grid-cols-1 min-h-screen md:grid-cols-2 mt-12 overflow-x-hidden"
    >
      <motion.div
        initial={{ x: "-50px" }}
        whileInView={{ x: "0" }}
        transition={{ duration: 0.6, ease: "linear" }}
        className="w- relative flex justify-center items-center -mt-28"
      >
        <img
          className="h-[55%] w-[65%] z-20"
          src="./images/download2.png"
          alt=""
        />
        <div className=" absolute top-[50%] left-[50%] h-[62%] w-9/12 rounded-full -translate-[50%] blue z-10">
          <Currency size={36} className="absolute top-12 left-14 text-brand" />
          <Code2 size={36} className="absolute top-12 right-14 text-brand" />
          <Globe size={36} className="absolute bottom-12 left-14 text-brand" />
          <Bitcoin
            size={36}
            className="absolute bottom-12 right-14 text-brand"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "50px" }}
        whileInView={{ x: "0" }}
        transition={{ duration: 0.6, ease: "linear" }}
        className="flex flex-col"
      >
        <h1 className="text-4xl font-bold font-inter">About Us</h1>
        <h1 className="mt-4 lg:mt-4">
          A trustfull Website for your currency Exchange.
        </h1>
        <p className="justify-center mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
          voluptatibus rem eaque, dolor qui eius, molestiae possimus illum
          incidunt necessitatibus cupiditate. Voluptas architecto reiciendis
          vitae esse maiores adipisci laborum odit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Iusto, doloremque. lorem100 Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Hic corporis laborum
          nostrum natus consequuntur nulla non dolorem dolorum. Vitae odio aut
          nobis nesciunt labore odit neque sit inventore dolorum natus animi,
          saepe vel magni laboriosam sint, reiciendis sunt perferendis
          perspiciatis cum. Sequi, tempora molestiae.
        </p>
        <div className="w-[83%] p-4 bg-white rounded-xl shadow-md h-[150px]  gap-6 grid grid-cols-2 mt-5">
          <div className="flex gap-2.5 items-center">
            <CircleCheck size={36} className="text-brand" />
            <span>Updete currency Exchange</span>
          </div>
          <div className="flex gap-2.5 items-center">
            <CircleCheck size={36} className="text-brand" />
            <span>Updete currency Exchange</span>
          </div>
          <div className="flex gap-2.5 items-center">
            <CircleCheck size={36} className="text-brand" />
            <span>Updete currency Exchange</span>
          </div>
          <div className="flex gap-2.5 items-center">
            <CircleCheck size={36} className="text-brand" />
            <span>Updete currency Exchange</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
