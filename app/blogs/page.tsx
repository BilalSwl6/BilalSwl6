import { Card, CardContent } from "@/components/ui/card";
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
          <Card key={post.slug} className="overflow-hidden">
            <CardContent>
              {post.cover_image && (
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  height={500}
                  width={500}
                  className="object-cover rounded-md mx-auto"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 600px"                 />
              )}
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {post.publish_at} - {post.author} - {post.reading_time}
              </p>
              <p>
                {post.short_description
                  ? post.short_description.length > 100
                    ? post.short_description.slice(0, 100) + "..."
                    : post.short_description
                  : "No description available."}
              </p>
            </CardContent>
          </Card>
          </Link>
        ))}
    </div>
  );
}
