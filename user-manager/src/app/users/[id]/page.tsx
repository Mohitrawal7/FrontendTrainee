// "use client";
// import { useEffect, useState } from "react";
// import { Post } from "@/types";
// import { getUserPosts } from "@/lib/api";
// import { useParams } from "next/navigation";

// export default function UserPosts() {
//   const { id } = useParams();
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   useEffect(() => {
//     async function loadData() {
//       const apiPosts = await getUserPosts(id as string);
//       const savedPosts = JSON.parse(localStorage.getItem(`posts-${id}`) || "[]");
//       setPosts([...savedPosts, ...apiPosts]);
//       setLoading(false);
//     }
//     loadData();
//   }, [id]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newPost = { userId: Number(id), title, body };
//     const updatedLocal = [newPost, ...posts.filter(p => !p.id)]; // Keep local only
    
//     localStorage.setItem(`posts-${id}`, JSON.stringify(updatedLocal));
//     setPosts([newPost, ...posts]);
//     setTitle(""); setBody("");
//   };

//   if (loading) return <p className="p-10">Loading posts...</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-6">User Posts</h1>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="mb-10 p-6 bg-gray-50 rounded-lg">
//         <h3 className="font-bold mb-4">Add New Post</h3>
//         <input 
//           value={title} onChange={e => setTitle(e.target.value)}
//           placeholder="Title" className="w-full p-2 mb-2 border rounded text-black" required
//         />
//         <textarea 
//           value={body} onChange={e => setBody(e.target.value)}
//           placeholder="Body" className="w-full p-2 mb-2 border rounded text-black" required
//         />
//         <button className="bg-green-600 text-white px-4 py-2 rounded">Submit Post</button>
//       </form>

//       {/* List */}
//       <div className="space-y-4">
//         {posts.map((post, idx) => (
//           <div key={idx} className="p-4 border-l-4 border-blue-500 bg-white shadow-sm">
//             <h2 className="font-bold uppercase text-sm">{post.title}</h2>
//             <p className="text-gray-700">{post.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }






"use client";
import { useEffect, useState } from "react";
import { Post } from "@/types";
import { getUserPosts } from "@/lib/api";
import { useParams } from "next/navigation";

export default function UserPosts() {
  const { id } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  const isLong = (text: string) => text.length > 120;
const truncate = (text: string) =>
  text.length > 120 ? text.slice(0, 100) + "..." : text;

  useEffect(() => {
    async function loadData() {
      const apiPosts = await getUserPosts(id as string);
      const savedPosts = JSON.parse(localStorage.getItem(`posts-${id}`) || "[]");
      setPosts([...savedPosts, ...apiPosts]);
      setLoading(false);
    }
    loadData();
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = { userId: Number(id), title, body };

    const updatedLocal = [newPost, ...posts.filter(p => !p.id)];
    localStorage.setItem(`posts-${id}`, JSON.stringify(updatedLocal));

    setPosts([newPost, ...posts]);
    setTitle("");
    setBody("");
    setShowForm(false);
  };

  if (loading) return <p className="p-10">Loading posts...</p>;

  return (
    <div className="max-w-4xl mx-auto p-8 relative">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl text-black font-bold">User Posts</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Post
        </button>
      </div>

      {/* POSTS */}
     <div className="space-y-5 grid grid-cols-1 md:grid-cols-3 gap-6">
  {posts.map((post, idx) => {
    const isExpanded = expanded === idx;

    return (
      <div
        key={idx}
        className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm 
        hover:shadow-md transition-all duration-300"
      >
        {/* Title */}
        <h2 className="font-semibold text-gray-900 mb-2">
          {post.title.split(" ").slice(0, 3).join(" ")} 
        </h2>

        {/* Body */}
        <p className="text-gray-600 text-sm leading-relaxed transition-all duration-300">
          {isExpanded ? post.body : truncate(post.body)}
        </p>

        {/* See More button (only if needed) */}
        {isLong(post.body) && (
          <button
            onClick={() => setExpanded(isExpanded ? null : idx)}
            className="text-blue-600 text-sm mt-2 hover:text-blue-800 font-medium transition"
          >
            {isExpanded ? "see less " : "see more.. "}
          </button>
        )}
      </div>
    );
  })}
</div>

      {/* MODAL OVERLAY */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          
          {/* Modal Box */}
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg transform transition-all duration-300 scale-100 opacity-100">
            
            <h3 className="font-bold text-black mb-4 text-lg">Add New Post</h3>

            <form onSubmit={handleSubmit}>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full p-2 mb-2 border rounded text-black"
                required
              />

              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Body"
                className="w-full p-2 mb-4 border rounded text-black"
                required
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-600  border rounded"
                >
                  Cancel
                </button>

                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}