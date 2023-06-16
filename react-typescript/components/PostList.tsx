import { PostProps } from '@/types/types'
import PostCard from './PostCard'

// get data by async function
async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    if(!res.ok){
        throw new Error("Failed to load the data")
    }

    return res.json()
}

const PostList = async () => {

    const data = await getData()
    
  return (
    <div className='postList'>
        {/* <PostCard title="post title" body="post desc"/> */}
        {data.map((post: PostProps) => ( 
            <PostCard key={post.id} {...post}/>
        ))}
    </div>
  )
}

export default PostList