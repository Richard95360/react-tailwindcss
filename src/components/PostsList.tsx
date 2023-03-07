import { useNavigate } from 'react-router-dom';
import { PostData } from '../interfaces';

interface PostsListProps {
    allPosts: PostData[] | null
}

const PostsList: React.FC<PostsListProps> = ({ allPosts }) => {

    const navigate = useNavigate();

    return (
        <ul className='list-none list-outside'>
            {allPosts?.map(p => {
                return (
                    <li onClick={() => navigate(`/${p.id}`)} className='text-xl w-300 h-200 ' key={p.id}>
                        <h2 className='text-base text-center '>{p.title}</h2>
                        <p className='mb-3 font-light text-gray-500 dark:text-gray-400'>{p.body}</p>
                    </li>
                )
            })}
        </ul>
    );
};

export default PostsList;