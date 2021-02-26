import React, { useState, useEffect } from "react";

const GemstoneQuality = (props) => {

    const [stoneQuality,setStoneQuality] = useState('');

    useEffect(() => {
        setStoneQuality(props.quality.length ? props.quality[0].type:'');
    },[props.quality]);
    
  const selectStoneQuality =(e) => {
      console.log("e",e);
      setStoneQuality(e.type);
      props.setStoneQualityFinalPrice(e);
  }
    return(
        <div class="swatches active quality">
            <div class="variation-label">
                <span class="variation-label_title">Gemstone Quality:</span> 
                <span class="variation-label_value"> {stoneQuality} </span> 
            </div> 
            <div class="variaton-options">
            <div>
            {props.quality && props.quality.length ? props.quality.map((x) => (
                <div class="col-sm-3 gemstoneCss">
                    <div className="options">
                        <div class="opt_inner" onClick={() => selectStoneQuality(x)}>
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

export default GemstoneQuality;