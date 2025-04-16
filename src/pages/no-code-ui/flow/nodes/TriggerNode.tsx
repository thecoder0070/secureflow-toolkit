
import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { Zap } from 'lucide-react';

export const TriggerNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`p-3 rounded-md bg-white border-2 ${selected ? 'border-blue-500' : 'border-purple-200'} shadow-md w-[180px]`}>
      <div className="flex items-center mb-2">
        <Zap className="mr-2 h-4 w-4 text-purple-500" />
        <div className="font-bold text-sm">{data.label}</div>
      </div>
      
      <div className="text-xs text-gray-500">Trigger</div>
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
});

TriggerNode.displayName = 'TriggerNode';
