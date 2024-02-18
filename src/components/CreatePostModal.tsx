'use client'

import React from 'react'
import usePosts from '@/store'
import Modal from './Modal'
import Form from './Form'
import addPost from '@/services/addPost'

export default function CreatePostModal() {
    const isActive = usePosts((store) => store.isCreatePostActive)
    const closeModal = usePosts((store) => store.toggleIsCreatePostActive)

    const addPostToState = usePosts((store) => store.addPost)

    const handleFormSubmit = async (data: any) => {
        const { title, body } = Object.fromEntries(data)
        const post = await addPost({ title, body })
        addPostToState(post)
        closeModal()
    }

    return (
        <Modal isActive={isActive} closeModal={closeModal}>
            <Form submitForm={handleFormSubmit} />
        </Modal>
    )
}
