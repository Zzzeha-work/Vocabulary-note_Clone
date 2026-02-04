import { useAppContext } from '../contexts/AppContext';
import { Word, LanguageMode } from '../types';
import { japaneseWords, englishWords } from '../data/mockWords';

/**
 * 단어 관리를 위한 커스텀 훅
 * 단어 선택, 암기 처리, 진행 상태 관리 등의 로직을 캡슐화
 */
export function useWordManagement() {
  const { 
    words, 
    setWords, 
    currentIndex, 
    setCurrentIndex,
    setLanguageMode,
    languageMode 
  } = useAppContext();

  /**
   * 언어 모드를 선택하고 해당하는 단어 목록을 로드
   */
  const selectLanguage = (mode: LanguageMode) => {
    setLanguageMode(mode);
    if (mode === 'japanese') {
      setWords(japaneseWords);
    } else if (mode === 'english') {
      setWords(englishWords);
    } else {
      setWords([]);
    }
    setCurrentIndex(0);
  };

  /**
   * 특정 단어를 암기 완료로 표시
   */
  const markAsMastered = (id: string) => {
    setWords(prevWords =>
      prevWords.map(word =>
        word.id === id ? { ...word, mastered: true } : word
      )
    );
  };

  /**
   * 다음 단어로 이동
   */
  const goToNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  /**
   * 모든 단어의 암기 상태를 초기화
   */
  const resetProgress = () => {
    setWords(prevWords =>
      prevWords.map(word => ({ ...word, mastered: false }))
    );
    setCurrentIndex(0);
  };

  /**
   * 커스텀 단어 목록 가져오기
   */
  const importWords = (importedWords: Word[]) => {
    setWords(importedWords);
  };

  /**
   * 언어 라벨 가져오기
   */
  const getLanguageLabel = () => {
    if (languageMode === 'japanese') return '日本語 일본어';
    if (languageMode === 'english') return 'English 영어';
    return '✨ 나만의 단어장';
  };

  return {
    words,
    currentIndex,
    selectLanguage,
    markAsMastered,
    goToNext,
    resetProgress,
    importWords,
    getLanguageLabel,
  };
}