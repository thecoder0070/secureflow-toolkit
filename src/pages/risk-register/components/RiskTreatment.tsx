
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Info, CheckCircle } from 'lucide-react';

const RiskTreatment = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-500" />
          Risk Treatment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-500" /> 
              <span>Mitigate</span>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" /> 
              <span>Avoid</span>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-purple-500" /> 
              <span>Transfer</span>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" /> 
              <span>Accept</span>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskTreatment;
