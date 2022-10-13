import Posts from "./posts";

const AllPostsPage = ({ posts }) => {
  return (
    <section>
      <h1>All Posts</h1>

      <Posts posts={posts} />
    </section>
  );
};

export default AllPostsPage;
