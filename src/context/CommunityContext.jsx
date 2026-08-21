import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { seedPosts } from '../data/community'

const CommunityContext = createContext(null)

export function CommunityProvider({ children }) {
  const [posts, setPosts] = useLocalStorage('bridge_posts', seedPosts())

  const addPost = (post) => setPosts((p) => [{ id: 'u' + Date.now(), ...post, likes: 0, replies: [] }, ...p])
  const addReply = (postId, reply) =>
    setPosts((p) => p.map((x) => (x.id === postId ? { ...x, replies: [...x.replies, reply] } : x)))
  const likePost = (postId) => setPosts((p) => p.map((x) => (x.id === postId ? { ...x, likes: x.likes + 1 } : x)))

  return <CommunityContext.Provider value={{ posts, addPost, addReply, likePost }}>{children}</CommunityContext.Provider>
}

export function useCommunity() {
  return useContext(CommunityContext)
}
