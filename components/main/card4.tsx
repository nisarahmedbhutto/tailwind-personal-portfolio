"use client";

import game from "../../images/game.png";

import Image from "next/image";
import Link from "next/link";

export default function Card4() {
  return (
    <>
      <div className=" grid justify-center items-center mb-2 h-auto w-64 rounded-2xl bg-gray-900">
        <div className=" flex justify-center  items-start py-3">
          <Image
            className="h-40 w-56 rounded-lg "
            src={game}
            alt="profile"
            width={1250}
            height={1250}
          />
        </div>
        <div className="text-white p-2">
          <h2 className="flex justify-center items-center mb-5 text-3xl">
            Advanture Game
          </h2>
          <p className="px-9 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            quaerat, nisi expedita distinctio non repellat?
          </p>
        </div>
        <div className="flex justify-center items-center text-white pb-5 ">
          <button className="bg-green-500 p-1 m-2 rounded-lg hover:text-black hover:bg-green-400">
            <Link
              href={
                "https://github.com/nisarahmedbhutto/advanture-game-this-is-my-program-.git"
              }
            >
              View Project
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
