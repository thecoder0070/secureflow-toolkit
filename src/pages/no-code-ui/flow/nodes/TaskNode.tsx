
import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { Cog } from 'lucide-react';

export const TaskNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`p-3 rounded-md bg-white border-2 ${selected ? 'border-blue-500' : 'border-gray-200'} shadow-md w-[180px]`}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      
      <div className="flex items-center mb-2">
        <Cog className="mr-2 h-4 w-4 text-blue-500" />
        <div className="font-bold text-sm">{data.label}</div>
      </div>
      
      <div className="text-xs text-gray-500">Process task</div>
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

TaskNode.displayName = 'TaskNode';
