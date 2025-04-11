
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid2X2 } from 'lucide-react';

const RiskScoringMatrices = () => {
  return (
    <Card className="shadow-md mb-8">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Grid2X2 className="h-5 w-5 text-purple-500" />
          Risk Scoring Matrices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="inherent" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="inherent">Inherent Risk</TabsTrigger>
            <TabsTrigger value="residual">Residual Risk</TabsTrigger>
          </TabsList>
          
          <TabsContent value="inherent">
            <div className="p-4">
              <div className="text-sm font-medium mb-3 text-center">Inherent Risk Scoring Matrix (Before Controls)</div>
              <div className="relative">
                <div className="absolute -left-7 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-500">
                  Impact
                </div>
                
                <div className="grid grid-cols-5 gap-1 text-center text-xs ml-6">
                  <div className="p-2 bg-gray-200 font-medium">Impact</div>
                  <div className="p-2 bg-gray-200 font-medium">Very Low</div>
                  <div className="p-2 bg-gray-200 font-medium">Low</div>
                  <div className="p-2 bg-gray-200 font-medium">Medium</div>
                  <div className="p-2 bg-gray-200 font-medium">High</div>
                  
                  <div className="p-2 bg-gray-200 font-medium">Very Low</div>
                  <div className="p-2 bg-green-100">1</div>
                  <div className="p-2 bg-green-100">2</div>
                  <div className="p-2 bg-yellow-100">3</div>
                  <div className="p-2 bg-yellow-100">4</div>
                  
                  <div className="p-2 bg-gray-200 font-medium">Low</div>
                  <div className="p-2 bg-green-100">2</div>
                  <div className="p-2 bg-yellow-100">4</div>
                  <div className="p-2 bg-yellow-100">6</div>
                  <div className="p-2 bg-orange-100">8</div>
                  
                  <div className="p-2 bg-gray-200 font-medium">Medium</div>
                  <div className="p-2 bg-yellow-100">3</div>
                  <div className="p-2 bg-yellow-100">6</div>
                  <div className="p-2 bg-orange-100">9</div>
                  <div className="p-2 bg-red-100">12</div>
                  
                  <div className="p-2 bg-gray-200 font-medium">High</div>
                  <div className="p-2 bg-yellow-100">4</div>
                  <div className="p-2 bg-orange-100">8</div>
                  <div className="p-2 bg-red-100">12</div>
                  <div className="p-2 bg-red-200">16</div>
                </div>
                
                <div className="text-center mt-2 text-xs font-medium text-gray-500">
                  Controlability
                </div>
              </div>
              
              <div className="flex justify-center gap-4 mt-5">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-100"></div>
                  <span className="text-xs">Low Risk</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-yellow-100"></div>
                  <span className="text-xs">Medium Risk</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-orange-100"></div>
                  <span className="text-xs">High Risk</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-100"></div>
                  <span className="text-xs">Critical Risk</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="residual">
            <div className="p-4">
              <div className="text-sm font-medium mb-3 text-center">Residual Risk Scoring Matrix (After Controls)</div>
              <div className="relative">
                <div className="absolute -left-7 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-500">
                  Impact
                </div>
                
                <div className="grid grid-cols-5 gap-1 text-center text-xs ml-6">
                  <div className="p-2 bg-gray-200 font-medium">Impact</div>
                  <div className="p-2 bg-gray-200 font-medium">Very Low</div>
                  <div className="p-2 bg-gray-200 font-medium">Low</div>
                  <div className="p-2 bg-gray-200 font-medium">Medium</div>
                  <div className="p-2 bg-gray-200 font-medium">High</div>
                  
                  <div className="p-2 bg-gray-200 font-medium">Very Low</div>
                  <div className="p-2 bg-green-100">1</div>
                  <div className="p-2 bg-green-100">1</div>
                  <div className="p-2 bg-green-100">2</div>
                  <div className="p-2 bg-yellow-100">3</div>
                  
                  <div className="p-2 bg-gray-200 font-medium">Low</div>
                  <div className="p-2 bg-green-100">1</div>
                  <div className="p-2 bg-green-100">2</div>
                  <div className="p-2 bg-yellow-100">3</div>
                  <div className="p-2 bg-yellow-100">4</div>
                  
                  <div className="p-2 bg-gray-200 font-medium">Medium</div>
                  <div className="p-2 bg-green-100">2</div>
                  <div className="p-2 bg-yellow-100">3</div>
                  <div className="p-2 bg-yellow-100">4</div>
                  <div className="p-2 bg-orange-100">6</div>
                  
                  <div className="p-2 bg-gray-200 font-medium">High</div>
                  <div className="p-2 bg-yellow-100">3</div>
                  <div className="p-2 bg-yellow-100">4</div>
                  <div className="p-2 bg-orange-100">6</div>
                  <div className="p-2 bg-red-100">9</div>
                </div>
                
                <div className="text-center mt-2 text-xs font-medium text-gray-500">
                  Controlability
                </div>
              </div>
              
              <div className="flex justify-center gap-4 mt-5">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-100"></div>
                  <span className="text-xs">Low Risk</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-yellow-100"></div>
                  <span className="text-xs">Medium Risk</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-orange-100"></div>
                  <span className="text-xs">High Risk</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-100"></div>
                  <span className="text-xs">Critical Risk</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RiskScoringMatrices;
