import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, {loader as postsLoader} from "./routes/Posts.jsx";
import "./index.css";
import PostDetails ,{loader as PostDetailsLoader}from "./routes/PostDetails.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import NewPost , {action as newPostAction} from "./routes/NewPost.jsx";

const router = createBrowserRouter([
  // list of route
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", 
      element: <Posts />,
      loader: postsLoader,
      children:[
        { path: "create-post", element: <NewPost /> , action: newPostAction },
        { path : ':id', element: <PostDetails/>, loader: PostDetailsLoader}
      ]
    },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
