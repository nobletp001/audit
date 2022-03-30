import RNHTMLtoPDF from 'react-native-html-to-pdf';
import React from 'react';
import { PermissionsAndroid } from 'react-native';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';


import {

    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Platform
} from 'react-native';
import { useSelector } from 'react-redux';
import image from '../../../android/app/src/main/assets/w.jpeg'
import FileViewer from 'react-native-file-viewer';
const DEFAULT_IMAGE = Image.resolveAssetSource(image).uri;
function HomeScreen() {
    const [loading, setLoading] = React.useState('')
    const [path, setPath] = React.useState(null)
    const dataState = useSelector((state) => state.audit)
    const pageone = dataState.pageone
    const pagetwo = dataState.pagetwo?.uri?.length < 1 ? 'lo' : dataState.pagetwo?.uri
    const pagetwoA = dataState.pagetwoA?.uri?.length < 1 ? 'lo' : dataState.pagetwoA?.uri
    const pagetwoB = dataState.pagetwoB?.uri?.length < 1 ? 'lo' : dataState.pagetwoB?.uri
    const pagetwoC = dataState.pagetwoC?.uri?.length < 1 ? 'lo' : dataState.pagetwoC?.uri
    const pagetwoD = dataState.pagetwoD?.uri?.length < 1 ? 'lo' : dataState.pagetwoD?.uri
    const pagetwoE = dataState.pagetwoE?.uri?.length < 1 ? 'lo' : dataState.pagetwoE?.uri
    const pagetwoF = dataState.pagetwoF
    const pagetwoG = dataState.pagetwoG?.uri?.length < 1 ? 'lo' : dataState.pagetwoG?.uri
    const pagetwoH = dataState.pagetwoH?.uri?.length < 1 ? 'lo' : dataState.pagetwoH?.uri
    const pagetwoI = dataState.pagetwoI?.uri?.length < 1 ? 'lo' : dataState.pagetwoI?.uri
    const pagetwoJ = dataState.pagetwoJ?.uri?.length < 1 ? 'lo' : dataState.pagetwoJ?.uri
    const pagetwoK = dataState.pagetwoK?.uri?.length < 1 ? 'lo' : dataState.pagetwoK?.uri
    const pagetwoL = dataState.pagetwoL?.uri?.length < 1 ? 'lo' : dataState.pagetwoL?.uri
    const pagetwoM = dataState.pagetwoM
    const pagetwoN = dataState.pagetwoN?.uri?.length < 1 ? 'lo' : dataState.pagetwoN?.uri
    const pagetwoO = dataState.pagetwoO?.uri?.length < 1 ? 'lo' : dataState.pagetwoO?.uri
    const pagetwoP = dataState.pagetwoP?.uri?.length < 1 ? 'lo' : dataState.pagetwoP?.uri
    const pagetwoQ = dataState.pagetwoQ?.uri?.length < 1 ? 'lo' : dataState.pagetwoQ?.uri
    const pagetwoR = dataState.pagetwoR
    const pagetwoS = dataState.pagetwoS?.uri?.length < 1 ? 'lo' : dataState.pagetwoS?.uri
    const pagetwoT = dataState.pagetwoT?.uri?.length < 1 ? 'lo' : dataState.pagetwoT?.uri
    const pagetwoU = dataState.pagetwoU?.uri?.length < 1 ? 'lo' : dataState.pagetwoU?.uri
    const pagetwoV = dataState.pagetwoV?.uri?.length < 1 ? 'lo' : dataState.pagetwoV?.uri
    const pagetwoX = dataState.pagetwoX?.uri?.length < 1 ? 'lo' : dataState.pagetwoX?.uri
    const pagetwoY = dataState.pagetwoY?.uri?.length < 1 ? 'lo' : dataState.pagetwoY?.uri
    const pagetwoYA = dataState.pagetwoYA?.uri?.length < 1 ? 'lo' : dataState.pagetwoYA?.uri
    const pagetwoYB = dataState.pagetwoYB?.uri?.length < 1 ? 'lo' : dataState.pagetwoYB?.uri

    const pagetwoZ = dataState.pagetwoZ
    const pagetwoZA = dataState.pagetwoZA?.uri?.length < 1 ? 'lo' : dataState.pagetwoZA?.uri
    const pagetwoZB = dataState.pagetwoZB?.uri?.length < 1 ? 'lo' : dataState.pagetwoZB?.uri
    const pagetwoZC = dataState.pagetwoZC?.uri?.length < 1 ? 'lo' : dataState.pagetwoZC?.uri
    const pagetwoZD = dataState.pagetwoZD?.uri?.length < 1 ? 'lo' : dataState.pagetwoZD?.uri
    const pagetwoZE = dataState.pagetwoZE?.uri?.length < 1 ? 'lo' : dataState.pagetwoZE?.uri
    const pagetwoZF = dataState.pagetwoZF
    const pagetwoFA = dataState.pagetwoFA

    const pagetwoZF1 = dataState.pagetwoZF1?.uri?.length < 1 ? 'lo' : dataState.pagetwoZF1?.uri
    const pagetwoZF2 = dataState.pagetwoZF2?.uri?.length < 1 ? 'lo' : dataState.pagetwoZF2?.uri
    const pagetwoZF3 = dataState.pagetwoZF3?.uri?.length < 1 ? 'lo' : dataState.pagetwoZF3?.uri
    const pagetwoZF4 = dataState.pagetwoZF4?.uri?.length < 1 ? 'lo' : dataState.pagetwoZF4?.uri
    const pagetwoZF5 = dataState.pagetwoZF5?.uri?.length < 1 ? 'lo' : dataState.pagetwoZF5?.uri
    const pagetwoZF6 = dataState.pagetwoZF6?.uri?.length < 1 ? 'lo' : dataState.pagetwoZF6?.uri
    const pagetwoZF7 = dataState.pagetwoZF7?.uri?.length < 1 ? 'lo' : dataState.pagetwoZF7?.uri
    const pagetwoZF8 = dataState.pagetwoZF8?.uri?.length < 1 ? 'lo' : dataState.pagetwoZF8?.uri
    const pagetwoZF9 = dataState.pagetwoZF9?.uri?.length < 1 ? 'lo' : dataState.pagetwoZF9?.uri
    const pagetwoZF12 = dataState.pagetwoZF12?.uri?.length < 1 ? 'lo' : dataState.pagetwoZF12?.uri

    const pagetwoZF10 = dataState.pagetwoZF10
// console.log(pagetwoZF10)












    const htmlContent = `
         <html>
          <head>
            <meta charset="utf-8">
            <title>Invoice</title>
            <link rel="license" >
            <style>
           ${htmlStyles}
            </style>
          </head>
          <body>
      <div style="height:100%">
            <h1>AT&T C-BAND (DAFI) Audit Report</h1>
            
            <table id="customers">
                <tr>
                    <th colspan="2">GENERAL SITE INFORMATION</th>
            
                </tr>
                <tr>
                    <td>FA LOCATION</td>
                    <td> ${pageone.text ? pageone.text : 'N/A'}</td>
            
                </tr>
                <tr>
                    <td>USID</td>
                     <td> ${pageone.text1 ? pageone.text1 : 'N/A'}</td>

                </tr>
                  <tr>
                    <td>SITE ADDRESS</td>
                     <td> ${pageone.text2 ? pageone.text2 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>City, State, Zip</td>
                     <td> ${pageone.text3 ? pageone.text3 : 'N/A'}</td>

                </tr>
 <tr>
                    <td>Site Owner: id: Crow, ATC, etc</td>
                     <td> ${pageone.text4 ? pageone.text4 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>Gate codes / Access code</td>
                     <td> ${pageone.text5 ? pageone.text5 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>Access/Location Information</td>
                     <td> ${pageone.text6 ? pageone.text6 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>Site Technician / Contact</td>
                     <td> ${pageone.text7 ? pageone.text7 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>Date of Site Visit</td>
                     <td> ${pageone.text8 ? pageone.text8 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>Vendor</td>
                     <td> ${pageone.text9 ? pageone.text9 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>Tech Performing the Audit (First / Last Name)</td>
                     <td> ${pageone.text10 ? pageone.text10 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td> Did Auditor Sign In AND Out of the Logbook?</td>
                     <td> ${pageone.text11 ? pageone.text11 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>Access issues? (COVID restrictions)</td>
                     <td> ${pageone.text12 ? pageone.text12 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>Is Existing AT&T Equipment Installed on Site in Shelter, Tenant Improvement, OEM Outdoor Cabinets, or Hybrid Outdoor Cabinets?:</td>
                     <td> ${pageone.text13 ? pageone.text13 : 'N/A'}</td>

                </tr>
            </table>
            
    <div class="footer" style="font-size: 12px;">
                <div id="footerImage">
                <img src='https://famesfx.com/footerlogo.jpeg' alt="images" id="footerImg" srcset="">
                </div>
                <p>@ 2021AT&T intellectual Property. All rights reserved. AT&T and the logo are trademarks of AT&T intellectual
                    Property</p>
            </div>
      </div>
       <div style="height:100%">
<div  style="height:390px" id="photoCon">
<div  id="photo1">
    Photo-Log Site
</div >
<div id="photo2">
Picture of Overall Compound
</div>
${pagetwo.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwo}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}

</div>
<div style="height:390px" id="photoCon">
    <div id="photo1">
        Photo-Log Site
    </div>
    <div id="photo2">
    Picture of Landlord Gate Placard
    </div>
${pagetwoA.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoA}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
     <div style="height:100%">
<div  style="height:390px" id="photoCon">
<div  id="photo1">
    Photo-Log Site
</div >
<div id="photo2">
AT&T Front Gate Placard
</div>
${pagetwoB.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoB}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}

</div>
<div style="height:390px" id="photoCon">
    <div id="photo1">
        Photo-Log Site
    </div>
    <div id="photo2">
	Picture of AT&T Shelter or Equipment (Overall)
    </div>
${pagetwoC.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoC}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
     <div style="height:100%">
<div  style="height:390px" id="photoCon">
<div  id="photo1">
    Photo-Log Site
</div >
<div id="photo2">
AT&T Front Door Placard
</div>
${pagetwoD.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoD}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}

</div>
<div style="height:390px" id="photoCon">
    <div id="photo1">
        Photo-Log Site
    </div>
    <div id="photo2">
	Logbook Entry
    </div>
${pagetwoE.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoE}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
 <div style="height:100%">
          

            <table id="customers" style="height:500px">
                <tr>
                    <th colspan="2">Wireline Transport: Fiber Demar and Conduits Questions</th>

                </tr>
                <tr>
                    <td style="font-size: 12px;">Where is the Wireline Fiber Demarc Location?
(Indoor or Outdoor) (Wall, Rack, H-Frame or etc.):
</td>
                    <td> ${pagetwoF.text ? pagetwoF.text : 'N/A'}</td>
            
                </tr>
                <tr>
                    <td style="font-size: 12px;">
What direction is the Wireline Fiber Demarc facing 
(North, South, West or East)?
</td>
                     <td> ${pagetwoF.text1 ? pagetwoF.text1 : 'N/A'}</td>

                </tr>
                  <tr>
                    <td style="font-size: 12px;">How many fibers are terminated on the front of the existing fiber terminal & how many open ports are spare? Need 4 open ports for the new dark fibers</td>
                     <td> ${pagetwoF.text2 ? pagetwoF.text2 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td style="font-size: 12px;">If no, are there any spare to place new Fiber terminal?</td>
                     <td> ${pagetwoF.text3 ? pagetwoF.text3 : 'N/A'}</td>

                </tr>
 <tr>
                    <td style="font-size: 12px;">Is there enough space in the conduit(s) between the NEMA box and the Mobility shelter or cabinet (if outdoor site) for two 2 single fiber or one 4 fiber jumper?</td>
                     <td> ${pagetwoF.text4 ? pagetwoF.text4 : 'N/A'}</td>

                </tr>
                 <tr style="font-size: 12px;">
                    <td>Are there mule pull strings available to pull new fibers to equipment room through conduits?</td>
                     <td> ${pagetwoF.text5 ? pagetwoF.text5 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td style="font-size: 12px;">Length of Fiber drop cable needed from Fiber Demarc to new 8300 Dafi Equipment</td>
                     <td> ${pagetwoF.text6 ? pagetwoF.text6 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td style="font-size: 12px;">Identify location for new 12 fiber LGX (Note: required on all sites. Preferable to be installed in same rack as DaFi equipment.) Dimension: 19 (W) x 12 (D) X 4(H) [in]
2 rack units needed
</td>
                     <td> ${pagetwoF.text7 ? pagetwoF.text7 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td style="font-size: 12px;">New LGX location marked? (Take Photo)	</td>
                     <td> ${pagetwoF.text8 ? pagetwoF.text8 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td style="font-size: 12px;">What direction is the New LGX location facing (North, South, West or East)? </td>
                     <td> ${pagetwoF.text9 ? pagetwoF.text9 : 'N/A'}</td>

                </tr>     
            </table>
      </div>
     <div style="height:100%">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
    Photo-Log-LGX
</div >
<div id="photo2">
Wireline Fiber Demarc Location (Wide View with entire H-Frame)
</div>
${pagetwoG.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoG}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
<div style="height:380px" id="photoCon">
    <div id="photo1">
        Photo-Log -LGX
    </div>
    <div id="photo2">
	Fiber terminal/Ped (Reg View)
    </div>
${pagetwoH.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoH}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
     <div style="height:990px">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
 Photo Log – LGX
</div >
<div id="photo2">
NEMA BOX (near Fiber Demarc Location)
</div>
${pagetwoI.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoI}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
<div style="height:380px" id="photoCon">
    <div id="photo1">
        Photo Log - NEMA BOX
    </div>
    <div id="photo2">
	Fiber Entry Point
    </div>
${pagetwoJ.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoJ}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
     <div style="height:100%">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
 Photo Log - No LGX
</div >
<div id="photo2">
Fiber from NEMA Box Entering Shelter
</div>
${pagetwoK.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoK}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
<div style="height:380px" id="photoCon">
    <div id="photo1">
     Photo Log – Conduit space to pull additional Fiber
    </div>
    <div id="photo2">
	Space for two 2 fiber or one 4 fiber jumper
    </div>
${pagetwoL.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoL}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
 <div style="height:100%">
            <table id="customers">
                <tr>
                    <th colspan="2">New Mobility LGX Questions</th>

                </tr>
                <tr>
                    <td >Is there room in any rack, except the CRAN active rack (if applicable), for a new 12 fiber LGX panel for Mobility (Max of 2 Rack Units)? Note: Preferable in existing rack housing BBUs. Please take photo of entire rack</td>
                    <td> ${pagetwoM.text ? pagetwoM.text : 'N/A'}</td>
            
                </tr>
                <tr>
                    <td >
Verified new 8300 DaFi & New 12 fiber LGX can be placed in same rack? (Yes/No) (Take Photo) – *Note Dimensions: 19 (W) x 12 (D) X 11(H) [in] 6 RU
</td>
                     <td> ${pagetwoM.text1 ? pagetwoM.text1 : 'N/A'}</td>

                </tr>
                  <tr>
                    <td >If yes, was space reserved for the new Mobility LGX by marking off with tape. (Take Photo): </td>
                     <td> ${pagetwoM.text2 ? pagetwoM.text2 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td >If no, identify equipment to be decommissioned to make space</td>
                     <td> ${pagetwoM.text3 ? pagetwoM.text3 : 'N/A'}</td>

                </tr>
 <tr>
                    <td >What will be the fiber jumper length from the new 12 fiber Mobility LGX to the existing Telco LGX?</td>
                     <td> ${pagetwoM.text4 ? pagetwoM.text4 : 'N/A'}</td>

                </tr>
              
            </table>


      </div>
   <div style="height:100%">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
 Photo Log – Rack
</div >
<div id="photo2">
Available Rack Space
</div>
${pagetwoN.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoN}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}

</div>
<div style="height:380px" id="photoCon">
    <div id="photo1">
       Photo Log - New LGX
    </div>
    <div id="photo2">
Space for new 12 fiber LGX marked
    </div>
${pagetwoO.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoO}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
   <div style="height:100%">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
Photo Log – New Mobility LGX
</div >
<div id="photo2">
Equipment to be decommissioned
</div>
${pagetwoP.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoP}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
<div style="height:380px" id="photoCon">
    <div id="photo1">
       Photo Log – Conduit space to pull additional Fiber
    </div>
    <div id="photo2">
	Length from the new 12 fiber Mobility LGX to the existing Telco LGX
    </div>
${pagetwoQ.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoQ}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
 <div style="height:100%">
            <table id="customers">
                <tr>
                    <th colspan="2">8300 DaFi Installation Questions</th>

                </tr>
                <tr>
                    <td style="font-size: 12px;">Is there room in any rack, except the CRAN active & passive racks (if applicable), for a new 8300 DaFi Dimension: 19 (W) x 12 (D) X 7(H) [in] (4 Rack Units)? Note: Preferable in existing rack housing BBUs. Please take photo of entire rack. TAPE 8300 LOCATION WITH BLUE TAPE AND LABEL – “8300 DaFi Equipment</td>
                    <td> ${pagetwoR.text ? pagetwoR.text : 'N/A'}</td>
                </tr>
                <tr>
                    <td style="font-size: 14px;">
 It is preferable that the new 8300 DaFi & 12 fiber LGX be placed in the same rack.  If yes, was space reserved for the new Mobility LGX by marking off with Blue Tape and Labeling “New LGX Equipment”? 
</td>
                     <td> ${pagetwoR.text1 ? pagetwoR.text1 : 'N/A'}</td>
                </tr>
                  <tr>
                    <td style="font-size: 14px;">If no, did you identify equipment to be decommissioned to make space	 and take photo </td>
                     <td> ${pagetwoR.text2 ? pagetwoR.text2 : 'N/A'}</td>
                </tr>
                 <tr>
                    <td style="font-size: 14px;">Can power and ground be provided for the new 8300 DaFi? (Yes/No)</td>
                     <td> ${pagetwoR.text3 ? pagetwoR.text3 : 'N/A'}</td>

                </tr>
 <tr>
                    <td style="font-size: 14px;">What will be the jumper length from the new 8300 DaFi to the new 12 fiber Mobility LGX? </td>
                     <td> ${pagetwoR.text4 ? pagetwoR.text4 : 'N/A'}</td>
                </tr>
            </table>
      </div>
   <div style="height:100%">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
 Photo Log – Rack
</div >
<div id="photo2">
Available Rack Space
</div>
${pagetwoS.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoS}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
<div style="height:380px" id="photoCon">
    <div id="photo1">
  Photo Log – 8300 DaFi
    </div>
    <div id="photo2">
Space for 8300 DaFi marked
    </div>
${pagetwoT.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoT}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
   <div style="height:100%">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
Photo Log – 8300 DaFi
</div >
<div id="photo2">
Equipment to be decommissioned
</div>
${pagetwoU.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoU}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
<div style="height:390px" id="photoCon">
    <div id="photo1">
Photo Log – Conduit space to pull additional Fiber
    </div>
    <div id="photo2">
	Length from 8300 DaFi to the existing Telco LGX
    </div>
${pagetwoV.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoV}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
   <div style="height:990px">
<div  style="height:390px" id="photoCon">
<div  id="photo1">
Photo Log – Shelter
</div >
<div id="photo2">
SIAD
</div>
${pagetwoX.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoX}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}

</div>

<div style="height:390px" id="photoCon">
    <div id="photo1">
Photo Log – Rack
    </div>
    <div id="photo2">
FIBER
    </div>
${pagetwoY.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoY}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
<div style="height:990px">
<div  style="height:390px" id="photoCon">
<div  id="photo1">
Photo Log – Ciena
</div >
<div id="photo2">
Ciena Overall
</div>
${pagetwoYA.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoYA}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}

</div>

<div style="height:390px" id="photoCon">
    <div id="photo1">
Photo Log – Ciena
    </div>
    <div id="photo2">
Ciena CLLI Code
    </div>
${pagetwoYB.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoYB}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>

 <div style="height:100%">


            <table id="customers">
                <tr>
                    <th colspan="2">Existing BBU Questions</th>

                </tr>
                <tr>
                    <td> How many 5G NR 6630 BBUs are there and where are they located?</td>
                    <td> ${pagetwoZ.text ? pagetwoZ.text : 'N/A'}</td>
            
                </tr>
                <tr>
                    <td>
If not in the same rack, what will be the jumper length from the 5G NR 6630 BBUs to the new 8300 DaFi? 
</td>
                     <td> ${pagetwoZ.text1 ? pagetwoZ.text1 : 'N/A'}</td>

                </tr>
                  <tr>
                    <td>- How many LTE 5216 BBUs are there and where are they located?  </td>
                     <td> ${pagetwoZ.text2 ? pagetwoZ.text2 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>If not in the same rack, what will be the jumper length be from the LTE 5216 BBUs to the new 8300 DaFi?</td>
                     <td> ${pagetwoZ.text3 ? pagetwoZ.text3 : 'N/A'}</td>

                </tr>
 <tr>
                    <td>Verify conduit has enough room available to pull 2 additional fibers (Yes/No) </td>
                     <td> ${pagetwoZ.text4 ? pagetwoZ.text4 : 'N/A'}</td>

                </tr>

            </table>


      </div>

 <div style="height:100%">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
Existing BBU Rack
</div >
<div id="photo2">
5G NR 6630
</div>
${pagetwoZA.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZA}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}

</div>
<div style="height:380px" id="photoCon">
    <div id="photo1">
Existing BBU Rack
    </div>
    <div id="photo2">
5G NR 6630 
    </div>
${pagetwoZB.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZB}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>


 <div style="height:100%">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
Existing BBU Rack
</div >
<div id="photo2">
LTE 5216
</div>
${pagetwoZC.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZC}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}

</div>

<div style="height:380px" id="photoCon">
    <div id="photo1">
Existing BBU Rack
    </div>
    <div id="photo2">
LTE 5216 
    </div>
${pagetwoZD.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZD}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
 <div style="height:100%">
<div  style="height:680px" id="photoCon">
<div  id="photo1">
Existing BBU Rack
</div >
<div id="photo2">
	LTE 5216 
</div>
${pagetwoZE.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZE}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>

 <div style="height:100%">
        

            <table id="customers">
                <tr>
                    <th colspan="2">Power Plant Information</th>

                </tr>
                <tr>
                    <td>Power plant brand and model</td>
                    <td> ${pagetwoZF.text ? pagetwoZF.text : 'N/A'}</td>
            
                </tr>
                <tr>
                    <td>Main Power plant voltage (48V or 24V)</td>
                     <td> ${pagetwoZF.text1 ? pagetwoZF.text1 : 'N/A'}</td>

                </tr>
                  <tr>
                    <td>Rectifier count</td>
                     <td> ${pagetwoZF.text2 ? pagetwoZF.text2 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>Converter count</td>
                     <td> ${pagetwoZF.text3 ? pagetwoZF.text3 : 'N/A'}</td>

                </tr>
 <tr>
                    <td>Breaker slots available (48V/24V)</td>
                     <td> ${pagetwoZF.text4 ? pagetwoZF.text4 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>Is there a remote breaker panel? What model and how many empty slots?</td>
                     <td> ${pagetwoZF.text5 ? pagetwoZF.text5 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>Battery Type?</td>
                     <td> ${pagetwoZF.text6 ? pagetwoZF.text6 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>Battery Date of Manufacturing/Installation</td>
                     <td> ${pagetwoZF.text7 ? pagetwoZF.text7 : 'N/A'}</td>

                </tr>
                 <tr>
                    <td>Battery Count?</td>
                     <td> ${pagetwoZF.text8 ? pagetwoZF.text8 : 'N/A'}</td>

                </tr>
                
            </table>
          
      </div>


 <div style="height:100%">


            <table id="customers">
                <tr>
                    <th colspan="2">SAID Information</th>

                </tr>
                <tr>
                    <td>Power plant brand and model</td>
                    <td> ${pagetwoFA.text ? pagetwoFA.text : 'N/A'}</td>
            
                </tr>
                <tr>
                    <td>Main Power plant voltage (48V or 24V)</td>
                     <td> ${pagetwoFA.text1 ? pagetwoFA.text1 : 'N/A'}</td>

                </tr>
                 
               
            </table>

      </div>

 <div style="height:100%">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
Photo Log – Power Plant
</div >
<div id="photo2">
Power plant brand and model
</div>
${pagetwoZF1.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZF1}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
<div style="height:380px" id="photoCon">
    <div id="photo1">
Photo Log – Power Plant
    </div>
    <div id="photo2">
Main Power plant voltage (48V or 24V)
    </div>
${pagetwoZF2.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZF2}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
 <div style="height:100%">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
Photo Log – Power Plant
</div >
<div id="photo2">
Rectifier & Converter Count
</div>
${pagetwoZF3.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZF3}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}

</div>

<div style="height:380px" id="photoCon">
    <div id="photo1">
Photo Log – Power Plant
    </div>
    <div id="photo2">
Breaker slots available (48V & 24V)
    </div>
${pagetwoZF4.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZF4}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
 <div style="height:100%">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
Photo Log – Power Plant
</div >
<div id="photo2">
Remote Breaker Panel
</div>
${pagetwoZF5.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZF5}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
<div style="height:380px" id="photoCon">
    <div id="photo1">
Photo Log – Power Plant
    </div>
    <div id="photo2">
Battery Type
    </div>
${pagetwoZF6.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZF6}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>
 <div style="height:100%">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
Photo Log – Power Plant
</div >
<div id="photo2">
Battery Manufacturing Date
</div>
${pagetwoZF7.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZF7}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
<div style="height:380px" id="photoCon">
    <div id="photo1">
Photo Log – Power Plant
    </div>
    <div id="photo2">
Battery Count
    </div>
${pagetwoZF8.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZF8}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>

 <div style="height:100%">
<div  style="height:380px" id="photoCon">
<div  id="photo1">
Photo Log -Additional Photo
</div >
<div id="photo2">
AERIAL VIEW OF COMPOUND(AT&T SHELTER/EQUIPMENTBPLUS VIEW WIRELINE DEMARC)
</div>
${pagetwoZF9.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZF9}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
<div style="height:380px" id="photoCon">
    <div id="photo1">
Photo Log - Additional Photo 
    </div>
    <div id="photo2">
Additional Photo - SIAD Make & Model
    </div>
${pagetwoZF12.length > 6 ? ` <div id="imgCon">
<img id="images" src='${pagetwoZF12}' alt="i" srcset="" />
</div>` : ` <div id="imgCon">
N/A
</div>`}
</div>
</div>


${pagetwoZF10.map((p) => `
 <div style="height:100%">
<div  style="height:680px" id="photoCon">
<div  id="photo1">
Additional Photos

</div >
<div id="photo2">
Additional Photos
</div>
 <div id="imgCon">
<img id="images" src='${p.uri}' alt="i" srcset="" />
</div>
</div>
</div>`)}
          </body>
        </html>
      `;
    const fRequestAndroidPermission = async () => {
        // Refer to https://reactnative.dev/docs/permissionsandroid for further details on permsissions 
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "Audit Permission Request",
                    message: "Audit needs access to your storage so you can save files to your device.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("permission is granted");
                return true;
            } else {
                console.log("permission denied");
                return false;
            }
        } catch (err) {
            console.error("fRequestAndroidPermission error:", err);
            return false;
        }
    };

   
    const createPDF = async () => {
        setLoading('Loading...  Kindly wait, it preparing pdf')
        setPath(null)
        let options = {
            //Content to print
            html: htmlContent,
            //File Name
            fileName: 'audit2' + uuid.v4(),
            //File directory
            directory: Platform.OS === 'ios' ? 'Documents' :'Download',

            base64: true
        };
      
        if (Platform.OS === "android") {
            const permissionGranted = await fRequestAndroidPermission();
            if (!permissionGranted) {
                console.log("access was refused")
                return;
            }
        }

     

        let file = await RNHTMLtoPDF.convert(options)
      

        setLoading('sucessful download')
          setPath(file.filePath)
        console.log(file.filePath);
        // console.log(file.filePath);
        Alert.alert('Successfully Exported', 'Path:' + file.filePath, [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Open', onPress: () => openFile(file.filePath) }
        ], { cancelable: true });

    }

    const openFile = (filepath) => {
        const path = filepath;// absolute-path-to-my-local-file.
        FileViewer.open(path)
            .then(() => {
                // success
            })
            .catch(error => {
                // error
            });

    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.card}>

                <TouchableOpacity style={styles.button}
                    onPress={createPDF}
                >
                    <Text style={styles.headingLight}> Download PDF</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 12, color: 'red' }}>{loading}</Text>
     <Text style={{fontSize:12, color:'red'}}>{path}</Text>
            {/* <Image
                source={{ uri:'https://famesfx.com/footerlogo.jpeg' }}
                style={styles.imageStyle}
            /> */}
        </View>
    );
}

