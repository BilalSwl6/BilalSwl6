import fs from "fs";
import path from "path";
import data from "./../data.json";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return data.posts
    .filter((post) => post.is_published)
    .map((post) => ({ slug: post.slug }));
}

export default async function BlogPost(props: Props) {
  const params = await Promise.resolve(props.params);
  const slug = params.slug;

  const post = data.posts.find(
    (post) => post.slug === slug && post.is_published
  );

  if (!post) {
    notFound();
  }

  let htmlContent = post.post_body;

  if (post.post_body.endsWith(".html")) {
    const filePath = path.join(process.cwd(), "app/blogs/posts", post.post_body);
    htmlContent = fs.readFileSync(filePath, "utf8");
  }

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h1 className="text-3xl font-semibold">{post.title}</h1>

      {post.cover_image && (
        <Image
          src={post.cover_image}
          width={800}
          height={500}
          alt={post.title}
          className="mt-2 rounded-md object-cover"
        />
      )}

      <div className="mt-4 text-sm dark:text-gray-custom">
        <p>
          Written by {post.author} - Published at: {post.publish_at}
        </p>
        <p>{post.reading_time}</p>
      </div>

      <div className="mt-4 prose max-w-full">
        <article
          className="blog-content prose max-w-full"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
