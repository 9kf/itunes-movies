import { useEffect, useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackProps, TTrack } from "../types";
import { ScreenView, StyledTextInput } from "../components/StyledBase";
import { useTrackStore } from "../store/trackStore";
import { Card, TrackInfo } from "../components";

export interface ISearchTrackProps {
  route: RouteProp<RootStackProps, "search-tracks">;
  navigation: StackNavigationProp<RootStackProps, "search-tracks">;
}

export default function SearchTrack({ route, navigation }: ISearchTrackProps) {
  const searchTracks = useTrackStore((state) => state.searchTracks);

  const [inputValue, setInputValue] = useState("");
  const [searchedTracks, setSearchedTracks] = useState<TTrack[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputValue === "") {
        setSearchedTracks([]);
        return;
      }

      const newSearchedTracks = searchTracks(inputValue);
      setSearchedTracks(newSearchedTracks);
    }, 500);

    return () => clearTimeout(timeout);
  }, [inputValue]);

  return (
    <ScreenView>
      <StyledTextInput
        value={inputValue}
        onChangeText={(newText) => setInputValue(newText)}
        placeholder="Search movie title"
      />
      <View style={{ marginVertical: 12 }} />
      <ScrollView contentContainerStyle={{ gap: 16 }}>
        <View style={{ gap: 12 }}>
          {searchedTracks.map((track) => (
            <Card
              key={track.trackId}
              onPress={() => navigation.navigate("track-detail", { track })}
            >
              <TrackInfo track={track} variant="list" />
            </Card>
          ))}
        </View>
      </ScrollView>
    </ScreenView>
  );
}
