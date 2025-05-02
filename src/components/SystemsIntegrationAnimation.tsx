
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Database, Cloud, Network, FileImage, Link } from 'lucide-react';

const categories = [
  { label: "ERP Systems", icon: <Server className="w-5 h-5" />, color: "bg-blue-500" },
  { label: "HRIS", icon: <Database className="w-5 h-5" />, color: "bg-green-500" },
  { label: "Cloud Storage", icon: <Cloud className="w-5 h-5" />, color: "bg-purple-500" },
  { label: "CRM Systems", icon: <FileImage className="w-5 h-5" />, color: "bg-red-500" },
  { label: "Security Tools", icon: <Network className="w-5 h-5" />, color: "bg-yellow-500" },
  { label: "Ticketing", icon: <Link className="w-5 h-5" />, color: "bg-indigo-500" },
];

const frameworks = [
  { name: "SOC 2", color: "bg-indigo-600" },
  { name: "GDPR", color: "bg-blue-600" },
  { name: "ISO 27001", color: "bg-green-600" },
  { name: "HIPAA", color: "bg-purple-600" },
];

const SystemsIntegrationAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full min-h-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl ring-1 ring-gray-200 dark:ring-gray-800">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

      <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* LEFT COLUMN - Source Systems */}
        <div className="space-y-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex h-14 w-64 items-center justify-start space-x-4 rounded-2xl bg-white dark:bg-gray-800 px-4 shadow-inner ring-1 ring-gray-100 dark:ring-gray-700"
            >
              <div className={`${category.color} rounded-lg w-8 h-8 flex items-center justify-center shadow-md text-white`}>
                {category.icon}
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{category.label}</span>
              <motion.div 
                className="ml-auto"
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
              >
                <ArrowRight className="w-4 h-4 text-primary" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* SVG CONNECTIONS */}
        <svg
          viewBox="0 0 500 400"
          className="pointer-events-none absolute left-56 md:left-60 top-8 h-[80%] w-auto hidden md:block"
        >
          {categories.map((_, i) => {
            // Crude spline control points
            const y = 70 + i * 57;
            return (
              <g key={i}>
                <motion.path
                  d={`M0 ${y} C100 ${y - 20}, 150 ${y + 20}, 230 ${200}`}
                  fill="none"
                  stroke="currentColor"
                  className="text-primary/30 dark:text-primary/20"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
                <motion.circle 
                  cx="230" 
                  cy="200" 
                  r="3" 
                  fill="currentColor"
                  className="text-primary" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                />
                
                {/* Data flowing animation */}
                <motion.circle 
                  cx="0" 
                  cy="0" 
                  r="3" 
                  fill="currentColor"
                  className="text-primary" 
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    offsetPath: `path('M0 ${y} C100 ${y - 20}, 150 ${y + 20}, 230 200')`,
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    delay: i * 0.3, 
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />
              </g>
            );
          })}
          
          {/* Output connections to frameworks */}
          {frameworks.map((_, i) => {
            // Crude spline control points for output
            const y = 70 + i * 80;
            return (
              <g key={`output-${i}`}>
                <motion.path
                  d={`M290 200 C370 ${y - 20}, 390 ${y + 20}, 450 ${y}`}
                  fill="none"
                  stroke="currentColor"
                  className="text-primary/30 dark:text-primary/20"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 + i * 0.2 }}
                />
                <motion.circle 
                  cx="290" 
                  cy="200" 
                  r="3" 
                  fill="currentColor"
                  className="text-primary" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 + i * 0.2 }}
                />
                
                {/* Data flowing animation */}
                <motion.circle 
                  cx="0" 
                  cy="0" 
                  r="3" 
                  fill="currentColor"
                  className="text-primary" 
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    offsetPath: `path('M290 200 C370 ${y - 20}, 390 ${y + 20}, 450 ${y}')`,
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 2 + i * 0.3, 
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* CENTER NODE */}
        <motion.div 
          className="relative z-10 flex h-48 w-48 items-center justify-center rounded-full bg-primary shadow-2xl shadow-primary/30 text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-white text-center">
            <div className="font-bold text-xl">ComplianceCow</div>
            <div className="text-xs opacity-80">Security Middleware</div>
          </div>
          
          {/* Orbital rings */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-white/10 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div 
            className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full border border-white/5 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* RIGHT COLUMN - Frameworks */}
        <div className="space-y-4">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="flex h-14 w-64 items-center justify-start space-x-4 rounded-2xl bg-white dark:bg-gray-800 px-4 shadow-inner ring-1 ring-gray-100 dark:ring-gray-700"
            >
              <motion.div 
                className="mr-auto"
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
              >
                <ArrowRight className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{framework.name}</span>
              <div className={`${framework.color} rounded-lg w-10 h-10 flex items-center justify-center shadow-md text-white text-xs font-bold`}>
                <span>
                  {framework.name.split(' ')[0]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemsIntegrationAnimation;
