import * as actionTypes from "../GlobalConstants/actionConstants";

export function loadRingDetails(){
    return (dispatch)=>{
      const data = [{
        id:"1",
        imageUrl : "https://pics.angara.com/catalog/product/100x100/SR0169S/WG/AAA/8x6/1/SR0169S-WG-AAA-8x6.jpg",
        fullImageUrl : "https://pics.angara.com/catalog/product/SR0169S/WG/AAA/8x6/1/SR0169S-WG-AAA-8x6.jpg"
    },
    { 
        id:"2",
        imageUrl : "https://pics.angara.com/catalog/product/100x100/SR0169S/WG/AAA/8x6/2/SR0169S-WG-AAA-8x6_1.jpg",
        fullImageUrl:"https://pics.angara.com/catalog/product/SR0169S/WG/AAA/8x6/2/SR0169S-WG-AAA-8x6_1.jpg"
    },
    {
        id:"3",
        imageUrl : "https://pics.angara.com/catalog/product/100x100/SR0169S/WG/AAA/8x6/3/SR0169S-WG-AAA-8x6_2.jpg",
        fullImageUrl:"https://pics.angara.com/catalog/product/SR0169S/WG/AAA/8x6/3/SR0169S-WG-AAA-8x6_2.jpg"
    }]
      dispatch({ type: actionTypes.getRingDetails ,payload:data})
    };
}