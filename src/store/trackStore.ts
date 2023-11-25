import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { TTrack } from "../types";
import { getTracks } from "../api/tracks";

interface ITrackState {
  tracks: TTrack[];
  favoriteTrackIds: number[];
  loadTracks: () => Promise<void>;
  toggleFavorite: (trackId: number) => void;
  isFavorite: (trackId: number) => boolean;
  searchTracks: (trackName: string) => TTrack[];
}

export const useTrackStore = create<ITrackState>(
  // @ts-ignore
  persist(
    (set, get) => ({
      tracks: [],
      favoriteTrackIds: [],
      loadTracks: async () => {
        if (get().tracks.length > 0) {
          return;
        }

        const response = await getTracks();

        if (!response) {
          return;
        }

        return set((state) => ({ ...state, tracks: response.results }));
      },
      toggleFavorite: (trackId) => {
        if (!get().favoriteTrackIds.includes(trackId)) {
          const newFavorites = get().favoriteTrackIds;
          newFavorites.push(trackId);
          set((state) => ({ ...state, favoriteTrackIds: newFavorites }));
          return;
        }

        const newFavorites = get().favoriteTrackIds.filter(
          (fTrackId) => fTrackId !== trackId
        );
        set((state) => ({ ...state, favoriteTrackIds: newFavorites }));
      },
      isFavorite: (trackId) => {
        return get().favoriteTrackIds.includes(trackId);
      },
      searchTracks: (trackName) => {
        return get().tracks.filter(
          (track) =>
            track.trackName
              ?.toLocaleLowerCase()
              .indexOf(trackName.toLocaleLowerCase()) > -1
        );
      },
    }),
    {
      name: "tracks",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
