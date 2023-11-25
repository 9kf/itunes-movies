import { View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackProps } from "../types";
import { ScreenView, StyledText } from "../components/StyledBase";
import { TrackInfo } from "../components/TrackInfo";

export interface ITrackDetailsProps {
  route: RouteProp<RootStackProps, "track-detail">;
  navigation: StackNavigationProp<RootStackProps, "track-detail">;
}

export default function TrackDetails({
  navigation,
  route,
}: ITrackDetailsProps) {
  const { track } = route.params;

  return (
    <ScreenView>
      <TrackInfo track={track} variant="detail" />
      <View style={{ marginVertical: 20 }} />
      <StyledText variant="paragraph">{track.longDescription}</StyledText>
    </ScreenView>
  );
}
