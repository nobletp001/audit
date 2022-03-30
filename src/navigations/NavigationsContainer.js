import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/Home';
import { commonStyles } from '../assests/commonStyles';
import BackIcon from './BackIcons';
import PageOne from '../screens/PageOne/PageOne';

import {


    Text,
    
} from 'react-native';
import PageTwo from '../screens/PageTwo/PageTwo';
import PageTwoA from '../screens/PageTwoA/PageTwoA';
import PageTwoB from '../screens/PageTwoB/PageTwoB';
import PageTwoC from '../screens/PageTwoC/PageTwoC';
import PageTwoD from '../screens/PageTwoD/PageTwoD';
import PageTwoE from '../screens/PageTwoE/PageTwoE';
import PageTwoF from '../screens/PageTwoF/PageTwoF';
import PageTwoG from '../screens/PageTwoG/PageTwoG';
import PageTwoH from '../screens/PageTwoH/PageTwoH';
import PageTwoI from '../screens/PageTwoI/PageTwoI';
import PageTwoJ from '../screens/PageTwoJ/PageTwoJ';
import PageTwoK from '../screens/PageTwoK/PageTwoK';
import PageTwoL from '../screens/PageTwoL/PageTwoL';
import PageTwoM from '../screens/PageTwoM/PageTwoM';
import PageTwoN from '../screens/PageTwoN/PageTwoN';
import PageTwoO from '../screens/PageTwoO/PageTwoO';
import PageTwoP from '../screens/PageTwoP/PageTwoP';
import PageTwoQ from '../screens/PageTwoQ/PageTwoQ';
import PageTwoR from '../screens/PageTwoR/PageTwoR';
import PageTwoS from '../screens/PageTwoS/PageTwoS';
import PageTwoT from '../screens/PageTwoT/PageTwoT';
import PageTwoU from '../screens/PageTwoU/PageTwoU';
import PageTwoV from '../screens/PageTwoV/PageTwoV';
import PageTwoX from '../screens/PageTwoX/PageTwoX';
import PageTwoY from '../screens/PageTwoY/PageTwoY';
import PageTwoYA from '../screens/PageTwoYA/PageTwoYA';
import PageTwoYB from '../screens/PageTwoYB/PageTwoYB';
import PageTwoZ from '../screens/PageTwoZ/PageTwoZ';
import PageTwoZA from '../screens/PageTwoZA/PageTwoZA';
import PageTwoZB from '../screens/PageTwoZB/PageTwoZB';
import PageTwoZC from '../screens/PageTwoZC/PageTwoZC';
import PageTwoZD from '../screens/PageTwoZD/PageTwoZD';
import PageTwoZE from '../screens/PageTwoZE/PageTwoZE';
import PageTwoZF from '../screens/PageTwoZF/PageTwoZF';
import PageTwoZFA from '../screens/PageTwoZF/PageTwoZFA';

import PageTwoZF1 from '../screens/PageTwoZF1/PageTwoZF1';
import PageTwoZF2 from '../screens/PageTwoZF2/PageTwoZF2';
import PageTwoZF3 from '../screens/PageTwoZF3/PageTwoZF3';
import PageTwoZF4 from '../screens/PageTwoZF4/PageTwoZF4';
import PageTwoZF5 from '../screens/PageTwoZF5/PageTwoZF5';
import PageTwoZF6 from '../screens/PageTwoZF6/PageTwoZF6';
import PageTwoZF7 from '../screens/PageTwoZF7/PageTwoZF7';
import PageTwoZF8 from '../screens/PageTwoZF8/PageTwoZF8';
import PageTwoZF9 from '../screens/PageTwoZF9/PageTwoZF9';
import PageTwoZF10 from '../screens/PageTwoZF10/PageTwoZF10';
import PageTwoZF11 from '../screens/PageTwoZF11/PageTwoZF11';
import PageTwoZF12 from '../screens/PageTwoZF12/PageTwoZF12';

















// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Button
//                 title="Go to Profile"
//                 onPress={() => navigation.navigate('Profile')}
//             />
//         </View>
//     );
// }

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
        
            screenOptions={{
                headerShown: true,
                showIcon: true,
                headerStyle: commonStyles.screenHeader,
                headerTitleAlign: 'center',
                headerLeft: () => <BackIcon />,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="pageone" component={PageOne}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>General Site Information</Text>
                }}
            />
            <Stack.Screen name="pagetwo" component={PageTwo}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Picture Overall Compound</Text>
                }}
            />
            <Stack.Screen name="pagetwoa" component={PageTwoA}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Picture of Landlord Gate Placard</Text>
                }}
            />
            <Stack.Screen name="pagetwob" component={PageTwoB}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>AT&T Front Gate Placard</Text>
                }}
            />
            <Stack.Screen name="pagetwoc" component={PageTwoC}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}> AT&T Shelter or Equipment</Text>
                }}
            />
            <Stack.Screen name="pagetwod" component={PageTwoD}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}> AT&T Front Door Placard</Text>
                }}
            />
            <Stack.Screen name="pagetwoe" component={PageTwoE}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}> Logbook Entry</Text>
                }}
            />
            <Stack.Screen name="pagetwof" component={PageTwoF}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Wire Trandport:Fibre&Conducts</Text>
                }}
            />
            <Stack.Screen name="pagetwog" component={PageTwoG}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Wireline Fiber Demarc Location (Wide View with entire H-Frame</Text>
                }}
            />
            <Stack.Screen name="pagetwoh" component={PageTwoH}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Fiber terminal/Ped (Reg View)</Text>
                }}
            />
            <Stack.Screen name="pagetwoi" component={PageTwoI}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Fiber terminal/Ped (Reg View)</Text>
                }}
            />
            <Stack.Screen name="pagetwoj" component={PageTwoJ}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Fiber Entry Point</Text>
                }}
            />
            <Stack.Screen name="pagetwok" component={PageTwoK}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Fiber from NEMA Box Entering Shelter</Text>
                }}
            />
            <Stack.Screen name="pagetwol" component={PageTwoL}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Space for 2 fiber or 4 fiber jumper</Text>
                }}
            />
            <Stack.Screen name="pagetwom" component={PageTwoM}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>New Mobility LgX Questions</Text>
                }}
            />
            <Stack.Screen name="pagetwon" component={PageTwoN}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Available Rack Space</Text>
                }}
            />
            <Stack.Screen name="pagetwoo" component={PageTwoO}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Space for new 12 fiber Lgx marked</Text>
                }}
            />
            <Stack.Screen name="pagetwop" component={PageTwoP}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Equipement to be decommissioned</Text>
                }}
            />
            <Stack.Screen name="pagetwoq" component={PageTwoQ}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Length from the new 12 fiber Mobility LGX to the existing Telco LGX</Text>
                }}
            />
            <Stack.Screen name="pagetwor" component={PageTwoR}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>8300 Dafi installation Questions
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwos" component={PageTwoS}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Available Rack Space
                    </Text>
                }}
            /><Stack.Screen name="pagetwot" component={PageTwoT}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Space for 8300 Dafi marked
                    </Text>
                }}
            /><Stack.Screen name="pagetwou" component={PageTwoU}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Equipement to be decommissioned
                    </Text>
                }}
            /><Stack.Screen name="pagetwov" component={PageTwoV}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Length from 8300 Dafi to the existing Telco LGX
                    </Text>
                }}
            /><Stack.Screen name="pagetwox" component={PageTwoX}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>SIAD
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwoy" component={PageTwoY}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>FIBER
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwoya" component={PageTwoYA}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Ciena Overall
                    </Text>
                }}
            />  
            <Stack.Screen name="pagetwoyb" component={PageTwoYB}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Ciena CCLI Code
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwoz" component={PageTwoZ}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Existing BBU
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwoza" component={PageTwoZA}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>5G NR 6630
                    </Text>
                }}
            /> 
              <Stack.Screen name="pagetwozb" component={PageTwoZB}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>5G NR 6630
                    </Text>
                }}
            /> 
              <Stack.Screen name="pagetwozc" component={PageTwoZC}
                
            options={{
                title: <Text style={commonStyles.headerTitleStyle}>LTE 5216
                    </Text>
                }}
            /> 
              <Stack.Screen name="pagetwozd" component={PageTwoZD}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}> LTE 5216 
                    </Text>
                }}
            />   
            <Stack.Screen name="pagetwoze" component={PageTwoZE}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>LTE 5216
                    </Text>
                }}
            />  
             <Stack.Screen name="pagetwozf" component={PageTwoZF}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Power Plant Information
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwozfa" component={PageTwoZFA}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>SAID Information
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwozf1" component={PageTwoZF1}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Power plant brand and model
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwozf2" component={PageTwoZF2}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Main Power plant voltage(48V or 24V)
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwozf3" component={PageTwoZF3}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Rectifier & Converter Count
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwozf4" component={PageTwoZF4}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Breaker slots available
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwozf5" component={PageTwoZF5}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Remote Breaker Panel
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwozf6" component={PageTwoZF6}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Battery Type
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwozf7" component={PageTwoZF7}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Battery Manufacturing Date
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwozf8" component={PageTwoZF8}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Battery count
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwozf9" component={PageTwoZF9}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>AERIAL VIEW OF COMPOUND(AT&T SHELTER/EQUIPMENTBPLUS VIEW WIRELINE DEMARC)
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwozf12" component={PageTwoZF12}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}> Additional Photos - SIAD Make & Model
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwozf10" component={PageTwoZF10}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>Additional Photos
                    </Text>
                }}
            />
            <Stack.Screen name="pagetwozf11" component={PageTwoZF11}
                options={{
                    title: <Text style={commonStyles.headerTitleStyle}>
                    </Text>
                }}
            />

        </Stack.Navigator>
    );
}

export default MyStack