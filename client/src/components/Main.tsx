import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App"
import ErrorPage from "./ErrorPage"
import EditMovie from "./pages/EditMovie"
import Genres from "./pages/Genres"
import GraphQL from "./pages/GraphQL"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ManageCatalogue from "./pages/ManageCatalogue"
import Movie from "./pages/Movie"
import Movies from "./pages/Movies"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <Movie /> },
      { path: "/genres", element: <Genres /> },
      { path: "/admin/movie/0", element: <EditMovie /> },
      { path: "/manage-catalogue", element: <ManageCatalogue /> },
      { path: "/graphql", element: <GraphQL /> },
      { path: "/login", element: <Login /> },
    ],
  },
])

export default function Main() {
  return (
    <React.StrictMode>
      {/*<AuthContext.Provider value={{ jwtToken, setJwtToken }}>*/}
      <RouterProvider router={router} />
      {/*</AuthContext.Provider>*/}
    </React.StrictMode>
  )
}