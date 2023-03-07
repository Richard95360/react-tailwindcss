import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PostData } from '../interfaces/model';
import PostDetail from '../components/PostDetail';

type PostParams = {
    id: string
}

const Post = () => {
    const { id } = useParams<PostParams>()
    const [onePost, setOnePost] = useState<PostData | null>(null);
    useEffect(() => {
        const getPost = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data: PostData = await res.json()
            setOnePost(data)
        }
        getPost()
    }, [id])
    return (
        <div className='post-container'>
            <h1>Details de la publication</h1>
            <PostDetail onePost={onePost} />
        </div>
    );
};

export default Post;