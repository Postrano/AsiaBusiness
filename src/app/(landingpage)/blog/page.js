"use client";
import React, { useState } from 'react';

const posts = [
  {
    id: 1,
    title: 'Social Insurance | [Reconfirmation] Notification of change of address and name for health insurance and employee pension insurance has been simplified with My Number',
    date: '2025/03/04',
    question: 'An employee who is enrolled in social insurance has changed his/her name and address due to a transfer and marriage. What should we do?',
    answer: 'You should notify your employer and update the insurance records accordingly.',
  },
  {
    id: 2,
    title: 'Grants, subsidies and grants | Public offering of the Small and Medium Enterprise Labor-Saving Investment Subsidy (General Type) has been announced',
    date: '2025/02/28',
    question: 'I heard that the public application period for the Small and Medium Enterprise Labor-Saving Investment Subsidy (General Category) has begun. What kind of subsidy is it?',
    answer: 'This subsidy supports small and medium enterprises in implementing labor-saving investments.',
  },
  {
    id: 3,
    title: 'China | China Information: Improving the environment for foreign companies to enter China in 2025',
    date: '2025/02/27',
    question: 'Could you please tell us about the recently announced Action Plan for Stable Foreign Investment in 2025?',
    answer: 'The plan aims to improve regulations and create a stable investment environment.',
  }
];

const Page = () => {
  const [openPost, setOpenPost] = useState(null);

  const toggleAnswer = (id) => {
    setOpenPost(openPost === id ? null : id);
  };

  return (
    <div className="bg-white text-black w-full flex justify-center p-6">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4 border-b-8 pb-2">Garbera Partners Q&A Blog</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-black">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{post.date}</p>
              <p className="text-black mt-2">Q: {post.question}</p>
              <button onClick={() => toggleAnswer(post.id)} className="text-blue font-semibold mt-2 inline-block focus:outline-none">
                View Answer ▶
              </button>
              {openPost === post.id && (
                <p className="mt-2 text-gray-700 border-t pt-2">A: {post.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
