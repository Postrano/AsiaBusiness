"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import { db } from "./../../../../script/firebaseConfig";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { FiMoreVertical } from "react-icons/fi";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [openPost, setOpenPost] = useState(null);
  const [newQuestion, setNewQuestion] = useState({ name: "", topic: "", question: "" });
  const [newAnswer, setNewAnswer] = useState("");
  const [menuOpen, setMenuOpen] = useState(null);

  useEffect(() => {
    if (db) {
      fetchQuestions();
    }
  }, [db]);

  const fetchQuestions = async () => {
    const querySnapshot = await getDocs(collection(db, "inquiries"));
    const questionsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(questionsData);
  };

  const toggleAnswer = (id) => {
    setOpenPost((prev) => (prev === id ? null : id));
  };

  const toggleMenu = (id) => {
    setMenuOpen((prev) => (prev === id ? null : id));
  };

  const handleAsk = async () => {
    if (newQuestion.name && newQuestion.topic && newQuestion.question) {
      await addDoc(collection(db, "inquiries"), {
        ...newQuestion,
        date: new Date().toISOString().split("T")[0],
        answers: [],
      });
      setNewQuestion({ name: "", topic: "", question: "" });
      fetchQuestions();
    }
  };

  const handleReply = async (postId) => {
    const questionRef = doc(db, "inquiries", postId);
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, answers: [...post.answers, newAnswer] } : post
    );

    await updateDoc(questionRef, {
      answers: updatedPosts.find((post) => post.id === postId)?.answers || [],
    });

    setNewAnswer("");
    setPosts(updatedPosts);
  };

  const handleDelete = async (postId) => {
    await deleteDoc(doc(db, "inquiries", postId));
    fetchQuestions();
  };

  return (
    <div className="bg-white text-black w-full flex justify-center p-6">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4 border-b-8 pb-2">Garbera Partners Q&A Blog</h2>

        {/* Ask a Question Section */}
        <div className="mb-6">
          <h3 className="font-bold">Ask a Question</h3>
          <input
            type="text"
            placeholder="Name"
            className="border p-2 w-full"
            value={newQuestion.name}
            onChange={(e) => setNewQuestion({ ...newQuestion, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Topic"
            className="border p-2 w-full mt-2"
            value={newQuestion.topic}
            onChange={(e) => setNewQuestion({ ...newQuestion, topic: e.target.value })}
          />
          <textarea
            placeholder="Your Question"
            className="border p-2 w-full mt-2"
            value={newQuestion.question}
            onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
          />
          <button onClick={handleAsk} className="bg-blue-500 text-white p-2 rounded mt-2">
            Ask
          </button>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg shadow-md relative">
              <h3 className="font-bold text-lg text-black">{post.topic}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {post.date} - Asked by {post.name}
              </p>
              <p className="text-black mt-2">Q: {post.question}</p>

              {/* View Answers Button */}
              <button
                onClick={() => toggleAnswer(post.id)}
                className="text-gray-700 font-semibold mt-2 inline-flex items-center focus:outline-none hover:text-blue-500 transition-colors duration-300"
              >
                View Answers
                <ChevronRight
                  className={`ml-1 transition-transform duration-300 ${openPost === post.id ? "rotate-90" : ""}`}
                  size={18}
                />
              </button>

              {/* Three-dot Menu */}
              <div className="absolute top-2 right-2">
                <button onClick={() => toggleMenu(post.id)} className="focus:outline-none">
                  <FiMoreVertical size={20} />
                </button>
                {menuOpen === post.id && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
                    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>

              {/* Answers Section */}
              {openPost === post.id && (
                <div className="mt-2 text-gray-700 border-t pt-2">
                  {post.answers?.map((answer, index) => (
                    <div key={index} className="relative border-b py-2">
                      <p>A: {answer}</p>
                      <div className="absolute top-1 right-2">
                        <button onClick={() => toggleMenu(`${post.id}-answer-${index}`)} className="focus:outline-none">
                          <FiMoreVertical size={16} />
                        </button>
                        {menuOpen === `${post.id}-answer-${index}` && (
                          <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-lg z-10">
                            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                              Edit
                            </button>
                            <button className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <textarea
                    placeholder="Your Answer"
                    className="border p-2 w-full mt-2"
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                  />
                  <button onClick={() => handleReply(post.id)} className="bg-green-500 text-white p-2 rounded mt-2">
                    Reply
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Use dynamic import to disable server-side rendering (SSR)
export default dynamic(() => Promise.resolve(Page), { ssr: false });
