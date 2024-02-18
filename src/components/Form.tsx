import React from 'react'
import AnimatedButton from './AnimatedButton'

interface IProps {
    submitForm: (data: any) => Promise<void>
}

export default function Form({ submitForm }: IProps) {
    return (
        <form className="flex flex-col" action={submitForm}>
            <h2 className="text-xl mb-4">Добавление статьи</h2>
            <label htmlFor="title" className="flex flex-col mb-4">
                Название
                <input className="px-2" type="text" name="title" id="title" />
            </label>
            <label htmlFor="body" className="flex flex-col mb-4">
                Текст <textarea className="px-2" name="body" id="body" />
            </label>

            <div>
                <AnimatedButton
                    size="big"
                    className="flex font-bold rounded border-solid border-2 border-black px-4"
                    type="submit"
                >
                    Добавить статью
                </AnimatedButton>
            </div>
        </form>
    )
}
