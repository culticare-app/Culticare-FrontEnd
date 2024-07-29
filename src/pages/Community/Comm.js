import React, { useEffect } from 'react'
import { StyleSheet, View, Image, Text, ScrollView, Button, Alert } from 'react-native';
import Nav from '../../components/Nav';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../../components/CustomText';

const Cate = ({ onChangeCate, onChangeChoose }) => {
    const categories = [
        { name: '전체', img: require('../../assets/images/comm/cate_human.png') },
        { name: '가족', img: require('../../assets/images/comm/cate_human.png') },
        { name: '건강', img: require('../../assets/images/comm/cate_human.png') },
        { name: '고민', img: require('../../assets/images/comm/cate_human.png') },
        { name: '금전', img: require('../../assets/images/comm/cate_human.png') },
        { name: '정책', img: require('../../assets/images/comm/cate_human.png') },
    ];

    return (
        <View style={cates.cate_wrap}>
            <View style={cates.header}>
                <CustomText style={cates.headertext}>카테고리</CustomText>
                <TouchableOpacity onPress={() => { onChangeCate(false) }}>
                    <Image style={cates.deletebtn} source={require('../../assets/images/comm/delete.png')} />
                </TouchableOpacity>
            </View>
            <View style={cates.cate_list}>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        style={cates.list}
                        onPress={() => { onChangeChoose(category.name); onChangeCate(false) }}
                    >
                        <Image style={cates.listimg} source={category.img} />
                        <CustomText style={cates.listtext}>{category.name}</CustomText>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
};

const Post = ({ tag, title, text, time, likes, comments }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.post_wrap}>
            <TouchableOpacity onPress={() => {navigation.navigate('CommunityPost')}}>
                <CustomText style={styles.tag}>{tag}</CustomText>
                <CustomText style={styles.title}>{title}</CustomText>
                <CustomText style={styles.text}>{text}</CustomText>
                <View style={styles.infobox}>
                    <View style={styles.info}>
                        <Image style={styles.infoimg} source={require('../../assets/images/comm/hart.png')} />
                        <CustomText style={styles.infotext}>{likes}</CustomText>
                    </View>
                    <View style={styles.info}>
                        <Image style={styles.infoimg} source={require('../../assets/images/comm/comment.png')} />
                        <CustomText style={styles.infotext}>{comments}</CustomText>
                    </View>
                    <CustomText style={styles.infotext}>{time}</CustomText>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const CommHeader = ({ choose, setCate }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <CustomText style={styles.headertext}>{choose}</CustomText>
            <View style={styles.iconbox}>
                <TouchableOpacity onPress={() => navigation.navigate('CommunitySearch')}>
                    <Image style={styles.icon} source={require('../../assets/images/comm/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCate(true)}>
                    <Image style={styles.icon} source={require('../../assets/images/comm/menu.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Write = ({ setGowrite, choose }) => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('')
    const [full, setFull] = React.useState(false)

    useEffect(() => {
        if (title !== '' && content !== '') {
            setFull(true);
        } else {
            setFull(false)
        }
    }, [title, content])

    const Submit = () => {
        if (title === '' || content === '') {
            Alert.alert('오류', '내용을 모두 채워주세요', [{ text: '확인' }]);
            return;
        }
    }

    return (
        <View style={writes.write_wrap}>
            <View style={writes.header}>
                <TouchableOpacity onPress={() => { setGowrite(false) }}>
                    <Image source={require('../../assets/images/comm/back.png')} />
                </TouchableOpacity>
                <CustomText style={writes.text}>글쓰기</CustomText>
                <TouchableOpacity style={full ? writes.submitbtnfull : writes.submitbtn}
                    onPress={() => { Submit() }}
                >
                    <CustomText style={writes.btntext}>등록</CustomText>
                </TouchableOpacity>
            </View>
            <View style={writes.writebox}>
                <TextInput
                    value={title}
                    onChange={setTitle}
                    style={writes.titleinput}
                    placeholder='제목'
                />
                <TextInput
                    value={content}
                    onChange={setContent}
                    multiline={true}
                    style={writes.contentinput}
                    placeholder='내용을 입력해주세요'
                />
            </View>
        </View>
    )
}

const Comm = () => {
    const [cate, setCate] = React.useState(false);
    const [choose, setChoose] = React.useState('커뮤니티');
    const [Gowrite, setGowrite] = React.useState(false)

    const posts = Array(6).fill({
        tag: '가족',
        title: '아이가 학교에 적응을 하지 못 하는 것 같아요..',
        text: '지난 주 이사를 왔는데 전학 간 학교에서 아직 적응을 하지 못 해 힘들어하는 것 같네요... 원래도 낯을 많이 가리는 성격이...',
        time: '1분 전',
        likes: '0',
        comments: '0'
    });

    return (
        <>
            <View style={styles.Comm_wrap}>
                <CommHeader choose={choose} setCate={setCate} />
                <ScrollView style={styles.main}>
                    {posts.map((post, index) => (
                        <Post key={index} {...post} />
                    ))}
                </ScrollView>
                <TouchableOpacity
                    onPress={() => { setGowrite(true) }}
                    style={choose === '커뮤니티' || choose === '전체' ? styles.none : styles.btnimg}
                >
                    <Image source={require('../../assets/images/comm/writebtn.png')} />
                </TouchableOpacity>
                <Nav />
            </View>
            {Gowrite && <Write setGowrite={setGowrite} choose={choose} />}
            {cate && <Cate onChangeCate={setCate} onChangeChoose={setChoose} />}
        </>
    );
};

export default Comm

const styles = StyleSheet.create({
    Comm_wrap: {
        zIndex: 1,
        backgroundColor: "#fff",
        flex: 1,
        alignItems: 'center',
        position: 'relative'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    headertext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    iconbox: {
        flexDirection: 'row',
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 15
    },
    main: {
        marginBottom: 90,
    },
    post_wrap: {
        borderBlockColor: '#F0F0F0',
        borderBottomWidth: 1,
        padding: 20,
    },
    tag: {
        width: 48,
        height: 20,
        textAlign: 'center',
        backgroundColor: '#E9EBFF',
        fontSize: 12,
        color: '#9199DD',
        borderRadius: 4,
        marginBottom: 10
    },
    title: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 10
    },
    text: {
        fontSize: 14,
        color: '#A0A0A0',
        marginBottom: 10
    },
    infobox: {
        flexDirection: 'row'
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoimg: {
        width: 20,
        height: 20
    },
    infotext: {
        fontSize: 12,
        marginBottom: 2,
        marginRight: 10
    },
    btnimg: {
        position: 'absolute',
        right: -170,
        bottom: 100
    },
    none: {
        display: 'none'
    }
})

const cates = StyleSheet.create({
    cate_wrap: {
        zIndex: 10,
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headertext: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    deletebtn: {
        width: 24,
        height: 24
    },
    cate_list: {
        padding: 20
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 48
    },
    listimg: {
        marginTop: 3,
        marginRight: 10
    },
    listtext: {
        fontSize: 16
    }
})

const writes = StyleSheet.create({
    write_wrap: {
        zIndex: 10,
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        padding: 20
    },
    text: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 30,
        paddingBottom: 3
    },
    submitbtn: {
        width: 60,
        height: 25,
        backgroundColor: '#C5C5C5',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        borderRadius: 14
    },
    submitbtnfull: {
        width: 60,
        height: 25,
        backgroundColor: '#303030',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        borderRadius: 14
    },
    btntext: {
        color: '#fff',
        fontSize: 14
    },
    writebox: {
        padding: 25,
        paddingTop: 10,
    },
    titleinput: {
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5',
        padding: 10
    },
    contentinput: {
        width: 320,
        height: 340,
        fontSize: 16,
        textAlignVertical: 'top',
        padding: 10,
        paddingRight: 5
    }
})