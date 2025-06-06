import React from "react";
import { motion } from "framer-motion";

function Education() {
  return (
    <div className="w-full h-[100%] p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
        Education
      </p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }} 
        viewport={{ once: true }}
        className="your-div-class"
      >
        <div className="flex items-center h-[230px] mt-16 rounded-[5px] gap-9 bg-neutral-950 hover:inset-shadow-sm inset-shadow-blue-700 transition-discrete">
          <div className="h-[70px] w-1 rounded-2xl bg-blue-600"></div>
          <div>
            <p className="text-[20px] font-[Poppins] text-neutral-300 p-2">
               IT Park ( 2021 — 2022 )
            </p>
            <p className=" font-[Ubuntu] text-3xl font-[700] p-2">
                Computer engineer
            </p>
            <p className="text-lg font-[Poppins] text-neutral-300 p-2">
              Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }}
        className="your-div-class"
      >
        <div className="flex items-center h-[230px] mt-5 rounded-[5px] gap-9 bg-neutral-950 hover:inset-shadow-sm inset-shadow-blue-700 transition-discrete">
          <div className="h-[70px] w-1 rounded-2xl bg-blue-600"></div>
          <div>
            <p className="text-[20px] font-[Poppins] text-neutral-300 p-2">
               Unique ( 2023 —  2024)
            </p>
            <p className=" font-[Ubuntu] text-3xl font-[700] p-2">
               Web designer
            </p>
            <p className="text-lg font-[Poppins] text-neutral-300 p-2">
              Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
        viewport={{ once: true }}
        className="your-div-class"
      >
        <div className="flex items-center h-[230px] mt-5 rounded-[5px] gap-9 bg-neutral-950 hover:inset-shadow-sm inset-shadow-blue-700 transition-discrete">
          <div className="h-[70px] w-1 rounded-2xl bg-blue-600"></div>
          <div>
            <p className="text-[20px] font-[Poppins] text-neutral-300 p-2">
                Zumar IT ( 2024 — 2025 )
            </p>
            <p className=" font-[Ubuntu] text-3xl font-[700] p-2">
               Frontend Developer
            </p>
            <p className="text-lg font-[Poppins] text-neutral-300 p-2">
              Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Education;
