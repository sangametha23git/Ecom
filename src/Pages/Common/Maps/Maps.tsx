import React, { Component, useContext, useEffect, useState } from "react";
const API_KEY = "AIzaSyC37EQ5KAX63pqvDFLC5EOSe3znJ0ebFVg";
import { Ionicons } from "@expo/vector-icons";
import DataContext from "../../../utils/Context/DataContext";
import { LoadScript, GoogleMap, Polygon, DirectionsRenderer, DrawingManager, Marker, InfoWindow } from "@react-google-maps/api";


export default function Maps(props: any) {
  const context = useContext(DataContext);
  const map = null;
  const containerStyle = {
    width: '100vw',
    height: '100vh'
  };
  const [map_position, SetMapPosition] = useState({
    center: {
      lat: 11.342423,
      lng: 77.728165,
    },
    zoom: 11
  });
  const [latLng, SetlatLng] = useState({
    lat: 11.342423,
    lng: 77.728165,

  });
  const [add_address, SetAddAddress] = useState({
    name: "",
    mobile: "",
    door_no: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    latitude: "",
    longitude: "",
    map_address: "",
    country_id: "",
  });

  useEffect(() => {
    console.log("map :", props);
    SetAddAddress(props.data);
  }, []);


  function getCoordinates(lat: any, lan: any) {
    console.log("getCoordinates", lat, lan);
    let address = lat + "," + lan;
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + '&key=' + API_KEY)
      .then(response => response.json())
      .then((responseJson) => {
        console.log(
          'ADDRESS GEOCODE is BACK!! => ', responseJson,
        );
        if (responseJson.status == "OK") {
          let address_data = responseJson.results[0].formatted_address;
          let data = {
            latLng: { lat: lat, lng: lan },
            address_data: address_data
          }
          props.onSave(data);
          // return address_data;
        }
      });

  }


  return (
    <div className="">
      <LoadScript
        googleMapsApiKey="AIzaSyC37EQ5KAX63pqvDFLC5EOSe3znJ0ebFVg"
        libraries={["drawing"]}
      >


        <GoogleMap
          mapContainerStyle={containerStyle}
          center={map_position.center}
          zoom={map_position.zoom}
          options={{
            streetViewControl: false,
            zoomControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            keyboardShortcuts: false,
          }}
          mapTypeId="ROADMAP"
        >

          <div className="map-over">
            <div className="py-3 px-2 d-flex align-items-center shadow bg-white" onClick={() => { window.history.go(-1) }}>
              <div className="cursor" onClick={()=>{
                props.onBack();
              }}>
                <Ionicons name="arrow-back" size={18} color="black" />
              </div>
              <h6 className="mb-0 ml-1 ">Add Location</h6>
              <div className="ms-auto">
              <button className="btn btn-text py-0 px-2 me-2" onClick={(e) => {
              console.log("Save Location :", e);
              getCoordinates(latLng.lat, latLng.lng);
              // let address_data = getCoordinates(latLng.lat, latLng.lng);
              // if(address_data != undefined){
              //   let data = {
              //     latLng: latLng,
              //     address_data: address_data
              //   }
              //   props.onSave(data);
              // }else{
              //   console.log("address_data:",address_data)
              // }
            }}> 
            <p className="fs-7 fw-bolder text-prime1">Save location</p>
            </button>
              </div>
            </div>
          </div>
          <Marker
            position={map_position.center}
            onClick={(e) => {
              console.log("marker: ", e);
            }}
            draggable={true}
            onDragEnd={(e) => {

              const { latLng } = e;
              const lat = latLng.lat();
              const lng = latLng.lng();
              console.log("lat :", lat);
              console.log("lng :", lng);

              SetlatLng((prevValue: any) => {
                prevValue.lat = latLng.lat();
                prevValue.lng = latLng.lng();
                return { ...prevValue }

              })
              SetMapPosition((prevValue: any) => {
                prevValue.center.lat = latLng.lat();
                prevValue.center.lng = latLng.lng();
                return { ...prevValue }

              })

              // onMarkerDragEnd(e);
              // console.log("chcnage coord:", coord);
              // console.log("chcnage map:", map);
              // console.log("change event:", e);

              // console.log("change event latlang:", e.latLng);
              // console.log(e.google.maps.Marker.getPosition().lat());
            }}
          />

          {/* <Marker
            //onLoad={onLoad}
            position={map_position.center}
          >
            <InfoWindow options={{ maxWidth: 100 }}>
              <span>{map_position.center}</span>
            </InfoWindow>
          </Marker> */}

        </GoogleMap>



      </LoadScript>

    </div>
  );

}
