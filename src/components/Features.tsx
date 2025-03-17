
import { FadeIn } from '@/components/animations/FadeIn';
import { GlassCard } from '@/components/ui/GlassCard';
import { Shield, BarChart, Clock, FileCheck, Users, Zap, Database, AlertTriangle, Lock, CheckCircle2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: 'Compliance Frameworks',
      description: 'Support for SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, and more with pre-built controls and policies.'
    },
    {
      icon: <BarChart className="h-6 w-6 text-purple-500" />,
      title: 'Real-time Monitoring',
      description: 'Continuous compliance monitoring with automated alerts for control failures and policy violations.'
    },
    {
      icon: <Clock className="h-6 w-6 text-green-500" />,
      title: 'Automated Evidence Collection',
      description: 'Save 100+ hours with automated evidence collection from AWS, GCP, Azure, GitHub, and more.'
    },
    {
      icon: <FileCheck className="h-6 w-6 text-indigo-500" />,
      title: 'Policy Management',
      description: 'Customizable policy templates, version control, and automated employee attestations.'
    },
    {
      icon: <Users className="h-6 w-6 text-amber-500" />,
      title: 'Vendor Management',
      description: 'Streamlined vendor risk assessments, automated questionnaires, and continuous monitoring.'
    },
    {
      icon: <Zap className="h-6 w-6 text-red-500" />,
      title: 'Audit Readiness',
      description: 'Pre-organized evidence, audit trails, and readiness assessments to ensure successful audits.'
    },
    {
      icon: <Database className="h-6 w-6 text-emerald-500" />,
      title: 'Security Posture Dashboard',
      description: 'Centralized visibility into security metrics, risks, and compliance status across your organization.'
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
      title: 'Risk Assessment',
      description: 'Structured approach to identifying, assessing, and mitigating security and compliance risks.'
    },
    {
      icon: <Lock className="h-6 w-6 text-slate-500" />,
      title: 'Access Reviews',
      description: 'Automated access reviews with approval workflows and comprehensive audit trails.'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-teal-500" />,
      title: 'Expert Guidance',
      description: 'Access to compliance experts who provide personalized guidance throughout your compliance journey.'
    }
  ];

  const complianceMetrics = [
    { metric: '60%', description: 'Reduction in time spent on compliance activities' },
    { metric: '75%', description: 'Decrease in manual evidence collection effort' },
    { metric: '3x', description: 'Faster time to audit readiness' },
    { metric: '90%', description: 'Of customers pass their audits on the first attempt' }
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
          
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compliance Impact</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our customers achieve measurable results with our compliance platform
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceMetrics.map((item, index) => (
                <FadeIn key={index} delay={index * 100} duration={700}>
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <p className="text-4xl font-bold text-primary mb-2">{item.metric}</p>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Trusted by Security-First Organizations</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                From startups to enterprises, our platform helps organizations of all sizes achieve and maintain compliance.
              </p>
              <div className="flex flex-wrap justify-center gap-8 opacity-70">
                {/* Placeholder for logos - would use actual company logos in production */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="w-32 h-12 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Company {i+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Features;
