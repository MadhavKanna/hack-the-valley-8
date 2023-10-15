import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function CurrentLotteryWindow() {
    return <View style={ {flex: 1, width: "100%", justifyContent: "space-evenly", alignItems: "center"} }>
        <View style={ {borderColor: "black", borderWidth: 1, width: "100%", flex: 2, justifyContent: "center", alignItems: "center"} }>
            <Text>Current Lottery</Text>
            <Text>$100</Text>
        </View>
        <View style={ {flex: 1, flexDirection: "row"} }>
            <View style={ {flex: 1, borderColor: "black", borderWidth: 1, justifyContent: "center", alignItems: "center"} }>
                <Text>You have obtained:</Text>
                <Text>3 Entries</Text>
                <Text>Keep scanning to earn more!</Text>
            </View>
            <View style={ {flex: 1, borderColor: "black", borderWidth: 1, justifyContent: "center", alignItems: "center"} }>
                <Link href="/Redeem" asChild>
                    <TouchableOpacity style={ {flex: 1, justifyContent:"center", alignItems: "center"} }>
                        <Text>You won a Lottery!!</Text>
                        <Text>Click to Redeem</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    </View>
}