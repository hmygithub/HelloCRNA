import React, {Component} from 'react';
import { Button, View, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation'
//const BagView = require('./components/BagView');
//const LoginView = require('./components/LoginView');
//const BannerView = require('./components/BannerView');
//const RainBowScrollView  = require('./components/RainBowScrollView');
const MyListView = require('./components/MyListView');

class HomeScreen extends React.Component {
    render(){
        return(
            <View>
                <Text>Home Screen</Text>
                <Button
                    title="跳转到详情页"
                    onPress={() => this.props.navigation.navigate('Details')}
                    ></Button>
            </View>

        )
    }
}

class DetailsScreen extends React.Component {
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
                <Button
                    title="跳转到Home页"
                    onPress={() => this.props.navigation.navigate('Home')}
                    />
                <Button
                    title="再次跳到Details页"
                    onPress={() => {
                    console.log(this.props.navigation);
                    this.props.navigation.push('Details')}
                    }
                    />
            </View>

        )
    }
}

const RootStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen
},{
    initialRouteName: 'Details'
});

export default class first extends Component {
    render() {
        /*
         return <LoginView />
         return <BagView />
         return <BannerView /> <MyListView />
         */
        return <RootStack />
    }
}