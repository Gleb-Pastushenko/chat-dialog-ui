import { MESSAGES_FOR_REPLY } from "../../../constants";

export const getRandomMessage = () => {
  const index = Math.floor(Math.random() * MESSAGES_FOR_REPLY.length);
  const msgText = MESSAGES_FOR_REPLY[index].text;
  const delay = Math.random() * 3000;
  return { msgText, delay };
};
