import React, { useState, useEffect } from "react";

const ImageDetails = (props) => {
  const [fullImage, setFullImage] = useState('');

    useEffect(() => {
      setFullImage(props.ringDetail.length ? props.ringDetail[0].fullImageUrl:'');
    },[props.ringDetail]);
    
  const selectFullImage =(e) => {
      console.log("e",e);
      setFullImage(e.fullImageUrl);
  }
  return (
    <div>
      <div class="row">
          <div class="col-sm-2">
            {props.ringDetail && props.ringDetail.length ? props.ringDetail.map((x) => (
              <div className="card">
                <img src={x.imageUrl} onClick={() => selectFullImage(x)} />

              </div>
            ))
              :
              ''}
        </div>
        <div class="col-sm-10">
          {fullImage ?
            <div class="main-image">
              <div class="main-image-holder image">
                <div class="media-inner">
                  <img src={fullImage} />
                </div>
              </div>
            </div>
            : ''}
        </div>
      </div>
    </div>
  );
}

export default ImageDetails;