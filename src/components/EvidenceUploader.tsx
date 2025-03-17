
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, X, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EvidenceUploaderProps {
  evidenceId: string;
  onUpload: (files: File[]) => void;
  acceptedFormats: string;
  currentFiles: File[];
}

const EvidenceUploader: React.FC<EvidenceUploaderProps> = ({
  evidenceId,
  onUpload,
  acceptedFormats,
  currentFiles,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (files: File[]) => {
    onUpload(files);
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = [...currentFiles];
    newFiles.splice(index, 1);
    onUpload(newFiles);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const getFileSize = (size: number) => {
    if (size < 1024) {
      return `${size} B`;
    } else if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(1)} KB`;
    } else {
      return `${(size / (1024 * 1024)).toFixed(1)} MB`;
    }
  };

  return (
    <div>
      <div 
        className={cn(
          "border-2 border-dashed rounded-md p-6 text-center transition-all",
          isDragging ? "border-primary bg-primary/5" : "border-gray-300 dark:border-gray-700",
          "hover:border-primary hover:bg-primary/5"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          id={`file-upload-${evidenceId}`}
          className="hidden"
          multiple
          accept={acceptedFormats}
          onChange={handleFileChange}
        />
        
        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
        <p className="text-sm font-medium mb-1">
          Drag and drop files here, or
        </p>
        <Button 
          variant="outline" 
          type="button" 
          onClick={handleButtonClick}
          className="mt-2"
        >
          Browse Files
        </Button>
        <p className="text-xs text-gray-500 mt-2">
          Accepted formats: {acceptedFormats.replace(/\./g, '').toUpperCase()}
        </p>
      </div>

      {currentFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="font-medium text-sm">Uploaded Files</p>
          <div className="space-y-2">
            {currentFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium truncate max-w-xs">{file.name}</p>
                    <p className="text-xs text-gray-500">{getFileSize(file.size)}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleRemoveFile(index)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EvidenceUploader;
