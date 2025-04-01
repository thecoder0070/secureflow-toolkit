
import { useState, useEffect, useCallback } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Code2, 
  Cloud, 
  Download, 
  Plus, 
  Save, 
  X, 
  FileCode, 
  Search,
  Wrench,
  Settings,
  CheckCircle,
  Workflow,
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  addEdge, 
  useNodesState, 
  useEdgesState,
  Position,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';

// Custom node component for task nodes
const TaskNode = ({ data }) => {
  return (
    <div className="bg-white rounded-md border border-gray-200 p-3 flex items-center gap-3 min-w-[300px]">
      <div className="bg-white border border-gray-200 rounded p-1">
        {data.icon}
      </div>
      <div className="text-sm">{data.label}</div>
      {data.removable && (
        <button className="ml-auto text-gray-400 hover:text-red-500">
          <X size={16} />
        </button>
      )}
    </div>
  );
};

// Custom node types
const nodeTypes = {
  taskNode: TaskNode,
};

const initialNodes = [
  {
    id: 'input-1',
    type: 'taskNode',
    data: { 
      label: 'RequestConfigFile', 
      icon: <FileCode size={16} />,
      removable: true
    },
    position: { x: 250, y: 0 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: 'task-1',
    type: 'taskNode',
    data: { 
      label: 'Get a list of Jira tickets', 
      icon: <Cloud size={16} />,
      removable: true
    },
    position: { x: 250, y: 100 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: 'task-2',
    type: 'taskNode',
    data: { 
      label: 'Extract the response of jira tickets using JQ expression', 
      icon: <Code2 size={16} />,
      removable: true
    },
    position: { x: 250, y: 200 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: 'task-3',
    type: 'taskNode',
    data: { 
      label: 'ConvertFileFormat', 
      icon: <FileCode size={16} />,
      removable: true
    },
    position: { x: 250, y: 300 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: 'output-1',
    type: 'taskNode',
    data: { 
      label: 'CompliancePCT_', 
      icon: <FileCode size={16} />,
      removable: true
    },
    position: { x: 250, y: 400 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
];

const initialEdges = [
  { 
    id: 'e-input-task1', 
    source: 'input-1', 
    target: 'task-1', 
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  { 
    id: 'e-task1-task2', 
    source: 'task-1', 
    target: 'task-2',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  { 
    id: 'e-task2-task3', 
    source: 'task-2', 
    target: 'task-3',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  { 
    id: 'e-task3-output', 
    source: 'task-3', 
    target: 'output-1',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

// Task types available to add
const availableTasks = [
  { id: 'AKSNodeImageUpgradeDetails', name: 'AKSNodeImageUpgradeDetails', category: 'Generic', icon: <Cloud size={16} /> },
  { id: 'AWSAccessKeyRotationReport', name: 'AWSAccessKeyRotationReport', category: '', icon: <Cloud size={16} /> },
  { id: 'AWSAccountAuthorizationDetails', name: 'AWSAccountAuthorizationDetails', category: '', icon: <Cloud size={16} /> },
  { id: 'AWSAccountPasswordPolicy', name: 'AWSAccountPasswordPolicy', category: '', icon: <Cloud size={16} /> },
  { id: 'AWSAuditManagerFetchAssessment', name: 'AWSAuditManagerFetchAssessment', category: '', icon: <Cloud size={16} /> },
  { id: 'AWSAuditManagerFetchEvidence', name: 'AWSAuditManagerFetchEvidence', category: '', icon: <Cloud size={16} /> },
  { id: 'AWSAuditManagerStandardizedReport', name: 'AWSAuditManagerStandardizedReport', category: '', icon: <Cloud size={16} /> },
  { id: 'AWSCheckForLatestAMI', name: 'AWSCheckForLatestAMI', category: '', icon: <Cloud size={16} /> },
  { id: 'AWSCloudTrailEvents', name: 'AWSCloudTrailEvents', category: 'Generic', icon: <Cloud size={16} /> },
  { id: 'AWSCredentialsReport', name: 'AWSCredentialsReport', category: '', icon: <Cloud size={16} /> },
  { id: 'AWSEFSEncryptionReport', name: 'AWSEFSEncryptionReport', category: 'Generic', icon: <Cloud size={16} /> },
  { id: 'AWSEFSList', name: 'AWSEFSList', category: 'Generic', icon: <Cloud size={16} /> },
  { id: 'AWSGenerateHardwareReport', name: 'AWSGenerateHardwareReport', category: '', icon: <Cloud size={16} /> },
  { id: 'AWSMFAPolicySimulatorReport', name: 'AWSMFAPolicySimulatorReport', category: '', icon: <Cloud size={16} /> },
  { id: 'AWSMFAReport', name: 'AWSMFAReport', category: '', icon: <Cloud size={16} /> },
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
  const [addTaskDialogOpen, setAddTaskDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [taskCategory, setTaskCategory] = useState<'Favourites' | 'Generic' | null>('Favourites');

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

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

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

  const openAddTaskDialog = () => {
    setAddTaskDialogOpen(true);
  };

  const filteredTasks = availableTasks.filter(task => 
    task.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
    (taskCategory === null || task.category === taskCategory || (taskCategory === 'Favourites' && task.category === ''))
  );

  const handleAddNewTask = (taskName: string) => {
    const selectedTaskData = availableTasks.find(task => task.id === taskName);
    
    if (!selectedTaskData) return;
    
    const newId = `task-${nodes.length + 1}`;
    const lastNode = [...nodes].sort((a, b) => {
      const aY = a.position.y;
      const bY = b.position.y;
      return bY - aY;
    })[0];
    
    const newNode = {
      id: newId,
      type: 'taskNode',
      data: { 
        label: selectedTaskData.name,
        icon: selectedTaskData.icon,
        removable: true
      },
      position: { 
        x: lastNode.position.x, 
        y: lastNode.position.y + 100 
      },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    };
    
    const newEdge = {
      id: `e-${lastNode.id}-${newId}`,
      source: lastNode.id,
      target: newId,
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    };
    
    setNodes(nds => [...nds, newNode]);
    setEdges(eds => [...eds, newEdge]);
    
    setAddTaskDialogOpen(false);
  };

  const renderProgressSteps = () => {
    const steps = [
      { name: 'Configure Rule', icon: <Settings className="w-5 h-5" /> },
      { name: 'Build Task Flow', icon: <Workflow className="w-5 h-5" /> },
      { name: 'Provide Application Credentials', icon: <Cloud className="w-5 h-5" /> },
      { name: 'Execute', icon: <CheckCircle className="w-5 h-5" /> },
      { name: 'Publish', icon: <Cloud className="w-5 h-5" /> },
    ];

    return (
      <div className="relative mb-8">
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

  const renderWorkflowView = () => (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Build Task Flow</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Code2 className="h-4 w-4" />
            View YAML
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Download YAML
          </Button>
        </div>
      </div>
      
      <div className="pb-6 flex items-center gap-2 border-b">
        <Button 
          variant="ghost"
          size="sm" 
          className={cn(
            "text-sm font-medium",
            activeTab === 'workflow' && "bg-primary/10 text-primary"
          )}
          onClick={() => setActiveTab('workflow')}
        >
          Workflow
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "text-sm font-medium",
            activeTab === 'code' && "bg-primary/10 text-primary"
          )}
          onClick={() => setActiveTab('code')}
        >
          YAML
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "text-sm font-medium",
            activeTab === 'components' && "bg-primary/10 text-primary"
          )}
          onClick={() => setActiveTab('components')}
        >
          Components
        </Button>
      </div>
      
      {activeTab === 'workflow' && (
        <div className="space-y-6 mt-6">
          <div className="mb-4">
            <h3 className="text-base font-medium mb-2">Rule Inputs</h3>
            <div className="border rounded-md p-4 relative flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 px-3 py-1.5 rounded-md flex items-center gap-2">
                  <span>RequestConfigFile</span>
                  <button className="text-gray-500">
                    <X size={14} />
                  </button>
                </div>
              </div>
              <Button size="sm" variant="outline" className="gap-1">
                <Plus size={14} />
                Input
              </Button>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-medium">Tasks</h3>
              <Button size="sm" variant="outline" className="gap-1" onClick={openAddTaskDialog}>
                <Plus size={14} />
                Task Block
              </Button>
            </div>
            
            <div className="reactflow-wrapper h-[450px] border rounded-md">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
              >
                <Controls />
                <Background color="#f0f0f0" gap={16} />
              </ReactFlow>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-2">Rule Outputs</h3>
            <div className="border rounded-md p-4">
              <div className="flex flex-wrap gap-2 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <div className="bg-gray-100 px-3 py-1.5 rounded-md">CompliancePCT_</div>
                  <div className="bg-gray-100 px-3 py-1.5 rounded-md">ComplianceStatus_</div>
                  <div className="bg-gray-100 px-3 py-1.5 rounded-md">LogFile</div>
                </div>
                <Button size="sm" variant="outline" className="gap-1">
                  <Plus size={14} />
                  Output
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'code' && (
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
      )}
      
      {activeTab === 'components' && (
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
      )}
    </div>
  );

  // Render the Add Tasks dialog
  const renderAddTasksDialog = () => (
    <Dialog open={addTaskDialogOpen} onOpenChange={setAddTaskDialogOpen}>
      <DialogContent className="max-w-4xl p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-xl">Add Tasks</DialogTitle>
        </DialogHeader>
        
        <div className="p-6 max-h-[70vh] overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={taskCategory === 'Favourites'} 
                  onChange={() => setTaskCategory(taskCategory === 'Favourites' ? null : 'Favourites')} 
                  className="rounded"
                />
                Favourites
              </label>
              
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={taskCategory === 'Generic'} 
                  onChange={() => setTaskCategory(taskCategory === 'Generic' ? null : 'Generic')} 
                  className="rounded"
                />
                Generic
              </label>
            </div>
            
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 w-[240px]"
              />
            </div>
          </div>
          
          <div className="divide-y">
            {filteredTasks.map(task => (
              <div key={task.id} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Cloud size={18} className="text-gray-500" />
                  <span>{task.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  {task.category && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{task.category}</span>
                  )}
                  <button className="text-gray-400 hover:text-amber-400">
                    <Star size={16} />
                  </button>
                  <button className="flex items-center transform transition-transform hover:scale-110">
                    <ChevronRight size={18} className="text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
            
            {filteredTasks.length === 0 && (
              <div className="py-6 text-center text-gray-500">
                No tasks found matching your search criteria
              </div>
            )}
          </div>
        </div>
        
        <DialogFooter className="px-6 py-4 border-t flex justify-between">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Expanded</span>
          </label>
          <Button onClick={() => setAddTaskDialogOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
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
          {currentStep === 2 && renderWorkflowView()}
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
        
        {renderAddTasksDialog()}
      </div>
    </div>
  );
};

export default NoCodeUIFlow;
