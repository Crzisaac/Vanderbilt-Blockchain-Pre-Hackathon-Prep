"use client";
import { useState, useEffect } from "react";
import { readMessage } from "./utils/contract";
import Image from "next/image";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    async function fetchMessage() {
      const data = await readMessage();
      setMessage(data as string);
    }
    fetchMessage();
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Default Next.js logo still here */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* 🔥 Your contract output */}
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold">Smart Contract Message</h2>
          <p>{message}</p>
        </div>
      </main>

      {/* keep footer the same */}
    </div>
  );
}
