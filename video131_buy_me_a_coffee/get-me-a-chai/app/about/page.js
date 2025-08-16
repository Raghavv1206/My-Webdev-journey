import React from 'react';

const About = () => {
    return (
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
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl mx-auto bg-gray-900/80 rounded-2xl shadow-xl border border-gray-800 backdrop-blur-md p-8 mb-10">
            <h1 className="text-4xl font-bold mb-6 text-white tracking-wide drop-shadow-lg">About Get Me a Chai</h1>
            <p className="text-lg mb-8 text-gray-300 font-light">
              Get Me a Chai is a crowdfunding platform designed for creators to fund their projects with the support of their fans. It&apos;s a space where your fans can directly contribute to your creative endeavors by buying you a chai. Unlock the potential of your fanbase and bring your projects to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex items-center bg-gray-900/80 rounded-xl shadow-lg border border-gray-800 p-6">
              <img className="w-20 h-20 rounded-full mr-6 border border-gray-700 shadow-md" src="/group.gif" alt="Fans Want to Collaborate" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">Fans Want to Collaborate</h3>
                <p className="text-gray-400">Your fans are enthusiastic about collaborating with you on your projects.</p>
              </div>
            </div>
            <div className="flex items-center bg-gray-900/80 rounded-xl shadow-lg border border-gray-800 p-6">
              <img className="w-20 h-20 rounded-full mr-6 border border-gray-700 shadow-md" src="/coin.gif" alt="Support Through Chai" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">Support Through Chai</h3>
                <p className="text-gray-400">Receive support from your fans in the form of chai purchases, directly contributing to your project funding.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gray-900/80 rounded-xl shadow-lg border border-gray-800 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-100">Benefits for Creators</h2>
              <ul className="list-disc pl-6 text-gray-400">
                <li className="mb-2">Direct financial support from your fanbase</li>
                <li className="mb-2">Engage with your fans on a more personal level</li>
                <li className="mb-2">Access to a platform tailored for creative projects</li>
              </ul>
            </div>
            <div className="bg-gray-900/80 rounded-xl shadow-lg border border-gray-800 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-100">Benefits for Fans</h2>
              <ul className="list-disc pl-6 text-gray-400">
                <li className="mb-2">Directly contribute to the success of your favorite creators</li>
                <li className="mb-2">Exclusive rewards and perks for supporting creators</li>
                <li className="mb-2">Be part of the creative process and connect with creators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gray-900/80 rounded-xl shadow-lg border border-gray-800 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-100">Benefits of Collaboration</h2>
              <ul className="list-disc pl-6 text-gray-400">
                <li className="mb-2">Unlock new opportunities through collaboration with fellow creators</li>
                <li className="mb-2">Expand your network and reach a wider audience</li>
                <li className="mb-2">Combine skills and resources to create innovative projects</li>
              </ul>
            </div>
            <div className="bg-gray-900/80 rounded-xl shadow-lg border border-gray-800 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-100">Community Engagement</h2>
              <ul className="list-disc pl-6 text-gray-400">
                <li className="mb-2">Interact with a supportive community of like-minded individuals</li>
                <li className="mb-2">Receive valuable feedback and encouragement from peers</li>
                <li className="mb-2">Participate in discussions and events centered around your interests</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gray-900/80 rounded-xl shadow-lg border border-gray-800 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-100">Access to Resources</h2>
              <ul className="list-disc pl-6 text-gray-400">
                <li className="mb-2">Gain access to resources such as tutorials, templates, and tools</li>
                <li className="mb-2">Receive guidance and mentorship from experienced creators</li>
                <li className="mb-2">Stay updated on industry trends and best practices</li>
              </ul>
            </div>
            <div className="bg-gray-900/80 rounded-xl shadow-lg border border-gray-800 p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-100">Recognition and Exposure</h2>
              <ul className="list-disc pl-6 text-gray-400">
                <li className="mb-2">Showcase your work to a global audience and gain recognition</li>
                <li className="mb-2">Feature in promotional materials and campaigns</li>
                <li className="mb-2">Build your portfolio and increase your credibility as a creator</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-900/80 rounded-2xl shadow-xl border border-gray-800 backdrop-blur-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Supportive Community</h2>
            <ul className="list-disc pl-6 text-gray-400">
              <li className="mb-2">Join a community that values creativity, diversity, and inclusivity</li>
              <li className="mb-2">Find encouragement and inspiration from fellow members</li>
              <li className="mb-2">Collaborate on projects and share resources for mutual growth</li>
            </ul>
          </div>
        </div>
        </div>
    );
}

export default About;

export const metadata = {
    title: "About - Get Me A Chai",
  }
   