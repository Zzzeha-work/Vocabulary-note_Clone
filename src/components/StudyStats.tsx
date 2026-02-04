import { Check, RotateCcw, BookOpen } from 'lucide-react';
import { Word } from '../types';

interface StudyStatsProps {
  words: Word[];
  onReset: () => void;
}

export function StudyStats({ words, onReset }: StudyStatsProps) {
  const masteredCount = words.filter(w => w.mastered).length;
  const remainingCount = words.length - masteredCount;
  const progress = words.length > 0 ? Math.round((masteredCount / words.length) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-3xl p-8" style={{ backgroundColor: 'var(--pastel-blue)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--bg-white)' }}
            >
              <BookOpen className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
            </div>
            <h3>전체 단어</h3>
          </div>
          <p style={{ fontSize: '2.5rem', color: 'var(--text-primary)' }}>
            {words.length}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '8px' }}>
            학습 중인 단어
          </p>
        </div>

        <div className="rounded-3xl p-8" style={{ backgroundColor: 'var(--pastel-green)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--bg-white)' }}
            >
              <Check className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
            </div>
            <h3>암기 완료</h3>
          </div>
          <p style={{ fontSize: '2.5rem', color: 'var(--text-primary)' }}>
            {masteredCount}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '8px' }}>
            {progress}% 달성
          </p>
        </div>

        <div className="rounded-3xl p-8" style={{ backgroundColor: 'var(--pastel-pink)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--bg-white)' }}
            >
              <BookOpen className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
            </div>
            <h3>남은 단어</h3>
          </div>
          <p style={{ fontSize: '2.5rem', color: 'var(--text-primary)' }}>
            {remainingCount}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '8px' }}>
            학습이 필요해요
          </p>
        </div>
      </div>

      {/* Progress Details */}
      <div className="rounded-3xl p-8" style={{ backgroundColor: 'var(--pastel-lavender)' }}>
        <h3 className="mb-6">학습 상세 현황</h3>
        <div className="space-y-4">
          {words.map((word) => (
            <div
              key={word.id}
              className="flex items-center justify-between p-4 rounded-xl"
              style={{ backgroundColor: 'var(--bg-white)' }}
            >
              <div>
                <p style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {word.word}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  {word.translation}
                </p>
              </div>
              <div
                className="px-4 py-2 rounded-full"
                style={{
                  backgroundColor: word.mastered ? 'var(--pastel-green)' : 'var(--bg-light)',
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem',
                }}
              >
                {word.mastered ? '✓ 완료' : '학습 중'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <div className="flex justify-center">
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-6 py-3 rounded-full shadow-sm transition-all hover:shadow-md"
          style={{ backgroundColor: 'var(--pastel-yellow)', color: 'var(--text-primary)' }}
        >
          <RotateCcw className="w-5 h-5" />
          학습 진도 초기화
        </button>
      </div>
    </div>
  );
}