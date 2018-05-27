/**
 * Created by lenovo on 2018/5/24.
 */
import React from 'react';
import { FlatList, StyleSheet, View, Text, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadScreen from './HeadScreen';

export default class FindScreen extends React.Component {
    static navigationOptions = {
        title: '����',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-compass-outline" size={26} color={tintColor}/>
        )
    }
    render(){
        return(
            <View style={[styles.container, styles.findBody]}>
                <HeadScreen title='����'></HeadScreen>
                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="ios-contacts-outline" color="#3399FF" size={22} />
                    <Text style={styles.findViewText}>����Ȧ</Text>
                </View>

                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="ios-search-outline" color="#51BBE5" size={22} />
                    <Text style={styles.findViewText}>��һ��</Text>
                </View>

                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="ios-tablet-portrait" color="#BAEE44" size={22} />
                    <Text style={styles.findViewText}>����</Text>
                </View>

                <View style={[styles.findView, styles.findMT]}>
                    <Icon style={styles.findViewIcon} name="ios-game-controller-b-outline" color="#3399FF" size={22} />
                    <Text style={styles.findViewText}>��Ϸ</Text>
                </View>

                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="ios-code" color="#55C1E7" size={22} />
                    <Text style={styles.findViewText}>С����</Text>
                </View>
            </View>
        )
    }
}

//�����ʽ
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 6,
        borderBottomColor: '#f2f2f2',
        padding: 10
    },
    name:{
        color:'#388BFF',
        fontSize:16
    },
    text:{
        color:'#232323',
        fontSize:16
    },
    time:{
        color:'gray',
        fontSize:12,
        marginTop:8
    },
    findView:{
        backgroundColor:'#fff',
        marginTop:15,
        padding:10,
        justifyContent:'center',
        flexDirection:'row'
    },
    findViewIcon:{
        flex:1
    },
    findViewText:{
        flex:9,
        marginTop:1
    },
    findBody:{
        backgroundColor:'#EBEBEB'
    },
    findMT:{
        marginTop:0,
        borderTopWidth:1,
        borderTopColor:'#EBEBEB'
    }
})
