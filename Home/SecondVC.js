/**
 * Created by apple on 16/11/7.
 */
'use strict'
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    NavigatorIOS,
    ListView
}from 'react-native'

//var {height, width} = Dimensions.get('window');

class SecondVC extends React.Component{
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }
    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    enableEmptySections={true}
                    keyboardShouldPersistTaps={true}
                    automaticallyAdjustContentInsets={true}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                    renderSectionHeader={()=><Text>HHHA</Text>}
                />
            </View>
        );
    }
    //render(){
    //    console.log('load view');
    //    return(
    //        <View style={homeStyle.mainViewStyle}>
    //            <Text style={homeStyle.textStyle}>testhha</Text>
    //            <Text style={homeStyle.textStyle}>testhha</Text>
    //            <Text style={homeStyle.textStyle}>testhha</Text>
    //            <Text style={homeStyle.textStyle}>testhha</Text>
    //            <Text style={homeStyle.textStyle}>testhha</Text>
    //            <Text style={homeStyle.textStyle}>testhha</Text>
    //
    //        </View>
    //    )
    //};
}
var homeStyle = StyleSheet.create({
    mainViewStyle:{
        marginTop:64,
        backgroundColor:'#ffffff'
    },
    textStyle:{
        marginTop:50,
        marginLeft:30
    }

});
export default SecondVC