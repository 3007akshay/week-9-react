import { useState } from "react";
import { PostComponent } from "./assets/post";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));
  function addPost() {
    setPosts([
      ...posts,
      {
        name: "harkirat",
        subtitle: "1100 followers",
        time: "2m ago",
        image:
          "https://cdn.pixabay.com/photo/2022/06/27/14/38/cat-7287671_1280.jpg",
        description:
          "What to know how to win big? Check how folks win $6000 in bounties.",
      },
    ]);
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>{postComponents}</div>
      </div>
    </div>
  );
}

export default App;
