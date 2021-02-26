import store from './index';
import * as actionTypes from "../GlobalConstants/actionConstants";

const Shared = (state = {
    apiCall: false,
    ringSize:[],
    caratWeight:[],
    stoneQuality:[],
    metalType:[]
  }, action) => {
    switch (action.type) {
        case actionTypes.getCaratWeight:
            state={
                ...state,
                apiCall:true,
                caratWeight:action.payload
            };
            break;
        case actionTypes.getRingSize:
            state={
                ...state,
                apiCall:true,
                ringSize:action.payload
            };
            break;
        case actionTypes.getStoneQuality:
            state={
                ...state,
                apiCall:true,
                stoneQuality:action.payload
            };
            break;
        case actionTypes.getMetalType:
            state={
                ...state,
                apiCall:true,
                metalType:action.payload
            };
            break;
        default:
            return state;
        }
        return state;
    }

  export default Shared;