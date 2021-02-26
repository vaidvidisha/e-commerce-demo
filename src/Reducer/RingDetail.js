import * as actionTypes from "../GlobalConstants/actionConstants";

const RingDetail = (state = {
    apiCall: false,
    ringDetail:[]
  }, action) => {
    switch (action.type) {
        case actionTypes.getRingDetails:
            state={
                ...state,
                apiCall:true,
                ringDetail:action.payload
            };
            break;
        default:
            return state;
        }
        return state;
    }

  export default RingDetail;