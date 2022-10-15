import AllPostsPage from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/post-utils";

const AllPosts = ({ allPosts }) => {
  return <AllPostsPage posts={allPosts} />;
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
    revalidate: 3600,
  };
};

export default AllPosts;
