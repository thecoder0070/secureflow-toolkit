
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const RiskRegisterHeader = () => {
  return (
    <FadeIn>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight mb-2 flex items-center">
          <AlertTriangle className="mr-2 h-8 w-8 text-amber-500" />
          Risk Register Dashboard
        </h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <Link to="/" className="text-blue-500 hover:underline flex items-center">
            <Home className="h-3.5 w-3.5 mr-1" />Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span>Risk Register Dashboard</span>
        </div>
      </div>
    </FadeIn>
  );
};

export default RiskRegisterHeader;
