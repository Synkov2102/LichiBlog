'use client'

import React from 'react'
import usePosts from '@/store'

export default function Comments() {
    const comments = usePosts((state) => state.currentComments)

    return (
        <div className="flex flex-col max-w-xs mt-10">
            <h3>Комментарии</h3>
            {comments?.length &&
                comments.map((comment) => (
                    <div className="mb-2">
                        <h4 className="truncate">{comment.email}</h4>
                        <p className="truncate">{comment.body}</p>
                    </div>
                ))}
        </div>
    )
}
