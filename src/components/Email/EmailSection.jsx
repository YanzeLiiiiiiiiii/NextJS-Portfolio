'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
export default function EmailSection() {

    const [isSent, setSent] = useState(false)
    const formRef = useRef(null)

    const emainSubmissionHandler = async (e) => {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JsonData = await JSON.stringify(data)
        fetch('api/send', {
            method: 'POST',
            body: JsonData,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            if (data.message === 'successful') {
                setSent(true)
                formRef.current.reset()
            }
        })

    }
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id='contact'>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-transparent rounded-full h-80 w-80 z-0 blur-md absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className='z-10'>
                <h5 className="text-xl font-bold text-white my-2">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/YanzeLiiiiiiiiii" target="_blank">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/yanze-li-079b7823a/" target="_blank">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                {isSent ? (
                    <p className="text-[#ADB7BE] text-xl mt-2">
                        Email Sent Successfully!
                    </p>) : (
                    <form className="flex flex-col" onSubmit={emainSubmissionHandler} ref={formRef}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Your Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="xxx@xxx.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="font-medium py-2.5 px-5 text-[#ADB7BE] "
                        >
                            <span className='px-3 inline-block py-2 w-full sm:w-fit rounded-full mr-4  border-2 border-[#33353F] hover:bg-gradient-to-r from-primary-800 to-zinc-400'> Send Message </span>
                        </button>
                    </form>
                )}

            </div>
        </section>
    )
}
