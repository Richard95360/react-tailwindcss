import { useState, useEffect } from 'react';
import PostsList from "../components/PostsList";
import { PostData } from '../interfaces';


const Posts: React.FC = () => {
    const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
    const [nbPosts, setNbPosts] = useState<number>(5);

    const localOrsStateNb = () => localStorage.getItem('number') || nbPosts;
    const localOrNum = localOrsStateNb()

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${localOrNum}`)
            const data: PostData[] = await res.json()
            setAllPosts(data)

        }
        getPosts()
    }, [localOrNum])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const newValue = e.target.value
        setNbPosts(+newValue)
        localStorage.setItem('number', e.target.value)
    }
    return (
        <>
            <div className="post-container"></div>
            <h1 className='flex justify-center text-xl'>Page Principale</h1>
            <div className="flex flex-col">
                <label className="top-0 left-0 flex items-center text-gray  p-2" htmlFor="posts">Nombre de publication {localOrNum}</label>
                <input
                    className="relative w-full h-2 px-2 bg-gray-300 rounded-full"
                    type="range"
                    min={1} max={20}
                    onChange={handleChange}
                    defaultValue={localOrNum}
                />
                <PostsList allPosts={allPosts} />
            </div>
        </>
    );
};

export default Posts;