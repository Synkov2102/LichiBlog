'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface IProps {
    children: React.ReactNode
    onClick: () => void
}

export default function SocialButton({ children, onClick }: IProps) {
    return (
        <motion.button
            onClick={onClick}
            className="bg-main hover:bg-main-dark font-bold rounded"
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
        >
            {children}
        </motion.button>
    )
}
