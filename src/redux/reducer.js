import { initialState } from "./initial-state";
import {
  CARD_NUMBER_ACTION,
  CVV_ACTION,
  CARD_HOLDER_NAME_ACTION,
  ROTATE_ACTION,
  MONTH_ACTION,
  YEAR_ACTION,
} from "./actions";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ROTATE_ACTION:
      console.log("Incoming State: ", state.rotate);
      const flipNewState = {
        ...state,
        rotate: !state.rotate,
      };

      console.log("New State: " + flipNewState);

      return flipNewState;
    case CARD_NUMBER_ACTION:
      const newState = {
        ...state,
        cardNumber: action.payload.cardNumber,
      };

      return newState;
    case MONTH_ACTION:
      const newMonthState = {
        ...state,
        month: action.payload.newMonth,
      };

      return newMonthState;
    case YEAR_ACTION:
      const newYearState = {
        ...state,
        year: action.payload.newYear,
      };

      return newYearState;
    case CARD_HOLDER_NAME_ACTION:
      const newHolderState = {
        ...state,
        cardHolderName: action.payload.newHolderName,
      };

      return newHolderState;
    case CVV_ACTION:
      const newCVVState = {
        ...state,
        cvvNumber: action.payload.newCVV,
      };

      return newCVVState;
    default:
      return state;
  }
}
