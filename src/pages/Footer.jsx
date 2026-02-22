import React from 'react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion';

const socials = [
  { Icons: FaXTwitter, label: "X", href: "https://x.com/CHMAhmad24" },
  { Icons: FaLinkedin, label: "Linkedin", href: "https://www.linkedin.com/in/ch-muhammad-ahmad-78957030b/" },
  { Icons: FaGithub, label: "Github", href: "https://github.com/CHMAhmad24" },
]

const glowVarients = {
  initials: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2, y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 10 }
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } }
}

export default function Footer() {
  return (
    <footer className='relative overflow-hidden bg-black'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,202,0.25),transparent_70%)]' />
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(16,185,129,0.35),transparent_70%)]' />
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6'>
        <h1 className='font-semibold leading-none text-white text-center select-none'
          style={{ fontSize: "clamp(3rem,5vw,14rem)", letterSpacing: "0.02em", lineHeight: 0.9, padding: "0 3vw", whiteSpace: "nowrap", textShadow: "0 2px 18px rgba(0,0,0,0,0.45)" }}>CH M Ahmad</h1>
        <div className='h-0.75 w-24 md:w-32 rounded-full bg-linear-to-r from-[#0d58cc] via-cyan-300 to-emerald-400' />
        <div className='flex text-2xl gap-5 md:text-3xl' >
          {socials.map(({ Icons, label, href }) => (
            <motion.a href={href} key={href} target='_blank' aria-label={label} rel='noopener noreferrer' whiletap="tap" variants={glowVarients} initial="initial" whileHover="hover"
              className='text-gray-300 transition-colors duration-200 inline-flex items-center justify-center'
            >
              <Icons />
            </motion.a>
          ))}
        </div>
        <p className='text-gray-300 max-w-xl'>"Success is when prepration meets opportunity."</p>
        <p className='text-xs text-gray-400'>&copy; {new Date().getFullYear()} Ch M Ahmad all rights reserved </p>
      </motion.div>
    </footer>
  )
}