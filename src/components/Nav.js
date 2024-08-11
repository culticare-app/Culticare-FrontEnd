import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomText from './CustomText';

const Nav = () => {
    const navigation = useNavigation();
    const [page, onChangePage] = React.useState('')

    return (
        <View style={styles.navWrap}>
            <TouchableOpacity style={styles.nav} onPress={() => {navigation.navigate('Recording'); onChangePage()}} activeOpacity={0.7}>
                <Image style={styles.navimg} source={require('../assets/images/nav/record.png')} />
                <CustomText style={styles.navtest}>감정기록</CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav} onPress={() => {navigation.navigate('Info'); onChangePage()}} activeOpacity={0.7}>
                <Image style={styles.navimg} source={require('../assets/images/nav/checkinfo.png')} />
                <CustomText style={styles.navtest}>정보 조회</CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav} onPress={() => {navigation.navigate('SearchCulture'); onChangePage()}} activeOpacity={0.7}>
                <Image style={styles.navimg} source={require('../assets/images/nav/checkculture.png')} />
                <CustomText style={styles.navtest}>문화 탐구</CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav} onPress={() => {navigation.navigate('Community'); onChangePage('Community')}} activeOpacity={0.7}>
                <Image style={styles.navimg} source={page === 'Community' ?  require('../assets/images/nav/communitycheck.png') : require('../assets/images/nav/community.png')} />
                <CustomText style={styles.navtest}>커뮤니티</CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav} onPress={() => {navigation.navigate('Mypage'); onChangePage()}} activeOpacity={0.7}>
                <Image style={styles.navimg} source={require('../assets/images/nav/mypage.png')} />
                <CustomText style={styles.navtest}>마이페이지</CustomText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navWrap: {
        zIndex: 1,
        flexDirection: 'row',
        height: 88,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        padding: 10,
        backgroundColor: 'white',
    },
    nav: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    navimg: {
        width: 24,
        height: 24,
        marginBottom: 5
    },
    navtest: {
        fontSize: 10
    }
});

export default Nav;
