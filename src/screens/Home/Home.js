
import React from 'react';

import {
 
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <View style={styles.card}>
<Text style={styles.heading}>Welcome To Audit</Text>

                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('pageone')}
                >
                    <Text style={styles.headingLight}> Create Audit</Text>
</TouchableOpacity>
           </View>
        </View>
    );
}

export default HomeScreen




const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: '600',
        paddingBottom: 20,
        textAlign: 'center',
        color:'#214d77',
        fontWeight:'bold'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
       
        width: '80%', 
        height: '20%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        paddingVertical: 25,
        paddingHorizontal: 25,
    
      
    },
    button: {
       width:'100%',
       
        backgroundColor: "#214d77",
        padding: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    headingLight:{
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
});