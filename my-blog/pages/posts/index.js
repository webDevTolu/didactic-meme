import AllPostsPage from "../../components/posts/all-posts";
import { DUMMY_POSTS } from "../../data/post";

const AllPosts = () => {
  return <AllPostsPage posts={DUMMY_POSTS} />;
};

export default AllPosts;
