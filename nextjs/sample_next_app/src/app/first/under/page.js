import Link from "next/link";
export default function under() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-7xl font-bold text-green-500">Under Page</h1>
        <p className="text-center text-3xl">
          <Link href="/first">Firstへ</Link>
        </p>
      </div>
    </div>
  );
}