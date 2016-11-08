/**
 * Created by apple on 16/11/7.
 */
'use strict'
import React from 'react'
import {
    Component,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import SecondVC from './SecondVC'
class HomeMainView extends React.Component{

    componentDidMount() {
        const {navigator} = this.props;
        this.timer = setTimeout(()=>{
            console.log(this.props.navigationBarHidden);
            console.log(this.props);


        },1000);
    }
    render(){
        console.log('load view');
        return(
        <View style={homeStyle.mainViewStyle}>
            <Text style={homeStyle.textStyle}>testhha</Text>
            <Text style={homeStyle.textStyle}>testhha</Text>
            <Text style={homeStyle.textStyle}>testhha</Text>
            <Text style={homeStyle.textStyle}>testhha</Text>
            <Text style={homeStyle.textStyle}>testhha</Text>
            <TouchableOpacity style={homeStyle.textStyle} onPress={()=>{
                const {navigator} = this.props;
                navigator.push({
                    component:SecondVC,
                    title:'Second',
                    backButtonTitle:'返回',
                    rightButtonTitle:'ces'
                })

            }}>
                <Text>testhha</Text>
            </TouchableOpacity>
        </View>
    )
    };
}
var homeStyle = StyleSheet.create({
    mainViewStyle:{
        marginTop:64,
        backgroundColor:'#ffffff'
    },
   textStyle:{
       marginTop:50,
       marginLeft:30,

   }

});
export default HomeMainView;