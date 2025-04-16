
import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { Split } from 'lucide-react';

export const ConditionNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`p-3 rounded-md bg-white border-2 ${selected ? 'border-blue-500' : 'border-yellow-200'} shadow-md w-[180px]`}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      
      <div className="flex items-center mb-2">
        <Split className="mr-2 h-4 w-4 text-yellow-500" />
        <div className="font-bold text-sm">{data.label}</div>
      </div>
      
      <div className="text-xs text-gray-500">Condition</div>
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" id="yes" />
      <Handle type="source" position={Position.Right} className="w-3 h-3" id="no" />
    </div>
  );
});

ConditionNode.displayName = 'ConditionNode';