export default HomeScreen




const styles = StyleSheet.create({

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
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        // paddingVertical: 25,
        paddingHorizontal: 25,


    },
    button: {
        width: '100%',

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
    headingLight: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    imageStyle: {
        width: 200,
        height: 200,
        margin: 5,
    },
});


const htmlStyles = `
 *{
  border: 0;
  box-sizing: content-box;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
//   vertical-align: top;
   
}

/* table */
table { font-size: 75%; 
    /* table-layout: fixed; */
    
    width: 100%; }
table {  border-spacing: 2px; }

/* page */
html { font: 16px/1 'Open Sans', sans-serif; 

}

#customers {
  font-family: Arial, Helvetica, sans-serif;

  width: 100%;
}

 #customers th {
  border: 4px solid #fff;
  padding: 8px;
 
}
#customers td{

      border: 1.7px solid #fff;
  padding: 8px;
  font-weight: 500;
  font-size: 18px;
}
#customers tr:nth-child(even){background-color: #CFD5EB;}
#customers tr:nth-child(odd){background-color: #E9ECF5;}
#customers tr td:nth-child(1){width: 30%;}



#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4473C5;
  color: white;
  width: '100%';
  font-weight: 600;
  font-size: 18px;
 
}

 h1{
     text-align: center;
     font-size: 25px;
     font-weight: bold;
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     word-spacing: 1px;
     letter-spacing: 1px;
     line-height: 7px;
     margin-bottom: 5px;
     margin-top:14px;
 }

 .footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  /* background-color: red; */
  color: grey;
  font-size: 6px;
  text-align: center;
     
}

.footer::after{
    content: '';
    width: 100%;
    background-color: #E9ECF5;
      height: 20px;
        display: block;
     
          border: 2px solid #fff;
}

#photo1{
    width: 100%;
    height: 30px;
    text-align: center;
    background-color: #214d77;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
     box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
   
    
}

#photo2{
    width: 100%;
    height: 40px;
    text-align: center;
    background-color: #214d77;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
     box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
   
    
}
#photoCon{
    border: 2px solid black;
    margin-bottom: 10px;
}
#imgCon{
 height: 280px;   
 display: flex;
 align-items: center;
 justify-content: center;
 padding:5px
}
#images{
    object-position: center;
    width: 100%;
    height: 100%;
    object-fit:contain;
   
}
#footerImage{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
 
}
#footerImg{
    width: 150px;
    height: 40px;
}
`;