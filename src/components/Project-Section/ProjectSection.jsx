'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from "./ProjectTag";
import { motion, useInView } from 'framer-motion'
const projectsData = [
    {
        id: 1,
        title: "OnlineShopping Project",
        description: "MERN + Redux Toolkit + React Bootstrap ",
        image: "/images/6.png",
        tag: ["All", "Full-Stack"],
        gitUrl: "https://github.com/YanzeLiiiiiiiiii/MERN-onlineshopping",
        previewUrl: "https://onlineshopping-gifl.onrender.com/",
    },

    {
        id: 2,
        title: "Notion Clone Project",
        description: "Next.js 14 + Convex + Tailwind CSS + TypeScript + Edge Store",
        image: "/images/3.png",
        tag: ["All", "Full-Stack"],
        gitUrl: "https://github.com/YanzeLiiiiiiiiii/Next.js-NotionClone-Project",
        previewUrl: "http://note-clone-app.vercel.app",
    },
    {
        id: 3,
        title: "News Management System",
        description: "Node + React + Redux + Ant Design + Json Server",
        image: "/images/2.png",
        tag: ["All", "Full-Stack"],
        gitUrl: "https://github.com/YanzeLiiiiiiiiii/React-NewsManagementSystem",
        previewUrl: null,
    },
    {
        id: 4,
        title: "Next.js Foodies Website",
        description: "Next.js+ APP Router + CRUD meals from local database",
        image: "/images/1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/YanzeLiiiiiiiiii/Next.js-Foodies-Website",
        previewUrl: "https://foodie-app-smoky.vercel.app",
    },
    {
        id: 5,
        title: "Personal Portfolio",
        description: "Next.js 14 + Tailwind CSS + Email Function",
        image: "/images/4.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/YanzeLiiiiiiiiii/Next.js-Portfolio",
        previewUrl: "https://next-js-portfolio-rho-sooty.vercel.app",
    },
    {
        id: 6,
        title: "Saving Animal App",
        description: "ASP.NET MVC + Bootstrap+ jQuery+ html5",
        image: "/images/5.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/YanzeLiiiiiiiiii/.Net.Mvc-AnimalSaving-Web",
        previewUrl: null,
    }
]

const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
}

export default function ProjectSection() {

    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInview = useInView(ref, { once: true })

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    )

    return (
        <section ref={ref} id='projects'>
            <h2 className="text-center text-4xl font-bold text-white mt-20 py-2 md:mb-10">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Full-Stack"
                    isSelected={tag === "Full-Stack"}
                />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((item, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInview ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            imgUrl={item.image}
                            gitUrl={item.gitUrl}
                            previewUrl={item.previewUrl}/>
                    </motion.li>
                )

                )}
            </div>
        </section>
    )
}
