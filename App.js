import React, {Component} from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
//const BagView = require('./components/BagView');
//const LoginView = require('./components/LoginView');
//const BannerView = require('./components/BannerView');
//const RainBowScrollView  = require('./components/RainBowScrollView');
const MyListView = require('./components/MyListView');
import Icon from 'react-native-vector-icons/Ionicons';

//class HomeScreen extends React.Component {
//    render(){
//        return(
//            <View>
//                <Text>Home Screen</Text>
//                <Button
//                    title="跳转到详情页"
//                    onPress={() => this.props.navigation.navigate('Details')}
//                    ></Button>
//            </View>
//
//        )
//    }
////}
//
//class DetailsScreen extends React.Component {
//    render(){
//        return(
//            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//                <Text>Details Screen</Text>
//                <Button
//                    title="跳转到Home页"
//                    onPress={() => this.props.navigation.navigate('Home')}
//                    />
//                <Button
//                    title="再次跳到Details页"
//                    onPress={() => {
//                    console.log(this.props.navigation);
//                    this.props.navigation.push('Details')}
//                    }
//                    />
//            </View>
//
//        )
//    }
//}

//const RootStack = createStackNavigator({
//    Home: HomeScreen,
//    Details: DetailsScreen
//},{
//    initialRouteName: 'Details'
//});

//export default class first extends Component {
//    render() {
//        /*
//         return <LoginView />
//         return <BagView />
//         return <BannerView /> <MyListView />
//         */
//        return <RootStack />
//    }
//}
// https://www.kancloud.cn/daiji/webapp/509781
//头部公共组件
class HeadScreen extends React.Component {
    render() {
        return (
            <View style={{height:35,backgroundColor:'#242529',padding:10}}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:1}}>
                        <Text style={{color:'#ffffff'}}>微信</Text>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Text><Icon name="md-add" color="#fff" size={18} /></Text>
                    </View>
                </View>
            </View>
        );
    }
}
//动态组件
const DynamicScreen = () => (
    <view style={styles.container}>
        <HeadScreen></HeadScreen>
    </view>
)
//发现组件
const FindScreen = () => (
    <view style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>
    </view>
)

//我的组件
const MyScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);
const HomeScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'}
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            >
        </FlatList>
    </View>
);

//const ProfileScreen = () => (
//    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <Text>Profile Screen</Text>
//    </View>
//);

const RootTabs = createBottomTabNavigator({// createMaterialTopTabNavigator
    //Home: {
    //    screen: HomeScreen
    //},
    //Profile: {
    //    screen: ProfileScreen
    //}
    dynamic: {
        screen: DynamicScreen,
        navigationOptions: ({navigation}) => ({
            title:'动态',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-text-outline" size={26} color={tintColor}></Icon>
            )
        })
    },
    find: {
        screen: FindScreen,
        navigationOptions: ({navigation}) => ({
            title: '发现',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-bulb-outline" size={26} color={tintColor} />
            )
        })
    },
    my:{
        screen:MyScreen,
        navigationOptions: ({navigation}) => ({
            title: '我的',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-person-outline" size={26} color={tintColor} />
            )
        })
    }
},{
    //tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#28a745',
        inactiveTintColor: '#232323',
        style:{
            backgroundColor: '#f2f2f2'
        },
        //去掉安卓点击之后的小黄线
        indicatorStyle: {
            height: 0
        },
        //是否显示icon图标
        showIcon:true,
        //选项卡样式
        tabStyle:{
            height:46
        },
        //icon样式
        iconStyle:{
            marginBottom:-6,
            marginTop:10
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color:'#232323'
    },
    news:{
        fontSize:20,
        paddingLeft:10,
        borderBottomColor:'#dadada',
        borderBottomWidth:1,
        justifyContent:'center'
    }
});

export default RootTabs;