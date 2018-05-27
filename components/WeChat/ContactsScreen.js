/**
 * Created by lenovo on 2018/5/24.
 */
import React from 'react';
import { FlatList, StyleSheet,View, Text,Button,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadScreen from './HeadScreen';

//ͨѶ¼���
export default class ContactsScreen extends React.Component {
    static navigationOptions = {
        title: 'ͨѶ¼',
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-contacts-outline" size={26} color={tintColor} />
        )
    };
    render(){
        return (
            <View style={[styles.container,styles.findBody]}>
                <HeadScreen title="ͨѶ¼"></HeadScreen>
                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="md-person-add" color="#51BBE5" size={22} />
                    <Text style={styles.findViewText}>�µ�����</Text>
                </View>

                <View style={[styles.findView,styles.findMT]}>
                    <Icon style={styles.findViewIcon} name="ios-people-outline" color="#51BBE5" size={22} />
                    <Text style={styles.findViewText}>Ⱥ��</Text>
                </View>

                <View style={[styles.findView,styles.findMT]}>
                    <Icon style={styles.findViewIcon} name="ios-bookmark-outline" color="#BAEE44" size={22} />
                    <Text style={styles.findViewText}>��ǩ</Text>
                </View>

                <View style={[styles.findView,styles.findMT]}>
                    <Icon style={styles.findViewIcon} name="ios-contact-outline" color="#3399FF" size={22} />
                    <Text style={styles.findViewText}>���ں�</Text>
                </View>
                <View style={{ marginTop:15}}>
                    <Text>�ҵ���ҵ</Text>
                </View>
                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="ios-color-filter-outline" color="#55C1E7" size={22} />
                    <Text style={styles.findViewText}>���ۼ���</Text>
                </View>
                <View style={{ marginTop:10}}>
                    <Text>A</Text>
                </View>
                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="ios-cloud-outline" color="#55C1E7" size={22} />
                    <Text style={styles.findViewText}>������</Text>
                </View>
                <View style={{ marginTop:10}}>
                    <Text>B</Text>
                </View>
                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="ios-basketball-outline" color="#55C1E7" size={22} />
                    <Text style={styles.findViewText}>B.�ǵ�</Text>
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
        flex:1,
        flexDirection:'row',
        borderBottomWidth:6,
        borderBottomColor:'#F2F2F2',
        padding:10
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
    //���������ʽ
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
});