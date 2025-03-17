
import { FadeIn } from '@/components/animations/FadeIn';
import { GlassCard } from '@/components/ui/GlassCard';
import { Shield, BarChart, Clock, FileCheck, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: 'Compliance Frameworks',
      description: 'Support for SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, and more.'
    },
    {
      icon: <BarChart className="h-6 w-6 text-purple-500" />,
      title: 'Real-time Monitoring',
      description: 'Track your compliance posture with real-time dashboards and alerts.'
    },
    {
      icon: <Clock className="h-6 w-6 text-green-500" />,
      title: 'Automated Evidence Collection',
      description: 'Save time with automated evidence collection from your cloud infrastructure.'
    },
    {
      icon: <FileCheck className="h-6 w-6 text-indigo-500" />,
      title: 'Policy Management',
      description: 'Create, manage, and distribute security policies with ease.'
    },
    {
      icon: <Users className="h-6 w-6 text-amber-500" />,
      title: 'Vendor Management',
      description: 'Assess and monitor the security posture of your vendors.'
    },
    {
      icon: <Zap className="h-6 w-6 text-red-500" />,
      title: 'Audit Readiness',
      description: 'Be audit-ready at all times with organized evidence and documentation.'
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive Security Compliance</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform helps you meet security requirements with powerful features designed to streamline your compliance journey.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 100} duration={700}>
              <GlassCard className="h-full p-6 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
