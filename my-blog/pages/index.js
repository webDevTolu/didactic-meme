import { Fragment } from "react";
import FeaturedPost from "../components/home/featured-post";
import Hero from "../components/home/hero";

export default function Home() {
  const DUMMY_POSTS = [
    {
      title: "Improve your customer experience",
      image: "improve-your-customer-experience.jpg",
      slug: "improve-your-customer-experience",
      author: {
        name: "John",
        image: "john.jpg",
      },
      excerpt:
        "Laborum recusandae eveniet molestias aliquam. Cupiditate eum error consequuntur aperiam ut deleniti. Fuga impedit optio quia dolor rerum at sit natus.",
      date: "2022-10-12",
    },
    {
      title: "Getting started with Next JS",
      image: "getting-started-with-next-js.png",
      slug: "getting-started-with-next-js",
      author: {
        name: "John",
        image: "john.jpg",
      },
      excerpt:
        "Laborum recusandae eveniet molestias aliquam. Cupiditate eum error consequuntur aperiam ut deleniti. Fuga impedit optio quia dolor rerum at sit natus.",
      date: "2022-10-12",
    },
  ];

  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </Fragment>
  );
}

// hero section
// featured posts
