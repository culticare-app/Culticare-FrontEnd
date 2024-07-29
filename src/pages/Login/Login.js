import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CustomText from '../../components/CustomText';

const Login = () => {
    const [title, onChangeTitle] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [full, onChangeFull] = React.useState(false)
    const [Msg, onChangeMsg] = React.useState('');

    const navigation = useNavigation();

    useEffect(() => {
        if (title !== '' && password !== '') {
            onChangeFull(true);
        } else {
            onChangeFull(false);
        }
    }, [title, password]);

    useEffect(() => {

    }, [])

    return (
        <View style={styles.LoginWrap}>
            <View style={styles.Login}>
                <CustomText style={styles.cant}>입력하신 아이디/비밀번호와{"\n"}
                    일치하는 로그인 정보가 없습니다.</CustomText>
                <TextInput
                    style={styles.inputtitle}
                    onChangeText={onChangeTitle}
                    value={title}
                    placeholder='아이디'
                />
                <TextInput
                    style={styles.inputpassword}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder='비밀번호'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={full ? styles.loginbtnfull : styles.loginbtn} onPress={() => { }}>
                    <CustomText style={styles.buttonText}>로그인</CustomText>
                </TouchableOpacity>
            </View>
            <View style={styles.join}>
                <CustomText style={styles.jointext}>컬티케어가 처음이신가요?</CustomText>
                <TouchableOpacity onPress={() => { navigation.navigate('Join') }}>
                    <CustomText style={styles.goingjoin}>회원가입</CustomText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    LoginWrap: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff'
    },
    Login: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cant: {
        textAlign: 'center',
        marginBottom: 20,
        color: 'red',
        fontSize: 12
    },
    inputtitle: {
        padding: 10,
        width: 224,
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#ECECEC',
        marginBottom: 10
    },
    inputpassword: {
        padding: 10,
        width: 224,
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#ECECEC',
        marginBottom: 20
    },
    loginbtn: {
        width: 224,
        height: 44,
        backgroundColor: '#C5C5C5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        paddingBottom: 6
    },
    loginbtnfull: {
        width: 224,
        height: 44,
        backgroundColor: '#9199DD',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        paddingBottom: 6
    },
    buttonText: {
        color: '#fff'
    },
    join: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 45
    },
    jointext: {
        fontSize: 12,
        marginBottom: 4
    },
    goingjoin: {
        color: '#000',
        fontWeight: 'bold',
    }
});

export default Login;