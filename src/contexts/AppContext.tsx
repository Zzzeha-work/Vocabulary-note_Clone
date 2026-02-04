import { createContext, useContext, useState, ReactNode } from 'react';
import { Word, LanguageMode, View } from '../types';

interface AppContextType {
  // Authentication state
  isLoggedIn: boolean;
  username: string;
  login: (name: string) => void;
  logout: () => void;

  // Navigation state
  showLanding: boolean;
  setShowLanding: (show: boolean) => void;
  languageMode: LanguageMode | null;
  setLanguageMode: (mode: LanguageMode | null) => void;
  view: View;
  setView: (view: View) => void;
  showLoginBox: boolean;
  setShowLoginBox: (show: boolean) => void;
  showFileUploader: boolean;
  setShowFileUploader: (show: boolean) => void;

  // Words state
  words: Word[];
  setWords: (words: Word[] | ((prev: Word[]) => Word[])) => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;

  // Computed values
  masteredCount: number;
  progress: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children?: ReactNode }) {
  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Navigation state
  const [showLanding, setShowLanding] = useState(true);
  const [languageMode, setLanguageMode] = useState<LanguageMode | null>(null);
  const [view, setView] = useState<View>('study');
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [showFileUploader, setShowFileUploader] = useState(false);

  // Words state
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Authentication methods
  const login = (name: string) => {
    setUsername(name);
    setIsLoggedIn(true);
    setShowLoginBox(false);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  // Computed values
  const masteredCount = words.filter(w => w.mastered).length;
  const progress = words.length > 0 ? (masteredCount / words.length) * 100 : 0;

  const value: AppContextType = {
    isLoggedIn,
    username,
    login,
    logout,
    showLanding,
    setShowLanding,
    languageMode,
    setLanguageMode,
    view,
    setView,
    showLoginBox,
    setShowLoginBox,
    showFileUploader,
    setShowFileUploader,
    words,
    setWords,
    currentIndex,
    setCurrentIndex,
    masteredCount,
    progress,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}