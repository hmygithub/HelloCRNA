import React, {Component} from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
//const BagView = require('./components/BagView');
//const LoginView = require('./components/LoginView');
//const BannerView = require('./components/BannerView');
//const RainBowScrollView  = require('./components/RainBowScrollView');
const MyListView = require('./components/MyListView');
import HeadScreen from './components/WeChat/HeadScreen';
import DynamicScreen from './components/WeChat/DynamicScreen';
import DynamicDetailScreen from './components/WeChat/DynamicDetailScreen';
import FindScreen from './components/WeChat/FindScreen';
import MyScreen from './components/WeChat/MyScreen';
//const HeadScreen = require('./components/WeChat/HeadScreen');
//const DynamicScreen = require('./components/WeChat/DynamicScreen');
//const FindScreen = require('./components/WeChat/FindScreen');
//const MyScreen = require('./components/WeChat/MyScreen')

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

const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

const RootTabs = createBottomTabNavigator({// createMaterialTopTabNavigator
    Home: {
        screen: HomeScreen
    },
    Profile: {
        screen: ProfileScreen
    },
    dynamic: {
        screen: DynamicScreen,
        navigationOptions: ({navigation}) => ({
            title:'动态',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-text-outline" size={26} color={tintColor}></Icon>
            )
        })
    },
    dynamicDetail: {
        screen: DynamicDetailScreen,
        navigationOptions: ({navigation}) => ({
            title:'动态详情',
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