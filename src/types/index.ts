/**
 * 타입 정의 모듈
 * 애플리케이션 전체에서 사용되는 공통 타입 정의
 */

/**
 * 단어 데이터 타입
 */
export interface Word {
  id: string;
  word: string;
  translation: string;
  example?: string;
  mastered: boolean;
}

/**
 * 언어 모드 타입
 */
export type LanguageMode = 'japanese' | 'english' | 'custom';

/**
 * 뷰 모드 타입
 */
export type View = 'study' | 'stats';

/**
 * 사용자 인증 정보 타입
 */
export interface AuthState {
  isLoggedIn: boolean;
  username: string;
}

/**
 * 학습 진행 상태 타입
 */
export interface StudyProgress {
  currentIndex: number;
  masteredCount: number;
  totalWords: number;
  progress: number;
}

/**
 * 파일 업로드 결과 타입
 */
export interface FileUploadResult {
  success: boolean;
  words?: Word[];
  error?: string;
}

/**
 * CSV 파싱 옵션 타입
 */
export interface CSVParseOptions {
  delimiter?: string;
  skipHeader?: boolean;
}
