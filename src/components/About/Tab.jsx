import React from 'react'
import { motion } from "framer-motion"
const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
}
export default function Tab({ active, selectTab, children }) {
    const isActive = active ? 'text-white ' : 'text-[#ADB7BE]'
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 hover:bg-gradient-to-r from-slate-700 to-zinc-400 font-semibold ${isActive}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="h-1 bg-primary-500 mt-2 mr-3"
            ></motion.div>
        </button>
    )
}
