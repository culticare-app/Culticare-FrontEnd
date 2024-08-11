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
import DiaryStartPage from './pages/Main/NowRecording.js';
import Recording from './pages/Main/Recording.js';
import EmotionAnalysisResultPage from './pages/Main/EmotionResult.js';
import SearchingCult from './pages/SearchingCult/SearchingCult.js';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Recording">
				<Stack.Screen name="EmotionResultPage" component={EmotionAnalysisResultPage} />
				<Stack.Screen name="DiaryStartPage" component={DiaryStartPage} />
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
	);
}

export default App;
