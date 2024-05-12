"use client"
import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
export const Navbar = (props: {}) => {
  return (
    <div className="">
      <Image
        src="/logo-text.png"
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <motion.div
      className="h-56 bg-red-500"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}
