"use client";

import { MdKeyboardVoice } from "react-icons/md";
import axios from "axios";
import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";
import { useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";


export default function Home() {
  console.log("tesasdt");
  const [question, setQuestion] = useState<string>("");
  const [conversation, setConversation] = useState<
    { type: string; text: string }[]
  >([]);

  const sendMessage = async () => {
    if (!question.trim()) return;

    const userMessage = { type: "question", text: question };
    setConversation([...conversation, userMessage]);

    try {
      const response = await axios.post("http://127.0.0.1/ask/", {
        question: question,
      });

      const botMessage = { type: "answer", text: response.data.solution };
      setConversation([...conversation, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching the solution:", error);
    }

    setQuestion("");
  };

  return (
    <div className="flex justify-center flex-col items-center h-screen bg-white">
      <h1 className="text-2xl font-bold">Porsche Chatbot</h1>
      <div className="w-full max-w-2xl space-y-4 border px-4 py-2 shadow-lg rounded-xl">
        <div className="overflow-y-auto max-h-96 p-4">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.type === "question" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-2 rounded ${
                  msg.type === "question" ? "bg-blue-200" : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <div className="relative flex border">
            <Input
              name=""
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Send Message.."
            />
            <div className="absolute right-0 top-[13px] sm:right-4 space-x-4 flex items-center">
              <Button
                onClick={sendMessage}
                type="button"
                Icon={AiOutlineEnter}
                text=""
              />
              <Button
                type="button"
                Icon={MdKeyboardVoice}
                text=""
                className="!bg-blue-700 !rounded-2xl"
                onClick={() => "!"}
              />
            </div>
          </div>
          <div className="text-muted-foreground px-2 text-center text-xs leading-normal hidden sm:block mt-4">
            Open source AI chatbot built with NextJs and TailwindCSS
          </div>
        </form>
      </div>
    </div>
  );
}
