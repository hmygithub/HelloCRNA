/**
 * Created by lenovo on 2018/5/27.
 */
import React from 'react';
import { FlatList, StyleSheet,View, Text,Button,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadScreen from './HeadScreen';

export default class DynamicDetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name,
        headerStyle: styles.headerBar,
        headerTintColor: '#fff'
    })
    render(){
        return(
            <View style={styles.container}>
                <Text>DynamicDetailScreen</Text>
            </View>
        )
    }
}
//组件样式
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerBar:{
        height:35,
        backgroundColor:'#242529',
        // justifyContent:'center',
        marginTop:-25
    }
});