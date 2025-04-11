
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface RiskParametersProps {
  threatType: string;
  setThreatType: (value: string) => void;
  confidentialityImpact: string;
  setConfidentialityImpact: (value: string) => void;
  integrityImpact: string;
  setIntegrityImpact: (value: string) => void;
  availabilityImpact: string;
  setAvailabilityImpact: (value: string) => void;
  controlability: string;
  setControlability: (value: string) => void;
  reviewPeriod: string;
  setReviewPeriod: (value: string) => void;
}

const RiskParameters = ({
  threatType,
  setThreatType,
  confidentialityImpact,
  setConfidentialityImpact,
  integrityImpact,
  setIntegrityImpact,
  availabilityImpact,
  setAvailabilityImpact,
  controlability,
  setControlability,
  reviewPeriod,
  setReviewPeriod
}: RiskParametersProps) => {
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Risk Parameters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Threat Type</label>
            <Select value={threatType} onValueChange={setThreatType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select threat type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="External">External</SelectItem>
                <SelectItem value="Internal">Internal</SelectItem>
                <SelectItem value="Physical">Physical</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Impact to Confidentiality</label>
            <Select value={confidentialityImpact} onValueChange={setConfidentialityImpact}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select impact level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="None">None</SelectItem>
                <SelectItem value="Very low">Very low</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Very high">Very high</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Impact to Integrity</label>
            <Select value={integrityImpact} onValueChange={setIntegrityImpact}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select impact level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="None">None</SelectItem>
                <SelectItem value="Very low">Very low</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Very high">Very high</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Impact to Availability</label>
            <Select value={availabilityImpact} onValueChange={setAvailabilityImpact}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select impact level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="None">None</SelectItem>
                <SelectItem value="Very low">Very low</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Very high">Very high</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Controlability</label>
            <Select value={controlability} onValueChange={setControlability}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select controlability level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Very low">Very low</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Very high">Very high</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Review Period</label>
            <Select value={reviewPeriod} onValueChange={setReviewPeriod}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select review period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Monthly">Monthly</SelectItem>
                <SelectItem value="Quarterly">Quarterly</SelectItem>
                <SelectItem value="Bi-annually">Bi-annually</SelectItem>
                <SelectItem value="Annually">Annually</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskParameters;
