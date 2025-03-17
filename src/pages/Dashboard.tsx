
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ComplianceOverview from '@/components/ComplianceOverview';
import StatusCard from '@/components/StatusCard';
import FrameworkSelector from '@/components/FrameworkSelector';
import { FadeIn } from '@/components/animations/FadeIn';
import { GlassCard } from '@/components/ui/GlassCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { FileCheck, Calendar, Bell, Users, Shield, ArrowRight, AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const upcomingTasks = [
    { id: 1, title: "Quarterly User Access Review", dueDate: "Jul 15, 2023", priority: "High", type: "Review" },
    { id: 2, title: "Security Awareness Training", dueDate: "Jul 22, 2023", priority: "Medium", type: "Training" },
    { id: 3, title: "Vendor Risk Assessment", dueDate: "Aug 05, 2023", priority: "Medium", type: "Assessment" }
  ];
  
  const recentActivity = [
    { id: 1, user: "Alex Johnson", action: "Completed SOC 2 Control Assessment", time: "2 hours ago" },
    { id: 2, user: "Maria Garcia", action: "Updated Information Security Policy", time: "Yesterday" },
    { id: 3, user: "Sam Wilson", action: "Uploaded Vendor Assessment Evidence", time: "2 days ago" }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Compliance Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Track your security compliance progress across multiple frameworks
            </p>
          </div>
        </FadeIn>
        
        <ComplianceOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-8">
            <FadeIn>
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" /> 
                    Upcoming Tasks
                  </h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                
                <div className="space-y-4">
                  {upcomingTasks.map(task => (
                    <div key={task.id} className="flex items-start p-4 rounded-lg border border-gray-100 dark:border-gray-800 transition-all hover:bg-gray-50 dark:hover:bg-gray-900">
                      <div className="flex-shrink-0 mr-4">
                        <div className={`p-2 rounded-full ${
                          task.priority === 'High' ? 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400' : 
                          task.priority === 'Medium' ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400' : 
                          'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                        }`}>
                          {task.type === 'Review' ? <FileCheck className="h-5 w-5" /> : 
                           task.type === 'Training' ? <Users className="h-5 w-5" /> : 
                           <Shield className="h-5 w-5" />}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{task.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            task.priority === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' : 
                            task.priority === 'Medium' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' : 
                            'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                          }`}>
                            {task.priority}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Due on {task.dueDate}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
            
            <FadeIn>
              <h2 className="text-xl font-semibold mb-6">Recent Assessments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatusCard 
                  title="SOC 2 Type II Annual Assessment" 
                  status="in-progress" 
                  description="Annual audit for SOC 2 Type II compliance" 
                  percentage={68}
                />
                <StatusCard 
                  title="GDPR Readiness Assessment" 
                  status="completed" 
                  description="Assessment of GDPR compliance controls" 
                  percentage={100}
                />
                <StatusCard 
                  title="ISO 27001 Gap Analysis" 
                  status="not-started" 
                  description="Identify gaps in ISO 27001 compliance" 
                  percentage={0}
                />
              </div>
            </FadeIn>
            
            <FadeIn>
              <GlassCard className="p-6">
                <Tabs defaultValue="policies">
                  <TabsList>
                    <TabsTrigger value="policies">Policy Management</TabsTrigger>
                    <TabsTrigger value="access">Access Reviews</TabsTrigger>
                    <TabsTrigger value="risk">Risk Management</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="policies" className="pt-4">
                    <div className="mb-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        Track and manage all your compliance policies in one place. Keep them updated and distribute to your team.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Information Security Policy</p>
                          <p className="text-sm text-gray-500">Last updated: June 15, 2023</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <FileCheck className="h-4 w-4 mr-2" /> Manage
                        </Button>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Acceptable Use Policy</p>
                          <div className="flex items-center text-sm">
                            <p className="text-red-500 flex items-center">
                              <AlertTriangle className="h-3 w-3 mr-1" /> Needs review
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <FileCheck className="h-4 w-4 mr-2" /> Manage
                        </Button>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Data Classification Policy</p>
                          <p className="text-sm text-gray-500">Last updated: May 2, 2023</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <FileCheck className="h-4 w-4 mr-2" /> Manage
                        </Button>
                      </div>
                      
                      <div className="mt-4 text-right">
                        <Button>
                          View All Policies <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="access" className="pt-4">
                    <div className="mb-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        Regular user access reviews ensure the right people have access to the right resources.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Next Scheduled Review</h3>
                        <p className="text-blue-700 dark:text-blue-400">July 15, 2023 (14 days from now)</p>
                        <p className="text-sm text-blue-600 dark:text-blue-500 mt-1">
                          Quarterly user access review for all production systems
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="font-medium">Recent Access Reviews</h3>
                        <div className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">Q1 User Access Review</p>
                            <p className="text-sm text-gray-500">Completed: April 15, 2023</p>
                          </div>
                          <Button variant="outline" size="sm">View Report</Button>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">AWS Console Access Review</p>
                            <p className="text-sm text-gray-500">Completed: May 20, 2023</p>
                          </div>
                          <Button variant="outline" size="sm">View Report</Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="risk" className="pt-4">
                    <div className="mb-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        Monitor and manage organizational risks and their mitigation strategies.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">High Priority Risks</p>
                          <p className="text-2xl font-semibold text-red-500">3</p>
                        </div>
                        <div>
                          <p className="font-medium">Medium Priority</p>
                          <p className="text-2xl font-semibold text-amber-500">7</p>
                        </div>
                        <div>
                          <p className="font-medium">Low Priority</p>
                          <p className="text-2xl font-semibold text-green-500">12</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Button>
                          Open Risk Register <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </GlassCard>
            </FadeIn>
          </div>
          
          <div className="space-y-8">
            <FadeIn>
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold flex items-center">
                    <Bell className="mr-2 h-5 w-5 text-primary" /> 
                    Recent Activity
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {recentActivity.map(activity => (
                    <div key={activity.id} className="border-b border-gray-100 dark:border-gray-800 last:border-0 pb-3 last:pb-0">
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{activity.action}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <Button variant="link">View All Activity</Button>
                </div>
              </GlassCard>
            </FadeIn>
            
            <FadeIn>
              <GlassCard className="p-6">
                <h2 className="text-xl font-semibold mb-6">Key Statistics</h2>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Controls Implemented</span>
                      <span className="text-sm font-medium">87%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Policies Up-to-Date</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Access Reviews Completed</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                      <div className="bg-amber-500 h-full rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="pt-2">
                    <h3 className="font-medium mb-2">Upcoming Deadlines</h3>
                    <ul className="space-y-2">
                      <li className="text-sm">
                        <span className="text-red-500 font-medium">Jul 15</span> - Quarterly Access Review
                      </li>
                      <li className="text-sm">
                        <span className="text-amber-500 font-medium">Aug 01</span> - Annual Risk Assessment
                      </li>
                      <li className="text-sm">
                        <span className="text-blue-500 font-medium">Sep 15</span> - SOC 2 Audit Preparation
                      </li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
            
            <FadeIn>
              <div className="mt-8">
                <FrameworkSelector />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
