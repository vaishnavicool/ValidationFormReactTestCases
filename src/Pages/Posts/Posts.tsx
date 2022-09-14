import { useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState<any>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
      res.json().then((result) => setPosts(result));
    });
  }, []);

  return (
    <>
      {posts?.map((post: any) => (
        <>
          <h5>{post?.title}</h5>
          <p>{post?.body}</p>
        </>
      ))}
    </>
  );
};
