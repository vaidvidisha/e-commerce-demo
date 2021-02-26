import React, { useState, useEffect } from "react";

const MetalType = (props) => {

const [metalType,setMetalType] = useState('');

useEffect(() => {
    setMetalType(props.metalType.length ? props.metalType[0].name:'');
  },[props.metalType]);
  
  const selectMetalType =(e) => {
      console.log("e",e);
      setMetalType(e.name);
      props.setMetalTypeFinalPrice(e);
  }
  
    return(
        <div class="swatches active quality">
            <div class="variation-label">
                <span class="variation-label_title">Metal Type:</span> 
                <span class="variation-label_value"> {metalType} </span> 
            </div> 
            <div class="variaton-options">
            <div>
            {props.metalType && props.metalType.length ? props.metalType.map((x) => (
                <div class="col-sm-3 gemstoneCss">
                    <div className="options">
                        <div class="opt_inner" onClick={() => selectMetalType(x)}>
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

export default MetalType;