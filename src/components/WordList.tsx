import { Check, Circle } from 'lucide-react';
import { Word } from '../types';

interface WordListProps {
  words: Word[];
  currentIndex: number;
}

export function WordList({ words, currentIndex }: WordListProps) {
  return (
    <div className="rounded-3xl p-8" style={{ backgroundColor: 'var(--bg-light)' }}>
      <h3 className="mb-6" style={{ color: 'var(--text-primary)' }}>
        단어 목록
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {words.map((word, index) => (
          <div
            key={word.id}
            className="p-4 rounded-xl transition-all"
            style={{
              backgroundColor: currentIndex === index ? 'var(--pastel-yellow)' : 'var(--bg-white)',
              border: currentIndex === index ? '2px solid var(--pastel-blue)' : '2px solid transparent',
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p style={{ color: 'var(--text-primary)', fontSize: '1.125rem' }}>
                  {word.word}
                </p>
              </div>
              {word.mastered && (
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--pastel-green)' }}
                >
                  <Check className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}