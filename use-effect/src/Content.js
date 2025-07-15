import { useEffect, useState } from "react";

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //document.title = title;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
  }, [])

  return (
    <div className="content">
      <input value={title} onChange={e => setTitle(e.target.value)} />

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;