import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Cloud, Code2, Download, Plus, Save, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  addEdge, 
  useNodesState, 
  useEdgesState 
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Get a list of Jira tickets' },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Extract the response of jira tickets using JQ expression' },
    position: { x: 250, y: 100 },
  },
  {
    id: '3',
    data: { label: 'ConvertFileFormat' },
    position: { x: 250, y: 200 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

const NoCodeUIFlow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(id === 'new' ? 1 : 2);
  const [ruleName, setRuleName] = useState('');
  const [ruleDescription, setRuleDescription] = useState('');
  const [rulePurpose, setRulePurpose] = useState('');
  const [ruleTags, setRuleTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [selectedTask, setSelectedTask] = useState<null | string>(null);
  const [taskDetailsOpen, setTaskDetailsOpen] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [activeTab, setActiveTab] = useState('workflow');

  const isNew = id === 'new';
  const totalSteps = 5;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${isNew ? 'Create' : 'Edit'} Rule | No-Code UI Studio`;
    
    // If not a new rule, populate with mock data
    if (!isNew) {
      setRuleName('GetJiraTickets');
      setRuleDescription('GetJiraTickets');
      setRulePurpose('GetJiraTickets');
    }
  }, [isNew]);

  const onConnect = (params: any) => setEdges((eds) => addEdge(params, eds));

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAddTag = () => {
    if (newTag && !ruleTags.includes(newTag)) {
      setRuleTags([...ruleTags, newTag]);
      setNewTag('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTag) {
      handleAddTag();
      e.preventDefault();
    }
  };

  const handleRemoveTag = (tag: string) => {
    setRuleTags(ruleTags.filter((t) => t !== tag));
  };

  const handleTaskClick = (task: string) => {
    setSelectedTask(task);
    setTaskDetailsOpen(true);
  };

  const renderProgressSteps = () => {
    const steps = [
      { name: 'Configure Rule', icon: <Code2 className="w-5 h-5" /> },
      { name: 'Build Task Flow', icon: <ArrowRight className="w-5 h-5" /> },
      { name: 'Provide Application Credentials', icon: <Cloud className="w-5 h-5" /> },
      { name: 'Execute', icon: <Save className="w-5 h-5" /> },
      { name: 'Publish', icon: <Cloud className="w-5 h-5" /> },
    ];

    return (
      <div className="relative mb-12">
        <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-200 -translate-y-1/2" />
        <div className="flex justify-between relative z-10">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === currentStep;
            const isComplete = stepNumber < currentStep;

            return (
              <div key={stepNumber} className="flex flex-col items-center">
                <div 
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mb-2",
                    isActive ? "bg-primary text-white" : isComplete ? "bg-primary/20 text-primary" : "bg-white border border-gray-200 text-gray-500"
                  )}
                >
                  {step.icon}
                </div>
                <span className="text-xs text-center max-w-[80px]">{step.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderConfigureRule = () => (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <h2 className="text-2xl font-semibold mb-6">Rule Configuration</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              value={ruleName}
              onChange={(e) => setRuleName(e.target.value)}
              placeholder="Enter rule name"
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium mb-1">
              Purpose <span className="text-red-500">*</span>
            </label>
            <Input
              id="purpose"
              value={rulePurpose}
              onChange={(e) => setRulePurpose(e.target.value)}
              placeholder="Enter rule purpose"
              className="w-full"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="description"
              value={ruleDescription}
              onChange={(e) => setRuleDescription(e.target.value)}
              placeholder="Enter rule description"
              className="w-full h-20"
            />
          </div>
          
          <div>
            <label htmlFor="tags" className="block text-sm font-medium mb-1">
              Tags
            </label>
            <div className="flex items-center">
              <Input
                id="tags"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add a tag"
                className="w-full"
              />
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleAddTag}
                disabled={!newTag}
                className="ml-2"
              >
                <Plus size={16} className="text-primary" />
                <span className="ml-1 text-xs">tags</span>
              </Button>
            </div>
            
            {ruleTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {ruleTags.map((tag) => (
                  <div key={tag} className="flex items-center bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                    {tag}
                    <button 
                      type="button" 
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1.5 text-primary hover:text-primary/80"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderWorkflowTab = () => (
    <div className="h-[600px] border rounded-md p-4 my-4">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );

  const renderCodeTab = () => (
    <div className="border rounded-md p-4 my-4">
      <pre className="bg-gray-100 p-4 overflow-auto h-[500px] text-sm">
        {`yaml:
name: ${ruleName || 'NewRule'}
description: ${ruleDescription || 'Description goes here'}
inputs:
  - name: RequestConfigFile
    type: HTTP_CONFIG
outputs:
  - name: CompliancePCT_
    type: NUMBER
  - name: ComplianceStatus_
    type: STRING
  - name: LogFile
    type: FILE
tasks:
  - name: ExecuteHtpRequest
    alias: Get a list of Jira tickets
    inputs:
      - RequestConfigFile
  - name: ApplyJQExpression
    alias: Extract the response of jira tickets using JQ expression
  - name: ConvertFileFormat
`}
      </pre>
    </div>
  );

  const renderComponentsTab = () => (
    <div className="border rounded-md p-4 my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div 
          className="border p-3 rounded-md cursor-pointer hover:bg-gray-50"
          onClick={() => handleTaskClick('http')}
        >
          <h3 className="font-medium">HTTP Request</h3>
          <p className="text-sm text-gray-500">Make API calls and process responses</p>
        </div>
        <div 
          className="border p-3 rounded-md cursor-pointer hover:bg-gray-50"
          onClick={() => handleTaskClick('jq')}
        >
          <h3 className="font-medium">JQ Expression</h3>
          <p className="text-sm text-gray-500">Process JSON with JQ queries</p>
        </div>
        <div 
          className="border p-3 rounded-md cursor-pointer hover:bg-gray-50"
          onClick={() => handleTaskClick('convert')}
        >
          <h3 className="font-medium">File Converter</h3>
          <p className="text-sm text-gray-500">Convert between file formats</p>
        </div>
        <div 
          className="border p-3 rounded-md cursor-pointer hover:bg-gray-50"
          onClick={() => handleTaskClick('sql')}
        >
          <h3 className="font-medium">SQL Query</h3>
          <p className="text-sm text-gray-500">Execute SQL queries against databases</p>
        </div>
        <div 
          className="border p-3 rounded-md cursor-pointer hover:bg-gray-50"
          onClick={() => handleTaskClick('transform')}
        >
          <h3 className="font-medium">Data Transform</h3>
          <p className="text-sm text-gray-500">Transform data between formats</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto pb-12">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link to="/no-code-ui" className="hover:text-primary transition-colors">No-Code UI Studio</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{isNew ? 'Create Rule' : 'Edit Rule'}</BreadcrumbPage>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-4">
            {isNew ? 'Create Rule' : 'Edit Rule'}
          </h1>
        </div>

        {renderProgressSteps()}

        <div className="mb-8">
          {currentStep === 1 && renderConfigureRule()}
          {currentStep === 2 && (
            <div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">Build Task Flow</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Code2 className="mr-1 h-4 w-4" />
                      View YAML
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-1 h-4 w-4" />
                      Download YAML
                    </Button>
                  </div>
                </div>
                
                <div className="flex border-b mb-4">
                  <button
                    className={cn("px-4 py-2 font-medium", activeTab === 'workflow' ? "border-b-2 border-primary text-primary" : "text-gray-500")}
                    onClick={() => setActiveTab('workflow')}
                  >
                    Workflow
                  </button>
                  <button
                    className={cn("px-4 py-2 font-medium", activeTab === 'code' ? "border-b-2 border-primary text-primary" : "text-gray-500")}
                    onClick={() => setActiveTab('code')}
                  >
                    YAML
                  </button>
                  <button
                    className={cn("px-4 py-2 font-medium", activeTab === 'components' ? "border-b-2 border-primary text-primary" : "text-gray-500")}
                    onClick={() => setActiveTab('components')}
                  >
                    Components
                  </button>
                </div>
                
                {activeTab === 'workflow' && renderWorkflowTab()}
                {activeTab === 'code' && renderCodeTab()}
                {activeTab === 'components' && renderComponentsTab()}
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Rule Inputs</h3>
                  <div className="border rounded-md p-4 relative">
                    <div className="flex justify-between items-center">
                      <div className="bg-gray-100 px-3 py-1.5 rounded-md flex items-center">
                        <span>RequestConfigFile</span>
                        <button className="ml-2 text-gray-500">
                          <X size={14} />
                        </button>
                      </div>
                      <Button size="sm" variant="outline">
                        <Plus size={14} className="mr-1" />
                        Input
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Rule Outputs</h3>
                  <div className="border rounded-md p-4">
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        <div className="bg-gray-100 px-3 py-1.5 rounded-md">CompliancePCT_</div>
                        <div className="bg-gray-100 px-3 py-1.5 rounded-md">ComplianceStatus_</div>
                        <div className="bg-gray-100 px-3 py-1.5 rounded-md">LogFile</div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Plus size={14} className="mr-1" />
                        Output
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevStep}
            disabled={currentStep === 1}
            className={currentStep === 1 ? 'opacity-50' : ''}
          >
            <ChevronLeft size={16} className="mr-1" />
            Back
          </Button>

          <div className="flex space-x-2">
            <span className="flex items-center text-sm text-gray-500">
              {currentStep} / {totalSteps}
            </span>
          </div>

          <Button onClick={handleNextStep}>
            {currentStep === totalSteps ? 'Finish' : 'Next'}
            <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>

      {taskDetailsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center p-4 z-50">
          <Card className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setTaskDetailsOpen(false)} 
              className="absolute top-4 right-4"
            >
              <X size={20} className="text-gray-500" />
            </button>
            <h2 className="text-xl font-bold mb-4">Task Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Name</h3>
                <p>ExecuteHtpRequest</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Alias</h3>
                <p>Get a list of Jira tickets</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Description</h3>
                <p className="text-gray-600 text-sm">
                  Automate API requests by processing inputs and outputting responses in a structured JSON format.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Inputs</h3>
                <div className="space-y-3 mb-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between">
                      <span className="font-medium">Name</span>
                      <span>RequestConfigFile</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="font-medium">Display Name</span>
                      <span>RequestConfigFile</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="font-medium">Description</span>
                      <span className="text-sm text-right">Contains config for API requests</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="font-medium">Type</span>
                      <span>HTTP_CONFIG</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full" onClick={() => setTaskDetailsOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default NoCodeUIFlow;
