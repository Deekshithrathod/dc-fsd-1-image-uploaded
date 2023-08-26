import { atom } from "recoil";

export type uploadStatus = "NOT_STARTED" | "UPLOADING" | "DONE";

export const statusState = atom<uploadStatus>({
  key: "status",
  default: "NOT_STARTED",
});
