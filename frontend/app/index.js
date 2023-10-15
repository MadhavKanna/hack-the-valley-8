import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Link } from 'expo-router';
import {  } from 'axios';


import { COLORS } from '../constants';

export default Home = () => {

    return (    
        <View style={ {flex: 1, width: "100%"} }>
            <Link href="/CameraApp" asChild style={{flex: 1, width: "100%"}}>
                <TouchableOpacity style={{borderColor: "black", borderWidth: 1, flex: 1, width: "100%", backgroundColor: COLORS.lightWhite, justifyContent: "center"}}>
                    <View style={ {justifyContent: "center", alignItems: "center"} }>
                        <Text>CameraApp</Text>
                    </View>
                </TouchableOpacity>
            </Link>
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