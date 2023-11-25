import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { useTrackStore } from "../store/trackStore";

interface IFavoriteProps {
  trackId: number;
}

export function Favorite({ trackId }: IFavoriteProps) {
  const isFavorite = useTrackStore((state) => state.isFavorite(trackId));
  const toggleFavorite = useTrackStore((state) => state.toggleFavorite);

  return (
    <MaterialIcons
      onPress={(e) => {
        e.stopPropagation();
        toggleFavorite(trackId);
      }}
      name={isFavorite ? "favorite" : "favorite-outline"}
      size={24}
      color="red"
    />
  );
}
