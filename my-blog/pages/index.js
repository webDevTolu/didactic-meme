import { Fragment } from "react";
import FeaturedPost from "../components/home/featured-post";
import Hero from "../components/home/hero";
import { DUMMY_POSTS } from "../data/post";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </Fragment>
  );
}
