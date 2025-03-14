"use client";
import React from "react";


const BusinessServices = () => {
  const services = [
    { text: "相続対策", color: "bg-yellow-500" },
    { text: "国際税務（タックスヘイブン・PE課税）", color: "bg-yellow-500" },
    { text: "法人税節税対策", color: "bg-yellow-500" },
    { text: "海外駐在者の税務", color: "bg-blue-900" },
    { text: "株価評価", color: "bg-blue-900" },
    { text: "事業承継・株価対策", color: "bg-yellow-500" },
    { text: "人事評価制度", color: "bg-yellow-500" },
    { text: "国際労務・海外駐在規程", color: "bg-blue-900" },
    { text: "労務監査", color: "bg-blue-900" },
    { text: "就業規則・社内規程整備", color: "bg-blue-900" },
    { text: "助成金", color: "bg-blue-900" },
    { text: "労働時間・未払残業対策", color: "bg-blue-900" },
    { text: "IPO・資本政策", color: "bg-gray-700" },
    { text: "組織再編（会社分割・株式交換）", color: "bg-gray-700" },
    { text: "M&A・国際間M&A", color: "bg-gray-700" },
    { text: "事業計画書作成", color: "bg-gray-700" },
    { text: "フランチャイズ本部構築支援", color: "bg-gray-700" },
    { text: "代理店制度構築支援", color: "bg-gray-700" },
    { text: "アメリカ進出支援", color: "bg-[#DAA520]" },
    { text: "香港進出支援", color: "bg-[#DAA520]" },
    { text: "中国進出支援", color: "bg-[#DAA520]" },
    { text: "ベトナム進出支援", color: "bg-[#DAA520]" },
    { text: "グローバル人材の紹介", color: "bg-[#DAA520]" },
    { text: "外国人留学生の紹介", color: "bg-[#DAA520]" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mt-6 relative">
      {services.slice(0, Math.ceil(services.length / 2)).map((service, index) => (
        <div
          key={index}
          className={`w-40 h-40 flex items-center justify-center text-white text-sm text-center p-4 ${service.color}`}
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        >
          {service.text}
        </div>
      ))}
      <div className="w-full flex items-center justify-center text-black text-xl text-center p-4 font-bold">
        お客様の利便性を追求し構築されたワンストップサービス
      </div>
      {services.slice(Math.ceil(services.length / 2)).map((service, index) => (
        <div
          key={index + Math.ceil(services.length / 2)}
          className={`w-40 h-40 flex items-center justify-center text-white text-sm text-center p-4 ${service.color}`}
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        >
          {service.text}
        </div>
      ))}
    </div>
  );
};

const LandTwo = () => {
  return (
    <div className="mt-10 max-w-5xl mx-auto bg-gray-100 bg-[radial-gradient(circle,rgba(0,0,0,0.1) 1px,transparent 1px)] bg-[size:10px_10px] p-4 space-y-6">
      {/* BUSINESS Company Profile Section */}
      <div>
        <h2 className="font-bold italic text-xl text-black">BUSINESS Company Profile</h2>
        <hr className="border-t-4 border-black my-2" />
        <p className="text-gray-700 text-sm mt-2">
          Our group is made up of a tax accounting firm, a social insurance labor consultant firm, an administrative scrivener firm, a consulting company, an asset management company, and a consulting company specializing in overseas business. Our mission is to solve the various problems our clients face by applying the knowledge and know-how we have accumulated.
        </p>
      </div>

      {/* SERVICES Company Profile Section */}
      <div className="relative p-2">
        <div className="absolute top-0 left-0 w-full bg-black text-white text-md font-bold p-3 flex justify-between">
          <span>SERVICES Company Profile</span>
          <a href="#" className="underline">MORE ➤</a>
        </div>
        <div className="mt-20">
        <BusinessServices />
          </div>
      </div>

      {/* GROUP Organization Section */}
      <div className="relative p-2">
        <div className="absolute top-0 left-0 w-full bg-black text-white text-md font-bold p-3">
          GROUP Organization
        </div>
        <img
          src="/images/bs3.jpg"
          alt="Group Organization"
          className="w-full h-auto mt-6"
        />
      </div>
    </div>
  );
};

export default LandTwo;
