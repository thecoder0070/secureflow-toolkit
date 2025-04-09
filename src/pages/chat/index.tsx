
import { useState, useRef, useEffect } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { GlassCard } from '@/components/ui/GlassCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { Send, PanelLeft, Bot, Clock, RotateCcw, Settings, User, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: '1',
      content: 'How many assessment exists? Can you list them.',
      isUser: true,
      timestamp: new Date('2025-04-02T17:16:00'),
    },
    {
      id: '2',
      content: 'I found 5 assessments in the system:\n\n1. SOC 2 Readiness Assessment\n2. HIPAA Compliance Check\n3. GDPR Data Protection Assessment\n4. PCI DSS Security Review\n5. ISO 27001 Gap Analysis\n\nWould you like me to provide more details about any specific assessment?',
      isUser: false,
      timestamp: new Date('2025-04-02T17:16:10'),
    },
    {
      id: '3',
      content: 'Which VM should be patched first? The VMs having critical vulnerabilities.',
      isUser: true,
      timestamp: new Date('2025-04-01T18:48:00'),
    },
    {
      id: '4',
      content: 'Based on vulnerability scan results, these VMs should be patched first due to critical vulnerabilities:\n\n1. app-server-01 (3 critical CVEs)\n2. db-server-east-2 (2 critical CVEs)\n3. web-frontend-prod (1 critical CVE with public exploit)\n\nI recommend patching app-server-01 first as it has the highest number of critical vulnerabilities. Would you like a detailed report of the vulnerabilities?',
      isUser: false,
      timestamp: new Date('2025-04-01T18:48:15'),
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedTool, setSelectedTool] = useState('chat');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setChatHistory((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate AI response after delay
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: `I'm analyzing your question about "${inputValue.substring(0, 30)}${inputValue.length > 30 ? '...' : ''}".\n\nBased on the compliance data in our system, I found the following information:\n\n- 3 related compliance requirements\n- 2 recent assessments covering this area\n- Documentation updated 2 weeks ago\n\nWould you like me to provide more specific details on any of these areas?`,
        isUser: false,
        timestamp: new Date(),
      };
      
      setChatHistory((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const clearChat = () => {
    toast({
      title: "Chat Cleared",
      description: "All chat history has been cleared.",
    });
    setChatHistory([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      <div className="flex h-[calc(100vh-64px)] pt-16">
        {/* Sidebar */}
        <div 
          className={cn(
            "fixed h-full z-10 transition-all duration-300 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 w-72",
            !isSidebarOpen && "-translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <Button 
                onClick={() => toast({ title: "New Chat", description: "Starting a new conversation" })} 
                variant="outline" 
                className="w-full justify-start text-gray-700 dark:text-gray-300"
              >
                <Bot className="mr-2 h-4 w-4" />
                New Chat
              </Button>
            </div>
            
            <div className="flex-1 overflow-auto">
              <div className="p-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                Today
              </div>
              
              <div className="space-y-1 px-2">
                {chatHistory
                  .filter(msg => msg.isUser)
                  .map((chat) => (
                    <button
                      key={chat.id}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 truncate"
                    >
                      {chat.content}
                    </button>
                  ))}
              </div>
              
              <div className="p-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                Previous 7 Days
              </div>
              
              <div className="space-y-1 px-2">
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 truncate">
                  Compliance requirements for AWS
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 truncate">
                  HIPAA documentation status
                </button>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <button 
                onClick={clearChat}
                className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 w-full px-3 py-2 rounded-md"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Clear conversations
              </button>
              <button 
                className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 w-full px-3 py-2 rounded-md"
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Chat Area */}
        <div className={cn(
          "flex-1 transition-all duration-300",
          isSidebarOpen ? "ml-72" : "ml-0"
        )}>
          <div className="h-12 border-b border-gray-200 dark:border-gray-800 flex items-center px-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="mr-2"
            >
              <PanelLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1 text-center font-medium">Compliance Assistant</div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex flex-col h-[calc(100vh-128px)]">
            <div className="flex-1 overflow-auto p-4">
              {chatHistory.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <Bot className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-2">How can I help with compliance today?</h2>
                  <p className="text-gray-500 dark:text-gray-400 max-w-md">
                    Ask about regulations, assessment status, vulnerabilities, or any compliance-related questions.
                  </p>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-2xl">
                    <Button variant="outline" className="justify-start text-left h-auto py-3">
                      <div>
                        <p className="font-medium">Show assessment status</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Get an overview of ongoing and completed assessments</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start text-left h-auto py-3">
                      <div>
                        <p className="font-medium">Analyze critical vulnerabilities</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">View most urgent security patches needed</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start text-left h-auto py-3">
                      <div>
                        <p className="font-medium">HIPAA compliance progress</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Check current HIPAA compliance status</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start text-left h-auto py-3">
                      <div>
                        <p className="font-medium">Generate compliance report</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Create a summary report for stakeholders</p>
                      </div>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {chatHistory.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex items-start gap-3 p-4 rounded-lg max-w-3xl mx-auto",
                        message.isUser ? "" : "bg-gray-50 dark:bg-gray-900"
                      )}
                    >
                      <div className={cn(
                        "shrink-0 rounded-full p-2 text-white",
                        message.isUser ? "bg-purple-600" : "bg-primary"
                      )}>
                        {message.isUser ? (
                          <User className="h-5 w-5" />
                        ) : (
                          <Bot className="h-5 w-5" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <span className="font-medium">
                            {message.isUser ? "You" : "Compliance Assistant"}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <div className="prose dark:prose-invert prose-sm max-w-none">
                          {message.content.split('\n').map((line, i) => (
                            <p key={i} className={line === '' ? 'mb-4' : 'mb-1'}>
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex items-start gap-3 p-4 rounded-lg max-w-3xl mx-auto bg-gray-50 dark:bg-gray-900">
                      <div className="shrink-0 rounded-full p-2 bg-primary text-white">
                        <Bot className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <span className="font-medium">Compliance Assistant</span>
                        </div>
                        <div className="flex space-x-2">
                          <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="max-w-3xl mx-auto relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="pr-12 py-6 bg-white dark:bg-gray-900"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-1 top-1 h-10 w-10 p-0"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                SecureFlow Assistant helps with compliance questions and tasks based on your organization's data.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
