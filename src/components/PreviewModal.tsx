'use client'

import React, { useEffect } from 'react'
import usePosts from '@/store'
import Modal from './Modal'
import getPostComments from '@/services/getComments'
import Comments from './Comments'

export default function PreviewModal() {
    const postId = usePosts((store) => store.previewPostId)
    const posts = usePosts((store) => store.posts)
    const closeModal = usePosts((store) => store.closePostPreview)

    const previewPost = posts.find((post) => post.id === postId)
    const initComments = usePosts((state) => state.initComments)

    useEffect(() => {
        getPostComments(previewPost?.id).then(initComments)
    }, [initComments, previewPost?.id])

    return (
        <Modal isActive={!!previewPost} closeModal={closeModal}>
            <div className="max-w-md min-w-48 mt-4">
                <h2 className="text-xl mb-2">{previewPost?.title}</h2>
                <p>{previewPost?.body}</p>
            </div>
            <Comments />
        </Modal>
    )
}
