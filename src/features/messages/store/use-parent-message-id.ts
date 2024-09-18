import { useQueryState } from "nuqs";

export const useParrentMessageId = () => {
  return useQueryState("parentMessageId");
};
