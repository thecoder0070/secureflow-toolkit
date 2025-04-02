
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Eye } from "lucide-react";

interface FormQuestionCardProps {
  questionNumber: number;
  title: string;
  description?: string;
  type?: 'text' | 'select' | 'radio';
  options?: { label: string; value: string }[];
}

const FormQuestionCard = ({
  questionNumber,
  title,
  description,
  type = 'text',
  options = []
}: FormQuestionCardProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <div className="bg-primary text-white text-xs font-medium px-3 py-1 rounded">
          Question {questionNumber}
        </div>
        <div className="ml-auto">
          <Eye className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      <Card className="border border-gray-200">
        <CardContent className="p-5">
          <div className="mb-4">
            <div className="text-sm font-medium text-gray-700 mb-1">{title}</div>
            {description && <div className="text-sm text-gray-500">{description}</div>}
          </div>

          {type === 'text' && (
            <div className="mb-5">
              <Input placeholder="Short Text" className="w-full md:w-60" />
            </div>
          )}
          
          {type === 'select' && (
            <div className="mb-5">
              <Select>
                <SelectTrigger className="w-full md:w-60">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {type === 'radio' && (
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary text-white px-3 py-2 font-medium rounded">Option Value</div>
                <div className="bg-primary text-white px-3 py-2 font-medium rounded">Default?</div>
              </div>
              {options.map((option) => (
                <div key={option.value} className="grid grid-cols-2 gap-4 border-b border-gray-200 py-3">
                  <div>{option.label}</div>
                  <div>
                    <RadioGroup defaultValue="no">
                      <div className="flex items-center">
                        <RadioGroupItem value={option.value} id={option.value} />
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm font-medium">Required?</div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center mt-2">
        <div className="text-xs text-gray-400">NEXT QUESTION</div>
        <Select>
          <SelectTrigger className="w-60 text-sm">
            <SelectValue placeholder="Next Question Block" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="next">Next Question Block</SelectItem>
            <SelectItem value="end">End Form</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FormQuestionCard;
