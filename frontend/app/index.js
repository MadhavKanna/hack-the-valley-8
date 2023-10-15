import { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Camera } from 'expo-camera';


import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components';

export default Home = () => {
    let cameraRef = useRef();
    const router = useRouter();
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
        setPhoto(photo)
    }

    if (photo) {
        let sharePicture = () => {
        };
        let savePhoto = () => {
        };

        return (
            <SafeAreaView>

            </SafeAreaView>
        )
    }

    return (
        <View style={{flex: 1, backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "rgba(0, 0, 0, 0)", display: 'flex', justifyContent: 'center', alignItems: 'center'},
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.profile} dimension="60%" />
                    ),
                    headerTitle: "",
                }}/>
            <View style={
                {display: "flex", 
                flex: 1,
                width: "100%",
                justifyContent: "center",
                alignItems: "center" } }>
                <Camera style={ {flex: 1, width: "100%", maxHeight: "100%"} } ref={ cameraRef } >
                    <View justifyContent="flex-end" alignItems="center">
                        <TouchableOpacity onPress={ takePicture }>
                            <Text>Take Picture</Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        </View>
    );
}