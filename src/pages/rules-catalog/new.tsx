
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Home, Save, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';

const NewRulePage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [ruleName, setRuleName] = useState('');
  const [ruleDescription, setRuleDescription] = useState('');
  const [ruleType, setRuleType] = useState('rule');
  const [ruleInputs, setRuleInputs] = useState<string[]>(['']);
  const [ruleOutputs, setRuleOutputs] = useState<string[]>(['']);
  const [ruleTags, setRuleTags] = useState<string[]>(['']);
  
  useEffect(() => {
    document.title = 'Add New Rule | SecureFlow';
  }, []);

  const handleAddInput = () => {
    setRuleInputs([...ruleInputs, '']);
  };

  const handleAddOutput = () => {
    setRuleOutputs([...ruleOutputs, '']);
  };

  const handleAddTag = () => {
    setRuleTags([...ruleTags, '']);
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedInputs = [...ruleInputs];
    updatedInputs[index] = value;
    setRuleInputs(updatedInputs);
  };

  const handleOutputChange = (index: number, value: string) => {
    const updatedOutputs = [...ruleOutputs];
    updatedOutputs[index] = value;
    setRuleOutputs(updatedOutputs);
  };

  const handleTagChange = (index: number, value: string) => {
    const updatedTags = [...ruleTags];
    updatedTags[index] = value;
    setRuleTags(updatedTags);
  };

  const handleRemoveInput = (index: number) => {
    const updatedInputs = ruleInputs.filter((_, i) => i !== index);
    setRuleInputs(updatedInputs);
  };

  const handleRemoveOutput = (index: number) => {
    const updatedOutputs = ruleOutputs.filter((_, i) => i !== index);
    setRuleOutputs(updatedOutputs);
  };

  const handleRemoveTag = (index: number) => {
    const updatedTags = ruleTags.filter((_, i) => i !== index);
    setRuleTags(updatedTags);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!ruleName.trim()) {
      toast({
        title: "Validation Error",
        description: "Rule name is required",
        variant: "destructive"
      });
      return;
    }
    
    // Filter out empty inputs, outputs, and tags
    const filteredInputs = ruleInputs.filter(input => input.trim() !== '');
    const filteredOutputs = ruleOutputs.filter(output => output.trim() !== '');
    const filteredTags = ruleTags.filter(tag => tag.trim() !== '');
    
    // In a real app, this would save to a database
    // For now, we'll just show a success toast and navigate back
    toast({
      title: "Rule Created",
      description: `Rule "${ruleName}" was successfully created`,
    });
    
    navigate('/rules-catalog');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="hover:text-primary transition-colors flex items-center">
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/rules-catalog" className="hover:text-primary transition-colors">
                  Rules Catalog
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Add New Rule</BreadcrumbPage>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-3xl font-bold">Add New Rule</h1>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate('/rules-catalog')} className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Rules
              </Button>
              <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700 flex items-center">
                <Save className="h-4 w-4 mr-2" /> Save Rule
              </Button>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden border p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="ruleName">Rule Name <span className="text-red-500">*</span></Label>
                <Input 
                  id="ruleName" 
                  value={ruleName} 
                  onChange={(e) => setRuleName(e.target.value)}
                  placeholder="Enter rule name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="ruleDescription">Description</Label>
                <Textarea 
                  id="ruleDescription" 
                  value={ruleDescription} 
                  onChange={(e) => setRuleDescription(e.target.value)}
                  placeholder="Enter rule description"
                  className="min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="ruleType">Rule Type</Label>
                <Select value={ruleType} onValueChange={setRuleType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select rule type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rule">Rule</SelectItem>
                    <SelectItem value="sql_rule">SQL Rule</SelectItem>
                    <SelectItem value="python_rule">Python Rule</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Label>Rule Inputs</Label>
                {ruleInputs.map((input, index) => (
                  <div key={`input-${index}`} className="flex items-center mt-2">
                    <Input
                      value={input}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      placeholder={`Input ${index + 1}`}
                      className="flex-1"
                    />
                    {ruleInputs.length > 1 && (
                      <Button 
                        type="button"
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleRemoveInput(index)}
                        className="ml-2 text-red-500"
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                ))}
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm" 
                  onClick={handleAddInput}
                  className="mt-2"
                >
                  Add Input
                </Button>
              </div>

              <div>
                <Label>Rule Outputs</Label>
                {ruleOutputs.map((output, index) => (
                  <div key={`output-${index}`} className="flex items-center mt-2">
                    <Input
                      value={output}
                      onChange={(e) => handleOutputChange(index, e.target.value)}
                      placeholder={`Output ${index + 1}`}
                      className="flex-1"
                    />
                    {ruleOutputs.length > 1 && (
                      <Button 
                        type="button"
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleRemoveOutput(index)}
                        className="ml-2 text-red-500"
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                ))}
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm" 
                  onClick={handleAddOutput}
                  className="mt-2"
                >
                  Add Output
                </Button>
              </div>

              <div>
                <Label>Tags</Label>
                {ruleTags.map((tag, index) => (
                  <div key={`tag-${index}`} className="flex items-center mt-2">
                    <Input
                      value={tag}
                      onChange={(e) => handleTagChange(index, e.target.value)}
                      placeholder={`Tag ${index + 1}`}
                      className="flex-1"
                    />
                    {ruleTags.length > 1 && (
                      <Button 
                        type="button"
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleRemoveTag(index)}
                        className="ml-2 text-red-500"
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                ))}
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm" 
                  onClick={handleAddTag}
                  className="mt-2"
                >
                  Add Tag
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700">Save Rule</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRulePage;
