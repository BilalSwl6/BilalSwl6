import data from "./data.json";
import Image from "next/image";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4">
      {data.posts
        .filter(post => post.is_published)
        .sort((a, b) => new Date(b.publish_at).getTime() - new Date(a.publish_at).getTime())
        .map(post => (
          <Link href={`/blogs/${post.slug}`} key={post.slug}>
          <div key={post.slug} className="overflow-hidden bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm">
            <div className="px-3"> 
              {post.cover_image && (
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  height={500}
                  width={500}
                  className="object-cover rounded-md mx-auto aspect-[16/9]"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 600px" />
              )}
              <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
              <p className="text-sm text-foreground mb-2">
                {post.publish_at} - {post.author} - {post.reading_time}
              </p>
              <p>
                {post.short_description
                  ? post.short_description.length > 100
                    ? post.short_description.slice(0, 100) + "..."
                    : post.short_description
                  : "No description available."}
              </p>
            </div>
          </div>
          </Link>
        ))}
    </div>
  );
}
