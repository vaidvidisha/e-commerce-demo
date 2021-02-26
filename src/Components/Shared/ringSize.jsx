import React,{useEffect,useState} from "react";

const RingSize = (props) => {

    const [ringSize,setRingSize] = useState(0);

    useEffect(() => {
        setRingSize(props.ringSize.length ? props.ringSize[0].size:'');
      },[props.ringSize]);

    const  selectRingSize=(e) => {
        setRingSize(e.size);
        props.setFinalRingSize(e);
    }

    return (
        <div class="swatches ring_size">
            <div class="variation-label">
                <span class="variation-label_title">Ring Size:</span> 
                <span class="variation-label_value"> {ringSize} </span> 
            </div> 
            <ul class="range_picker">
            {props.ringSize && props.ringSize.length ? props.ringSize.map((x) => (
                <li onClick={()=>selectRingSize(x)}>{x.size}</li>
                ))
                :
            ''}
            </ul>
        </div>    
    )
}

export default RingSize;