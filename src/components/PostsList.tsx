'use client'

import React, { useEffect } from 'react'
import Post from './Post'
import usePosts from '@/store'
import PreviewModal from './PreviewModal'
import getAllPosts from '@/services/getPosts'

export default function PostList() {
    const posts = usePosts((state) => state.posts)
    const initPosts = usePosts((state) => state.initPosts)

    useEffect(() => {
        getAllPosts().then(initPosts)
    }, [initPosts])

    return (
        <>
            <PreviewModal />
            <section className="container grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 py-10">
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </section>
        </>
    )
}
