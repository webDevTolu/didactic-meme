import PostItem from "./post-item";

const Posts = ({ posts }) => {
  return (
    <ul className="w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 border">
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          title={post.title}
          image={post.image}
          excerpt={post.excerpt}
          date={post.date}
          author={post.author}
          slug={post.slug}
        />
      ))}
    </ul>
  );
};

export default Posts;
