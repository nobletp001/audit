import React from 'react'
import {

    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ScrollView,
    Button,
    TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import {    pagetwoFAction } from '../../Store/AuditSlice';
Icon.loadFont();



export default function PageOneE({ navigation }) {
    const [text, onChangeText] = React.useState("");
    const [text1, onChangeText1] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const [text3, onChangeText3] = React.useState("");
    const [text4, onChangeText4] = React.useState("");
    const [text5, onChangeText5] = React.useState("");
    const [text6, onChangeText6] = React.useState("");
    const [text7, onChangeText7] = React.useState("");
    const [text8, onChangeText8] = React.useState("");
    const [text9, onChangeText9] = React.useState("");
    const [text15, onChangeText15] = React.useState("");

    const dispatch = useDispatch()

    const data = {
        text,
        text1,
        text2,
        text3,
        text4,
        text5,
        text6,
        text7,
        text8,
        text9,
      
    }


    const handleSubmit = () => {
        dispatch(   pagetwoFAction(data))
        onChangeText('')
        onChangeText1('')
        onChangeText2('')
        onChangeText3('')
        onChangeText4('')
        onChangeText5('')
        onChangeText6('')
        onChangeText7('')
        onChangeText8('')
        onChangeText9('')
        onChangeText15('submited successfuly')
        navigation.navigate('pagetwog')

      


    }
    return (
        < ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1.5, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 2 }}><Text style={styles.tableText}>Where is the Wireline Fiber Demarc Location?
                        (Indoor or Outdoor) (Wall, Rack, H-Frame or etc.):

                    </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1.5, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 2 }}><Text style={styles.tableText}>What direction is the Wireline Fiber Demarc facing
                        (North, South, West or East)?: 

                    </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText1}
                            value={text1}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1.5, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 2 }}><Text style={styles.tableText}>
                        How many fibers are terminated on the front of the existing fiber terminal & how many open ports are spare?Need 4 open ports for the new dark fibers: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input3}
                            onChangeText={onChangeText2}
                            value={text2}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1.5, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 2 }}><Text style={styles.tableText}>If no, are there any spare to place new Fiber terminal?: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText3}
                            value={text3}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1.5, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 2 }}><Text style={styles.tableText}> Is there enough space in the conduit(s) between the NEMA box and the Mobility shelter or cabinet (if outdoor site) for two 2 single fiber or one 4 fiber jumper?: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input3}
                            onChangeText={onChangeText4}
                            value={text4}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1.5, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 2 }}><Text style={styles.tableText}>Is there mule pull strings available to pull new fibers to equipment room through conduits?: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText5}
                            value={text5}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1.5, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 2 }}><Text style={styles.tableText}>Length of Fiber drop cable needed from Fiber Demarc to new 8300 Dafi Equipment: </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText6}
                            value={text6}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1.5, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 2 }}><Text style={styles.tableText}>Identify location for new 12 fiber LGX (Note: required on all sites. Preferable to be installed in same rack as DaFi equipment.) Dimension: 19 (W) x 12 (D) X 4(H) [in]
                        2 rack units needed:
                    </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input4}
                            onChangeText={onChangeText7}
                            value={text7}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1.5, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 2 }}><Text style={styles.tableText}>New LGX location marked?(Take Photo): </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText8}
                            value={text8}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.tableContainer}>
                    <View style={{ flex: 1.5, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 2 }}><Text style={styles.tableText}>What direction is the New LGX location facing (North, South, West or East)?:  </Text></View>
                    <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText9}
                            value={text9}
                        />
                    </View>

                </View>
            </TouchableWithoutFeedback>
     
            <Text style={{ fontSize: 9, color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{text15 && text15}</Text>

         
            
         

           
            <View style={styles.submitContainer}>
                <View style={{ width: "40%", marginRight: '20%' }}>
                    <Button
                        title="Submit"
                        color="#214d77"
                        onPress={handleSubmit}
                        style={{
                            borderRadius: 10

                        }}
                    />
                </View>

                <TouchableOpacity style={styles.nextButton}>
                    <Icon
                        name="chevron-right-box"
                        size={40}
                        color="#214d77"
                        type="MaterialCommunityIcons"
                        iconStyle={{}}
                        onPress={() => navigation.navigate('pagetwog')}
                    />

                </TouchableOpacity>
            </View>
        </ ScrollView>
    )
}




const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        // marginHorizontal:8,
        marginBottom: 25
    },

    tableContainer: {
        paddingHorizontal: 4,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    input: {

        borderWidth: 1,
        width: '100%',
        borderColor: 'grey',
        textAlignVertical: 'top',
        color: 'black',
        borderRadius: 5



        // backgroundColor:'black'

    },
    input3: {

        borderWidth: 1,
        width: '100%',
        height: 75,
        borderColor: 'grey',
        textAlignVertical: 'top',
        color: 'black',
        borderRadius: 5



        // backgroundColor:'black'

    },
    input4: {

        borderWidth: 1,
        width: '100%',
        height: 95,
        borderColor: 'grey',
        textAlignVertical: 'top',
        color: 'black',
        borderRadius: 5



        // backgroundColor:'black'

    },

    tableText: {
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
        color: '#5a5b5e',
        fontWeight: 'bold'
    },
    submitContainer: {
        marginVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'


    },
    nextButton: {

        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    }

});