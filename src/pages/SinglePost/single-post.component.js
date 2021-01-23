import React from "react";
import { useRouteMatch, useParams } from "react-router-dom";

import posts from "../../mocks/posts";

export default function SinglePost() {
  const match = useRouteMatch();
  const { id } = useParams();

  const post = posts.filter((post) => {
    return post.id == id;
  });

  return (
    <div>
      <h1>{post[0].title}</h1>
      <p>{post[0].content}</p>
    </div>
  );
}
