/**
 * Created by lenovo on 2018/5/15.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
    } from 'react-native';
const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;
const BaseUrl = 'http://192.168.0.105:3000/images/';
const JsonData = require('../data/test2.json');

class BannerView extends Component{
    static defaultProps = {
        duration : 2000
    }
    constructor(props){
        super(props);
        this.state = {
            currentPage: 0 //当前页面
        };
    }
    //开启定时器
    startTimer = ()=>{
        let scrollView = this.refs.scrollView;
        this.timer = setInterval(()=>{
            let page = ++this.state.currentPage == JsonData.data.length ? 0 : this.state.currentPage;
            this.setState({currentPage:page});
            console.log('page:'+page);
            let offsetX = this.state.currentPage * ScreenWidth;
            scrollView.scrollTo({x:offsetX, y:0, animated:true});

        },this.props.duration);
    }
    //开启定时任务，不断翻页
    componentDidMount = ()=> {
        this.startTimer();
    }
    componentWillUnmount =() =>{
        clearInterval(this.timer);
    }
    handleScrollEnd = (e) => {
        // 获取水平滑动的距离
        let currentPage = Math.floor(e.nativeEvent.contentOffset.x / ScreenWidth);
        this.setState({ currentPage });
    }
    renderImages = ()=>{
        return JsonData.data.map((item,i) => {
            return(
                <Image key={`image${i}`} source={{uri: BaseUrl + item.img}} style={styles.imageStyle}></Image>
            )
        });
    }
    // 画圆
    renderCircles = () => {
        return JsonData.data.map((item,i)=>{
            let style = {};
            if(i === this.state.currentPage){
                style={color: 'orange'};
            }
            return <Text key={`circle${i}`} style={[styles.circleText,style]}>&bull;</Text>
        })
    }
    render(){
        return <View style={styles.container}>
            <ScrollView
                ref="scrollView"
                horizontal={true}
                pagingEnabled={true}
                showHorizontalScrollIndicator={false}
                onMomentScrollEnd={this.handleScrollEnd}
                >
                {this.renderImages()}
            </ScrollView>
            <View style={styles.circleContainer}>
                {this.renderCircles()}
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    imageStyle: {
        width: ScreenWidth,
        height: 200
    },
    circleContainer:{
        flexDirection:'row',
        //relative：生成相对定位的元素，相对于其正常位置进行定位。
        position:'absolute',
        bottom:0,
        left:10
    },
    circleText:{
        fontSize:25,
        color:'#FFF'
    }
});

module.exports = BannerView;