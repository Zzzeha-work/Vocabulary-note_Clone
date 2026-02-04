import {AppProvider, useAppContext} from './contexts/AppContext';
import {useAuth} from './hooks/useAuth';
import {useNavigation} from './hooks/useNavigation';
import {LandingPage} from './components/LandingPage';
import {LanguageSelection} from './components/LanguageSelection';
import {StudyPage} from './components/StudyPage';

/**
 * 앱 컨텐츠 컴포넌트
 * Context를 소비하는 메인 로직
 */
function AppContent() {
	const {showLanding, languageMode} = useAppContext();
	const {isLoggedIn, username, handleLogin, handleLogout} = useAuth();
	const {startLearning} = useNavigation();

	// Landing page
	if (showLanding) {
		return (
			<LandingPage
				onStartLearning = {startLearning}
				onLogin = {handleLogin}
				isLoggedIn = {isLoggedIn}
				username = {username}
				onLogout = {handleLogout}
			/>
		);
	}

	// Language selection page
	if (!languageMode) {
		return <LanguageSelection/>;
	}

	// Study page
	return <StudyPage/>;
}

export default function App() {
	return (
		<AppProvider>
			<AppContent/>
		</AppProvider>
	);
}