import Posts from "../posts/posts";

const FeaturedPost = ({ posts }) => {
  return (
    <section className="bg-gray-200">
      <h2>Featured Posts</h2>
      <Posts posts={posts} />
    </section>
  );
};

export default FeaturedPost;
