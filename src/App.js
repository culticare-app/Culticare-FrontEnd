import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login/Login.js';
import Nav from './components/Nav.js';
import Join from './pages/Join/Join.js';
import Comm from './pages/Community/Comm.js';
import CommSearch from './pages/Community/CommSearch.js';
import Info from './pages/Info/Info.js';
import Mypage from './pages/Mypage/Mypage.js';
import MypageMemeber from './pages/Mypage/MypageMemeber.js';
import CommPost from './pages/Community/CommPost.js';
import DiaryStartPage from './pages/Main/NowRecording'; // 기본 내보내기 가져오기
import { DiaryEndPage } from './pages/Main/NowRecording'; // 이름으로 내보내기 가져오기
import ReportPage from './pages/Main/ReportPage';


import Recording from './pages/Main/Recording.js';
import EmotionAnalysisResultPage from './pages/Main/EmotionResult.js';
import SearchingCult from './pages/SearchingCult/SearchingCult.js';
import { Provider } from 'react-redux';
import store from './store/Store.js';


const Stack = createStackNavigator();

function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Login">
					<Stack.Screen name="EmotionResultPage" component={EmotionAnalysisResultPage} />
					<Stack.Screen name="DiaryStartPage" component={DiaryStartPage} />
					<Stack.Screen name="DiaryEndPage" component={DiaryEndPage} />
					<Stack.Screen name="ReportPage" component={ReportPage} />

					<Stack.Screen name="Recording" component={Recording} />


					<Stack.Screen name="Nav" component={Nav} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Join" component={Join} />

					<Stack.Screen name="Community" component={Comm} />
					<Stack.Screen name="CommunityPost" component={CommPost} />
					<Stack.Screen name="CommunitySearch" component={CommSearch} />

					<Stack.Screen name="Mypage" component={Mypage} />
					<Stack.Screen name="MemberInfo" component={MypageMemeber} />
					<Stack.Screen name="MypageShare" component={Mypage} />

					<Stack.Screen name="Info" component={Info} />

					<Stack.Screen name="SearchCulture" component={SearchingCult} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default App;
