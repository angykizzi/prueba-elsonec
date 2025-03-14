import Link from "next/link"
import { FaUsers, FaBlog } from "react-icons/fa"

export default async function Home() {

  return (
    <div className="flex w-full h-screen">
      <Link href="/users" className="w-1/2 h-full flex flex-col justify-center items-center bg-gray-200 hover:bg-blue-200 transition-colors duration-300 ease-in-out cursor-pointer">
        <FaUsers className="text-6xl text-gray-700 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700">Users</h2>
      </Link>

      <Link href="/posts" className="w-1/2 h-full flex flex-col justify-center items-center bg-gray-200 hover:bg-green-200 transition-colors duration-300 ease-in-out cursor-pointer">
        <FaBlog className="text-6xl text-gray-700 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700">Posts</h2>
      </Link>
    </div>
  );
}
