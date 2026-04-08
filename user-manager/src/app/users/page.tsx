import { getUsers } from "@/lib/api";
import UserListClient from "./UserListClient";

export default async function UsersPage() {

  const users = await getUsers();


  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl text-black font-bold mb-8">Directory</h1>
      <UserListClient users={users} />
    </div>
  );
}

