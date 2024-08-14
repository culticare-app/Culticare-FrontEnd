import React, { useEffect } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import CustomText from '../../components/CustomText'
import { TextInput } from 'react-native-gesture-handler'
import Nav from '../../components/Nav'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux'

const URL = 'http://ec2-43-202-146-22.ap-northeast-2.compute.amazonaws.com:8082'

const Header = () => {
    const navigation = useNavigation()

    return (
        <View style={headers.header_wrap}>
            <TouchableOpacity onPress={() => { navigation.navigate('Community') }}>
                <Image source={require('../../assets/images/comm/back.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../assets/images/comm/more.png')} />
            </TouchableOpacity>
        </View>
    )
}

const Post = () => {
    const accessToken = useSelector((state) => state.auth.accessToken)
    const [check, setCheck] = React.useState(false);
    const [data, setData] = React.useState()
    const route = useRoute();
    const [loading, setLoading] = React.useState(false)
    const { postId } = route.params;

    console.log(accessToken)

    useEffect(() => {
        axios.get(`${URL}/posts/auth/${postId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
            .then((res) => {
                setData(res.data)
                setLoading(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const HartSubmit = (like) => {
        if (like) {
            axios.post(`${URL}/posts/auth/like/${postId}`, {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })
                .then((res) => {
                    console.log(res);
                    setCheck(!check)
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            axios.delete(`${URL}/posts/auth/like/${postId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })
                .then((res) => {
                    console.log(res);
                    setCheck(!check)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <>
            {loading ? (
                <View style={posts.post_wrap}>
                    <CustomText style={posts.bigtage}>{data.category}</CustomText>
                    <CustomText style={posts.title}>{data.title}</CustomText>
                    <CustomText style={posts.userid}>@{data.writerName}</CustomText>
                    <CustomText style={posts.content}>
                        {data.content}
                    </CustomText>
                    <View style={posts.tagebox}>
                        <CustomText style={posts.tage}>{data.tags}</CustomText>
                    </View>
                    <CustomText style={posts.time}>{data.createdAt}</CustomText>
                    <TouchableOpacity style={posts.hart_box} onPress={() => { HartSubmit(data.liked) }}>
                        <Image style={posts.hart} source={data.liked ? require('../../assets/images/comm/hart_postfull.png') : require('../../assets/images/comm/hart_post.png')} />
                        <CustomText style={posts.count}>{data.likeCount}</CustomText>
                    </TouchableOpacity>
                </View>
            ) : (
                <></>
            )}
        </>
    )
}

const InputComment = () => {
    return (
        <View style={inputs.input_wrap}>
            <TextInput style={inputs.input} placeholder='댓글을 입력해주세요' />
            <Image style={inputs.btn} source={require('../../assets/images/comm/commentput.png')} />
        </View>
    )
}

const Comment = () => {
    const [click, setClick] = React.useState(false)

    return (
        <View style={comments.comment_wrap}>
            <CustomText style={comments.userid}>@carecare</CustomText>
            <CustomText style={comments.content}>대화 시간을 많이 가지는 게 좋을 것 같아요</CustomText>
            <CustomText style={comments.time}>1분 전</CustomText>
            <TouchableOpacity style={comments.hart_box} onPress={() => { setClick(!click) }}>
                <Image style={comments.hart} e source={click ? require('../../assets/images/comm/hart_postgray.png') : require('../../assets/images/comm/hart_postgraybin.png')} />
                <CustomText style={comments.count}>1</CustomText>
            </TouchableOpacity>
        </View>
    )
}

const CommPost = () => {
    return (
        <>
            <View style={styles.commpost_wrap}>
                <Header />
                <Post />
                <InputComment />
                <Comment />
            </View>
            <Nav />
        </>
    )
}

export default CommPost

const headers = StyleSheet.create({
    header_wrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1,
        padding: 20

    }
})

const posts = StyleSheet.create({
    post_wrap: {
        padding: 20,
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 8,
    },
    bigtage: {
        width: 48,
        height: 20,
        borderRadius: 4,
        backgroundColor: '#E9EBFF',
        textAlign: 'center',
        color: '#9199DD',
        fontSize: 12,
        marginBottom: 5,
        paddingTop: 1
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Pretendard-SemiBold',
        marginBottom: 2
    },
    userid: {
        fontSize: 12,
        color: '#a0a0a0',
        marginBottom: 10
    },
    content: {
        fontSize: 16,
        color: '#000',
        marginBottom: 20
    },
    tagebox: {
        flexDirection: 'row'
    },
    tage: {
        color: '#394CF7',
        fontSize: 16,
        marginRight: 5,
        marginBottom: 10
    },
    time: {
        fontSize: 12,
        color: '#bababa',
        marginBottom: 10
    },
    hart_box: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    hart: {
        marginRight: 5
    },
    count: {
        fontSize: 14,
        color: '#bababa'
    }
})

const inputs = StyleSheet.create({
    input_wrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 100,
        left: 9,
        width: '95%',
        backgroundColor: '#F5F5F5',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8
    }
})

const comments = StyleSheet.create({
    comment_wrap: {
        padding: 20,
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1,
    },
    userid: {
        fontSize: 12,
        color: '#a0a0a0',
        marginBottom: 5
    },
    content: {
        fontSize: 16,
        color: '#303030',
        marginBottom: 2
    },
    time: {
        fontSize: 12,
        color: '#bababa',
        marginBottom: 8
    },
    hart_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        width: 39,
        height: 20
    },
    hart: {
        marginRight: 5
    },
    count: {
        fontSize: 12,
        color: '#A0A0A0'
    }
})

const styles = StyleSheet.create({
    commpost_wrap: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    }
})