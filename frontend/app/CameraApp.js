import { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Link } from 'expo-router';
import { Camera } from 'expo-camera';
import axios from 'axios';


import { COLORS } from '../constants';

export default CameraApp = () => {
    let cameraRef = useRef();
    const [photo, setPhoto] = useState();
    const [data, setData] = useState("");
    const [error, setError] = useState();
    const baseURL = "https://hack-the-valley-8-87a6bbeaf441.herokuapp.com/"
    const endpoint = "classify";

    if(error) {
        alert(error);
    }

    async function takePicture() {
        let options = {
            quality: 1,
            base64: true,
            fixOrientation: true,
            exif: false
        }
        let photo = await cameraRef.current.takePictureAsync();
        photo.options = options;
        setPhoto(photo)

        async function request() {
            const response = await axios.post(`${baseURL}${endpoint}`, { userId: "ABCDFGH", data: photo.base64 });
            console.log(response);
            return response;
        }

        try {
            const response = await request();
            const text = `This item is: ${response["data"]}`;
            setData(text);
        } catch (error) {
            setError(error);
        }

    }

    if (photo) {
        let currentPhoto = photo;

        return (
        <View style={ {flex: 1} }>
            <Image source={{uri: currentPhoto.uri}} style={{flex: 2, resizeMode: "contain"}} />
            <View style={ {flex: 1, width: "100%", justifyContent: "center", alignItems: "center"} }>
                <Text>{ data }</Text>
            </View>
            <TouchableOpacity onPress={() => setPhoto(undefined)} style={{borderColor: "black", borderWidth: 1, flex: 1, width: "100%", backgroundColor: COLORS.lightWhite, justifyContent: "center"}}>
                <View style={ {justifyContent: "center", alignItems: "center"} }>
                    <Text>Go Back</Text>
                </View>
            </TouchableOpacity>
        </View>
        )
    }

    return (
        <View style={ {flex: 1, backgroundColor: "rgba(0, 0, 0, 0)"} }>
            <SafeAreaView style={
                {display: "flex", 
                flex: 4,
                width: "100%",
                maxHeight: "100%",
                justifyContent: "center",
                alignItems: "center" } }>
                <Camera style={ {flex: 1, width: "100%", maxHeight: "100%", justifyContent: "flex-end"} } ref={ cameraRef } />
            </SafeAreaView>
            <View style={ {borderColor: "black", borderWidth: 1, flex: 1, backgroundColor: COLORS.lightWhite, justifyContent: "center"} }>
                <TouchableOpacity onPress={ takePicture } style={ {flex: 1, width: "100%", alignSelf: "center", alignItems: "center", justifyContent: "center"} }>
                    <Text>Take Picture</Text>
                </TouchableOpacity>
            </View>
            <Link href="/Lottery" asChild style={{flex: 1, width: "100%"}}>
                <TouchableOpacity style={{borderColor: "black", borderWidth: 1, flex: 1, width: "100%", backgroundColor: COLORS.lightWhite, justifyContent: "center"}}>
                    <View style={ {justifyContent: "center", alignItems: "center"} }>
                        <Text>Lottery</Text>
                    </View>
                </TouchableOpacity>
            </Link>
        </View>
    );
}