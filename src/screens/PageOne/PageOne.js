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
import { useSelector, useDispatch } from 'react-redux';
import { pageoneAction } from '../../Store/AuditSlice';

export default function PageOne({ navigation }) {

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
    const [text10, onChangeText10] = React.useState("");
    const [text11, onChangeText11] = React.useState("");
    const [text12, onChangeText12] = React.useState("");
    const [text13, onChangeText13] = React.useState("");
    const [text15, onChangeText15] = React.useState("");

    const dispatch = useDispatch()
const data={
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
    text10,
    text11,
    text12,
    text13
}
 

    const handleSubmit= ()=>{
        dispatch(pageoneAction(data))
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
        onChangeText10('')
        onChangeText11('')
        onChangeText12('')
        onChangeText13('')
        onChangeText15('submited successfuly')

        navigation.navigate('pagetwo')

}
  return (
      < ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View style={styles.tableContainer}>
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>FA LOCATION: </Text></View>
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
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>USID: </Text></View>
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
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>SITE ADDRESS: </Text></View>
                  <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                      <TextInput
                          style={styles.input}
                          onChangeText={onChangeText2}
                          value={text2}
                      />
                  </View>

              </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View style={styles.tableContainer}>
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>City, State, Zip: </Text></View>
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
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Site Owner: id: Crow, ATC, etc: </Text></View>
                  <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                      <TextInput
                          style={styles.input}
                          onChangeText={onChangeText4}
                          value={text4}
                      />
                  </View>

              </View>

          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View style={styles.tableContainer}>
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Gate codes / Access code: </Text></View>
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
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Site Technician / Contact: </Text></View>
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
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Site Technician / Contact: </Text></View>
                  <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                      <TextInput
                          style={styles.input}
                          onChangeText={onChangeText7}
                          value={text7}
                      />
                  </View>

              </View>
          </TouchableWithoutFeedback>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View style={styles.tableContainer}>
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Date of Site Visit: </Text></View>
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
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Vendor: </Text></View>
                  <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                      <TextInput
                          style={styles.input}
                          onChangeText={onChangeText9}
                          value={text9}
                      />
                  </View>

              </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View style={styles.tableContainer}>
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Tech Performing the Audit (First / Last Name): </Text></View>
                  <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                      <TextInput
                          style={styles.input}
                          onChangeText={onChangeText10}
                          value={text10}
                      />
                  </View>

              </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View style={styles.tableContainer}>
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Did Auditor Sign In AND Out of the Logbook?: </Text></View>
                  <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                      <TextInput
                          style={styles.input}
                          onChangeText={onChangeText11}
                          value={text11}
                      />
                  </View>

              </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View style={styles.tableContainer}>
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Did Auditor Sign In AND Out of the Logbook?: </Text></View>
                  <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                      <TextInput
                          style={styles.input}
                          onChangeText={onChangeText12}
                          value={text12}
                      />
                  </View>

              </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View style={styles.tableContainer}>
                  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 3 }}><Text style={styles.tableText}>Is Existing AT&T Equipment Installed on Site in Shelter, Tenant Improvement, OEM Outdoor Cabinets, or Hybrid Outdoor Cabinets?: </Text></View>
                  <View style={{ flex: 1, alignSelf: 'stretch', padding: 3 }}>
                      <TextInput
                          style={styles.input1}
                          onChangeText={onChangeText13}
                          value={text13}
                      />
                  </View>

              </View>
          </TouchableWithoutFeedback>

        
          <Text style={{ fontSize: 9, color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{text15 && text15}</Text>

        
         
          <View style={styles.submitContainer}>
              <View style={{ width:"40%", marginRight:'20%'}}>  
                  <Button
                  title="Submit"
                      color="#214d77"
                  onPress={handleSubmit}
              />
              </View>
             
              <TouchableOpacity >
                  <Icon
                      name="chevron-right"
                      size={60}
                      color="#214d77"
                      iconStyle={{}}
                      onPress={() => navigation.navigate('pagetwo')}
                  />

              </TouchableOpacity>
          </View>
      </ ScrollView>
  )
}




const styles = StyleSheet.create({
    container:{
        marginTop:10,
        // marginHorizontal:8,
        marginBottom:25
    },
   
    tableContainer:{
        paddingHorizontal:4,
         flexDirection: 'row',
         alignItems:'center',
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
        width:'100%',
        height:40,
        borderColor:'grey',
        textAlignVertical: 'top',
        color: 'black'

        // backgroundColor:'black'
      
    },
    input1: {

        borderWidth: 1,
        width: '100%',
        height: 75,
        borderColor: 'grey',
        textAlignVertical: 'top',
        color:'black'
        // backgroundColor:'black'

    },

    tableText:{
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
        color: '#5a5b5e',
        fontWeight: 'bold'
    },
    submitContainer:{
        marginVertical:20,
        paddingHorizontal: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
     

    }
});