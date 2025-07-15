import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    //document.title = title;
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, [type]);

  return (
    <div className="content">
      {tabs.map((tab) => {
        return (
          <button
            key={tab}
            onClick={() => setType(tab)}
            style={
              type === tab ? { color: "#fff", backgroundColor: "#333" } : {}
            }
          >
            {tab}
          </button>
        );
      })}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <ul>
        {posts.map((post) => (
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
