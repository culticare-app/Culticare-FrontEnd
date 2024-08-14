import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomText from '../../components/CustomText'
import { useNavigation } from '@react-navigation/native'
import Nav from '../../components/Nav'
import { useDispatch } from 'react-redux'
import { clearTokens } from '../../Store/authSlice'

const Mypage = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(clearTokens());
    }

    return (
        <>
            <View style={styles.mypage_wrap}>
                <CustomText style={styles.title}>마이페이지</CustomText>
                <View style={styles.btnbox}>
                    <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('MemberInfo') }}>
                        <Image style={styles.btnimg} source={require('../../assets/images/mypage/profile.png')} />
                        <CustomText style={styles.btntext}>회원정보 수정</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={styles.btnimg} source={require('../../assets/images/mypage/share.png')} />
                        <CustomText style={styles.btntext}>감정 기록 공유 관리</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => {onLogout()}}>
                        <CustomText style={styles.btntext}>로그아웃</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Login')}}>
                        <CustomText style={styles.btntext}>로그인</CustomText>
                    </TouchableOpacity>
                </View>
            </View>
            <Nav />
        </>
    )
}

export default Mypage

const styles = StyleSheet.create({
    mypage_wrap: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 20
    },
    title: {
        paddingBottom: 40,
        fontSize: 20,
        color: '#303030',
        fontFamily: 'Pretendard-SemiBold'
    },
    btn: {
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        height: 48,
        borderRadius: 8,
        alignItems: 'center',
        paddingLeft: 15,
        marginBottom: 10
    },
    btnimg: {
        marginRight: 10,
        width: 24,
        height: 24
    },
    btntext: {
        color: '#303030',
        fontSize: 16,
    }
})