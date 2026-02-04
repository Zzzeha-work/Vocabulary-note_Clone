import { useState } from 'react';
import { Upload, X, FileText, Check } from 'lucide-react';
import { Word } from '../types';

interface FileUploaderProps {
  onWordsImported: (words: Word[]) => void;
  onClose: () => void;
}

export function FileUploader({ onWordsImported, onClose }: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');

  const parseCSV = (text: string): Word[] => {
    const lines = text.trim().split('\n');
    const words: Word[] = [];
    
    // Skip header if it exists
    const startIndex = lines[0].toLowerCase().includes('word') || lines[0].toLowerCase().includes('단어') ? 1 : 0;
    
    for (let i = startIndex; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Split by comma or tab
      const parts = line.split(/[,\t]/).map(part => part.trim().replace(/^["']|["']$/g, ''));
      
      if (parts.length >= 2) {
        words.push({
          id: `imported-${Date.now()}-${i}`,
          word: parts[0],
          translation: parts[1],
          example: parts[2] || undefined, // 3번째 열이 있으면 예시 문장으로 사용
          mastered: false,
        });
      }
    }
    
    return words;
  };

  const handleFile = (file: File) => {
    setFileName(file.name);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      try {
        const words = parseCSV(text);
        if (words.length > 0) {
          onWordsImported(words);
          alert(`${words.length}개의 단어를 불러왔습니다!`);
        } else {
          alert('파일에서 단어를 찾을 수 없습니다. 형식을 확인해주세요.');
        }
      } catch (error) {
        alert('파일을 읽는 중 오류가 발생했습니다.');
      }
    };
    reader.readAsText(file, 'UTF-8');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && (file.name.endsWith('.csv') || file.name.endsWith('.txt'))) {
      handleFile(file);
    } else {
      alert('CSV 또는 TXT 파일만 업로드 가능합니다.');
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  return (
    <div className="rounded-3xl p-8" style={{ backgroundColor: 'var(--pastel-lavender)' }}>
      <div className="flex items-center justify-between mb-6">
        <h3>파일로 단어 추가하기</h3>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/50 transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* File Drop Zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className="border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer"
        style={{
          borderColor: isDragging ? 'var(--pastel-blue)' : 'var(--text-muted)',
          backgroundColor: isDragging ? 'var(--bg-light)' : 'var(--bg-white)',
        }}
      >
        <Upload
          className="mx-auto mb-4"
          style={{ width: '3rem', height: '3rem', color: 'var(--text-secondary)' }}
        />
        <p style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          파일을 드래그하거나 클릭하여 업로드
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem' }}>
          CSV 또는 TXT 파일 지원
        </p>
        <input
          type="file"
          accept=".csv,.txt"
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="inline-block px-6 py-2 rounded-full cursor-pointer transition-all hover:shadow-md"
          style={{ backgroundColor: 'var(--pastel-blue)', color: 'var(--text-primary)' }}
        >
          파일 선택
        </label>
      </div>

      {fileName && (
        <div className="mt-4 flex items-center gap-2 p-3 rounded-xl" style={{ backgroundColor: 'var(--pastel-green)' }}>
          <FileText className="w-5 h-5" />
          <span style={{ fontSize: '0.875rem' }}>{fileName}</span>
        </div>
      )}

      {/* Format Guide */}
      <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-white)' }}>
        <h4 style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>📝 파일 형식 안내</h4>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', lineHeight: '1.6' }}>
          • CSV 파일: 단어,번역,예시문장 형식으로 작성<br />
          • 예시: こんにちは,안녕하세요,こんにちは、원기ですか。<br />
          • 예시 문장은 선택사항입니다 (생략 가능)<br />
          • 첫 줄에 헤더가 있어도 자동으로 인식합니다<br />
          • 안키(Anki) 덱을 CSV로 내보내기한 파일도 사용 가능
        </p>
      </div>
    </div>
  );
}