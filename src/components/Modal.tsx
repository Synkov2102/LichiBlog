import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SvgSelector from './SvgSelector'
import AnimatedButton from './AnimatedButton'

interface IProps {
    children: React.ReactNode
    isActive: boolean
    closeModal: () => void
}

export default function Modal({ children, isActive, closeModal }: IProps) {
    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    className="fixed bg-main drop-shadow-md p-4 z-10 rounded-md "
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="absolute top-2 right-2">
                        <AnimatedButton size="small" onClick={closeModal}>
                            <SvgSelector id="exit" />
                        </AnimatedButton>
                    </div>

                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
