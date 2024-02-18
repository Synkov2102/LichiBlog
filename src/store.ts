import { create } from 'zustand'

interface IPost {
    id: number
    title: string
    body: string
}

interface IComment {
    postId: number
    id?: number
    name?: string
    body: string
    email: string
}

interface IPostsStore {
    posts: IPost[]
    initPosts: (posts: IPost[]) => void
    addPost: (post: IPost) => void
    currentComments: IComment[]
    initComments: (comments: IComment[]) => void
    previewPostId: number
    setPostPreview: (id: number) => void
    closePostPreview: () => void
    isCreatePostActive: boolean
    toggleIsCreatePostActive: () => void
    closeAllModals: () => void
}

const usePosts = create<IPostsStore>((set, get) => ({
    posts: [],

    initPosts: (posts: IPost[]) => {
        set({ posts })
    },

    addPost: (post: IPost) => {
        set({ posts: [post, ...get().posts] })
    },

    currentComments: [],

    initComments: (comments: IComment[]) => {
        set({ currentComments: comments })
    },

    addComment: (comment: IComment) => {
        set({ currentComments: [...get().currentComments, comment] })
    },

    // Модалка просмотра
    previewPostId: -1,
    setPostPreview: (id: number) => {
        get().closeAllModals()
        set({ previewPostId: id, currentComments: [] })
    },
    closePostPreview: () => set({ previewPostId: -1 }),

    // Модалка создания статьи
    isCreatePostActive: false,
    toggleIsCreatePostActive: () => {
        const store = get()
        const isActive = store.isCreatePostActive
        if (!isActive) {
            store.closeAllModals()
        }
        set({ isCreatePostActive: !isActive })
    },

    closeAllModals: () => {
        set({ previewPostId: -1, isCreatePostActive: false })
    },
}))

export default usePosts
