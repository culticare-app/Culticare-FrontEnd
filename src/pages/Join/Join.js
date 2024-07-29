import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DropdownComponent from './JoinDropdown.js';
import CustomText from '../../components/CustomText';

const JoinBtn = ({ AllOk }) => {
    return (
        <TouchableOpacity style={AllOk ? styles.joinbtntrue : styles.joinbtn} onPress={() => { }}>
            <CustomText style={styles.joinbtntext}>가입하기</CustomText>
        </TouchableOpacity>
    )
}

const JoinForm = () => {
    const [phone, onChangePhone] = React.useState('');
    const [name, onChangeName] = React.useState('');

    // 전화번호 인증 체크 
    const [phonecheck, onChangePhonecheck] = React.useState('');
    const [phonecheckok, onChangeUserIdcheckok] = React.useState(true);
    const [phonecheckmsg, onChangePhonecheckmsg] = React.useState('');

    // 유저 아이디 중복 체크
    const [userId, onChangeUserId] = React.useState('');
    const [userIdcheck, onChangeUserIdcheck] = React.useState(true);
    const [userIdmsg, onChangeUserIdmsg] = React.useState('');

    // 비밀번호 일치 체크
    const [password, onChangePassword] = React.useState('');
    const [passwordre, onChangePasswordRe] = React.useState('');
    const [passwordmsg, onChangePasswordmsg] = React.useState('');
    const [passwordok, onChangePasswordok] = React.useState(false)

    // 전체 다 참 
    const [AllOk, onChangeAllOK] = React.useState(false);

    // 나라 선택
    const [country, onChangeCountry] = React.useState('');

    // 아이디 중복 체크
    const checkPhone = () => {
        const isUserIdAvailable = !phonecheckok;
        onChangeUserIdcheckok(isUserIdAvailable);

        if (isUserIdAvailable) {
            onChangePhonecheckmsg('');
        } else {
            onChangePhonecheckmsg('인증번호가 일치하지 않습니다. 다시 시도해주세요.');
        }
    };

    // 아이디 중복 체크
    const checkUserId = () => {
        const isUserIdAvailable = !userIdcheck;
        onChangeUserIdcheck(isUserIdAvailable);

        if (isUserIdAvailable) {
            onChangeUserIdmsg('');
        } else {
            onChangeUserIdmsg('이미 사용 중인 아이디입니다. 다른 아이디를 입력해주세요.');
        }
    };

    // 비밀번호 유효성 검사 함수
    const validatePassword = (pwd) => {
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        return regex.test(pwd);
    };

    useEffect(() => {
        if (password && !validatePassword(password)) {
            onChangePasswordmsg('영문 대⋅소문자+숫자+특수문자 조합으로 8-16자 입력해주세요.');
            onChangePasswordok(false)
        } else if (password !== passwordre) {
            onChangePasswordmsg('비밀번호가 일치하지 않습니다.');
            onChangePasswordok(false)
        } else {
            onChangePasswordmsg('');
            onChangePasswordok(true)
        }
    }, [password, passwordre]);

    // 전체 다 채웠나 체크
    useEffect(() => {
        if (phone && name && phonecheckok && userIdcheck && passwordok && country) {
            onChangeAllOK(true);
        } else {
            onChangeAllOK(false)
        }
    }, [phone, name, phonecheckok, userIdcheck, passwordok, country])

    return (
        <>
            <View>
                {/* 휴대폰 번호 */}
                <View style={styles.getbox}>
                    <TextInput
                        onChangeText={onChangePhone}
                        value={phone}
                        placeholder='휴대폰 번호'
                        style={styles.inputbox}
                    />
                    <TouchableOpacity style={phone ? styles.inputbtnfull : styles.inputbtn} onPress={() => { }}>
                        <CustomText style={styles.textbtn}>인증번호 받기</CustomText>
                    </TouchableOpacity>
                </View>

                {/* 휴대폰 인증번호 */}
                <View>
                    <View style={styles.getbox}>
                        <View style={styles.okbox}>
                            <TextInput
                                onChangeText={onChangePhonecheck}
                                value={phonecheck}
                                placeholder='인증번호'
                                style={phonecheckmsg ? styles.inputboxerror : styles.inputbox}
                            />
                            <CustomText style={phonecheckok ? styles.ok : styles.none}>인증 성공</CustomText>
                        </View>
                        <TouchableOpacity style={phonecheck ? styles.inputbtnfull : styles.inputbtn} onPress={() => { checkPhone() }}>
                            <CustomText style={styles.textbtn}>인증하기</CustomText>
                        </TouchableOpacity>
                    </View>
                    {phonecheckmsg ? (
                        <CustomText style={styles.errormsg}>{phonecheckmsg}</CustomText>
                    ) : (
                        <CustomText style={styles.msg}></CustomText>
                    )}
                </View>

                {/* 이름 */}
                <View style={styles.getbox}>
                    <TextInput
                        onChangeText={onChangeName}
                        value={name}
                        placeholder='이름'
                        style={styles.inputbox}
                    />
                </View>

                {/* 아이디 */}
                <View>
                    <View style={styles.getbox}>
                        <View style={styles.okbox}>
                            <TextInput
                                onChangeText={onChangeUserId}
                                value={userId}
                                placeholder='아이디'
                                style={userIdmsg ? styles.inputboxerror : styles.inputbox}
                            />
                            <CustomText style={userIdcheck ? styles.ok : styles.none}>사용 가능</CustomText>
                        </View>
                        <TouchableOpacity style={userId ? styles.inputbtnfull : styles.inputbtn} onPress={checkUserId}>
                            <CustomText style={styles.textbtn}>중복 확인</CustomText>
                        </TouchableOpacity>
                    </View>
                    {userIdmsg ? (
                        <CustomText style={styles.errormsg}>{userIdmsg}</CustomText>
                    ) : (
                        <CustomText style={styles.msg}></CustomText>
                    )}
                </View>

                {/* 비밀번호 / 비밀번호 재확인 */}
                <View style={styles.getbox}>
                    <TextInput
                        onChangeText={onChangePassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder='비밀번호'
                        style={passwordmsg ? styles.inputboxerror : styles.inputbox}
                    />
                </View>
                <View>
                    <View style={styles.getbox}>
                        <TextInput
                            onChangeText={onChangePasswordRe}
                            value={passwordre}
                            secureTextEntry={true}
                            placeholder='비밀번호 재확인'
                            style={passwordmsg ? styles.inputboxerror : styles.inputbox}
                        />
                    </View>
                    <CustomText style={passwordmsg ? styles.errormsg : styles.msg}>{passwordmsg ? passwordmsg : '영문 대⋅소문자+숫자+특수문자 조합으로 8-16자 입력해주세요.'}</CustomText>
                </View>
            </View>
            <DropdownComponent onChangeCountry={onChangeCountry} />
            <JoinBtn AllOk={AllOk} />
        </>
    );
};

const Join = () => {
    return (
        <View style={styles.JoinWrap}>
            <CustomText style={styles.headerText}>회원가입</CustomText>
            <JoinForm />
        </View>
    );
};

export default Join

const styles = StyleSheet.create({
    JoinWrap: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    headerText: {
        fontSize: 20,
        color: "#000",
        fontWeight: 'bold',
        marginBottom: 45
    },
    getbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 5,
    },
    inputbox: {
        width: '67%',
        minWidth: 224,
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#ECECEC',
    },
    inputboxerror: {
        width: '67%',
        minWidth: 224,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
    },
    inputbtn: {
        width: '30%',
        minWidth: 100,
        height: 40,
        backgroundColor: '#C5C5C5',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        borderRadius: 8
    },
    inputbtnfull: {
        width: '30%',
        minWidth: 100,
        height: 40,
        backgroundColor: '#303030',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        borderRadius: 8
    },
    okbox: {
        position: 'relative'
    },
    ok: {
        fontSize: 12,
        color: '#006AEE',
        position: 'absolute',
        right: 10,
        top: 10,
    },
    none: {
        display: 'none'
    },
    textbtn: {
        color: '#fff',
        fontSize: 14
    },
    msg: {
        fontSize: 12,
        color: '#c5c5c5',
        marginTop: 3,
        marginBottom: 20
    },
    errormsg: {
        fontSize: 12,
        color: 'red',
        marginTop: 3,
        marginBottom: 20
    },
    joinbtn: {
        width: '100%',
        height: 44,
        backgroundColor: '#c5c5c5',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        borderRadius: 8,
        marginTop: 110
    },
    joinbtntrue: {
        width: '100%',
        height: 44,
        backgroundColor: '#9199DD',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        borderRadius: 8,
        marginTop: 110
    },
    joinbtntext: {
        color: '#fff',
        fontSize: 16
    }
});
