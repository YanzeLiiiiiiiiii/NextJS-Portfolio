"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
import Link from 'next/link';
export default function HeroSection() {
    return (
        <section className='grid grid-cols-1 lg:py-16 lg:grid-cols-12 lg:py16'>

            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrable ">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-secondary-400'>
                        Hello, I am {''}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Ryan',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Front-End Developer',
                            1000,
                            'Full-Stack Developer',
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                <div>
                    <Link href="/#contact" className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-primary-700 to-secondary-400 hover:bg-slate-200 text-white">
                        Hire Me
                    </Link>
                    <Link href='/cv/Resume-Initial.pdf' target='_blank' className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-primary-700 to-secondary-400 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                            Download Resume
                        </span>
                    </Link>
                </div>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]'>
                        <Image
                            src='/images/hero-image.png'
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>

                </div>
            </motion.div>
        </section>
    )
}