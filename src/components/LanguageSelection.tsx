import { useAuth } from '../hooks/useAuth';
import { useNavigation } from '../hooks/useNavigation';
import { useWordManagement } from '../hooks/useWordManagement';
import { LoginBox } from './LoginBox';
import { User, LogOut, Globe } from 'lucide-react';

export function LanguageSelection() {
  const { isLoggedIn, username, handleLogin, handleLogout, showLoginBox, toggleLoginBox, closeLoginBox } = useAuth();
  const { backToHome } = useNavigation();
  const { selectLanguage } = useWordManagement();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-white)' }}>
      <header className="border-b px-4 py-4 flex justify-between items-center" style={{ borderColor: 'var(--pastel-lavender)' }}>
        <button
          onClick={backToHome}
          className="flex items-center gap-2"
          style={{ color: 'var(--text-primary)' }}
        >
          <span style={{ fontSize: '1.5rem' }}>🍡</span>
          <h2 style={{ fontSize: '1.25rem' }}>당고 암기장</h2>
        </button>
        <div className="flex items-center gap-3">
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
                <span style={{ fontSize: '0.875rem' }}>로그아웃</span>
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
      </header>

      {/* Login Box Overlay */}
      {showLoginBox && !isLoggedIn && (
        <div className="fixed inset-0 bg-black/20 flex items-start justify-end p-6 z-50" onClick={closeLoginBox}>
          <div onClick={(e) => e.stopPropagation()}>
            <LoginBox onLogin={handleLogin} onClose={closeLoginBox} />
          </div>
        </div>
      )}
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full text-center">
          <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>🍡</div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>학습 언어를 선택하세요</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '3rem' }}>
            원하는 학습 모드를 선택해주세요
          </p>

          {/* Login Status Message */}
          {isLoggedIn ? (
            <div className="mb-8 inline-block px-6 py-3 rounded-full" style={{ backgroundColor: 'var(--pastel-green)' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                ✓ 로그인 상태 - 학습 기록이 저장됩니다
              </p>
            </div>
          ) : (
            <div className="mb-8 inline-block px-6 py-3 rounded-full" style={{ backgroundColor: 'var(--pastel-yellow)' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                💡 로그인하면 학습 기록이 저장됩니다
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <button
              onClick={() => selectLanguage('japanese')}
              className="p-8 rounded-3xl transition-all hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: 'var(--pastel-pink)' }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'white' }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full"
                      style={{ backgroundColor: '#BC002D' }}
                    />
                  </div>
                </div>
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>일본어</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                기본 일본어 단어 학습
              </p>
            </button>

            <button
              onClick={() => selectLanguage('english')}
              className="p-8 rounded-3xl transition-all hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: 'var(--pastel-blue)' }}
            >
              <div className="flex items-center justify-center mb-4">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'white' }}
                >
                  <Globe className="w-14 h-14" style={{ color: '#0052B4' }} />
                </div>
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>영어</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                기본 영어 단어 학습
              </p>
            </button>

            <button
              onClick={() => selectLanguage('custom')}
              className="p-8 rounded-3xl transition-all hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: 'var(--pastel-lavender)' }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✨</div>
              <h3 style={{ marginBottom: '0.5rem' }}>자유롭게 만들기</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                나만의 단어장 만들기
              </p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}