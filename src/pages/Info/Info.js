import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import CustomText from '../../components/CustomText'
import Nav from '../../components/Nav'
import axios from 'axios'
import { useSelector } from 'react-redux'

const URL = 'http://ec2-43-202-146-22.ap-northeast-2.compute.amazonaws.com:8082'

const InfoHeader = ({ tabnow }) => {
    return (
        <View style={headers.header}>
            <CustomText style={headers.title}>{tabnow}</CustomText>
            <TouchableOpacity style={headers.mark}>
                <Image source={require('../../assets/images/info/bookmark.png')} />
            </TouchableOpacity>
        </View>
    )
}

const InfoTab = ({ tabnow, setTabnow }) => {
    return (
        <View style={tabs.tabs_wrap}>
            <TouchableOpacity onPress={() => { setTabnow('정보 조회') }} style={tabnow === '정보 조회' ? tabs.btnclick : tabs.btn}>
                <CustomText style={tabnow === '정보 조회' ? tabs.textclick : tabs.text}>자료</CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setTabnow('지원센터') }} style={tabnow === '지원센터' ? tabs.btnclick : tabs.btn}>
                <CustomText style={tabnow === '지원센터' ? tabs.textclick : tabs.text}>지원센터</CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setTabnow('채용 공고') }} style={tabnow === '채용 공고' ? tabs.btnclick : tabs.btn}>
                <CustomText style={tabnow === '채용 공고' ? tabs.textclick : tabs.text}>채용 공고</CustomText>
            </TouchableOpacity>
        </View>
    )
}

const InfoSearch = () => {
    return (
        <View style={searchs.search}>
            <Image style={searchs.searchimg} source={require('../../assets/images/info/search.png')} />
            <TextInput style={searchs.searchinput} placeholder='검색' />
        </View>
    )
}

