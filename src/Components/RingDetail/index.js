import React, { Component } from 'react';
import ImageDetails from './imageDetail';
import Shared from '../../Container/Shared';

class RingDetail extends Component {

    componentDidMount() {
    
    this.props.loadRingDetails();
    }
    
    render() {
        console.log(this.props);
        return (
           <div>
               <div class="row">
                <div class="col-md-6">
                    <div class="product-media">
                        <ImageDetails {...this.props}/>
                    </div>
                </div>
                   
                <div class="col-md-6">
                        <Shared />
                </div>
            </div>
               {/* <Row>
                    <Col sm={6}>
                        <ImageDetails />
                    </Col>
                    <Col sm={6}>
                        Hello people
                    </Col>
               </Row> */}
        </div>
      );
    }
}
export default RingDetail;