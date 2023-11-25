import { TTrack } from "../types";

export type TTrackList = {
  resultCount: number;
  results: TTrack[];
};

export const getTracks = async (): Promise<TTrackList | null> => {
  try {
    const response = await fetch(
      "https://itunes.apple.com/search?term=star&amp;country=au&amp;media=movie&amp;all"
    );
    const body = (await response.json()) as TTrackList;
    return body;
  } catch (error) {
    return null;
  }
};
