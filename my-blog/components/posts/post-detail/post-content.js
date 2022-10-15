import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

const PostContent = ({ post }) => {
  post.content = "**This is a first post**";

  return (
    <article>
      <PostHeader
        title={post.title}
        image={`/images/posts/${post.slug}/${post.image}`}
      />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
