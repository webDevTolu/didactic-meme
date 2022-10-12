import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const PostItem = ({ title, image, excerpt, date, slug, author }) => {
  const imagePath = `/images/posts/${slug}/${image}`;
  const authorImagePath = `/images/author/${author.image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <Link href={linkPath}>
      <a>
        <li className="w-full h-96 rounded-md overflow-hidden shadow-md border flex flex-col">
          <div className="w-full h-1/3">
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              className="object-cover object-center"
            />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{excerpt}</p>

            <div>
              <div>
                <Image
                  src={authorImagePath}
                  alt={title}
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h5>{author.name}</h5>
                <p>{moment(date).format("MMM Do YY")} . 5min read</p>
              </div>
            </div>
          </div>
        </li>
      </a>
    </Link>
  );
};

export default PostItem;
