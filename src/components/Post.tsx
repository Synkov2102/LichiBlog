'use client'

import React from 'react'
import { motion } from 'framer-motion'
import usePosts from '@/store'

interface IProps {
    post: {
        id: number
        title: string
        body: string
    }
}

export default function Post({ post }: IProps) {
    const setPostPreview = usePosts((state) => state.setPostPreview)
    const { title, body } = post

    const handleClick = () => setPostPreview(post.id)

    return (
        <motion.article
            whileTap={{ scale: 0.985 }}
            className="bg-main p-4 cursor-pointer rounded-md drop-shadow-md flex flex-col justify-between"
            onClick={handleClick}
            role="presentation"
        >
            <div>
                <h2 className="text-xl mb-2 truncate">{title}</h2>
                <p className="truncate">{body}</p>
            </div>
        </motion.article>
    )
}
