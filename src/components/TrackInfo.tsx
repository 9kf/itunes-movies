import { View, Image } from "react-native";

import { TTrack } from "../types";
import { AlignedView, StyledText } from "./StyledBase";
import { Favorite } from "./Favorite";

const TrackImagePlaceholder = require("../../assets/image-placeholder.png");
const TRACK_IMAGE_HEIGHT = 100;
const TRACK_IMAGE_WIDTH = 100;

interface ITrackInfoProps {
  track: TTrack;
  variant: "list" | "detail";
}

export function TrackInfo({ track, variant }: ITrackInfoProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
      <Image
        defaultSource={TrackImagePlaceholder}
        style={{ height: TRACK_IMAGE_HEIGHT, width: TRACK_IMAGE_WIDTH }}
        source={{
          uri: track.artworkUrl100,
          height: TRACK_IMAGE_HEIGHT,
          width: TRACK_IMAGE_WIDTH,
        }}
        resizeMethod="scale"
        resizeMode="cover"
        height={TRACK_IMAGE_HEIGHT}
        width={TRACK_IMAGE_WIDTH}
      />
      <View style={{ marginLeft: 12 }}>
        <AlignedView horizontal>
          <StyledText
            variant="title"
            numberOfLines={2}
            ellipsizeMode="tail"
            style={variant === "detail" && { color: "f000" }}
          >
            {track.trackName ?? "No movie name"}
          </StyledText>
          <Favorite trackId={track.trackId} />
        </AlignedView>
        <StyledText
          variant="sub-header"
          style={variant === "detail" && { color: "f000" }}
        >{`${track.trackPrice ?? "0"} ${track.currency}`}</StyledText>
        <StyledText
          variant="sub-header"
          style={variant === "detail" && { color: "f000" }}
        >
          {track.primaryGenreName}
        </StyledText>
      </View>
    </View>
  );
}
