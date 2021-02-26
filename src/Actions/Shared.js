import * as actionTypes from "../GlobalConstants/actionConstants";

export function loadRingSize() {
  return (dispatch) => {
    const data = [{
      id: "1",
      size: 4.5
    },
    {
      id: "2",
      size: 5
    },
    {
      id: "3",
      size: 5.5
    }]
    dispatch({ type: actionTypes.getRingSize, payload: data });
  }
}

export function loadCaratWeight() {
  return (dispatch) => {
    const data = [{
      id: "1",
      type: "0.80",
      imageUrl: "https://pics.angara.com/catalog/product/100x100/SR0169S/WG/AAA/6x4/1/SR0169S-WG-AAA-6x4.jpg?v=1.1",
      price: 100
    },
    {
      id: "2",
      type: "1.10",
      imageUrl: "https://pics.angara.com/catalog/product/100x100/SR0169S/WG/AAA/7x5/1/SR0169S-WG-AAA-7x5.jpg?v=1.1",
      price: 200
    },
    {
      id: "3",
      type: "1.90",
      imageUrl: "https://pics.angara.com/catalog/product/100x100/SR0169S/WG/AAA/8x6/1/SR0169S-WG-AAA-8x6.jpg?v=1.1",
      price: 300
    },
    {
      id: "4",
      type: "2.49",
      imageUrl: "https://pics.angara.com/catalog/product/100x100/SR0169S/WG/AAA/9x7/1/SR0169S-WG-AAA-9x7.jpg?v=1.1",
      price: 400
    }]
    dispatch({ type: actionTypes.getCaratWeight, payload: data });
  }
}

export function loadStoneQuality() {
  return (dispatch) => {
    const data = [{
      id: "1",
      type: "Good",
      imageUrl: "https://pics.angara.com/catalog/product/S-Oval-Faceted-A/1/S-Oval-Faceted-A.png?v=1.1",
      price: 1115
    },
    {
      id: "2",
      type: "Better",
      imageUrl: "https://pics.angara.com/catalog/product/S-Oval-Faceted-AA/1/S-Oval-Faceted-AA.png?v=1.1",
      price: 2115
    },
    {
      id: "3",
      type: "Best",
      imageUrl: "https://pics.angara.com/catalog/product/S-Oval-Faceted-AAA/1/S-Oval-Faceted-AAA.png?v=1.1",
      price: 3115
    },
    {
      id: "4",
      type: "Heirloom",
      imageUrl: "https://pics.angara.com/catalog/product/S-Oval-Faceted-AAAA/1/S-Oval-Faceted-AAAA.png?v=1.1",
      price: 4115
    }]
    dispatch({ type: actionTypes.getStoneQuality, payload: data });
  }
}

export function loadMetalType() {
  return (dispatch) => {
    const data = [{
      id: "1",
      name: "14 K Rose Gold",
      type: "Rose Gold",
      imageUrl: "https://pics.angara.com/catalog/product/metal/14k-rose-gold.png?v=1.1",
      price: 100
    },
    {
      id: "2",
      name: "14 K Yellow Gold",
      type: "Yellow Gold",
      imageUrl: "https://pics.angara.com/catalog/product/metal/14k-yellow-gold.png?v=1.1",
      price: 200
    },
    {
      id: "3",
      name: "14 K White Gold",
      type: "White Gold",
      imageUrl: "https://pics.angara.com/catalog/product/metal/14k-white-gold.png?v=1.1",
      price: 300
    },
    {
      id: "4",
      name: "Platinum",
      type: "Platinum",
      imageUrl: "https://pics.angara.com/catalog/product/metal/platinum.png?v=1.1",
      price: 800
    }]
    dispatch({ type: actionTypes.getMetalType, payload: data });
  }
}