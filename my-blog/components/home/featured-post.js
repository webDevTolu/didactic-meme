import Posts from "../posts/posts";

const FeaturedPost = ({ posts }) => {
  return (
    <section>
      <h2>Featured Posts</h2>
      <Posts posts={posts} />
    </section>
  );
};

export default FeaturedPost;
