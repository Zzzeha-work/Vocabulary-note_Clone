# 당고 암기장 🍡

파스텔 톤의 귀여운 디자인으로 일본어와 영어를 학습하는 플래시카드 웹 애플리케이션입니다.

## 📋 프로젝트 요구사항 충족

✅ **모든 필수 요구사항 100% 충족**

| 요구사항 | 상태 | 구현 내용 |
|---------|------|----------|
| 1. React, JavaScript 스택 | ✅ 필수 | React 18 + JavaScript(JSX/TSX) |
| 2. TypeScript | ✅ 선택 | 완전한 타입 정의 시스템 |
| 3. Redux/Context API | ✅ 필수 | Context API로 전역 상태 관리 |
| 4. 커스텀 훅 | ✅ 필수 | 3개의 커스텀 훅 구현 |
| 5. Tailwind CSS | ✅ 선택 | Tailwind CSS v4 사용 |
| 6. Mock 데이터/공공 API | ✅ 필수 | Mock 데이터 + CSV 업로드 |

> 📄 상세한 요구사항 충족 내역은 [REQUIREMENTS.md](./REQUIREMENTS.md)를 참고하세요.

## 🎯 주요 기능

### 1. 전역 상태 관리 (Context API)
- **위치:** `/contexts/AppContext.tsx`
- **관리 항목:**
  - 인증 상태 (로그인/로그아웃, 사용자 정보)
  - 네비게이션 상태 (페이지, 뷰 모드)
  - 단어 학습 상태 (단어 목록, 진행률, 암기 상태)

### 2. 커스텀 훅
- **`useAuth`** (`/hooks/useAuth.ts`) - 인증 로직 관리
- **`useNavigation`** (`/hooks/useNavigation.ts`) - 페이지 전환 관리
- **`useWordManagement`** (`/hooks/useWordManagement.ts`) - 단어 학습 로직 관리

### 3. TypeScript
- **중앙 집중식 타입 정의:** `/types/index.ts`
- 모든 컴포넌트와 함수에 명시적 타입 지정
- 타입 안정성 보장

### 4. Mock 데이터
- **위치:** `/data/mockWords.ts`
- 일본어 8개 단어
- 영어 8개 단어
- CSV/TXT 파일 업로드로 커스텀 단어장 추가 가능

## 🏗️ 프로젝트 구조

```
당고 암기장/
│
├── /types/                    # TypeScript 타입 정의
│   └── index.ts              # Word, LanguageMode, View 등
│
├── /data/                     # Mock 데이터
│   └── mockWords.ts          # 일본어/영어 학습 단어
│
├── /contexts/                 # Context API
│   └── AppContext.tsx        # 전역 상태 관리
│
├── /hooks/                    # 커스텀 훅 (공통 로직)
│   ├── useAuth.ts            # 인증 로직
│   ├── useNavigation.ts      # 네비게이션 로직
│   └── useWordManagement.ts  # 단어 관리 로직
│
├── /components/               # React 컴포넌트
│   ├── LandingPage.tsx
│   ├── LanguageSelection.tsx
│   ├── StudyPage.tsx
│   ├── FlashCard.tsx
│   ├── WordList.tsx
│   ├── StudyStats.tsx
│   ├── FileUploader.tsx
│   └── LoginBox.tsx
│
├── /styles/
│   └── globals.css           # Tailwind + 커스텀 CSS
│
├── App.tsx                    # 앱 진입점
├── README.md                  # 프로젝트 개요
└── REQUIREMENTS.md            # 요구사항 충족 상세 문서
```

## 🎨 기술 스택

- **Frontend Framework:** React 18
- **Language:** JavaScript (JSX/TSX), TypeScript
- **State Management:** Context API
- **Styling:** Tailwind CSS v4 + CSS Variables
- **Icons:** Lucide React
- **Type System:** TypeScript

## 🚀 사용 방법

### Context API 사용
```typescript
import { useAppContext } from './contexts/AppContext';

function MyComponent() {
  const { words, isLoggedIn, masteredCount } = useAppContext();
  // 전역 상태 사용
}
```

