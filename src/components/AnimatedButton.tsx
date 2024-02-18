'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface IProps {
    children: React.ReactNode
    size: 'small' | 'big'
    className?: string
    type?: 'submit' | 'reset' | 'button' | undefined
    onClick?: () => void
}

const hoverScale = { big: 1.05, small: 1.2 }
const tapScale = { big: 0.98, small: 0.9 }

export default function AnimatedButton({
    children,
    size,
    onClick = () => {},
    className = 'flex font-bold rounded',
    type = 'button',
}: IProps) {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        onClick()
    }

    return (
        <motion.button
            onClick={handleClick}
            className={className}
            type={type}
            whileHover={{
                scale: hoverScale[size],
                transition: { duration: 0.3 },
            }}
            whileTap={{ scale: tapScale[size] }}
        >
            {children}
        </motion.button>
    )
}
