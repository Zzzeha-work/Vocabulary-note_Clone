import { useState } from 'react';
import { X } from 'lucide-react';

interface LoginBoxProps {
  onLogin: (username: string) => void;
  onClose?: () => void;
}

type View = 'initial' | 'login' | 'signup' | 'find';

export function LoginBox({ onLogin, onClose }: LoginBoxProps) {
  const [view, setView] = useState<View>('initial');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  const handleFind = (e: React.FormEvent) => {
    e.preventDefault();
    alert('가입하신 이메일로 계정 정보를 발송했습니다!');
    setView('initial');
  };

  const resetForm = () => {
    setUsername('');
    setPassword('');
    setEmail('');
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // Initial state - compact box (responsive)
  if (view === 'initial') {
    return (
      <div className="w-48 lg:w-64 p-4 lg:p-6 rounded-3xl shadow-lg relative" style={{ backgroundColor: 'var(--pastel-pink)' }}>
        {onClose && (
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 lg:top-3 lg:right-3 p-1 rounded-full hover:bg-white/50 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <div className="text-center mb-3 lg:mb-4">
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }} className="lg:text-3xl">🍡</div>
          <h3 style={{ fontSize: '0.875rem' }} className="lg:text-base">시작하기</h3>
        </div>
        <div className="space-y-2">
          <button
            onClick={() => setView('login')}
            className="w-full py-2 rounded-full transition-all hover:shadow-md text-sm"
            style={{ backgroundColor: 'var(--bg-white)', color: 'var(--text-primary)' }}
          >
            로그인
          </button>
          <button
            onClick={() => setView('signup')}
            className="w-full py-2 rounded-full transition-all hover:shadow-md text-sm"
            style={{ backgroundColor: 'var(--pastel-blue)', color: 'var(--text-primary)' }}
          >
            회원가입
          </button>
          <button
            onClick={() => setView('find')}
            className="w-full py-2 text-xs lg:text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            계정 찾기
          </button>
        </div>
      </div>
    );
  }

  // Login form (responsive)
  if (view === 'login') {
    return (
      <div className="w-72 lg:w-80 p-5 lg:p-6 rounded-3xl shadow-lg" style={{ backgroundColor: 'var(--pastel-blue)' }}>
        <div className="flex items-center justify-between mb-4">
          <h3 style={{ fontSize: '1rem' }} className="lg:text-xl">로그인</h3>
          <button
            onClick={() => {
              if (onClose) {
                handleClose();
              } else {
                setView('initial');
              }
              resetForm();
            }}
            className="p-1 rounded-full hover:bg-white/50 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleLogin} className="space-y-3">
          <div>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }} className="lg:text-sm">
              아이디
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="아이디를 입력하세요"
              className="w-full px-3 lg:px-4 py-2 rounded-full border-2 border-transparent focus:outline-none focus:border-white transition-all text-sm"
              style={{ backgroundColor: 'var(--bg-white)' }}
              required
            />
          </div>
          <div>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }} className="lg:text-sm">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 lg:px-4 py-2 rounded-full border-2 border-transparent focus:outline-none focus:border-white transition-all text-sm"
              style={{ backgroundColor: 'var(--bg-white)' }}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-full transition-all hover:shadow-md text-sm"
            style={{ backgroundColor: 'var(--pastel-green)', color: 'var(--text-primary)' }}
          >
            로그인
          </button>
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setView('signup');
                resetForm();
              }}
              className="text-xs lg:text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              계정이 없으신가요? 회원가입
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Signup form (responsive)
  if (view === 'signup') {
    return (
      <div className="w-72 lg:w-80 p-5 lg:p-6 rounded-3xl shadow-lg" style={{ backgroundColor: 'var(--pastel-lavender)' }}>
        <div className="flex items-center justify-between mb-4">
          <h3 style={{ fontSize: '1rem' }} className="lg:text-xl">회원가입</h3>
          <button
            onClick={() => {
              if (onClose) {
                handleClose();
              } else {
                setView('initial');
              }
              resetForm();
            }}
            className="p-1 rounded-full hover:bg-white/50 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSignup} className="space-y-3">
          <div>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }} className="lg:text-sm">
              아이디
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="아이디를 입력하세요"
              className="w-full px-3 lg:px-4 py-2 rounded-full border-2 border-transparent focus:outline-none focus:border-white transition-all text-sm"
              style={{ backgroundColor: 'var(--bg-white)' }}
              required
            />
          </div>
          <div>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }} className="lg:text-sm">
              이메일
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              className="w-full px-3 lg:px-4 py-2 rounded-full border-2 border-transparent focus:outline-none focus:border-white transition-all text-sm"
              style={{ backgroundColor: 'var(--bg-white)' }}
              required
            />
          </div>
          <div>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }} className="lg:text-sm">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 lg:px-4 py-2 rounded-full border-2 border-transparent focus:outline-none focus:border-white transition-all text-sm"
              style={{ backgroundColor: 'var(--bg-white)' }}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-full transition-all hover:shadow-md text-sm"
            style={{ backgroundColor: 'var(--pastel-green)', color: 'var(--text-primary)' }}
          >
            가입하기
          </button>
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setView('login');
                resetForm();
              }}
              className="text-xs lg:text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              이미 계정이 있으신가요? 로그인
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Find account form (responsive)
  return (
    <div className="w-72 lg:w-80 p-5 lg:p-6 rounded-3xl shadow-lg" style={{ backgroundColor: 'var(--pastel-yellow)' }}>
      <div className="flex items-center justify-between mb-4">
        <h3 style={{ fontSize: '1rem' }} className="lg:text-xl">계정 찾기</h3>
        <button
          onClick={() => {
            if (onClose) {
              handleClose();
            } else {
              setView('initial');
            }
            resetForm();
          }}
          className="p-1 rounded-full hover:bg-white/50 transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <form onSubmit={handleFind} className="space-y-3">
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem' }} className="lg:text-sm">
          가입하신 이메일 주소를 입력해주세요
        </p>
        <div>
          <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }} className="lg:text-sm">
            이메일
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            className="w-full px-3 lg:px-4 py-2 rounded-full border-2 border-transparent focus:outline-none focus:border-white transition-all text-sm"
            style={{ backgroundColor: 'var(--bg-white)' }}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-full transition-all hover:shadow-md text-sm"
          style={{ backgroundColor: 'var(--pastel-green)', color: 'var(--text-primary)' }}
        >
          계정 찾기
        </button>
        <div className="text-center">
          <button
            type="button"
            onClick={() => {
              setView('login');
              resetForm();
            }}
            className="text-xs lg:text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            로그인으로 돌아가기
          </button>
        </div>
      </form>
    </div>
  );
}