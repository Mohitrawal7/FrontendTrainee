"use client";
import { useState } from "react";
import { User } from "@/types";
import Link from "next/link";

export default function UserListClient({ users }: { users: User[] }) {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        className="w-full p-3 border rounded-lg mb-8 text-black"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map(user => (
          <div key={user.id} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl text-gray-900 font-semiold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-sm text-blue-600 mb-4">{user.company.name}</p>
            <Link href={`/users/${user.id}`} className="bg-black text-white px-4 py-2 rounded-md">
              View Posts
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
