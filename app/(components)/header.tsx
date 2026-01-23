"use react"

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

export interface HeaderInfo {
  title: string;
  image?: string;
	subheading?: string;
}

const Header: React.FC<HeaderInfo> = ({title, image, subheading}) => {
  return (
    <div className="relative overflow-hidden w-full h-70 items-center">
      <motion.div className="text-white" initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        {/**optional image background */}
        {image ? (
          <Image
            src={image}
            alt={title + " image"}
            fill
            className="object-center object-cover opacity-50"
          />
        ): (
          <div className='w-full h-full'></div>
        )}

        {/**text overlay */}
        <div className='absolute inset-0 flex flex-col items-center justify-center p-4 text-center'>
          <h1 className="text-5xl font-bold font-rowdies text-white mb-4 drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg text-white drop-shadow-md">
            {subheading}
          </p>
        </div>
      </motion.div>  
    </div>
  )
}

export default Header

