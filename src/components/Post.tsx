'use client'

import React from 'react'
import SocialButton from './SocialButton'
import SvgSelector from './SvgSelector'

interface IProps {
    article: {
        title: string
        text: string
    }
}

export default function Post({ article }: IProps) {
    const { title, text } = article
    return (
        <div className="bg-main p-4 rounded-md drop-shadow-md flex flex-col justify-between">
            <div>
                <h2 className="text-xl mb-2">{title}</h2>
                <p className="truncate">{text}</p>
            </div>

            <div className="flex justify-between mt-2">
                <div className="flex mt-2 gap-2">
                    <SocialButton onClick={() => {}}>
                        <SvgSelector id="like" />
                    </SocialButton>
                    <SocialButton onClick={() => {}}>
                        <SvgSelector id="dislike" />
                    </SocialButton>
                </div>
                <SocialButton onClick={() => {}}>
                    <SvgSelector id="comment" />
                </SocialButton>
            </div>
        </div>
    )
}
