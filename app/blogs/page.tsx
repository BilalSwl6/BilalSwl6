import { Card, CardContent } from "@/components/ui/card";
import data from "./data.json";
import Image from "next/image";

export default function BlogsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.posts
        .filter(post => post.is_published) // show only published posts
        .map(post => (
          <Card key={post.slug} className="overflow-hidden">
            <CardContent>
              {post.cover_image && (
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  height={300}
                  width={300}
                  className="mb-2 w-full h-48 object-cover rounded-md"
                />
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
        ))}
    </div>
  );
}
