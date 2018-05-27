/**
 * Created by lenovo on 2018/5/27.
 */
import React from 'react';
import { FlatList, StyleSheet,View, Text,Button,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadScreen from './HeadScreen';

export default class DynamicScreen extends React.Component {
    static navigationOptions = {
        title: '��̬',
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-text-outline" size={26} color={tintColor} />
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <HeaderCreen></HeaderCreen>
                <View style={styles.container}>
                    <FlatList
                        data={[
                            {key:'1',name:'����',text:'�Ҳ�֪��˵ʲô����˵ʲôȻ�������ֲ�֪��˵ʲô�ˣ�ϣ����ײ�ĺ��Ӷ������룬�����г��������������лл�������ѣ���Ҫ������Щ�����ǵĺ���',time:'2017-01-02 10:20:33'},
                            {key:'2',name:'xiongshi1998',text:'�����޷�ѡ�񣬵���������ѡ��',time:'2017-01-02 10:20:33'},
                            {key:'3',name:'2222',text:'����Ĺ�ע���ع�᲻��Ժ��ӵ�����������Ӱ�죿һ����Ƶ��뿪�󣬺��ӻ᲻���е�ʧ�䣿',time:'2017-01-02 10:20:33'},
                            {key:'4',name:'2222',text:'˵���û��ý��ı��� ˭֪����ɽ��Ŀ��Ѱ� ϣ��ý�����ע�������Ⱥ�� ��ɽ����кܶ�ܶ�ı����к���',time:'2017-01-02 10:20:33'},
                            {key:'5',name:'2222',text:'˵���û��ý��ı��� ˭֪����ɽ��Ŀ��Ѱ� ϣ��ý�����ע�������Ⱥ�� ��ɽ����кܶ�ܶ�ı����к���',time:'2017-01-02 10:20:33'}
                        ]}
                        renderIem={({item}) => (
                            <View style={styles.item}>
                                <View style={{flex: 1}}>
                                    <Text><Icon name="ios-chatboxes-outline" color="#000" size={30}/></Text>
                                </View>
                                <View style={{flex: 9}}>
                                    <Text onPress={()=>this.props.navigator.navigate('find')} style={styles.name}>{item.name}</Text>
                                    <Text onPress={()=>this.props.navigation.navigate('dynamicDetail',{name: '6666'})} style={styles.text}></Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                            </View>
                        )}
                        ></FlatList>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
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
})