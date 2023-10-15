import { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Link } from 'expo-router';
import { Camera } from 'expo-camera';
import {  } from 'axios';


import { COLORS } from '../constants';

export default CameraApp = () => {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [photo, setPhoto] = useState();

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === 'granted');
        })();
    }, []);

    if (hasCameraPermission === undefined) {
        return <Text>Requesting permissions...</Text>;
    }
    else if (!hasCameraPermission) {
        return <Text>Permission for camera was not granted. Please change in settings.</Text>
    }

    if (!permission) {
        return <View alignItems="center" justifyContent="center">
            <Text>Permission not granted</Text>
            <TouchableOpacity onPress={requestPermission} title="Request permission" />
        </View>;
    }
    if (!permission.granted) {
        return <View alignItems="center" justifyContent="center">
            <Text>Permission not granted</Text>
            <Button onPress={requestPermission} title="Request permission" />
        </View>;
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
    }

    if (photo) {
        let currentPhoto = photo;;

        return (
        <View style={ {flex: 1} }>
            <Image source={{uri: currentPhoto.uri}} style={{flex: 2, resizeMode: "contain"}} />
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