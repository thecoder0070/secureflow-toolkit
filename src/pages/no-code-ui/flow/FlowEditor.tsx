
import React, { useState, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  NodeTypes,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { TaskNode } from './nodes/TaskNode';
import { ConditionNode } from './nodes/ConditionNode';
import { ActionNode } from './nodes/ActionNode';
import { TriggerNode } from './nodes/TriggerNode';

// Node types definition
const nodeTypes: NodeTypes = {
  task: TaskNode,
  condition: ConditionNode,
  action: ActionNode,
  trigger: TriggerNode,
};

// Initial nodes for the flow
const initialNodes: Node[] = [
  {
    id: 'trigger-1',
    type: 'trigger',
    position: { x: 250, y: 0 },
    data: { label: 'Start' },
  },
  {
    id: 'task-1',
    type: 'task',
    position: { x: 250, y: 100 },
    data: { label: 'Fetch Data' },
  },
  {
    id: 'condition-1',
    type: 'condition',
    position: { x: 250, y: 200 },
    data: { label: 'Check Data' },
  },
  {
    id: 'action-success',
    type: 'action',
    position: { x: 100, y: 300 },
    data: { label: 'Success Action' },
  },
  {
    id: 'action-failure',
    type: 'action',
    position: { x: 400, y: 300 },
    data: { label: 'Failure Action' },
  },
];

// Initial edges for the flow
const initialEdges: Edge[] = [
  { id: 'e-trigger-task', source: 'trigger-1', target: 'task-1', animated: true },
  { id: 'e-task-condition', source: 'task-1', target: 'condition-1' },
  { id: 'e-condition-success', source: 'condition-1', target: 'action-success', label: 'Yes' },
  { id: 'e-condition-failure', source: 'condition-1', target: 'action-failure', label: 'No' },
];

export const FlowEditor = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  // Handle node selection
  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  }, []);

  // Handle edge connection
  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge(params, eds));
  }, [setEdges]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
        <Panel position="top-right">
          <div className="p-2 bg-white rounded shadow-md text-sm">
            {selectedNode ? (
              <div>
                <div className="font-bold">Selected: {selectedNode.data.label}</div>
                <div>Type: {selectedNode.type}</div>
              </div>
            ) : (
              <div>No node selected</div>
            )}
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};
