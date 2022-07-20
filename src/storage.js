import { createStore } from "redux";
import { INITIAL_MESSAGES } from "./constants";

const defaultState = {
  messages: INITIAL_MESSAGES,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            text: action.payload.text,
            isCurrentUser: action.payload.isCurrentUser,
          },
        ],
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);
