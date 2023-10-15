import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import CurrentLotteryWindow from "./CurrentLotteryWindow";

export default function Lottery() {
    return <View style={ {flex: 1} }>
        <View style={{borderColor: "black", borderWidth: 1, width: "100%",  flex: 3, justifyContent: "center", alignItems: "center"}}>
        <CurrentLotteryWindow />
        </View>
        <Link href="/CameraApp" asChild>
            <TouchableOpacity style={ {flex: 1, width: "100%", justifyContent: "center", alignItems: "center"} }>
                <View style={ {backgroundColor: "rgb(20, 20, 20, 100)", justifyContent: "center", alignItems: "center"} }>
                    <Text>CameraApp</Text>
                </View>
            </TouchableOpacity>
        </Link>
    </View>
}