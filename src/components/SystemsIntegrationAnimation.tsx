
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, FileText, Users, Laptop, FolderOpen, Building, TicketCheck } from 'lucide-react';

// Define categories with icons
interface Category {
  label: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  { 
    label: "Accounting", 
    icon: FileText
  },
  { 
    label: "ATS", 
    icon: Users
  },
  { 
    label: "CRM", 
    icon: Laptop
  },
  { 
    label: "File storage", 
    icon: FolderOpen
  },
  { 
    label: "HRIS", 
    icon: Building
  },
  { 
    label: "Ticketing", 
    icon: TicketCheck
  },
];

const SystemsIntegrationAnimation = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 shadow-sm ring-1 ring-gray-100">
      {/* Diagonal line pattern for texture (very subtle) */}
      <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]"></div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* LEFT COLUMN - Source Systems */}
        <div className="space-y-6"> {/* Modified: Increased spacing to exactly 24px (6 tailwind units) */}
          {categories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex h-14 w-64 items-center justify-start space-x-4 rounded-2xl bg-white px-4 shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] ring-1 ring-gray-100" /* Modified: Added subtle inset shadow */
            >
              <div className="flex items-center justify-center w-8 h-8 bg-gray-50 rounded-md"> {/* Modified: Added background for icon */}
                <category.icon className="w-5 h-5 text-gray-500" />
              </div>
              <span className="text-sm font-medium text-gray-600">{category.label}</span>
            </motion.div>
          ))}
        </div>

        {/* SVG CONNECTIONS */}
        <svg
          viewBox="0 0 800 600"
          className="pointer-events-none absolute left-56 md:left-60 top-8 h-[80%] w-auto hidden md:block"
        >
          {categories.map((_, i) => {
            // Spline control points for smooth Bézier curves
            const y = 120 + i * 76; // 76px accounts for the new 24px vertical spacing plus pill height
            return (
              <React.Fragment key={i}>
                <motion.path
                  d={`M0 ${y} C200 ${y - 20}, 300 ${y + 20}, 460 ${300}`}
                  fill="none"
                  stroke="#D6D6D6"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
                <motion.circle 
                  cx="460" 
                  cy="300" 
                  r="3" 
                  fill="#FF7C2E" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                />
              </React.Fragment>
            );
          })}
        </svg>

        {/* CENTER NODE */}
        <motion.div 
          className="relative z-10 flex h-64 w-64 items-center justify-center rounded-full bg-gray-50 shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-gray-800 text-center">
            <div className="font-bold text-2xl">ComplianceCow</div>
            <div className="text-sm opacity-80">Integration Platform</div>
          </div>
          
          {/* Orbital rings (subtle decoration) */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full border border-gray-200/30 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* RIGHT PANEL - Browser mockup with dashboard UI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-100 w-full md:w-auto"
        >
          {/* Browser window top bar */}
          <div className="flex items-center h-6 mb-4 border-b border-gray-100">
            <div className="flex space-x-1.5 ml-1">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            </div>
          </div>
          
          {/* Dashboard UI mockup */}
          <div className="flex items-start space-x-6">
            <div className="space-y-1.5">
              {[70, 60, 55, 45, 40, 38, 32].map((h, i) => (
                <div key={i} className="h-2 w-16 bg-gray-300" style={{ height: `${h/10}px` }} />
              ))}
            </div>
            <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-[#FF7C2E]/70 to-gray-100"></div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-6 rounded bg-gray-200" />
            ))}
          </div>
          
          <div className="mt-4 space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-3 rounded bg-gray-100" />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SystemsIntegrationAnimation;
