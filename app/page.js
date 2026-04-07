import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to my Rick and Morty page.
          </h1>
        </div>
        <Image
          src="/R&M.jpg"
          alt="Next.js logo"
          width={300}
          height={300}
          priority
        />
        
      </main>
    </div>
  );
}
