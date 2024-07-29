import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/Homepage/HomePage.js';
import Login from './pages/Login/Login.js';
import Nav from './components/Nav.js';
import Join from './pages/Join/Join.js';
import Comm from './pages/Community/Comm.js';
import CommSearch from './pages/Community/CommSearch.js';
import Info from './pages/Info/Info.js';
import Mypage from './pages/Mypage/Mypage.js';
import MypageMemeber from './pages/Mypage/MypageMemeber.js';
import CommPost from './pages/Community/CommPost.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mypage">
        <Stack.Screen name="Home" component={HomePage} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
