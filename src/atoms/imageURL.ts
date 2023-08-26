import { atom } from "recoil";

export const imageURL = atom<string>({
  key: "imageURL",
  default: "https://placehold.co/600x400?text=Upload%20Error",
});