const InfoList = ({ setClick, list, setClicklist }) => {
    return (
        <ScrollView style={lists.list_wrap}>
            <CustomText style={lists.listtitle}>최신 자료</CustomText>
            {list.map((list, key) => (
                <View style={lists.listbox} key={key}>
                    <TouchableOpacity style={lists.list} onPress={() => { setClick(true); setClicklist(list) }}>
                        <CustomText style={lists.text}>{list.name}</CustomText>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    )
}

const InfoPop = ({ setClick }) => {
    const [yesmark, setYesMark] = useState(false)

    return (
        <View style={pops.background}>
            <View style={pops.pop_wrap}>
                <View style={pops.box}>
                    <TouchableOpacity style={pops.downbtn} onPress={() => { setClick(false) }}><Image source={require('../../assets/images/search/button.png')} /></TouchableOpacity>
                    <CustomText style={pops.title}>[고용노동부] 온열질환예방OPS(OnePageSheet) 17개 외국어</CustomText>
                    <CustomText style={pops.content}>
                        📢고용노동부에서 배포한여름철 폭염 온열질환 예방 가이드 안내입니다.온열질환 예방 가이드 17개 외국어 번역본을 제공하오니, 외국인 근로자에 대해 온열질환 예방 3대 예방수칙 및 폭염단계별 대응요령을 확인 가능하도록 현장에 게시하여주시기 바랍니다.
                        출처 : 고용노동부
                    </CustomText>
                </View>
                <TouchableOpacity style={pops.btnbox} onPress={() => { setYesMark(!yesmark) }}>
                    <View style={yesmark ? pops.btnclick : pops.btn}>
                        <Image style={pops.btnimg} source={yesmark ? require('../../assets/images/info/bookmark_full.png') : require('../../assets/images/info/bookmark.png')} />
                        <CustomText style={yesmark ? pops.btntextclick : pops.btntext}>저장하기</CustomText>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const CenterPop = ({ setClick, clicklist }) => {
    const [yesmark, setYesMark] = useState(false)

    return (
        <View style={pops.background}>
            <View style={pops.pop_wrap}>
                <View style={pops.box}>
                    <TouchableOpacity style={pops.downbtn} onPress={() => { setClick(false) }}><Image source={require('../../assets/images/search/button.png')} /></TouchableOpacity>
                    <CustomText style={pops.title}>{clicklist.name}</CustomText>
                    <View style={pops.infobox}>
                        <Image source={require('../../assets/images/info/witch.png')} />
                        <CustomText style={pops.content}>{clicklist.address}</CustomText>
                    </View>
                    <View style={pops.infobox}>
                        <Image source={require('../../assets/images/info/tel.png')} />
                        <CustomText style={pops.content}>{clicklist.telephone}</CustomText>
                    </View>
                    <Image style={pops.mapimg} source={require('../../assets/images/info/kakao.jpg')} />
                </View>
                <TouchableOpacity style={pops.btnbox} onPress={() => { setYesMark(!yesmark) }}>
                    <View style={yesmark ? pops.btnclick : pops.btn}>
                        <Image style={pops.btnimg} source={yesmark ? require('../../assets/images/info/bookmark_full.png') : require('../../assets/images/info/bookmark.png')} />
                        <CustomText style={yesmark ? pops.btntextclick : pops.btntext}>저장하기</CustomText>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const EmployPop = ({ setClick }) => {
    const [yesmark, setYesMark] = useState(false)

    return (
        <View style={pops.background}>
            <View style={pops.pop_wrap}>
                <View style={pops.box}>
                    <TouchableOpacity style={pops.downbtn} onPress={() => { setClick(false) }}><Image source={require('../../assets/images/search/button.png')} /></TouchableOpacity>
                    <CustomText style={pops.title}>[단오풍정] 세신을 배울 다문화가정 여성     모집</CustomText>
                    <View style={pops.employbox}><CustomText style={pops.employtext}>언어</CustomText><CustomText style={pops.employcontent}>vi</CustomText></View>
                    <View style={pops.employbox}><CustomText style={pops.employtext}>출신국가</CustomText><CustomText style={pops.employcontent}>vn,ph,kh,th,id,etc,</CustomText></View>
                    <View style={pops.employbox}><CustomText style={pops.employtext}>근무지역</CustomText><CustomText style={pops.employcontent}>seongbuk</CustomText></View>
                    <View style={pops.employbox}><CustomText style={pops.employtext}>근무일수</CustomText><CustomText style={pops.employcontent}>week5 (everyday)</CustomText></View>
                    <View style={pops.employbox}><CustomText style={pops.employtext}>주말근무</CustomText><CustomText style={pops.employcontent}>possible</CustomText></View>
                    <View style={pops.employbox}><CustomText style={pops.employtext}>임금</CustomText><CustomText style={pops.employcontent}>9,860원</CustomText></View>
                    <View style={pops.employbox}><CustomText style={pops.employtext}>모집인원</CustomText><CustomText style={pops.employcontent}>1명</CustomText></View>
                    <View style={pops.employbox}><CustomText style={pops.employtext}>복리후생</CustomText><CustomText style={pops.employcontent}>없음</CustomText></View>
                </View>
                <TouchableOpacity style={pops.btnbox} onPress={() => { setYesMark(!yesmark) }}>
                    <View style={yesmark ? pops.btnclick : pops.btn}>
                        <Image style={pops.btnimg} source={yesmark ? require('../../assets/images/info/bookmark_full.png') : require('../../assets/images/info/bookmark.png')} />
                        <CustomText style={yesmark ? pops.btntextclick : pops.btntext}>저장하기</CustomText>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const PageNation = ({ setPage }) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 5;

    const handlePagePress = (page) => {
        setCurrentPage(page);
        setPage(page)
    };

    return (
        <View style={pages.container}>
            <TouchableOpacity
                onPress={() => handlePagePress(currentPage > 1 ? currentPage - 1 : 1)}
                style={pages.arrow}
            >
                <Image source={require('../../assets/images/info/pageback.png')} />
            </TouchableOpacity>

            {Array.from({ length: totalPages }, (_, index) => (
                <TouchableOpacity
                    key={index + 1}
                    onPress={() => handlePagePress(index + 1)}
                    style={[
                        pages.pageNumber,
                        currentPage === index + 1 && pages.currentPage
                    ]}
                >
                    <CustomText style={[
                        pages.pageText,
                        currentPage === index + 1 && pages.currentPageText
                    ]}>
                        {index + 1}
                    </CustomText>
                </TouchableOpacity>
            ))}

            <TouchableOpacity
                onPress={() => handlePagePress(currentPage < totalPages ? currentPage + 1 : totalPages)}
                style={pages.arrow}
            >
                <Image source={require('../../assets/images/info/pagenext.png')} />
            </TouchableOpacity>
        </View>
    );
};

const Info = () => {
    const accessToken = useSelector((state) => state.auth.accessToken)
    const [click, setClick] = React.useState(false)
    const [list, setList] = React.useState([])
    const [clicklist, setClicklist] = React.useState('')
    const [tabnow, setTabnow] = React.useState('지원센터')
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        if (tabnow === '지원센터') {
            axios.get(`${URL}/info/welfare-center/list`, {
                headers: {
                    Authorization: accessToken
                },
                params: {
                    page: 5,
                    size: 8,
                    sort: []
                }
            })
                .then((res) => {
                    if (res.status === 200) {
                        setList([...res.data.welfareCenters])
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        } else if (tabnow === '정보 조회') {
            setList([
                { name: '[고용노동부] 온열질환예방OPS(OnePageSheet)...' },
                { name: '[재난별 행동 요령] 태풍' },
                { name: '[서식] 외국인근로자 고용허가 관련 신청서 (2024)' },
                { name: '2024년 달라지는 제도 - 외국인·재외국민 피부양자...' },
                { name: '친구에게 돈을 빌려주기로 했습니다. 빌려주기 전 꼭...' },
                { name: '쉬운 한국어로 쓴 한국생활안내' },
                { name: '[태국어] 한국의 성폭력 개념과 제도 정복하기!' },
                { name: '[캄보디아어] 한국의 성폭력 개념과 제도 정복하기!' },
            ])
        } else {
            setList([
                { name: '[케이웨이브] 중화권 외국인환자유치 통역 및 서비스...' },
                { name: '[단오풍정] 세신을 배울 다문화가정 여성 모집' },
                { name: '[동작구육아종합지원센터] 동작구 어린이 영어놀이...' },
                { name: '[グローバルエドゥパートナー] 日本人(ネイテ..' },
                { name: '[글로벌에듀파트너] 일본인(원어민) 강사 구인' },
                { name: '[밀알나눔재단] 기빙플러스 답십리점 매장직 오후메...' },
                { name: '[폽타이와웨이브6] 홀서빙 및 주방보조' },
                { name: '[KS한국고용정보] KB저축 전화응대(캄보디아)' },
            ])
        }
    }, [tabnow])

    return (
        <>
            <ScrollView style={styles.Info_wrap}>
                <InfoHeader tabnow={tabnow} />
                <InfoTab tabnow={tabnow} setTabnow={setTabnow} />
                <InfoSearch />
                <InfoList setClick={setClick} list={list} setClicklist={setClicklist} page={page} />
                <PageNation setPage={setPage} />
            </ScrollView>
            {click && tabnow === '정보 조회' ? (
                <InfoPop setClick={setClick} />
            ) : (
                <>
                    {click && tabnow === '지원센터' ? (
                        <CenterPop setClick={setClick} clicklist={clicklist} />
                    ) : (
                        <>
                            {click && tabnow === '채용 공고' ? (
                                <EmployPop setClick={setClick} />
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                </>
            )}
            <Nav />
        </>
    )
}

export default Info

const styles = StyleSheet.create({
    Info_wrap: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 20,
    }
})

const headers = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    }
})

const tabs = StyleSheet.create({
    tabs_wrap: {
        flexDirection: 'row',
        borderRadius: 8,
        width: 335,
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#F5F5F5',
        width: 111,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnclick: {
        width: 111,
        backgroundColor: '#303030',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#A0A0A0',
        fontSize: 16
    },
    textclick: {
        color: '#fff',
        fontSize: 16
    }
})

const searchs = StyleSheet.create({
    search: {
        flexDirection: 'row',
        width: 335,
        height: 40,
        alignItems: 'center',
        borderBottomColor: '#C5C5C5',
        borderBottomWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 20
    },
    searchimg: {
        marginRight: 5,
        marginBottom: 5
    },
    searchinput: {
        fontSize: 16,
    }
})

const lists = StyleSheet.create({
    list_wrap: {
        height: 355
    },
    listtitle: {
        fontSize: 16,
        color: '#A0A0A0',
        fontFamily: 'Pretendard-Bold'
    },
    list: {
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        justifyContent: 'center',
        fontFamily: 'Pretendard-Medium'
    },
    text: {
        color: '#000',
        fontSize: 15.5
    }
})

const pops = StyleSheet.create({
    background: {
        zIndex: 10,
        backgroundColor: '#000000B8',
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0,
        height: '100%',
        justifyContent: 'flex-end'
    },
    pop_wrap: {
        zIndex: 11,
        width: '100%',
        height: 500,
        backgroundColor: '#fff',
        borderTopEndRadius: 40,
        borderTopLeftRadius: 40,
        padding: 20,
        paddingTop: 40,
        position: 'relative'
    },
    employbox: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    employtext: {
        fontSize: 16
    },
    title: {
        paddingBottom: 15,
        borderBottomColor: '#303030',
        borderBottomWidth: 1,
        color: '#000',
        fontSize: 20,
        fontFamily: 'Pretendard-Medium',
    },
    infobox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    content: {
        fontSize: 16,
        color: '#000',
        lineHeight: 22,
        marginLeft: 5,
        marginTop: 10
    },
    employcontent: {
        fontSize: 16,
        color: '#000',
        lineHeight: 22,
        marginLeft: 10,
    },
    mapimg: {
        width: '100%',
        height: 200,
        marginTop: 10
    },
    btnbox: {
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 30
    },
    btn: {
        flexDirection: 'row',
        width: 132,
        height: 40,
        borderColor: '#303030',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    btnclick: {
        flexDirection: 'row',
        width: 132,
        height: 40,
        backgroundColor: '#303030',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    btnimg: {
        width: 14,
        height: 18,
        marginRight: 8
    },
    btntext: {
        fontSize: 14,
        color: '#303030'
    },
    btntextclick: {
        fontSize: 14,
        color: '#fff'
    },
    downbtn: {
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        paddingBottom: 10
    }
})

const pages = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    arrow: {
        padding: 10,
    },
    arrowText: {
        fontSize: 12,
    },
    pageNumber: {
        width: 21,
        height: 21,
        marginHorizontal: 5,
        borderRadius: 500,
        paddingRight: 1,
        paddingBottom: 1
    },
    currentPage: {
        backgroundColor: '#000',
    },
    pageText: {
        fontSize: 16,
        textAlign: 'center',
    },
    currentPageText: {
        color: '#fff',
    },
});