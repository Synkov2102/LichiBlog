'use client'

import React from 'react'
import AnimatedButton from './AnimatedButton'
import SvgSelector from './SvgSelector'
import usePosts from '@/store'

export default function Header() {
    const toggleModalActive = usePosts(
        (state) => state.toggleIsCreatePostActive
    )

    return (
        <header className="header bg-main drop-shadow-md ">
            <div className="container mx-auto flex justify-between px-4 py-6">
                <h1 className="text-2xl bold">Lichi Blog</h1>
                <AnimatedButton
                    size="big"
                    className="flex font-bold rounded border-solid border-2 border-black p-2"
                    onClick={toggleModalActive}
                >
                    <SvgSelector id="plus" />
                    Добавить статью
                </AnimatedButton>
            </div>
        </header>
    )
}
