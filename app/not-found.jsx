import { notFound } from "next/navigation";
import React from "react";

function BlogPage({ searchParams }) {
  if (searchParams.test === "true") {
    notFound()
  }



  return <div>Blog Page</div>;
}

export default BlogPage;
