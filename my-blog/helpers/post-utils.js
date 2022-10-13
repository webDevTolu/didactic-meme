import fs from "fs";
import path from "path";
import matter from "gray-matter";

const fileDir = path.join(process.cwd(), "data", "posts");

const getPostData = (fileName) => {
  const filePath = path.join(fileDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // removes file extension from fileName

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

const getAllPosts = () => {
  const postFiles = fs.readdirSync(fileDir);

  for (const postFile of postFiles) {
    const postData = getPostData(postFile);
  }
};
