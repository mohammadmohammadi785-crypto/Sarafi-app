import { motion } from "framer-motion";
type MarqueeItemprops = {
    texts: string[]
};
export default function MarqueeItme({ texts }: MarqueeItemprops) {
    return (
        <div className="flex w-full overflow-x-hidden">
            <motion.div initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex shrink-0">
                {texts.map((text, index) => (
                    <h1 className="h-fit pr-12 " key={index}>
                        {text}
                    </h1>
                ))}
            </motion.div>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex flex-shrink-0">
                {texts.map((text, index) => (
                    <h1 className="pr-12 h-fit" key={index}>
                        {text}
                    </h1>
                ))}
            </motion.div>
        </div>
    );
}