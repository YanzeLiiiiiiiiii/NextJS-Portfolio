'use client'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabBu from './Tab'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 text-[#ADB7BE]">
                <li>C#,   .NET Core</li>
                <li>Mysql, Linux, Doctor</li>
                <li>Next.js, Tailwind CSS</li>
                <li>MongoDB,  Express,  React, and  Node. js,</li>
            </ul>
        ),
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className="list-disc pl-2 text-[#ADB7BE]">
                <li>AWS Certified Solutions Architect - Associater</li>
            </ul>
        ),
    },
];


export default function About() {
    const [tab, setTab] = useState('skills')
    const [istransition, setStartTrasition] = useTransition()

    const changeHandler = (id) => {
        setStartTrasition(() => {
            setTab(id)
        })
    }

    return (
        <section className="text-white  py-10" id='about'>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src='/images/about.jpg'
                    alt="about image"
                    width={600}
                    height={600}
                />
                <div>
                    <h2 className='text-4xl font-bold text-[#ADB7BE] mb-4'>About Me</h2>
                    <p className='text-base md:text-lg text-[#ADB7BE]'>
                        I am a full Stack Developer with a passion for creating interactive and responsive web applications.I have solid foundation of key technologies such as MERN, C#, MySQL, Linux and more.
                        My commitment to continuous learning and self-improvement drives me to seek opportunities to contribute to innovative projects and collaborate with dynamic teams.
                        I am excited to apply my technical skills in a professional setting and contribute positively to the success of projects and teams.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabBu selectTab={() => {
                            changeHandler('skills')
                        }}
                            active={tab === 'skills'}>
                            Skills
                        </TabBu>

                        <TabBu selectTab={() => {
                            changeHandler('certification')
                        }}
                            active={tab === 'certification'}>
                            Certification
                        </TabBu>
                    </div>
                    <div className='mt-4'>
                        {TAB_DATA.find(item => item.id === tab).content}
                    </div>
                </div>

            </div>

        </section>
    )
}
