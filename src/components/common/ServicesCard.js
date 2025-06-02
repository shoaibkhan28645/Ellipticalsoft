import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

// Reusable card component to avoid repetition
function CardItem({ image, type, title, isMobile, delay }) {
  return (
    <motion.div
      className="card-animate overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 relative group cursor-pointer bg-gray-900"
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={isMobile ? { duration: 0 } : { duration: 0.5, delay }}
    >
      {/* Image background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:blur-xs"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300"></div>

      {/* Fixed height - changed from h-50 to h-40 */}
      <div className="h-40 p-4 flex flex-col justify-end text-white relative overflow-visible">
        {/* Content that shows by default and moves up on hover */}
        <div className="transition-all duration-300 transform group-hover:-translate-y-10">
          <h3 className="text-sm font-outfit font-semibold mb-1 leading-tight">
            {title}
          </h3>
        </div>

        {/* Button that appears on hover */}
        <div className="absolute bottom-4 left-4 right-4 transition-all duration-300 transform translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="w-full rounded-full font-outfit cursor-pointer bg-transparent backdrop-blur-sm text-white border border-white/30 px-2 py-2 flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-white/30">
            <span className="text-sm">
              Explore More <span className="ml-1">↗</span>
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default CardItem;
