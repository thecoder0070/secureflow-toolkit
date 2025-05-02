
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Database, Cloud, Network } from 'lucide-react';

const SystemsIntegrationAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-[500px] relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      {/* Central System - ComplianceCow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div 
          className="w-36 h-36 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/30"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.0, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-white text-center">
            <div className="font-bold text-xl">ComplianceCow</div>
            <div className="text-xs opacity-80">Security Middleware</div>
          </div>
        </motion.div>
        
        {/* Orbital ring */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-white/10 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border border-white/5 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Incoming connections/systems */}
      <ConnectingSystem 
        icon={<Server className="w-6 h-6" />}
        name="ERP Systems"
        color="bg-blue-500"
        position="top-[15%] left-[10%]"
        delay={0}
      />
      
      <ConnectingSystem 
        icon={<Database className="w-6 h-6" />}
        name="HRIS"
        color="bg-green-500"
        position="top-[30%] left-[15%]"
        delay={1.5}
      />
      
      <ConnectingSystem 
        icon={<Cloud className="w-6 h-6" />}
        name="Cloud Storage"
        color="bg-purple-500"
        position="bottom-[20%] left-[15%]"
        delay={3}
      />
      
      <ConnectingSystem 
        icon={<Network className="w-6 h-6" />}
        name="Security Tools"
        color="bg-yellow-500"
        position="bottom-[30%] right-[15%]"
        delay={2}
      />
      
      <ConnectingSystem 
        icon={<Database className="w-6 h-6" />}
        name="CRM Systems"
        color="bg-red-500"
        position="top-[25%] right-[10%]"
        delay={0.5}
      />
      
      {/* Outgoing systems */}
      <OutgoingSystem 
        name="SOC 2"
        color="bg-indigo-600"
        position="top-[12%] right-[25%]"
        delay={2}
      />
      
      <OutgoingSystem 
        name="GDPR"
        color="bg-blue-600"
        position="bottom-[12%] left-[30%]"
        delay={1}
      />
      
      <OutgoingSystem 
        name="ISO 27001"
        color="bg-green-600"
        position="bottom-[15%] right-[28%]"
        delay={3}
      />
    </div>
  );
};

interface ConnectingSystemProps {
  icon: React.ReactNode;
  name: string;
  color: string;
  position: string;
  delay: number;
}

const ConnectingSystem = ({ icon, name, color, position, delay }: ConnectingSystemProps) => {
  return (
    <div className={`absolute ${position} z-20`}>
      <div className="flex items-center">
        <motion.div 
          className={`${color} rounded-lg w-14 h-14 flex items-center justify-center shadow-lg text-white`}
          animate={{ y: [0, -8, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        >
          {icon}
        </motion.div>
        
        <div className="ml-2 text-white font-medium text-sm">
          {name}
        </div>
        
        <motion.div 
          className="ml-2"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </motion.div>
      </div>
      
      {/* Animated connection line */}
      <ConnectingLine delay={delay} />
    </div>
  );
};

interface OutgoingSystemProps {
  name: string;
  color: string;
  position: string;
  delay: number;
}

const OutgoingSystem = ({ name, color, position, delay }: OutgoingSystemProps) => {
  return (
    <div className={`absolute ${position} z-20`}>
      <div className="flex items-center">
        <motion.div 
          className="mr-2"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </motion.div>
        
        <div className="mr-2 text-white font-medium text-sm">
          {name}
        </div>
        
        <motion.div 
          className={`${color} rounded-lg w-12 h-12 flex items-center justify-center shadow-lg text-white text-xs font-bold`}
          animate={{ y: [0, -8, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <span>
            {name.split(' ')[0]}
          </span>
        </motion.div>
      </div>
      
      {/* Animated connection line */}
      <OutgoingLine delay={delay} />
    </div>
  );
};

const ConnectingLine = ({ delay = 0 }) => {
  return (
    <div className="absolute top-1/2 left-full w-[150px] h-[2px] bg-gradient-to-r from-white/50 to-primary/80 transform -translate-y-1/2">
      {[...Array(5)].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute top-1/2 h-2 w-2 bg-white rounded-full transform -translate-y-1/2"
          animate={{ 
            x: [-10, 150], 
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: delay + i * 0.4,
            ease: "easeInOut" 
          }}
        />
      ))}
    </div>
  );
};

const OutgoingLine = ({ delay = 0 }) => {
  return (
    <div className="absolute top-1/2 right-full w-[150px] h-[2px] bg-gradient-to-l from-white/50 to-primary/80 transform -translate-y-1/2">
      {[...Array(5)].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute top-1/2 h-2 w-2 bg-white rounded-full transform -translate-y-1/2"
          animate={{ 
            x: [160, 0], 
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: delay + i * 0.4,
            ease: "easeInOut" 
          }}
        />
      ))}
    </div>
  );
};

export default SystemsIntegrationAnimation;
