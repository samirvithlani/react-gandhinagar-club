import React, { useContext } from 'react'
import { BlogContext } from './blogContext';

export const BlogAuthors = () => {
    const {blogs} = useContext(BlogContext);
    console.log(blogs);
  return (
    <div>
        <ul>
            {
                blogs?.map((b)=>{
                    return <button className='btn btn-info'>{b.author}</button>
                })
            }
        </ul>
    </div>
  )
}
