/**
 * Created by apple on 16/11/6.
 */
'use strict'
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    NavigatorIOS
}from 'react-native'

//var {height, width} = Dimensions.get('window');
import HomeMainView from './HomeMainView'

class HomeVC extends React.Component{

    render(){
        return (
            <View style={{flex:1}}>
                <NavigatorIOS
                    initialRoute ={
                {
                    component:HomeMainView,
                    title:'home',
                    passProps: {hideNavBar: true},
                    backButtonTitle:' '
                }
                }
                    style={{flex: 1}}{...this.props}
                />
            </View>
        )
    };



}
var  style = StyleSheet.create({
    homeStyle:{
        backgroundColor:'#ffffff'
    },
    textStyle:{
        marginTop:10,
        marginLeft:20
    }
});
export default HomeVC