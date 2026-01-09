'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, X, File as FileIcon } from 'lucide-react';
import Image from 'next/image';

interface FileUploaderProps {
  onFileChange: (file: File | null) => void;
  file: File | null;
}

export function FileUploader({ onFileChange, file }: FileUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      onFileChange(selectedFile);
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setPreview(null);
      }
    }
  }, [onFileChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
      'audio/*': ['.mp3', '.wav'],
      'video/*': ['.mp4', '.mov'],
      'text/plain': ['.txt'],
    },
    maxFiles: 1,
  });

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileChange(null);
    setPreview(null);
  };

  if (file) {
    return (
      <div className="relative rounded-lg border-2 border-dashed border-border p-4 h-64 flex items-center justify-center text-center">
        {preview ? (
          <Image src={preview} alt="Preview" fill className="object-contain rounded-md" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <FileIcon className="h-12 w-12" />
            <p className="font-medium">{file.name}</p>
          </div>
        )}
        <button
          onClick={removeFile}
          className="absolute top-2 right-2 bg-background rounded-full p-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`rounded-lg border-2 border-dashed border-border p-4 h-64 flex items-center justify-center text-center cursor-pointer transition-colors ${
        isDragActive ? 'bg-accent/20 border-accent' : 'hover:bg-muted/50'
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <UploadCloud className="h-12 w-12" />
        {isDragActive ? (
          <p className="font-medium">Drop the file here...</p>
        ) : (
          <>
            <p className="font-medium">Drag & drop a file here, or click to select</p>
            <p className="text-xs">Image, audio, video, or text files</p>
          </>
        )}
      </div>
    </div>
  );
}
