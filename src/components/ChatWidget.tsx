import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

export function ChatWidget() {

  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to SmileCare Dental Clinic. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Listen for openChat event from anywhere in the app
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };

    window.addEventListener("openChat", handleOpenChat);
    return () => window.removeEventListener("openChat", handleOpenChat);
  }, []);

  const sendMessage = useCallback(async (messageText: string) => {

    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageText,
          history: updatedMessages,
        }),
      });

      const data = await response.json();

      if (data.leadCaptured && data.leadData) {

        await fetch("https://hook.eu1.make.com/rmiwg43fwli7yrc3nk1g2hay23d8nmze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data.leadData),
        });

        console.log("Lead sent to CRM");

      }

      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.reply || "Sorry, I couldn't respond.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {

      console.error(error);

      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, something went wrong. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);

    } finally {

      setIsTyping(false);

    }

  }, [messages]);

  const handleSend = () => {
    sendMessage(input);
  };

  const handleQuickReply = (quick: string) => {
    sendMessage(quick);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }

  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-7 right-7 z-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-shadow duration-300 ${isOpen
            ? "bg-gray-800 shadow-gray-900/20"
            : "bg-[#1e3a8a] shadow-[#1e3a8a]/25 hover:shadow-[#1e3a8a]/40"
          }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 350,
            }}
            className="fixed bottom-28 right-7 z-50 w-[340px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
            style={{ maxHeight: "520px" }}
          >

            {/* Header */}
            <div className="bg-[#1e3a8a] px-6 py-5 flex items-center gap-4">

              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm">
                  SmileCare Assistant
                </h3>

                <div className="flex items-center gap-2 mt-0.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-blue-200 text-xs">
                    Online now
                  </span>
                </div>
              </div>

            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50"
              style={{
                minHeight: "280px",
                maxHeight: "360px",
              }}
            >

              {messages.map((message) => (

                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.sender === "user"
                      ? "flex-row-reverse"
                      : ""
                    }`}
                >

                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${message.sender === "bot"
                        ? "bg-[#1e3a8a] text-white"
                        : "bg-gray-800 text-white"
                      }`}
                  >
                    {message.sender === "bot"
                      ? <Bot className="w-4 h-4" />
                      : <User className="w-4 h-4" />
                    }
                  </div>

                  <div
                    className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${message.sender === "bot"
                        ? "bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-md"
                        : "bg-[#1e3a8a] text-white rounded-tr-md"
                      }`}
                  >

                    <p className="whitespace-pre-line">
                      {message.text}
                    </p>

                    <span
                      className={`text-[10px] mt-1.5 block ${message.sender === "bot"
                          ? "text-gray-400"
                          : "text-blue-200"
                        }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>

                  </div>

                </motion.div>

              ))}

              {isTyping && (

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >

                  <div className="w-8 h-8 rounded-xl bg-[#1e3a8a] flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>

                  <div className="bg-white px-5 py-4 rounded-2xl shadow-sm border border-gray-100">

                    <div className="flex gap-2">
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                    </div>

                  </div>

                </motion.div>

              )}

              <div ref={messagesEndRef} />

            </div>

            {/* Quick Replies */}
            <div className="px-4 py-3 flex gap-2 overflow-x-auto border-t border-gray-100 bg-white">

              {[
                "Hello 👋",
                "General Checkup",
                "Teeth Whitening",
                "Emergency 🚨",
              ].map((quick) => (

                <button
                  key={quick}
                  onClick={() => handleQuickReply(quick)}
                  className="shrink-0 px-3.5 py-2 bg-gray-50 text-gray-600 rounded-xl text-xs font-medium hover:bg-[#1e3a8a]/5 hover:text-[#1e3a8a] transition-colors border border-gray-100"
                >
                  {quick}
                </button>

              ))}

            </div>

            {/* Input */}
            <div className="px-4 py-4 bg-white border-t border-gray-100">

              <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-200">

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
                />

                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${input.trim()
                      ? "bg-[#1e3a8a] text-white"
                      : "bg-gray-200 text-gray-400"
                    }`}
                >
                  <Send className="w-4 h-4" />
                </button>

              </div>

              <p className="text-center text-[10px] text-gray-400 mt-3">
                Powered by SmileCare AI • Available 24/7
              </p>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}