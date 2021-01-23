import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import posts from "../../mocks/posts";

export default function Posts() {
  const match = useRouteMatch();

  return (
    <ul>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <li>
              <Link to={`${match.url}/${post.id}`}>{post.title}</Link>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
