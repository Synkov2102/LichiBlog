import React from 'react'
import PostList from '@/components/PostsList'
import CreatePostModal from '@/components/CreatePostModal'

export default function Home() {
    return (
        <main className="relative bg-zinc-50 flex min-h-screen flex-col items-center justify-between">
            <CreatePostModal />
            <PostList />
        </main>
    )
}