### 커스텀 훅 사용
```typescript
import { useAuth } from './hooks/useAuth';
import { useWordManagement } from './hooks/useWordManagement';

function MyComponent() {
  const { isLoggedIn, handleLogin } = useAuth();
  const { words, markAsMastered } = useWordManagement();
  // 로직 재사용
}
```

### 타입 정의 사용
```typescript
import { Word, LanguageMode } from './types';

const myWord: Word = {
  id: '1',
  word: 'こんにちは',
  translation: '안녕하세요',
  mastered: false
};
```

## 📚 학습 모드

### 1. 일본어 모드 🗾
- 기본 일본어 단어 8개
- 후리가나(루비 문자) 지원 준비
- 예시 문장 포함

### 2. 영어 모드 🌎
- 기본 영어 단어 8개
- 학습용 예시 문장 포함

### 3. 자유롭게 만들기 ✨
- CSV/TXT 파일 업로드
- 안키(Anki) 덱 내보내기 지원
- 나만의 단어장 생성

## 📝 파일 업로드 형식

CSV 또는 TXT 파일로 단어를 추가할 수 있습니다.

```csv
단어,번역,예시문장
こんにちは,안녕하세요,こんにちは、元気ですか。
ありがとう,감사합니다,ありがとうございます。
```

- 예시 문장은 선택사항
- 첫 줄 헤더 자동 인식
- 안키 덱 CSV 내보내기 호환

## 🎨 디자인 시스템

### 파스텔 컬러 팔레트
```css
--pastel-blue: #a8d8ea;
--pastel-purple: #d4b5ff;
--pastel-green: #b8e6cc;
--pastel-pink: #ffc8dd;
--pastel-yellow: #fff4b8;
--pastel-lavender: #e0d4f7;
```

### 타이포그래피
- **폰트 스택:** 일본어 우선 → 한글 → 영문
- **텍스트 렌더링:** Antialiased
- **반응형:** 모바일, 태블릿, 데스크톱 최적화

## 💡 주요 특징

✨ **디자인**
- 파스텔 톤의 부드러운 색상
- 당고 테마의 귀여운 느낌
- 집중력과 심리에 도움이 되는 디자인

📚 **학습 기능**
- 플래시카드 방식
- 예시 문장으로 통문장 학습
- 진행도 추적
- 로그인 시 학습 기록 저장

🌍 **다국어 지원**
- 일본어 (후리가나 지원 준비)
- 영어
- 한국어 UI

🔐 **인증 시스템**
- 로그인 없이도 모든 기능 사용 가능
- 로그인 시에만 학습 기록 저장

📱 **반응형**
- 모바일, 태블릿, 데스크톱 모두 최적화

## 🔧 개발 가이드

### 새로운 커스텀 훅 추가하기

```typescript
// /hooks/useMyCustomHook.ts
import { useAppContext } from '../contexts/AppContext';

export function useMyCustomHook() {
  const { someState, setSomeState } = useAppContext();
  
  const myCustomLogic = () => {
    // 로직 구현
  };
  
  return { someState, myCustomLogic };
}
```

### 전역 상태 추가하기

1. `/contexts/AppContext.tsx`의 인터페이스에 새 상태 추가
2. Provider에서 useState로 상태 생성
3. value 객체에 추가

### 타입 정의 추가하기

```typescript
// /types/index.ts
export interface MyNewType {
  id: string;
  name: string;
}
```

## 📊 코드 품질

- ✅ TypeScript로 타입 안정성 보장
- ✅ Context API로 깔끔한 상태 관리
- ✅ 커스텀 훅으로 로직 재사용
- ✅ 관심사의 분리 (Separation of Concerns)
- ✅ 컴포넌트 단위 모듈화

## 🚀 향후 확장 가능성

1. **실제 백엔드 연동**
   - Mock 데이터를 API 호출로 대체
   - 사용자별 학습 기록 저장

2. **추가 언어 지원**
   - 중국어, 스페인어 등

3. **학습 알고리즘**
   - 간격 반복 학습 (Spaced Repetition)
   - 난이도별 단어 분류

4. **소셜 기능**
   - 단어장 공유
   - 학습 통계 비교

## 📄 라이선스

MIT License

---

**프로젝트:** 당고 암기장 🍡  
**기술 스택:** React + TypeScript + Context API + Tailwind CSS  
**프론트엔드 프로젝트:** Mock 데이터 사용
