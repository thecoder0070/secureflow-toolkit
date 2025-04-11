
import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import Navbar from '@/components/Navbar';
import RiskRegisterHeader from '@/components/RiskRegisterHeader';
import RiskScoreAnalysis from './components/RiskScoreAnalysis';
import RiskTreatment from './components/RiskTreatment';
import RiskCharts from './components/RiskCharts';
import ThreatAssessment from './components/ThreatAssessment';
import ConfidentialityImpact from './components/ConfidentialityImpact';
import RiskParameters from './components/RiskParameters';
import RiskScoringMatrices from './components/RiskScoringMatrices';

const RiskRegisterPage = () => {
  // State for risk calculation
  const [threatType, setThreatType] = useState('External');
  const [confidentialityImpact, setConfidentialityImpact] = useState('Very high');
  const [integrityImpact, setIntegrityImpact] = useState('Very low');
  const [availabilityImpact, setAvailabilityImpact] = useState('Very low');
  const [controlability, setControlability] = useState('Very low');
  const [reviewPeriod, setReviewPeriod] = useState('Quarterly');
  
  // Values mapping
  const threatValues = {
    External: 10,
    Internal: 5,
    Physical: 1
  };
  
  const impactValues = {
    None: 0,
    'Very low': 2,
    Low: 4,
    Medium: 6,
    High: 8,
    'Very high': 10
  };
  
  const controlabilityValues = {
    'Very low': 2,
    Low: 4,
    Medium: 6,
    High: 8,
    'Very high': 10
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container max-w-7xl mx-auto px-4 pt-24 pb-16">
        <RiskRegisterHeader />
        
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <RiskScoreAnalysis 
              threatType={threatType}
              threatValues={threatValues}
              impactValues={impactValues}
              confidentialityImpact={confidentialityImpact}
              integrityImpact={integrityImpact}
              availabilityImpact={availabilityImpact}
              controlability={controlability}
              controlabilityValues={controlabilityValues}
              reviewPeriod={reviewPeriod}
              setReviewPeriod={setReviewPeriod}
            />
            <RiskTreatment />
          </div>
          
          <RiskCharts />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left column - Impact tables */}
            <div className="space-y-6">
              <ThreatAssessment threatType={threatType} />
              <ConfidentialityImpact 
                confidentialityImpact={confidentialityImpact} 
                impactValues={impactValues} 
              />
            </div>
            
            {/* Right column - Controls and settings */}
            <div className="space-y-6">
              <RiskParameters
                threatType={threatType}
                setThreatType={setThreatType}
                confidentialityImpact={confidentialityImpact}
                setConfidentialityImpact={setConfidentialityImpact}
                integrityImpact={integrityImpact}
                setIntegrityImpact={setIntegrityImpact}
                availabilityImpact={availabilityImpact}
                setAvailabilityImpact={setAvailabilityImpact}
                controlability={controlability}
                setControlability={setControlability}
                reviewPeriod={reviewPeriod}
                setReviewPeriod={setReviewPeriod}
              />
            </div>
          </div>

          <RiskScoringMatrices />
        </FadeIn>
      </main>
    </div>
  );
};

export default RiskRegisterPage;
