import { useAppContext } from '../contexts/AppContext';

/**
 * 인증 관리를 위한 커스텀 훅
 * 로그인, 로그아웃 등의 인증 로직을 캡슐화
 */
export function useAuth() {
  const { 
    isLoggedIn, 
    username, 
    login, 
    logout,
    showLoginBox,
    setShowLoginBox,
  } = useAppContext();

  /**
   * 로그인 처리
   */
  const handleLogin = (name: string) => {
    login(name);
  };

  /**
   * 로그아웃 처리
   */
  const handleLogout = () => {
    logout();
  };

  /**
   * 로그인 박스 토글
   */
  const toggleLoginBox = () => {
    setShowLoginBox(!showLoginBox);
  };

  /**
   * 로그인 박스 닫기
   */
  const closeLoginBox = () => {
    setShowLoginBox(false);
  };

  return {
    isLoggedIn,
    username,
    handleLogin,
    handleLogout,
    showLoginBox,
    toggleLoginBox,
    closeLoginBox,
  };
}
