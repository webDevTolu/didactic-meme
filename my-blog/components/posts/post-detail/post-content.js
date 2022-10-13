import { DUMMY_POST } from "../../../data/post";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

const PostContent = () => {
  DUMMY_POST.content = "**This is a first post**";

  return (
    <article>
      <PostHeader
        title={DUMMY_POST.title}
        image={`/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`}
      />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
