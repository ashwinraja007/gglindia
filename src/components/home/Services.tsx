import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type FancyServiceCardProps = {
  image: string;
  title: string;
  description: string;
  icon?: JSX.Element;
  link?: string;
};

const FancyServiceCard: React.FC<FancyServiceCardProps> = ({
  image,
  title,
  description,
  icon,
  link = "#"
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative rounded-2xl overflow-hidden group shadow-xl bg-white/10 backdrop-blur-md border border-white/20"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Gradient Border on Hover */}
      <div className="absolute inset-0 rounded-2xl z-0 group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-brand-gold transition-all duration-300" />

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col gap-4 text-white">
        {icon && (
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
            {React.cloneElement(icon, { size: 20 })}
          </div>
        )}

        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-white/80 line-clamp-4">{description}</p>

        <Link
          to={link}
          className="mt-auto inline-flex items-center gap-1 text-sm text-yellow-400 hover:text-yellow-300 transition-all"
          onClick={() => window.scrollTo(0, 0)}
        >
          Learn More
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
          >
            <ArrowRight size={14} />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default FancyServiceCard;
