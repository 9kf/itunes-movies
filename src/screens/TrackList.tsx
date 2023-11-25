import { useEffect } from "react";
import { ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { ScreenView } from "../components/StyledBase";
import { useTrackStore } from "../store/trackStore";
import { RootStackProps } from "../types";
import { Card } from "../components/Card";
import { TrackInfo } from "../components/TrackInfo";

export interface ITrackListProps {
  route: RouteProp<RootStackProps, "track-list">;
  navigation: StackNavigationProp<RootStackProps, "track-list">;
}

export default function TrackList({ navigation, route }: ITrackListProps) {
  const tracks = useTrackStore((state) => state.tracks);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialIcons
          name="search"
          size={24}
          style={{ marginRight: 12 }}
          onPress={() => navigation.navigate("search-tracks")}
        />
      ),
    });
  }, []);

  return (
    <ScreenView>
      <ScrollView contentContainerStyle={{ gap: 16 }}>
        {tracks.map((track, index) => (
          <Card
            key={index}
            onPress={() => {
              navigation.navigate("track-detail", { track });
            }}
          >
            <TrackInfo track={track} variant="list" />
          </Card>
        ))}
      </ScrollView>
    </ScreenView>
  );
}
