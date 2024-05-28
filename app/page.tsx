import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <Image
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="550"
            src="/oplaceholder.svg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
