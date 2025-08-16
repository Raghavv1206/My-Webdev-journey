import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#111]">
      {/* Starry Night Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Star field */}
        <div className="absolute inset-0">
          {[...Array(120)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                background: `rgba(255,255,255,${Math.random() * 0.7 + 0.3})`,
                opacity: Math.random() * 0.7 + 0.3,
                filter: 'blur(0.5px)'
              }}
            ></div>
          ))}
        </div>
        {/* Subtle nebula shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-800/30 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gray-700/30 rounded-full blur-2xl"></div>
      </div>

      <div className="flex justify-center flex-col gap-3 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base relative pt-14 pb-2.5">
        <div className="font-bold flex gap-1 md:gap-2 text-3xl md:text-5xl justify-center items-center">
          Get Me a Chai
          <span>
            <img className="invert grayscale brightness-75" src="/tea.gif" width={80} alt="" />
          </span>
        </div>
        <p className="text-center md:text-left text-gray-300 max-w-xl mx-auto text-lg">
          A crowdfunding platform for creators to fund their projects.
        </p>
        <p className="text-center md:text-center text-gray-400 max-w-xl mx-auto">
          A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.
        </p>
        <div className="flex gap-3 justify-center mt-2">
          <Link href={"/login"}>
            <button type="button" className="text-gray-100 bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center mb-2 border border-gray-700 transition-all duration-150">Start Here</button>
          </Link>
          <Link href="/about">
            <button type="button" className="text-gray-100 bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center mb-2 border border-gray-700 transition-all duration-150">Read More</button>
          </Link>
        </div>
      </div>
         <br /> <br />
      <div className="bg-gray-300 h-[1px] my-9 rounded-md shadow-md opacity-20 w-full mx-auto" />

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-100">Your Fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around flex-wrap">
          <div className="item space-y-3 flex flex-col items-center justify-center bg-gray-900 rounded-xl p-4 shadow-md border border-gray-800 w-80 h-64">
            <img className="rounded-full grayscale brightness-75 border border-gray-700" width={100} src="/man.gif" alt="" />
            <p className="font-bold text-center text-gray-200 text-lg">Fans want to help</p>
            <p className="text-center text-gray-400">Your fans are available to support you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center bg-gray-900 rounded-xl p-4 shadow-md border border-gray-800 w-80 h-64">
            <img className="rounded-full grayscale brightness-75 border border-gray-700" width={100} src="/coin.gif" alt="" />
            <p className="font-bold text-center text-gray-200 text-lg">Fans want to contribute</p>
            <p className="text-center text-gray-400">Your fans are willing to contribute financially</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center bg-gray-900 rounded-xl p-4 shadow-md border border-gray-800 w-80 h-64">
            <img className="rounded-full grayscale brightness-75 border border-gray-700" width={100} src="/group.gif" alt="" />
            <p className="font-bold text-center text-lg text-gray-200">Fans want to collaborate</p>
            <p className="text-center text-gray-400">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>

        <div className="bg-gray-300 h-[1px] my-9 rounded-md shadow-md opacity-20 w-full mx-auto" />

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-100">Learn more about us</h2>
        {/* Responsive youtube embed  */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh] rounded-xl overflow-hidden border border-gray-800 shadow-md">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/SSUbntk63Yg?si=zpyBkanBBKdo05vH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
      </div>
    </>
  );
}