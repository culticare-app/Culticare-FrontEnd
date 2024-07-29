import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomText from '../../components/CustomText'
import { TextInput } from 'react-native-gesture-handler'
import DropdownComponent from '../Join/JoinDropdown.js'
import { useNavigation } from '@react-navigation/native'

const ModifyPhone = ({ phone, setPhone }) => {
    const [changep, setChagep] = React.useState(false)
    const [changephone, setChangephone] = React.useState('')
    const [okMsg, setOkMsg] = React.useState(false)

    return (
        <>
            {changep ? (
                <>
                    <View style={styles.modify}>
                        <TextInput value={phone} onChange={setPhone} style={styles.input} />
                        <TouchableOpacity style={styles.btnchange} onPress={() => { setChagep(true) }}>
                            <CustomText style={styles.btnchangetext}>인증문자 받기</CustomText>
                        </TouchableOpacity>
                    </View >
                    <View style={styles.modify}>
                        <TextInput value={changephone} onChange={setChangephone} style={styles.input} placeholder='인증번호' />
                        <CustomText style={okMsg ? styles.okmsg : styles.none}>인증 성공</CustomText>
                        <TouchableOpacity style={styles.btnyet} onPress={() => { setChagep(true); setOkMsg(true) }}>
                            <CustomText style={styles.btnchangetext}>인증하기</CustomText>
                        </TouchableOpacity>
                    </View >
                </>
            ) : (
                <View style={styles.modify}>
                    <TextInput value={phone} onChange={setPhone} style={styles.input} />
                    <TouchableOpacity style={styles.btn} onPress={() => { setChagep(true) }}>
                        <CustomText style={styles.btntext}>전화번호 변경</CustomText>
                    </TouchableOpacity>
                </View >
            )}

        </>
    )
}

const Fix = () => {
    return (
        <>
            <View style={styles.fix}>
                <CustomText style={styles.fixkind}>이름</CustomText>
                <CustomText style={styles.fixtext}>Anna</CustomText>
            </View>
            <View style={styles.fix}>
                <CustomText style={styles.fixkind}>아이디</CustomText>
                <CustomText style={styles.fixtext}>imanna</CustomText>
            </View>
        </>
    )
}

const ModifyPass = ({ password, setPassword }) => {
    const [changep, setChagep] = React.useState(false)
    const [changepass, setChangepass] = React.useState('')
    const [changepassre, setChangepassre] = React.useState('')

    return (
        <>
            {changep ? (
                <>
                    <View style={styles.modify}>
                        <TextInput value={changepass} onChange={setChangepass} style={styles.input} placeholder='비밀번호' />
                    </View >
                    <View style={styles.modifychange}>
                        <TextInput value={changepassre} onChange={setChangepassre} style={styles.input} placeholder='비밀번호 재확인' />
                        <CustomText style={styles.modifypasstext}>영문 대⋅소문자+숫자+특수문자 조합으로 8-16자 입력해주세요.</CustomText>
                    </View >
                </>
            ) : (
                <View style={styles.modify}>
                    <TextInput value={password} onChange={setPassword} style={styles.input} />
                    <TouchableOpacity style={styles.btn} onPress={() => { setChagep(true) }}>
                        <CustomText style={styles.btntext}>비밀번호 변경</CustomText>
                    </TouchableOpacity>
                </View>
            )}
        </>

    )
}

const ModifyBtn = ({ phone, password }) => {
    const navigation = useNavigation()
    const [full, setFull] = React.useState(true);

    useEffect(() => {
        if (phone !== '' && password !== '') {
            setFull(true);
        } else {
            setFull(false);
        }
    }, [phone, password])

    return (
        <TouchableOpacity style={full ? styles.modifybtn : styles.nopebtn} onPress={() => { navigation.navigate('Mypage') }}>
            <CustomText style={styles.modifytext}>회원정보 수정하기</CustomText>
        </TouchableOpacity >
    )
}


const MypageMemeber = () => {
    const [country, onChangeCountry] = React.useState('');
    const [phone, setPhone] = React.useState('01012345678');
    const [password, setPassword] = React.useState('01012345678');

    return (
        <View style={styles.memeberinfo_wrap}>
            <CustomText style={styles.title}>회원정보</CustomText>
            <View style={styles.memeberinfo}>
                <ModifyPhone phone={phone} setPhone={setPhone} />
                <Fix />
                <ModifyPass password={password} setPassword={setPassword} />
                <DropdownComponent onChangeCountry={onChangeCountry} />
            </View>
            <ModifyBtn phone={phone} password={password} />
        </View>
    )
}

export default MypageMemeber

const styles = StyleSheet.create({
    memeberinfo_wrap: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 20,
        position: 'relative'
    },
    title: {
        fontSize: 20,
        color: '#303030',
        fontFamily: 'Pretendard-SemiBold',
        marginBottom: 30
    },
    modify: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        position: 'relative'
    },
    modifychange: {
        justifyContent: 'space-between',
        alignItems: 'left',
        marginBottom: 20
    },
    input: {
        width: '70%',
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 2,
        padding: 5,
        fontSize: 16,
        color: '#303030',
        fontFamily: 'Pretendard-SemiBold'
    },
    okmsg: {
        position: 'absolute',
        color: '#006AEE',
        fontSize: 12,
        right: 110,
        bottom: 12
    },
    btn: {
        width: '28%',
        height: 40,
        borderColor: '#303030',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnchange: {
        width: '28%',
        height: 40,
        backgroundColor: '#303030',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnyet: {
        width: '28%',
        height: 40,
        backgroundColor: '#C5C5C5',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btntext: {
        color: '#303030'
    },
    btnchangetext: {
        color: '#fff'
    },
    modifypasstext: {
        color: '#C5C5C5',
        fontSize: 12,
        marginTop: 5
    },
    fix: {
        flexDirection: 'row',
        width: '70%',
        alignItems: 'center',
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 2,
        padding: 5,
        marginBottom: 20
    },
    fixkind: {
        width: 48,
        fontSize: 12,
        color: '#a0a0a0',
    },
    fixtext: {
        color: '#303030',
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold'
    },
    modifybtn: {
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: [{ translateX: -130 }],
        width: '90%',
        height: 44,
        backgroundColor: '#9199DD',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    nopebtn: {
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: [{ translateX: -130 }],
        width: '90%',
        height: 44,
        backgroundColor: '#C5C5C5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    modifytext: {
        color: '#fff',
        fontSize: 16
    },
    none: {
        display: 'none'
    }
})