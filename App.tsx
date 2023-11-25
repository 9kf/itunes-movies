import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { TrackList, TrackDetails, SearchTrack } from "./src/screens";
import { useTrackStore } from "./src/store/trackStore";
import { RootStackProps } from "./src/types";

const Stack = createStackNavigator<RootStackProps>();

export default function App() {
  const loadTracks = useTrackStore((state) => state.loadTracks);

  useEffect(() => {
    loadTracks();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="track-list">
          <Stack.Screen
            name="track-list"
            component={TrackList}
            options={() => ({
              title: "Movies",
            })}
          />
          <Stack.Screen
            name="track-detail"
            component={TrackDetails}
            options={() => ({
              title: "Movie Details",
            })}
          />
          <Stack.Screen
            name="search-tracks"
            component={SearchTrack}
            options={() => ({
              title: "Search",
            })}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaView>
  );
}
