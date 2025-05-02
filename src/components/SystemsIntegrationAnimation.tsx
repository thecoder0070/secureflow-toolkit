import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, Shield, Cloud, Database, Link, Server, CircleCheck, GitMerge, GitBranch } from 'lucide-react';

// Define categories with icons
interface Category {
  label: string;
  icon: LucideIcon;
  side: 'left' | 'right';
  position: 'top' | 'middle' | 'bottom';
}

const categories: Category[] = [
  { 
    label: "Controls", 
    icon: Shield,
    side: 'left',
    position: 'top'
  },
  { 
    label: "Systems", 
    icon: Server,
    side: 'left',
    position: 'middle'
  },
  { 
    label: "Collaboration", 
    icon: Link,
    side: 'left',
    position: 'bottom'
  },
  { 
    label: "Consumption", 
    icon: Database,
    side: 'right',
    position: 'top'
  },
  { 
    label: "Reporting", 
    icon: CircleCheck,
    side: 'right',
    position: 'middle'
  },
  { 
    label: "Remediation", 
    icon: GitBranch,
    side: 'right',
    position: 'bottom'
  },
];

const SystemsIntegrationAnimation = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 shadow-sm ring-1 ring-gray-100">
      {/* Diagonal line pattern for texture (very subtle) */}
      <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]"></div>

      <div className="flex flex-col items-center justify-between gap-8 relative z-10">
        {/* Main title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h3 className="text-2xl font-bold text-indigo-600">Continuous Controls Management</h3>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* LEFT COLUMN - Categories */}
          <div className="space-y-16">
            {categories.filter(cat => cat.side === 'left').map((category, index) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className="flex h-14 w-64 items-center justify-start space-x-4 rounded-2xl bg-white px-4 shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] ring-1 ring-gray-100">
                  <div className="flex items-center justify-center w-8 h-8 bg-indigo-50 rounded-md">
                    <category.icon className="w-5 h-5 text-indigo-500" />
                  </div>
                  <span className="text-sm font-medium text-indigo-600">{category.label}</span>
                </div>
                <div className="mt-3 pl-4 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-3 h-3 text-blue-500" />
                    </div>
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Cloud className="w-3 h-3 text-cyan-500" />
                    </div>
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <Server className="w-3 h-3 text-gray-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER NODE */}
          <div className="relative hidden md:block">
            {/* Horizontal dashed lines */}
            {['top', 'middle', 'bottom'].map((position, idx) => (
              <React.Fragment key={position}>
                {/* Left dashed line */}
                <motion.div 
                  className="absolute left-[-150px] w-[150px] border-t-2 border-dashed border-indigo-200"
                  style={{ top: idx * 120 + 70 }}
                  initial={{ width: 0 }}
                  animate={{ width: 150 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                {/* Right dashed line */}
                <motion.div 
                  className="absolute left-[270px] w-[150px] border-t-2 border-dashed border-indigo-200"
                  style={{ top: idx * 120 + 70 }}
                  initial={{ width: 0 }}
                  animate={{ width: 150 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </React.Fragment>
            ))}
            
            <motion.div 
              className="relative z-10 flex h-64 w-64 items-center justify-center rounded-3xl bg-white shadow-lg border-2 border-indigo-100"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex flex-col items-center text-center px-4">
                <div className="mb-4">
                  {/* ComplianceCow Logo - Simplified version */}
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8L8 12M12 8L16 12M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-indigo-700">Security GRC Middleware</h4>
                
                {/* Sub cards */}
                <div className="mt-4 grid grid-cols-2 gap-3 w-full">
                  <div className="p-2 border border-indigo-100 rounded-md bg-blue-50/30 text-xs text-center">
                    Executes anywhere
                  </div>
                  <div className="p-2 border border-indigo-100 rounded-md bg-blue-50/30 text-xs text-center">
                    Plugs into DevOps
                  </div>
                </div>
              </div>
              
              {/* Up and down arrows */}
              <motion.div 
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-indigo-500"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5L8 9M12 5L16 9M12 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-indigo-500"
                animate={{ y: [2, -2, 2] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19L16 15M12 19L8 15M12 19V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
          
          {/* RIGHT COLUMN - Categories */}
          <div className="space-y-16">
            {categories.filter(cat => cat.side === 'right').map((category, index) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="flex flex-col items-start"
              >
                <div className="flex h-14 w-64 items-center justify-start space-x-4 rounded-2xl bg-white px-4 shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] ring-1 ring-gray-100">
                  <div className="flex items-center justify-center w-8 h-8 bg-indigo-50 rounded-md">
                    <category.icon className="w-5 h-5 text-indigo-500" />
                  </div>
                  <span className="text-sm font-medium text-indigo-600">{category.label}</span>
                </div>
                <div className="mt-3 pl-4 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <CircleCheck className="w-3 h-3 text-orange-500" />
                    </div>
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <GitMerge className="w-3 h-3 text-blue-500" />
                    </div>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-3 h-3 text-green-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-4"
        >
          <h3 className="text-xl font-semibold text-indigo-600">Works With Your Current GRC Platform</h3>
          <div className="flex items-center justify-center mt-4 space-x-6">
            {Array(5).fill(0).map((_, i) => (
              <div 
                key={i} 
                className="w-10 h-10 bg-gray-100 rounded-md animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SystemsIntegrationAnimation;
