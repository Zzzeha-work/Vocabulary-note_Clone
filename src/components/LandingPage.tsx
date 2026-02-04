import {LoginBox} from './LoginBox';
import {Globe} from 'lucide-react';

interface LandingPageProps {
	onStartLearning: () => void;
	onLogin: (username: string) => void;
	isLoggedIn: boolean;
	username: string;
	onLogout: () => void;
}

export function LandingPage({onStartLearning, onLogin, isLoggedIn, username, onLogout}: LandingPageProps) {
	return (
		<div className = "min-h-screen relative" style = {{backgroundColor: 'var(--bg-white)'}}>
			{/* 1. 상단 로그인 정보 영역 */}
			<div className = "absolute top-4 right-4 lg:top-6 lg:right-6 z-10 max-w-[calc(100vw-2rem)] lg:max-w-none">
				{!isLoggedIn ? (
					<LoginBox onLogin = {onLogin}/>
				) : (
					<div className = "flex items-center gap-3 flex-wrap">
						<div className = "px-4 py-2 lg:px-6 lg:py-3 rounded-full shadow-lg"
						     style = {{backgroundColor: 'var(--pastel-green)'}}>
							<span style = {{fontSize: '0.875rem'}}>{username}님, 환영합니다! 🎉</span>
						</div>
						<button
							onClick = {onLogout}
							className = "px-3 py-2 lg:px-4 lg:py-2 rounded-full shadow-lg transition-all text-sm"
							style = {{backgroundColor: 'var(--bg-light)', color: 'var(--text-secondary)'}}
						>
							로그아웃
						</button>
					</div>
				)}
			</div>

			{/* 2. 메인 컨텐츠 영역 */}
			<main className = "min-h-screen flex flex-col items-center justify-center px-4 pb-16 pt-32 lg:pt-8">
				<div className = "max-w-4xl w-full text-center">

					{/* 히어로 섹션 (중앙 당고) */}
					<div className = "mb-12">
						<div className = "flex justify-center mb-6">
							<div
								className = "w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center shadow-inner"
								style = {{backgroundColor: 'var(--pastel-pink)'}}
							>
								<span style = {{fontSize: '5rem'}}>🍡</span>
							</div>
						</div>
						<h1 className = "font-bold" style = {{fontSize: '2.5rem', marginBottom: '1.5rem'}}>당고 암기장</h1>
						<p style = {{fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.8'}}>
							귀여운 당고와 함께하는 즐거운 언어 학습!<br/>
							파스텔 톤의 편안한 디자인으로 집중력을 높이고<br/>
							플래시카드로 효과적으로 단어를 암기해보세요
						</p>
					</div>

					{/* 메인 시작 버튼 (이 버튼은 기능을 위해 유지했습니다) */}
					<div className = "flex items-center justify-center gap-4 lg:gap-6 flex-wrap mb-12">
						<button
							onClick = {onStartLearning}
							className = "px-8 lg:px-12 py-3 lg:py-4 rounded-full text-base lg:text-lg transition-all hover:shadow-lg hover:scale-105 font-bold"
							style = {{backgroundColor: 'var(--pastel-pink)', color: 'var(--text-primary)'}}
						>
							지금 바로 시작하기 🍡
						</button>
					</div>

					{/* 3. 하단 기능 카드 섹션 (디자인 포인트) */}
					<div className = "grid grid-cols-1 md:grid-cols-3 gap-6">

						{/* 일본어 카드: 흰색 원 포인트 */}
						<div
							className = "p-6 lg:p-8 rounded-3xl flex flex-col items-center shadow-sm"
							style = {{backgroundColor: 'var(--pastel-pink)'}}
						>
							<div
								className = "w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
								<div className = "w-12 h-12 rounded-full" style = {{backgroundColor: '#BC002D'}}/>
							</div>
							<h3 className = "font-bold" style = {{marginBottom: '0.5rem'}}>일본어 JAPANESE</h3>
							<p style = {{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>
								기초부터 차근차근<br/>일본어 마스터하기
							</p>
						</div>

						{/* 영어 카드: 흰색 원 포인트 */}
						<div
							className = "p-6 lg:p-8 rounded-3xl flex flex-col items-center shadow-sm"
							style = {{backgroundColor: 'var(--pastel-blue)'}}
						>
							<div
								className = "w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
								<Globe className = "w-12 h-12" style = {{color: '#0052B4'}}/>
							</div>
							<h3 className = "font-bold" style = {{marginBottom: '0.5rem'}}>영어 ENGLISH</h3>
							<p style = {{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>
								실생활 필수 영단어<br/>효과적으로 학습하기
							</p>
						</div>

						{/* 자유 만들기 카드: 배경 없이 이모티콘 강조 */}
						<div
							className = "p-6 lg:p-8 rounded-3xl flex flex-col items-center shadow-sm"
							style = {{backgroundColor: 'var(--pastel-lavender)'}}
						>
							{/* 다른 카드의 흰색 원(w-20 = 5rem)과 동일한 높이를 확보해서 밸런스를 맞춤 */}
							<div className = "w-20 h-20 flex items-center justify-center mb-4">
								{/* 텍스트 위치가 틀어지지 않도록 높이 내에서 중앙 정렬하고 크기만 살짝 강조 */}
								<span style = {{fontSize: '3.5rem', lineHeight: '1'}}>✨</span>
							</div>

							<h3 className = "font-bold" style = {{marginBottom: '0.5rem'}}>자유롭게 만들기</h3>
							<p style = {{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>
								나만의 단어장으로<br/>
								맞춤 학습하기
							</p>
						</div>

					</div>
				</div>
			</main>

			{/* 하단 푸터 */}
			<footer className = "absolute bottom-0 w-full py-4 lg:py-6 text-center"
			        style = {{color: 'var(--text-muted)', fontSize: '0.875rem'}}>
				<p>🍡 당고 암기장 - 귀여운 디자인으로 즐거운 학습을</p>
			</footer>
		</div>
	);
}