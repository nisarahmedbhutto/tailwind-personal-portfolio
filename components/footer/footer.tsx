"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center items-center h-28 w-screen bg-slate-200">
      <div>
        <ol className="flex justify-center gap-3 text-black sm:gap-14">
          <li className="hover:text-red-400">
            <Link href={"https://www.google.com "}>Google</Link>
          </li>
          <li className="hover:text-red-400">
            <Link href={"https://www.facebook.com"}>FaceBook</Link>
          </li>
          <li className="hover:text-red-400">
            <Link href={"https://www.twitter.com"}>YouTube</Link>
          </li>
          <li className="hover:text-red-400">
            <Link href={"https://www.youtube.com"}>Twitter</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}
