import React from "react";

interface InstagramPost {
  embedUrl: string; // URL for embedding
  linkUrl: string;  // Your actual Instagram post/page
}

const posts: InstagramPost[] = [
  {
    embedUrl: "https://www.instagram.com/p/Cs1Example1/embed", 
    linkUrl: "https://www.instagram.com/yourusername/",
  },
  {
    embedUrl: "https://www.instagram.com/p/Cs2Example2/embed",
    linkUrl: "https://www.instagram.com/yourusername/",
  },
  {
    embedUrl: "https://www.instagram.com/p/Cs3Example3/embed",
    linkUrl: "https://www.instagram.com/yourusername/",
  },
];

const InstagramFeed = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
        Follow me on Instagram
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <a
            key={idx}
            href={post.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <iframe
              src={post.embedUrl}
              title={`Instagram post ${idx + 1}`}
              className="w-full h-[400px] border-none overflow-hidden rounded-lg"
              scrolling="no"
              allowTransparency={true}
            ></iframe>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
