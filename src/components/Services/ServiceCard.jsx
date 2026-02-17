import React from "react";
import { FaCode, FaPalette } from "react-icons/fa";
import { TbPalette, TbTrendingUp, TbSettings } from "react-icons/tb";

const ServiceCard = ({ icon: Icon, title, description ,imgUri}) => {
  // if (!Icon && !imgUri) return null
  console.log(Icon);
  return (
    <div className="mx-auto hover:scale-105 transition-all duration-300 rounded-xl p-5 flex justify-center items-center flex-col gap-3 bg-(--surface) shadow-[0_10px_20px_-15px_var(--primary)] max-w-75 w-full aspect-square">
      {Icon ?<Icon className="text-[40px] text-(--primary)" />:<div className={`w-20 aspect-square rounded-full overflow-hidden  border border-(--primary) bg-[url('${imgUri}')]
    bg-cover bg-center `}></div>}
      <h3 className="font-medium text-[18px]">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
