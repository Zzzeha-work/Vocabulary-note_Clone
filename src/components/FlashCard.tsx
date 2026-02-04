import { useState } from 'react';
import { Check, X, ChevronRight, RotateCcw } from 'lucide-react';
import { Word, LanguageMode } from '../types';

interface FlashCardProps {
  word: Word;
  onMastered: (id: string) => void;
  onNeedPractice: () => void;
  onNext: () => void;
  currentIndex: number;
  totalWords: number;
  languageMode: LanguageMode;
}

export function FlashCard({ word, onMastered, onNeedPractice, onNext, currentIndex, totalWords, languageMode }: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMastered = () => {
    onMastered(word.id);
    setIsFlipped(false);
    setTimeout(() => onNext(), 300);
  };

  const handleNeedPractice = () => {
    setIsFlipped(false);
    setTimeout(() => onNeedPractice(), 300);
  };

  const getFrontLabel = () => {
    if (languageMode === 'japanese') return '일본어';
    if (languageMode === 'english') return '영어';
    return '단어';
  };

  const getBackLabel = () => {
    return '한국어';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        {currentIndex + 1} / {totalWords}
      </div>

      {/* Card Container */}
      <div className="relative w-full max-w-2xl" style={{ perspective: '1000px' }}>
        <div
          className="relative w-full transition-transform duration-500 cursor-pointer"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
            minHeight: '320px',
          }}
          onClick={handleFlip}
        >
          {/* Front of card */}
          <div
            className="absolute w-full h-full rounded-3xl shadow-lg p-12 flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              backgroundColor: 'var(--pastel-blue)',
              minHeight: '320px',
            }}
          >
            <div className="text-center">
              <p className="mb-3" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                {getFrontLabel()}
              </p>
              <h2 style={{ fontSize: '3rem' }}>{word.word}</h2>
              <div className="mt-8 flex items-center gap-2" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                <RotateCcw className="w-4 h-4" />
                <span>카드를 클릭하여 답 확인</span>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div
            className="absolute w-full h-full rounded-3xl shadow-lg p-12 flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              backgroundColor: 'var(--pastel-lavender)',
              transform: 'rotateY(180deg)',
              minHeight: '320px',
            }}
          >
            <div className="text-center">
              <p className="mb-3" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                {getBackLabel()}
              </p>
              <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{word.translation}</h2>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                {word.word}
              </div>
              {word.example && (
                <div className="mt-6 p-4 rounded-2xl" style={{ backgroundColor: 'var(--bg-white)', maxWidth: '500px', margin: '0 auto' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    예시 문장
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: '1.6' }}>
                    {word.example}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {isFlipped && !word.mastered && (
        <div className="flex gap-4 mt-8">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNeedPractice();
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-full shadow-sm transition-all hover:shadow-md"
            style={{ backgroundColor: 'var(--pastel-pink)', color: 'var(--text-primary)' }}
          >
            <X className="w-5 h-5" />
            더 연습하기
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleMastered();
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-full shadow-sm transition-all hover:shadow-md"
            style={{ backgroundColor: 'var(--pastel-green)', color: 'var(--text-primary)' }}
          >
            <Check className="w-5 h-5" />
            외웠어요
          </button>
        </div>
      )}

      {word.mastered && (
        <div className="flex items-center gap-3 mt-8 px-6 py-3 rounded-full" style={{ backgroundColor: 'var(--pastel-green)' }}>
          <Check className="w-5 h-5" />
          <span>암기 완료!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
              onNext();
            }}
            className="ml-2 flex items-center gap-1 px-3 py-1 rounded-full transition-all"
            style={{ backgroundColor: 'var(--bg-white)' }}
          >
            다음
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}