/**
 * Created by lenovo on 2018/5/19.
 */
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const BaseUrl = 'http://192.168.0.105:3000/images/';
const Dimensions =  require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;

class MyListView extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource: []
        }
    }
    // 加载数据
    fetchData = () => {
        fetch(`${BaseUrl}test_wine.json`,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                let i = 0;
                let dataList = [];
                responseData.map(item => {
                    dataList.push({
                        key: i,
                        ...item
                    });
                    i++;
                })
                this.setState({ dataSource: dataList })
            }).done()
    }
    //渲染完组件，加载数据
    componentDidMount(){
        this.fetchData();
    }
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={item => item.key.toString()}
                    data={this.state.dataSource}
                    renderItem={({item}) => (
                        <View style={styles.container}>
                            <Image source={{ uri: BaseUrl + item.image }} style={styles.iconStyle}></Image>
                            <View style={styles.textWrapperStyle}>
                                <Text style={styles.titleStyle}>{item.name}</Text>
                                <Text style={styles.moneyStyle}>￥{item.money}</Text>
                            </View>
                        </View>
                    )}
                    >
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e8e8e8',
        padding: 10
    },
    iconStyle: {
        width: 60,
        height: 60,
        marginRight: 15
    },
    textWrapperStyle: {
        flexDirection: 'column'
    },
    titleStyle: {
        fontSize: 13,
        width: ScreenWidth * 0.7,
        marginBottom: 8
    },
    moneyStyle:{
        fontSize: 12,
        color: '#71e928'
    }
})
module.exports = MyListView;