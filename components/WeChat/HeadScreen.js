/**
 * Created by lenovo on 2018/5/24.
 */
import React, {Component} from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';

//头部公共组件
export default class HeadScreen extends React.Component {
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