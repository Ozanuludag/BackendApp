import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, FlatList, SafeAreaView } from 'react-native';
import { FAB, Card } from 'react-native-paper';

const Home = () => {
    const data= [
        {id:1, name:"Monica",  postion:"React developer"},
        {id:2, name:"Stefan",  postion:"React developer"},
        {id:3, name:"Michael", postion:"React developer"},
        {id:4, name:"Jessica", postion:"React developer"},
        {id:5, name:"Jessica", postion:"React developer"},
        {id:6, name:"Jessica", postion:"React developer"},
        {id:7, name:"Jessica", postion:"React developer"},
        {id:8, name:"Jessica", postion:"React developer"},
        {id:9, name:"Jessica", postion:"React developer"},
        {id:10, name:"Jessica", postion:"React developer"},
    ]
const renderList = ({item}) => {
    return(
       
        <Card style={styles.mycard}>
        <View style={styles.carView}>
                <Image 
                    style={{width:60, height:60, borderRadius:30,marginVertical:10}}
                    source={{uri:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
                />
            <View>
                <Text style={{marginLeft:25, fontSize:18}}>{item.name}</Text>
                <Text style={{marginLeft:25, fontSize:12}}>{item.postion}</Text>
            </View>
        </View>
       
    </Card>
  

    );
}    

    return (
      <SafeAreaView style={{flex:1}}>
        
        <FlatList 
            data={data}
            renderItem={renderList}
            keyExtractor={item => item.id.toString()}
        />

        <FAB
            style={styles.fab}
            normal
            icon="plus"
            theme={{colors:{accent:'#006aff'}}}
            onPress={() => console.log('Pressed')}
        />
       
      </SafeAreaView>
    );
}

const styles= StyleSheet.create({
    
    carView: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-start'
        
    },
    mycard: {
        margin:5, 
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
      },
  
})

export default Home;