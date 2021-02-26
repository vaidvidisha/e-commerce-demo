import React, { Component, useEffect, useState } from 'react';
import MetalType from './metalType';
import CaratWeight from './caratWeight';
import GemstoneQuality from './gemstoneQuality';
import RingSize from './ringSize';
import { Modal } from 'react-bootstrap';
import {Button} from 'antd';

const Shared = (props) => {

    const [caratWeightPrice, setCaratWeightPrice] = useState(0);
    const [metalTypePrice, setMetalTypePrice] = useState(0);
    const [stoneQualityPrice, setStoneQualityPrice] = useState(0);
    const [caratWeight, setCaratWeight] = useState(0);
    const [metalType, setMetalType] = useState(0);
    const [stoneQuality, setStoneQuality] = useState(0);
    const [ringSize, setRingSize] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        props.loadCaratWeight();
        props.loadRingSize();
        props.loadMetalType();
        props.loadStoneQuality();
    }, []);

    useEffect(() => {
        setCaratWeightPrice(props.caratWeight.length ? props.caratWeight[0].price : '');
        setCaratWeight(props.caratWeight.length ? props.caratWeight[0].type : '');
    }, [props.caratWeight]);

    useEffect(() => {
        setRingSize(props.ringSize.length ? props.ringSize[0].size : '');
    }, [props.ringSize]);

    useEffect(() => {
        setMetalTypePrice(props.metalType.length ? props.metalType[0].price : '');
        setMetalType(props.metalType.length ? props.metalType[0].name : '');
    }, [props.metalType]);

    useEffect(() => {
        setStoneQualityPrice(props.stoneQuality.length ? props.stoneQuality[0].price : '');
        setStoneQuality(props.stoneQuality.length ? props.stoneQuality[0].type : '');
    }, [props.stoneQuality]);

    const setCaratWeightFinalPrice = async (value) => {
        setCaratWeightPrice(value.price);
        setCaratWeight(value.type);
    };

    const setMetalTypeFinalPrice = async (value) => {
        setMetalTypePrice(value.price);
        setMetalType(value.name);
    };

    const setStoneQualityFinalPrice = async (value) => {
        setStoneQualityPrice(value.price);
        setStoneQuality(value.type);
    };

    const setFinalRingSize = async (value) => {
        setRingSize(value.size);
    }

    return (
        <div class="product_right_sec">
            <div class="product-name-wrapper ">
                <h1 class="product-name">
                    Princess Diana Inspired Blue Sapphire Ring with Diamond Halo
                    </h1>
            </div>
            <div class="price-section type-b">
                <div class="main-price">
                    <div class="price">$ {caratWeightPrice + metalTypePrice + stoneQualityPrice} </div>
                </div>
            </div>
            <div class="variation-section">
                <div class="variations">
                    <div class="variation-title">Customize Your ring</div>
                    <div class="variations-box">
                        <GemstoneQuality setStoneQualityFinalPrice={setStoneQualityFinalPrice} quality={props.stoneQuality} />
                    </div>
                    <div class="variations-box">
                        <MetalType setMetalTypeFinalPrice={setMetalTypeFinalPrice} metalType={props.metalType} />
                    </div>
                    <div class="variations-box">
                        <CaratWeight setCaratWeightFinalPrice={setCaratWeightFinalPrice} weight={props.caratWeight} />
                    </div>
                    <div class="variations-box">
                        <RingSize ringSize={props.ringSize} setFinalRingSize = {setFinalRingSize}/>
                    </div>
                </div>
            </div>
            <div class="add-to-cart-wrapper">
                <button type="submit" onClick={handleShow} title="Add to Cart" class="button primary_button tocart">
                    <span>Add to Cart</span>
                </button>
            </div>
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    caratWeight={caratWeight}
                    metalType={metalType}
                    stoneQuality={stoneQuality}
                    ringSize={ringSize}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>You have selected</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Gemstone Quality: <b>{stoneQuality}</b> <br/>
                    Total Carat Weight: <b>{caratWeight}</b><br/>
                    Metal Type: <b>{metalType}</b><br/>
                    Ring Size: <b>{ringSize}</b>
                </Modal.Body>
                    <Modal.Footer>
                        <Button class="button primary_button" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div >
    );
}
export default Shared;