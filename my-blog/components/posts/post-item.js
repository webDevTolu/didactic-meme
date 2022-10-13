import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const PostItem = ({ title, image, excerpt, date, slug, author }) => {
  const imagePath = `/images/posts/${slug}/${image}`;
  const authorImagePath = `/images/author/${author.image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <Link href={linkPath}>
      <a className="block">
        <div className="rounded-lg shadow-md overflow-hidden h-96 border">
          <Image
            src={imagePath}
            alt={title}
            width={800}
            height={300}
            layout="responsive"
            className="w-full h-2/5 object-cover object-top"
          />
          <div className="p-1">
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <p className="text-base text-slate-600">{excerpt}</p>

            <div className="flex h-max gap-x-2 items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={authorImagePath}
                  alt={title}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain object-center"
                />
              </div>

              <div className="mt-6 h-max">
                <h5 className="text-base font-semibold text-slate-700">
                  {author.name}
                </h5>
                <p className="text-sm text-slate-500">
                  {moment(date).format("MMM Do YY")} . 5min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostItem;
