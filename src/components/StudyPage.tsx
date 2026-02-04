import { useAppContext } from '../contexts/AppContext';
import { useAuth } from '../hooks/useAuth';
import { useNavigation } from '../hooks/useNavigation';
import { useWordManagement } from '../hooks/useWordManagement';
import { FlashCard } from './FlashCard';
import { WordList } from './WordList';
import { StudyStats } from './StudyStats';
import { FileUploader } from './FileUploader';
import { LoginBox } from './LoginBox';
import { User, LogOut, BarChart3, Upload, Home } from 'lucide-react';

export function StudyPage() {
  const { 
    languageMode, 
    view, 
    setView, 
    masteredCount, 
    progress,
    showFileUploader,
    setShowFileUploader,
  } = useAppContext();
  
  const { isLoggedIn, username, handleLogin, handleLogout, showLoginBox, toggleLoginBox, closeLoginBox } = useAuth();
  const { backToLanguageSelection, backToHome } = useNavigation();
  const { 
    words, 
    currentIndex, 
    markAsMastered, 
    goToNext, 
    resetProgress, 
    importWords,
    getLanguageLabel,
  } = useWordManagement();

  const handleWordsImported = (importedWords: typeof words) => {
    importWords(importedWords);
    setShowFileUploader(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-white)' }}>
      {/* Login Box Overlay */}
      {showLoginBox && !isLoggedIn && (
        <div className="fixed inset-0 bg-black/20 flex items-start justify-end p-6 z-50" onClick={closeLoginBox}>
          <div onClick={(e) => e.stopPropagation()}>
            <LoginBox onLogin={handleLogin} onClose={closeLoginBox} />
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b" style={{ borderColor: 'var(--pastel-lavender)' }}>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--pastel-pink)' }}>
                <span>🍡</span>
              </div>
              <div>
                <h1 style={{ fontSize: '1.5rem' }}>당고 암기장</h1>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{getLanguageLabel()}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={backToHome}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--pastel-pink)' }}
                title="홈으로"
              >
                <Home className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
              </button>
              <button
                onClick={backToLanguageSelection}
                className="px-4 py-2 rounded-full transition-all"
                style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}
              >
                언어 변경
              </button>
              {isLoggedIn ? (
                <>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'var(--pastel-green)' }}>
                    <User className="w-4 h-4" />
                    <span style={{ fontSize: '0.875rem' }}>{username}님</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 rounded-full transition-all"
                    style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-secondary)' }}
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <button
                  onClick={toggleLoginBox}
                  className="px-4 py-2 rounded-full transition-all"
                  style={{ backgroundColor: 'var(--pastel-pink)', color: 'var(--text-primary)' }}
                >
                  로그인
                </button>
              )}
            </div>
          </div>

          {/* Login Status Message */}
          {!isLoggedIn && (
            <div className="mb-4 text-center">
              <div className="inline-block px-4 py-2 rounded-full" style={{ backgroundColor: 'var(--pastel-yellow)', fontSize: '0.75rem' }}>
                💡 로그인하면 학습 기록이 저장됩니다
              </div>
            </div>
          )}

          <nav className="flex gap-2 mb-6">
            <button
              onClick={() => setView('study')}
              className={`px-5 py-2 rounded-full transition-all ${
                view === 'study' ? 'shadow-sm' : ''
              }`}
              style={{
                backgroundColor: view === 'study' ? 'var(--pastel-blue)' : 'var(--bg-light)',
                color: 'var(--text-primary)',
              }}
            >
              학습하기
            </button>
            <button
              onClick={() => setView('stats')}
              className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 ${
                view === 'stats' ? 'shadow-sm' : ''
              }`}
              style={{
                backgroundColor: view === 'stats' ? 'var(--pastel-lavender)' : 'var(--bg-light)',
                color: 'var(--text-primary)',
              }}
            >
              <BarChart3 className="w-4 h-4" />
              학습 현황
            </button>
          </nav>

          {/* Progress Bar */}
          {words.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  학습 진도
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  {masteredCount} / {words.length} 단어
                </span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div
                  className="h-full transition-all duration-500 rounded-full"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: 'var(--pastel-green)',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {languageMode === 'custom' && words.length === 0 ? (
          <div>
            {showFileUploader ? (
              <FileUploader
                onWordsImported={handleWordsImported}
                onClose={() => setShowFileUploader(false)}
              />
            ) : (
              <div className="text-center py-16">
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📝</div>
                <h2 style={{ marginBottom: '1rem' }}>단어를 추가해보세요</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  CSV 파일을 업로드하여 나만의 단어장을 만들 수 있습니다
                </p>
                <button
                  onClick={() => setShowFileUploader(true)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full mx-auto transition-all hover:shadow-lg"
                  style={{ backgroundColor: 'var(--pastel-blue)', color: 'var(--text-primary)' }}
                >
                  <Upload className="w-5 h-5" />
                  파일 업로드
                </button>
              </div>
            )}
          </div>
        ) : view === 'study' && words.length > 0 ? (
          <div className="space-y-8">
            <FlashCard
              word={words[currentIndex]}
              onMastered={markAsMastered}
              onNeedPractice={goToNext}
              onNext={goToNext}
              currentIndex={currentIndex}
              totalWords={words.length}
              languageMode={languageMode!}
            />
            <WordList words={words} currentIndex={currentIndex} />
          </div>
        ) : (
          <StudyStats words={words} onReset={resetProgress} />
        )}
      </main>
    </div>
  );
}