const getPostComments = async (postId: number | undefined) => {
    if (!postId) return {}

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/post/${postId}/comments`
    )

    if (!response.ok) throw new Error('Unable to fetch comments.')

    return response.json()
}

export default getPostComments
