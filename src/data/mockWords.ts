import { Word } from '../types';

/**
 * Mock 데이터: 일본어 학습 단어 목록
 * 실제 프로덕션에서는 API로 대체 가능
 */
export const japaneseWords: Word[] = [
  { 
    id: '1', 
    word: 'こんにちは', 
    translation: '안녕하세요', 
    example: 'こんにちは、元気ですか。(안녕하세요, 잘 지내세요?)', 
    mastered: false 
  },
  { 
    id: '2', 
    word: 'ありがとう', 
    translation: '감사합니다', 
    example: 'ありがとうございます。(감사합니다)', 
    mastered: false 
  },
  { 
    id: '3', 
    word: 'すみません', 
    translation: '죄송합니다', 
    example: 'すみません、遅れました。(죄송합니다, 늦었어요)', 
    mastered: false 
  },
  { 
    id: '4', 
    word: 'おはよう', 
    translation: '좋은 아침', 
    example: 'おはようございます。(좋은 아침입니다)', 
    mastered: false 
  },
  { 
    id: '5', 
    word: 'さようなら', 
    translation: '안녕히 가세요', 
    example: 'さようなら、また明日。(안녕히 가세요, 또 내일)', 
    mastered: false 
  },
  { 
    id: '6', 
    word: 'おいしい', 
    translation: '맛있다', 
    example: 'このケーキはおいしいです。(이 케이크는 맛있어요)', 
    mastered: false 
  },
  { 
    id: '7', 
    word: 'たのしい', 
    translation: '즐겁다', 
    example: '今日はたのしい日でした。(오늘은 즐거운 날이었어요)', 
    mastered: false 
  },
  { 
    id: '8', 
    word: 'うれしい', 
    translation: '기쁘다', 
    example: 'プレゼントをもらってうれしいです。(선물을 받아서 기뻐요)', 
    mastered: false 
  },
];

/**
 * Mock 데이터: 영어 학습 단어 목록
 * 실제 프로덕션에서는 API로 대체 가능
 */
export const englishWords: Word[] = [
  { 
    id: '1', 
    word: 'concentrate', 
    translation: '집중하다', 
    example: 'I need to concentrate on my work. (나는 일에 집중해야 해요)', 
    mastered: false 
  },
  { 
    id: '2', 
    word: 'remember', 
    translation: '기억하다', 
    example: 'I remember our first meeting. (나는 우리의 첫 만남을 기억해요)', 
    mastered: false 
  },
  { 
    id: '3', 
    word: 'learning', 
    translation: '학습', 
    example: 'Learning a new language is fun. (새로운 언어를 배우는 것은 재미있어요)', 
    mastered: false 
  },
  { 
    id: '4', 
    word: 'improve', 
    translation: '향상시키다', 
    example: 'Practice will improve your skills. (연습하면 실력이 향상될 거예요)', 
    mastered: false 
  },
  { 
    id: '5', 
    word: 'repetition', 
    translation: '반복', 
    example: 'Repetition is the key to success. (반복이 성공의 열쇠예요)', 
    mastered: false 
  },
  { 
    id: '6', 
    word: 'understand', 
    translation: '이해하다', 
    example: 'I understand what you mean. (무슨 말인지 이해해요)', 
    mastered: false 
  },
  { 
    id: '7', 
    word: 'review', 
    translation: '복습하다', 
    example: "Let's review what we learned. (우리가 배운 것을 복습해요)", 
    mastered: false 
  },
  { 
    id: '8', 
    word: 'achievement', 
    translation: '성취', 
    example: 'This is a great achievement. (이것은 대단한 성취예요)', 
    mastered: false 
  },
];
