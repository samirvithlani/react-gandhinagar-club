import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BlogContext } from "./blogContext";
import { BlogAuthors } from "./BlogAuthors";

export const PublishBlog = () => {
  const { register, handleSubmit } = useForm();
  const [blogs, setblogs] = useState([]);
  const submitHandler = (data) => {
    //console.log(data);
    setblogs([...blogs, data]);
  };
  return (
    <div>
      <h1>Publish Blog</h1>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>title</label>
            <input type="text" {...register("title")} />
          </div>
          <div>
            <label>content</label>
            <textarea {...register("content")} />
          </div>
          <div>
            <label>author</label>
            <input type="text" {...register("author")} />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
      <div style={{backgroundColor:"GrayText",marginTop:"20px"}}>
      <BlogContext.Provider value={{blogs}}>
        <BlogAuthors />
      </BlogContext.Provider>
      </div>
    </div>
  );
};
