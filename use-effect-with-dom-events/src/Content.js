import { use, useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content1() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    //document.title = title;
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

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
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {showGoToTop && (
        <button
          className="go-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
        >
          Go to Top
        </button>
      )}
    </div>
  );
}

function Content(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="content">
            <h1>Window Width: {width}px</h1>
        </div>
    )
}

export default Content;
