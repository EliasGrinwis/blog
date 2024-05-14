import Image from "next/image";

export default function Home() {
  return (
    <main className="custom-container">
      <div className="grid grid-cols-3 gap-8 text-white ">
        <div className="col-span-2">
          <Image
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1715345723909/c71d9691-fe4c-4302-b1cb-d9dca77a99b5.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
            alt="Framer Motion logo"
            width={800}
            height={420}
            className="rounded-lg w-full"
            unoptimized={true}
          />
          <div className="px-3 mt-4">
            <h2 className=" mb-2">
              How to create exit animations with Framer Motion
            </h2>
            <p className="text-accent mb-3 font-semibold">
              In this article, you will learn how to implement exit animations
              using the exit prop and the AnimatePresence component.
            </p>
            <div className="flex items-center">
              <Image
                src="https://eliasgrinwis.be/_next/image?url=%2Favatar.webp&w=256&q=75"
                alt="Framer Motion logo"
                width={32}
                height={32}
                className="rounded-full w-9 h-9 grayscale mr-2"
                unoptimized={true}
              />
              <div>
                <p className="text-accent font-bold">Elias Grinwis</p>
                <p className="text-accent text-sm font-semibold">11 min read</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="">
            <Image
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1714717823068/29ffe913-de1f-4f05-9414-0051eff483f2.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
              alt="Framer Motion logo"
              width={800}
              height={420}
              className="rounded-lg w-full"
              unoptimized={true}
            />
            <div className="px-3 mt-4">
              <h3 className="mb-3">
                The Importance of Collaboration in Achieving Successful Design
              </h3>
              <div className="flex items-center">
                <Image
                  src="https://eliasgrinwis.be/_next/image?url=%2Favatar.webp&w=256&q=75"
                  alt="Framer Motion logo"
                  width={32}
                  height={32}
                  className="rounded-full w-9 h-9 grayscale mr-2"
                  unoptimized={true}
                />
                <div>
                  <p className="text-accent font-bold">Elias Grinwis</p>
                  <p className="text-accent text-sm font-semibold">
                    7 min read
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/_SFJhRPzJHs/upload/afa61503cb2ab2b7dfb09ea7c5a5d16f.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
              alt="Framer Motion logo"
              width={800}
              height={420}
              className="rounded-lg w-full"
              unoptimized={true}
            />
            <div className="px-3 mt-4">
              <h3 className="mb-3">
                Step-by-Step Guide: Adding Google Maps to Your React App Using
                Vis.gl
              </h3>
              <div className="flex items-center">
                <Image
                  src="https://eliasgrinwis.be/_next/image?url=%2Favatar.webp&w=256&q=75"
                  alt="Framer Motion logo"
                  width={32}
                  height={32}
                  className="rounded-full w-9 h-9 grayscale mr-2"
                  unoptimized={true}
                />
                <div>
                  <p className="text-accent font-bold">Elias Grinwis</p>
                  <p className="text-accent text-sm font-semibold">
                    11 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
