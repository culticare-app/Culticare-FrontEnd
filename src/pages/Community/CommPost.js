import React, { useEffect } from 'react'
import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import CustomText from '../../components/CustomText'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Nav from '../../components/Nav'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import { format } from 'date-fns';

const URL = 'http://ec2-43-202-146-22.ap-northeast-2.compute.amazonaws.com:8082'

const Header = ({ accessToken, postId }) => {
    const navigation = useNavigation()
    const [click, setClick] = React.useState(false);

    const handleDelete = () => {
        axios.delete(`${URL}/posts/auth/delete/${postId}`, {
            headers: {
                Authorization: accessToken
            }
        })
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    Alert.alert('삭제되었습니다.')
                    navigation.navigate('Community')
                }
            })
            .catch((err) => {
                console.log(err)
                Alert.alert('삭제에 실패하였습니다.')
            })
    };

    return (
        <View style={headers.header_wrap}>
            <TouchableOpacity onPress={() => { navigation.navigate('Community') }}>
                <Image source={require('../../assets/images/comm/back.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setClick(!click) }}>
                <Image source={require('../../assets/images/comm/more.png')} />
            </TouchableOpacity>
            {click ? (
                <TouchableOpacity style={headers.delbtn} onPress={() => { handleDelete() }}>
                    <CustomText style={headers.deltext}>삭제하기</CustomText>
                </TouchableOpacity>
            ) : (<></>)}
        </View>
    )
}

const Post = ({ accessToken, postId }) => {
    const [check, setCheck] = React.useState(false);
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [formattedDate, setFormattedDate] = React.useState('');

    useEffect(() => {
        axios.get(`${URL}/posts/auth/${postId}`, {
            headers: {
                Authorization: `${accessToken}`,
            }
        })
            .then((res) => {
                setData(res.data);
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [accessToken, postId]);

    useEffect(() => {
        if (data) {
            const date = format(new Date(data.createdAt), 'yyyy년 M월 d일 HH시 mm분');
            setFormattedDate(date);
        }
    }, [data]);

    const HartSubmit = (like) => {
        if (like) {
            axios.post(`${URL}/posts/auth/like/${postId}`, {}, {
                headers: {
                    Authorization: `${accessToken}`,
                }
            })
                .then((res) => {
                    console.log(res);
                    setCheck(!check);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios.delete(`${URL}/posts/auth/like/${postId}`, {
                headers: {
                    Authorization: `${accessToken}`,
                }
            })
                .then((res) => {
                    console.log(res);
                    setCheck(!check);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

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
                    <CustomText style={posts.time}>{formattedDate}</CustomText>
                    <TouchableOpacity style={posts.hart_box} onPress={() => { HartSubmit(data.liked) }}>
                        <Image style={posts.hart} source={data.liked ? require('../../assets/images/comm/hart_postfull.png') : require('../../assets/images/comm/hart_post.png')} />
                        <CustomText style={posts.count}>{data.likeCount}</CustomText>
                    </TouchableOpacity>
                </View>
            ) : (
                <></>
            )}
        </>
    );
}

const InputComment = ({ accessToken, postId, setChange, change }) => {
    const [content, setContent] = React.useState('');

    const onComment = () => {
        if (content === '') {
            Alert.alert('댓글 내용을 채워주세요!')
            return;
        }

        axios.post(`${URL}/comments/auth/new/${postId}`, {
            content: content
        }, {
            headers: {
                Authorization: accessToken
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    setChange(!change)
                    setContent('')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <View style={inputs.input_wrap}>
            <TextInput value={content} onChangeText={(text) => setContent(text)} style={inputs.input} placeholder='댓글을 입력해주세요' />
            <TouchableOpacity onPress={() => { onComment() }}>
                <Image style={inputs.btn} source={require('../../assets/images/comm/commentput.png')} />
            </TouchableOpacity>
        </View>
    )
}

const Comment = ({ accessToken, postId, change }) => {
    const [click, setClick] = React.useState(false);
    const [list, setList] = React.useState([])

    useEffect(() => {
        if (postId) {
            axios.get(`${URL}/comments/list/${postId}`, {
                headers: {
                    Authorization: accessToken,
                },
                params: {
                    page: 0,
                    size: 10,
                    sort: []
                }
            })
                .then((res) => {
                    if (res.status === 200) {
                        setList([...res.data.comments])
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [change])

    return (
        <View style={comments.comment_wrap}>
            {list.map((list, key) => (
                <View key={key} style={comments.comment_box}>
                    <CustomText style={comments.userid}>@carecare</CustomText>
                    <CustomText style={comments.content}>{list.content}</CustomText>
                    <CustomText style={comments.time}>1분 전</CustomText>
                    <TouchableOpacity style={comments.hart_box} onPress={() => { setClick(!click) }}>
                        <Image style={comments.hart} e source={click ? require('../../assets/images/comm/hart_postgray.png') : require('../../assets/images/comm/hart_postgraybin.png')} />
                        <CustomText style={comments.count}>{list.likeCount}</CustomText>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}

const CommPost = () => {
    const accessToken = useSelector((state) => state.auth.accessToken)
    const route = useRoute();
    const { postId } = route.params;
    const [change, setChange] = React.useState(false)

    return (
        <>
            <View style={styles.commpost_wrap}>
                <ScrollView style={styles.commpost_box} accessToken={accessToken} postId={postId} >
                    <Header />
                    <Post accessToken={accessToken} postId={postId} />
                    <Comment accessToken={accessToken} postId={postId} change={change} />
                </ScrollView>
                <InputComment accessToken={accessToken} postId={postId} change={change} setChange={setChange} />
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
        padding: 20,
        position: 'relative'
    },
    delbtn: {
        position: 'absolute',
        right: 22,
        bottom: -5,
        backgroundColor: '#FA8080',
        width: 100,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deltext: {
        color: '#fff'
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
        borderRadius: 8,
        backgroundColor: '#fff',
        zIndex: 5
    }
})

const comments = StyleSheet.create({
    comment_wrap: {
        padding: 20,
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1,
    },
    comment_box: {
        marginBottom: 15,
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1,
        paddingBottom: 15
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
    },

    commpost_box: {
        paddingBottom: 60
    }
})