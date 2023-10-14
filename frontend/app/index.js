import { useState } from 'react';
import { View } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components';

export default Home = () => {
    const router = useRouter();

    return (
        <View style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite, display: 'flex', justifyContent: 'center', alignItems: 'center'},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.profile} dimension="60%" />
                    ),
                    headerTitle: ""
                }}/>
        </View>
    );
}