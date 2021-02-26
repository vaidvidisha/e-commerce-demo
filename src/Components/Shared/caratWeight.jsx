import React, { useState, useEffect } from "react";

const CaratWeight = (props) => {

    const [caratWeight,setCaratWeight] = useState('');

    useEffect(() => {
        setCaratWeight(props.weight.length ? props.weight[0].type:'');
      },[props.weight]);
      
      const selectCaratWeight =(e) => {
          console.log("e",e);
          setCaratWeight(e.type);
          props.setCaratWeightFinalPrice(e);
    }

    return(
        <div class="swatches active quality">
            <div class="variation-label">
                <span class="variation-label_title">Total Carat Weight:</span> 
                <span class="variation-label_value"> {caratWeight} </span> 
            </div> 
            <div class="variaton-options">
            <div>
            {props.weight && props.weight.length ? props.weight.map((x) => (
                <div class="col-sm-3 gemstoneCss">
                    <div className="options">
                        <div class="opt_inner" onClick={() => selectCaratWeight(x)}>
                            <span class="icon">
                                <img src={x.imageUrl} />
                            </span>
                            <span>
                                <label >{x.type}</label>
                            </span>
                        </div>
                    </div>
                </div>
                ))
                :
            ''}
            
            </div>
            </div>
        </div>                    
    )
}

export default CaratWeight;