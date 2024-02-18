'use server'

const addPost = async (post: { title: string; body: string }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ ...post, userId: 1 }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    if (!response.ok) throw new Error('Unable to add posts.')
    return response.json()
}

export default addPost
