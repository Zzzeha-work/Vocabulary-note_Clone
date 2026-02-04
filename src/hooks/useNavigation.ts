import { useAppContext } from '../contexts/AppContext';

/**
 * 네비게이션 관리를 위한 커스텀 훅
 * 페이지 이동, 상태 초기화 등의 로직을 캡슐화
 */
export function useNavigation() {
  const {
    showLanding,
    setShowLanding,
    setLanguageMode,
    setWords,
    setCurrentIndex,
    setView,
    setShowFileUploader,
  } = useAppContext();

  /**
   * 랜딩 페이지에서 학습 시작
   */
  const startLearning = () => {
    setShowLanding(false);
  };

  /**
   * 언어 선택 페이지로 돌아가기
   */
  const backToLanguageSelection = () => {
    setLanguageMode(null);
    setWords([]);
    setCurrentIndex(0);
    setView('study');
    setShowFileUploader(false);
  };

  /**
   * 홈(랜딩 페이지)으로 돌아가기
   */
  const backToHome = () => {
    setShowLanding(true);
    setLanguageMode(null);
    setWords([]);
    setCurrentIndex(0);
    setView('study');
    setShowFileUploader(false);
  };

  return {
    showLanding,
    startLearning,
    backToLanguageSelection,
    backToHome,
  };
}
