import React, { use, useEffect } from "react";

import { Header } from "../Header";
import { PostList } from "../PostList";
import { Footer } from "../Footer";

export function Layout() {
  return (
    <>
      <Header />
      <PostList />
      <Footer />
    </>
  )
}