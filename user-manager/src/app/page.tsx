import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-50 px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Manage Your <span className="text-blue-600">Users</span> & Posts
        </h1>
        
        <p className="text-lg text-gray-600 mb-10">
          A powerful dashboard to browse user profiles, search through directories, 
          and manage posts using real-time API data and local persistence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/users"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all"
          >
            Enter Directory
          </Link>
          
          <a
            href="https://jsonplaceholder.typicode.com/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-md border border-gray-200 hover:bg-gray-50 transition-all"
          >
            View API Docs
          </a>
        </div>

       <h1 className="text-black font-bold text-3xl  my-8">Main Features</h1>
       
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-8 text-left">
        
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-blue-600">Next.js 14+</h3>
            <p className="text-sm text-gray-500">Built with the latest App Router and Server Components.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-blue-600">TypeScript</h3>
            <p className="text-sm text-gray-500">Fully type-safe development for reliable code.</p>
          </div>
           <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-blue-600">Tailwind CSS</h3>
            <p className="text-sm text-gray-500">Styling with utility classes for rapid UI development.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-blue-600">Local Persistence</h3>
            <p className="text-sm text-gray-500">Save and manage custom posts via LocalStorage.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
