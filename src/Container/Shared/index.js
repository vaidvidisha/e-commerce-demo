import React from 'react';
import { connect } from 'react-redux';
import {
    loadRingSize,loadCaratWeight,loadMetalType,loadStoneQuality
} from '../../Actions/Shared';
import Shared from '../../Components/Shared';

const SharedContainer = props => (
    <Shared
    {...props}
    />
)

const mapStateToProps = state => ({
    ringSize: state.Shared.ringSize,
    caratWeight: state.Shared.caratWeight,
    stoneQuality: state.Shared.stoneQuality,
    metalType: state.Shared.metalType
  });

  const mapDispatchToProps = dispatch => ({
    loadRingSize: () => {
        dispatch(loadRingSize());
    },
    loadCaratWeight: () => {
        dispatch(loadCaratWeight());
    },
    loadMetalType: () => {
        dispatch(loadMetalType());
    },
    loadStoneQuality: () => {
        dispatch(loadStoneQuality());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SharedContainer);