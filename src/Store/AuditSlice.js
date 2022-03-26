import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pageone: {
        text: '',
        text1:'',
        text2:'',
        text3:'',
        text4:'',
        text5:'',
        text6:'',
        text7:'',
        text8:'',
        text9:'',
        text10:'',
        text11:'',
        text12:'',
        text13:''
    },
    pagetwo:{
        uri: ''
    },
      pagetwoA: {
       
        uri: ''
    },
    pagetwoB: {
      
        uri: ''
    },
    pagetwoC: {
        
        uri: ''
    },
    pagetwoD: {
       
        uri: ''
    },
    pagetwoE: {
      
        uri: ''
    },
    pagetwoF: {
        text: '',
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        text5: '',
        text6: '',
        text7: '',
        text8: '',
        text9: '',
      
    },
    pagetwoG: {
       
        uri: ''
    },
    pagetwoH: {
        
        uri: ''
    },
    pagetwoI: {
       
        uri: ''
    },
    pagetwoJ: {
      
        uri: ''
    },
    pagetwoK: {
        
        uri: ''
    },
    pagetwoL: {
        
        uri: ''
    },
    pagetwoM: {
        text: '',
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        

    },
    pagetwoN: {
      
        uri: ''
    },
    pagetwoO: {
       
        uri: ''
    },
    pagetwoP: {
        
        uri: ''
    },
    pagetwoQ: {
       
        uri: ''
    },
    pagetwoR: {
        text: '',
        text1: '',
        text2: '',
        text3: '',
        text4: '',
    },
    pagetwoS: {
        
        uri: ''
    },
    pagetwoT: {
       
        uri: ''
    },
    pagetwoU: {
        
        uri: ''
    },
    pagetwoV: {
        
        uri: ''
    },
    pagetwoX: {
        
        uri: ''
    },
    pagetwoY: {
        
        uri: ''
    },
    pagetwoZ: {
        text: '',
        text1: '',
        text2: '',
        text3: '',
        text4: '',
    },
    pagetwoZA: {
        
        uri: ''
    },
    pagetwoZB: {
        
        uri: ''
    },
    pagetwoZC: {
        
        uri: ''
    },
    pagetwoZD: {
        
        uri: ''
    },
    pagetwoZE: {
        
        uri: ''
    },
    pagetwoZF: {
        text: '',
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        text5: '',
        text6: '',
        text7: '',
        text8: '',
      
    },
    pagetwoZF1: {
        
        uri: ''
    },
    pagetwoZF2: {
        
        uri: ''
    }, 
    pagetwoZF3: {
        
        uri: ''
    }, 
    pagetwoZF4: {
        
        uri: ''
    },
    pagetwoZF5: {
        
        uri: ''
    }, 
    pagetwoZF6: {
        
        uri: ''
    }, 
    pagetwoZF7: {
        
        uri: ''
    }, 
    pagetwoZF8: {
        
        uri: ''
    },
    pagetwoZF9: {
        
        uri: ''
    },
    pagetwoZF10:[
     
    ]
    
}

export const auditSlice = createSlice({
    name: 'audit',
    initialState,
    reducers: {
        pageoneAction: (state, {payload}) => {
        
            state.pageone =payload
        },
        pagetwoAction: (state, { payload }) => {
            
            // console.log({ payload })
            state.pagetwo = payload
        },
        pagetwoAAction: (state, { payload }) => {
          
            // console.log({ payload })
            state.pagetwoA = payload
        },
        pagetwoBAction: (state, { payload }) => {
           
            // console.log({ payload })
            state.pagetwoB = payload
        },
        pagetwoCAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoC = payload
        },
        pagetwoDAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoD = payload
        },
        pagetwoEAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoE = payload
        },
        pagetwoFAction: (state, { payload }) => {
// console.log({payload})
            state.pagetwoF = payload
        },
        pagetwoGAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoG = payload
        },
        pagetwoHAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoH = payload
        },
        pagetwoIAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoH = payload
        },
        pagetwoJAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoJ = payload
        },
        pagetwoKAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoK = payload
        },
        pagetwoLAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoL = payload
        },
        pagetwoMAction: (state, { payload }) => {
            // console.log({payload})
            state.pagetwoM = payload
        },
        pagetwoNAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoO = payload
        },
        pagetwoOAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoO = payload
        },
        pagetwoPAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoP = payload
        },
        pagetwoQAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoQ = payload
        },
        pagetwoRAction: (state, { payload }) => {
            // console.log({ payload })
            state.pagetwoM = payload
        },
        pagetwoSAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoS = payload
        },
        pagetwoTAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoT = payload
        },
        pagetwoUAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoU = payload
        },
        pagetwoVAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoV = payload
        },
        pagetwoXAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoX = payload
        },
        pagetwoYAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoY = payload
        },
        pagetwoZAction: (state, { payload }) => {
            // console.log({ payload })
            state.pagetwoZ = payload
        },
        pagetwoZAAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZA = payload
        },
        pagetwoZBAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZB = payload
        }, 
      
        pagetwoZCAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZC = payload
        }, 
        pagetwoZDAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZD = payload
        },
        pagetwoZEAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZE = payload
        },
        pagetwoZFAction: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZF = payload
        },
        pagetwoZF1Action: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZF1 = payload
        },
        pagetwoZF2Action: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZF2 = payload
        },
        pagetwoZF3Action: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZF3 = payload
        },
        pagetwoZF4Action: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZF4 = payload
        },
        pagetwoZF5Action: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZF5 = payload
        },
        pagetwoZF6Action: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZF6 = payload
        },
        pagetwoZF7Action: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZF7 = payload
        },
        pagetwoZF8Action: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZF8 = payload
        },
        pagetwoZF9Action: (state, { payload }) => {

            // console.log({ payload })
            state.pagetwoZF9 = payload
        },
        pagetwoZF10Action: (state, { payload }) => {

            // console.log('ello',{ payload })
            state.pagetwoZF10.push(payload)
            // console.log(state.pagetwoZF10,'ddddddddddddddddddd')
        },
    },
})

// Action creators are generated for each case reducer function
export const { pageoneAction, pagetwoAction, pagetwoAAction,
     pagetwoBAction,
    pagetwoCAction,
    pagetwoDAction,
    pagetwoEAction,
    pagetwoFAction,
    pagetwoGAction,
    pagetwoHAction,
    pagetwoIAction,
    pagetwoJAction,
    pagetwoKAction,
    pagetwoLAction,
    pagetwoMAction,
    pagetwoNAction,
    pagetwoOAction,
    pagetwoPAction,
    pagetwoQAction,
    pagetwoRAction,
    pagetwoSAction,
    pagetwoTAction,
    pagetwoUAction,
    pagetwoVAction,
    pagetwoXAction,
    pagetwoYAction,
    pagetwoZAction,
    pagetwoZAAction,
     pagetwoZBAction,
    pagetwoZCAction,
    pagetwoZDAction,
    pagetwoZEAction,
    pagetwoZFAction,
    pagetwoZF1Action,
    pagetwoZF2Action,
    pagetwoZF3Action,
    pagetwoZF4Action,
    pagetwoZF5Action,
    pagetwoZF6Action,
    pagetwoZF7Action,
    pagetwoZF8Action,
    pagetwoZF9Action,
    pagetwoZF10Action
    

} = auditSlice.actions

export default auditSlice.reducer