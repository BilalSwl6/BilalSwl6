"use client";
import { useParams } from "next/navigation";
import data from "../data.json";
import Image from "next/image";

export default function BlogPost() {
  const params = useParams();
  
  const post = data.posts.find(
    (post) => post.slug === params.slug && post.is_published
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h1 className="text-3xl font-semibold">{post.title}</h1>
      
      {post.cover_image && (
        <Image
          src={post.cover_image}
          height={300}
          width={500}
          alt={post.title}
          className="mt-2 border-2 object-cover rounded-md"
        />
      )}

      <div className="mt-4 text-sm text-gray-600">
        <p>Written by {post.author} - Published at: {post.publish_at}</p>
        <p>{post.reading_time}</p>
      </div>

      <div className="mt-4 prose max-w-full">
        {/* Use dangerouslySetInnerHTML if post_body contains HTML */}
        <div dangerouslySetInnerHTML={{ __html: post.post_body }} />
      </div>
    </div>
  );
}
