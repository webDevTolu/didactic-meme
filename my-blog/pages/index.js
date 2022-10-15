import { Fragment } from "react";
import FeaturedPost from "../components/home/featured-post";
import Hero from "../components/home/hero";
import { getFeaturedPosts } from "../helpers/post-utils";

export default function Home({ posts }) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={posts} />
    </Fragment>
  );
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 3600,
  };
};
