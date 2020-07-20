import React, { useState } from 'react';
import { View, Text, StyleSheet,Image, FlatList, SafeAreaView, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const CreateEmpoleyee = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [picture, setPicture] = useState("");
    const [salary, setSalary] = useState("");
    const [modal, setModal] = useState(false);
    console.log(modal);
    return (
        <View style={styles.root}>
           
        <TextInput
            label="Name"
            value={name} 
            mode="outlined"
            theme={theme}
            onChangeText={text => setName(text)}
            style={styles.input}
            />

        <TextInput
            label="Email"
            value={email} 
            mode="outlined"
            theme={theme}
            keyboardType="email-address"
            onChangeText={text => setName(text)}
            style={styles.input}
            />

        <TextInput
            label="Phone"
            value={phone} 
            mode="outlined"
            theme={theme}
            keyboardType="number-pad"
            onChangeText={text => setName(text)}
            style={styles.input}            
            />    
             <TextInput
            label="Salary"
            value={salary} 
            mode="outlined"
            theme={theme}
            keyboardType="number-pad"
            onChangeText={text => setName(text)}
            style={styles.input}
            />
        <Button
            style={styles.input} 
            icon="upload"
            theme={theme}
            mode="contained" 
            onPress={() => setModal(true)}>
                Upload Image
        </Button>
        <Button
            style={styles.input}
            theme={theme} 
            icon="content-save" 
            mode="contained" 
            onPress={() => setModal(true)}>
                Save
        </Button>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}
        >
        <View style={styles.modalView}>
            <View style={styles.modalButtonView}>
                <Button
                    icon="camera"
                    mode="contained"
                    theme={theme}  
                    onPress={() => setModal(false)}>
                        Camera
                </Button>
                <Button
                icon="image-area"
                mode="contained"
                theme={theme} 
                onPress={() => setModal(false)}>
                    Gallery
                </Button>
            </View>
            <Button
            style={{marginVertical:10,marginHorizontal:20, borderRadius:20}}
            mode="contained"
            theme={theme} 
            onPress={() => setModal(false)}>
                    Cancel
                </Button>
        </View>        
        </Modal>
        
        </View>
    )
}

const theme = {
    colors: {
        primary:"#3282b8",
    }
}

const styles= StyleSheet.create({
    root: { 
        flex:1
    },

    input: {
        margin:5
    },

    modalView: {
        position:'absolute',
        bottom:10,
        width:'100%',
        backgroundColor:'white'
    },
    
    modalButtonView:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10
    }
})

export default CreateEmpoleyee;