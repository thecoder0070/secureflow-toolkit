
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent
} from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, Cell, PieChart, Pie } from 'recharts';

const RiskCharts = () => {
  // Sample risk distribution data for chart
  const riskDistributionData = [
    { name: 'High', value: 8, fill: '#ef4444' },
    { name: 'Medium', value: 15, fill: '#f97316' },
    { name: 'Low', value: 27, fill: '#22c55e' },
  ];

  // Risk severity chart data
  const riskSeverityData = [
    { name: 'Critical', value: 5 },
    { name: 'High', value: 12 },
    { name: 'Medium', value: 18 },
    { name: 'Low', value: 25 },
  ];

  // Chart colors
  const severityColors = ['#dc2626', '#ef4444', '#f97316', '#22c55e'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <Card className="shadow-md col-span-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Risk Distribution</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <ChartContainer className="h-[200px]" config={{}}>
            <PieChart>
              <Pie
                data={riskDistributionData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {riskDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <ChartTooltip 
                content={<ChartTooltipContent />} 
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="shadow-md col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Risk Severity</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[200px]" config={{}}>
            <BarChart data={riskSeverityData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {riskSeverityData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={severityColors[index]} />
                ))}
              </Bar>
              <ChartTooltip 
                content={<ChartTooltipContent />} 
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskCharts;
