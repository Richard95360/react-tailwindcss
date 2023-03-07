import React from 'react';
import { Link } from 'react-router-dom';
import { PostData } from '../interfaces';

interface PostDetailProps {
    onePost: PostData | null
}

const PostDetail: React.FC<PostDetailProps> = ({ onePost }) => {
    return (
        <div className='w-700 bg-gray p-3'>
            <h1 className='flex justify-center text-2xl h-200'>Publication numero {onePost?.id}</h1>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Titre : {onePost?.title}</h2>
            <p className='mb-3  font-normal text-gray-500 dark:text-gray-400'>{onePost?.body}</p>
            <Link className='font-bold uppercase text-black underline' to={"/"}>Home Page</Link>
        </div>
    );
};

export default PostDetail;