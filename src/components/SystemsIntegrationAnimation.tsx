
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

// Company logo icons for each category
interface CompanyLogo {
  name: string;
  imageUrl: string;
  bgColor?: string;
}

const categoryLogos: Record<string, CompanyLogo[]> = {
  "Controls": [
    { name: "Shield", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#shield", bgColor: "bg-blue-100" },
    { name: "Cloud", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#cloud", bgColor: "bg-cyan-100" },
    { name: "PCI", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#pci", bgColor: "bg-green-100" },
    { name: "ISO", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#iso", bgColor: "bg-yellow-100" },
    { name: "SOC2", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#soc2", bgColor: "bg-purple-100" }
  ],
  "Systems": [
    { name: "AWS", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#aws", bgColor: "bg-orange-100" },
    { name: "Google Cloud", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#gc", bgColor: "bg-blue-100" },
    { name: "Azure", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#azure", bgColor: "bg-indigo-100" }
  ],
  "Collaboration": [
    { name: "Microsoft", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#msft", bgColor: "bg-blue-100" },
    { name: "Google", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#google", bgColor: "bg-green-100" },
    { name: "Slack", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#slack", bgColor: "bg-purple-100" }
  ],
  "Consumption": [
    { name: "Data", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#data", bgColor: "bg-red-100" },
    { name: "Tableau", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#tableau", bgColor: "bg-blue-100" },
    { name: "PowerBI", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#powerbi", bgColor: "bg-yellow-100" }
  ],
  "Reporting": [
    { name: "Google Data Studio", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#gds", bgColor: "bg-blue-100" },
    { name: "Looker", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#looker", bgColor: "bg-green-100" }
  ],
  "Remediation": [
    { name: "ServiceNow", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#servicenow", bgColor: "bg-green-100" },
    { name: "Jira", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#jira", bgColor: "bg-blue-100" },
    { name: "GitHub", imageUrl: "/lovable-uploads/5b20eacc-870a-4af9-ad8a-0ab9ce9e189f.png#github", bgColor: "bg-gray-100" }
  ]
};

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
                  {/* Company logos for this category */}
                  <div className="flex flex-wrap items-center gap-3">
                    {categoryLogos[category.label]?.map((logo, idx) => (
                      <div 
                        key={idx} 
                        className={`w-7 h-7 ${logo.bgColor || 'bg-gray-100'} rounded-full flex items-center justify-center shadow-sm`}
                        title={logo.name}
                      >
                        <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                          {/* Using placeholder icons since we don't have the actual images */}
                          {category.icon && <category.icon className="w-3 h-3 text-gray-600" />}
                        </div>
                      </div>
                    ))}
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
                  {/* ComplianceCow Logo - Purple cow with horns and sunglasses */}
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
                  {/* Company logos for this category */}
                  <div className="flex flex-wrap items-center gap-3">
                    {categoryLogos[category.label]?.map((logo, idx) => (
                      <div 
                        key={idx} 
                        className={`w-7 h-7 ${logo.bgColor || 'bg-gray-100'} rounded-full flex items-center justify-center shadow-sm`}
                        title={logo.name}
                      >
                        <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                          {/* Using placeholder icons since we don't have the actual images */}
                          {category.icon && <category.icon className="w-3 h-3 text-gray-600" />}
                        </div>
                      </div>
                    ))}
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
          <div className="flex flex-wrap items-center justify-center mt-4 gap-4">
            {/* Platform logos */}
            {['Vanta', 'AuditBoard', 'ServiceNow', 'Archer', 'Metricstream'].map((platform, i) => (
              <motion.div
                key={platform}
                className="h-8 w-8 rounded-md bg-gray-100 flex items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                title={platform}
              >
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-3 h-3 text-gray-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SystemsIntegrationAnimation;
