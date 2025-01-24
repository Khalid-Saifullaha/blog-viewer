export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold my-6 ">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.slice(0, 18).map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg p-6 border hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.body.substring(0, 100)}... </p>
            <a
              href={`/blog/${post.id}`}
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
