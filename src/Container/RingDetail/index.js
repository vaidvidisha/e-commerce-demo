import React from 'react';
import { connect } from 'react-redux';
import {
 loadRingDetails
} from '../../Actions/RingDetail';
import RingDetail from '../../Components/RingDetail';

const RingsContainer = props => (
    <RingDetail
    {...props}
    />
)

const mapStateToProps = state => ({
    ringDetail: state.RingDetail.ringDetail,
  });

  const mapDispatchToProps = dispatch => ({
    loadRingDetails: () => {
      dispatch(loadRingDetails());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RingsContainer);