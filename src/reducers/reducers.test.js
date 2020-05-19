import reducers from "./reducers";

const { cardsById, listsById, boardsById } = reducers;

describe("cardById Reducer", () => {
  describe("ADD_CARD", () => {
    const initialState = {};
    const action = {
      type: "ADD_CARD",
      payload: {
        cardTitle: "New Card",
        cardId: 1,
      },
    };
    const nextState = {
      [action.payload.cardId]: {
        title: action.payload.cardTitle,
        _id: action.payload.cardId,
      },
    };
    it("Should add new card", () => {
      expect(cardsById(initialState, action)).toEqual(nextState);
    });
  });

  describe("DELETE_CARD", () => {
    const initialState = {
      "1": {
        title: "Card1",
        _id: 1,
      },
    };
    const action = {
      type: "DELETE_CARD",
      payload: {
        cardId: "1",
      },
    };
    const nextState = {};
    it("Should delete card with give id", () => {
      expect(cardsById(initialState, action)).toEqual(nextState);
    });
  });
});

// TODO: Add Unit test cases for other reducers.
