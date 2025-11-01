import { ChevronRight, Globe, HandCoins } from "lucide-react";
import { Button } from "./ui/button";
import MarqueeItme from "./VolocityText";

export default function Hero() {
  const texts = [
    "Exchange Rate",
    "Updets Raeltime",
    "Exchange currency anytime",
    "trastful source",
    "Built with love and 🖤 passion",
    "Built with sister mother",
    "Built with brother father",
  ];
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex items-center justify-center lg:h-screen">
        <div className="flex-1">
          <div className="w-[80%] flex flex-col h-screen justify-center items-center ml-12 max-w-6xl ">
            <h1 className=" text-center  font-hero md:text-[38px] moto  ">
              Inatand Currency Exchange, Powered by the Latest Market Updetes.
            </h1>
            <div>
              <p className="text-[20px] text-center mt-6 ">
                Get the finacical tools and insights to start build, and grow
                your business.
              </p>
            </div>
            <div className="flex gap-3 mt-8">
              <Button
                variant="outline"
                className="rounded-none uppercase bg-brand hover:text-white text-white hover:cursor-pointer hover:bg-brand "
              >
                Get Started
              </Button>
              <Button
                variant="ghost"
                className="uppercase underline hover:bg-white underline-offset-4 hover:text-brand"
              >
                discover more
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <img className="w-150" src="./images/woman-shape-2.png" alt="" />
          <div className="absolute top-8 right-40">
            <div className="absolute top-6 right-16  bg-brand  text-white rounded-full animate-bounce p-3 ">
              <Globe size={28} className="transition-all duration-700" />
            </div>
            <div className="absolute bottom-1 -left-5 animate-bounce p-3 bg-brand text-white rounded-full">
              <HandCoins size={28} className="transition-all duration-500" />
            </div>
            <img className="h-120" src="./images/banner-woman.png" alt="" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-full -mt-7 relative">
          <div className="container mx-auto">
            <MarqueeItme texts={texts} />
          </div>
        </div>
      </div>
    </div>
  );
}
