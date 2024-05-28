"use client";

import { Button } from "@/components/elements/Button";
import { Input } from "@/components/elements/Input";
import { useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import { exampleMessages } from "@/lib/utils";

export default function Home() {
  const [messages, setMessages] = useState<string>("");

  const sendMessage = () => {};

  return (
    <div>
      <div className="flex justify-center h-screen items-end bg-white">
        <div className="space-y-4 border-t px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
          <div className="mx-auto sm:max-w-2xl sm:px-4">
            <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0">
              {messages.length === 0 &&
                exampleMessages.map((example, index) => (
                  <div
                    key={example.heading}
                    className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 ${
                      index > 1 && "hidden md:block"
                    }`}
                  >
                    <div className="text-sm font-semibold">{example.heading}</div>
                    <div className="text-sm text-zinc-600">
                      {example.subheading}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <form>
            <div className="relative flex border">
              <Input
                name=""
                value={messages}
                onChange={(e) => setMessages(e.target.value)}
                placeholder="Send Message.."
              />
              <div className="absolute right-0 top-[13px] sm:right-4">
                <Button
                  onClick={() => sendMessage()}
                  type={"submit"}
                  Icon={AiOutlineEnter}
                  text={""}
                />
              </div>
            </div>
            <div className="text-muted-foreground px-2 text-center text-xs leading-normal hidden sm:block mt-4">
              Open source AI chatbot built with NextJs and TailwindCSS
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
