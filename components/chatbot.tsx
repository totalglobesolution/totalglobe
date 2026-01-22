"use client"

import { MessageCircle, X, Send } from "lucide-react"
import { useState, useEffect } from "react"

export default function Chatbot() {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! 👋 Welcome to Total Global Solutions. How can I assist you today?"
    }
  ])
  const [input, setInput] = useState("")

  const quickReplies = [
    "Check service availability",
    "Compare plans",
    "Speak to representative",
    "View pricing"
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSend = () => {
    if (!input.trim()) return

    setMessages([...messages, { type: "user", text: input }])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: "bot",
        text: "Thank you for your message! A representative will assist you shortly. For immediate assistance, please call (855) 683-7625."
      }])
    }, 1000)
  }

  if (!isMounted) return null

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 left-8 z-50 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <p className="text-sm font-semibold text-foreground">Chat with us</p>
          </div>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-8 left-8 z-50 w-96 h-[500px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-accent text-accent-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-foreground/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Total Global Solutions</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-accent-foreground/10 p-2 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === "user"
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Quick replies:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setMessages([...messages, { type: "user", text: reply }])
                      setTimeout(() => {
                        setMessages(prev => [...prev, {
                          type: "bot",
                          text: "Thank you! Please call (855) 683-7625 to speak with a representative."
                        }])
                      }, 1000)
                    }}
                    className="text-xs px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full transition"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-accent hover:bg-accent/90 text-accent-foreground p-2 rounded-lg transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
