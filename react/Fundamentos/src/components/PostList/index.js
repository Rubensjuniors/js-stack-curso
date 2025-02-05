import React from "react";
import { Container } from "./styles";
import { Post } from "./Post";

const posts = [
  { id: 1, title: "Post 1", description: "Description for post 1" },
  { id: 2, title: "Post 2", description: "Description for post 2" },
  { id: 3, title: "Post 3", description: "Description for post 3" },
  { id: 4, title: "Post 4", description: "Description for post 4" },
];

// export function PostList() {
//   return (
//     <Container>
//       {posts.map((post) => (
//         <Post key={post.id} title={post.title} description={post.description} />
//       ))}
//     </Container>
//   );
// }

export class PostList extends React.Component {
  render() {
    return (
      <Container>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </Container>
    )
  }
}
