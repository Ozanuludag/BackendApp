import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CreateEmployee from './screens/CreateEmployee'
import Home from './screens/Home'
import CreateEmpoleyee from './screens/CreateEmployee';
const App = () => {

    return (
     <View style={{flex:1, backgroundColor:'#e0e0e0'}}>
       <CreateEmpoleyee />
       {/* <Home /> */}
     </View>
    );
}

export default App;