// import axios from "axios";
import services from "../services";
/* eslint-disable no-console */

export const addCard = (cardTitle, listId, boardId) => (dispatch) => {
  services
    .addCard(cardTitle, listId, boardId)
    .then(({ cardTitle, cardId, listId }) => {
      dispatch({
        type: "ADD_CARD",
        payload: { cardTitle, cardId, listId },
      });
    });
};

export const editCardTitle = (cardTitle, cardId, list, boardId) => (
  dispatch
) => {
  services
    .editCard(cardTitle, cardId, list._id, boardId)
    .then(({ cardTitle, cardId, listId }) => {
      dispatch({
        type: "EDIT_CARD_TITLE",
        payload: {
          cardTitle,
          cardId,
          listId: list._id,
        },
      });
    });
};

export const deleteCard = (cardId, listId, boardId) => (dispatch) => {
  services.deleteCard(cardId, listId, boardId).then(({ cardId, listId }) => {
    dispatch({ type: "DELETE_CARD", payload: { cardId, listId } });
  });
};

export const reorderList = (
  cardId,
  sourceId,
  destinationId,
  sourceIndex,
  destinationIndex,
  boardId
) => (dispatch) => {
  services
    .reorderList(
      cardId,
      sourceId,
      destinationId,
      sourceIndex,
      destinationIndex,
      boardId
    )
    .then(({ sourceId, destinationId, sourceIndex, destinationIndex }) => {
      dispatch({
        type: "REORDER_LIST",
        payload: {
          sourceId,
          destinationId,
          sourceIndex,
          destinationIndex,
        },
      });
    });
};

export const addList = (listTitle, boardId) => (dispatch) => {
  services.addList(listTitle, boardId).then(
    ({ boardId, listId, listTitle }) => {
      dispatch({
        type: "ADD_LIST",
        payload: { boardId, listId, listTitle },
      });
    },
    (error) => {}
  );
};

export const editListTitle = (listTitle, listId, boardId) => (dispatch) => {
  services
    .editListTitle(listTitle, listId, boardId)
    .then(({ listTitle, listId }) => {
      dispatch({
        type: "EDIT_LIST_TITLE",
        payload: {
          listTitle,
          listId,
        },
      });
    });
};

export const deleteList = (cards, listId, boardId) => (dispatch) => {
  services
    .deleteList(cards, listId, boardId)
    .then(({ cards, listId, boardId }) => {
      dispatch({
        type: "DELETE_LIST",
        payload: { cards, listId, boardId },
      });
    });
};

export const addBoard = (boardTitle) => (dispatch) => {
  services.addBoard(boardTitle).then(({ boardTitle, boardId }) => {
    dispatch({
      type: "ADD_BOARD",
      payload: { boardTitle, boardId },
    });
  });
};

export const deleteBoard = (boardId) => (dispatch) => {
  services.deleteBoard(boardId).then(({ boardId }) => {
    dispatch({
      type: "DELETE_BOARD",
      payload: { boardId },
    });
  });
};

export const reorderBoard = (
  listId,
  sourceId,
  sourceIndex,
  destinationIndex
) => (dispatch) => {
  services
    .reorderBoard(listId, sourceId, sourceIndex, destinationIndex)
    .then(({ sourceId, sourceIndex, destinationIndex }) => {
      dispatch({
        type: "REORDER_LISTS",
        payload: {
          sourceId,
          sourceIndex,
          destinationIndex,
        },
      });
    });
};

export const getBoards = () => (dispatch) => {
  services.getBoards().then((boards) => {
    dispatch({
      type: "GET_BOARDS",
      payload: {
        boards,
      },
    });
  });
};

export const getBoardById = (boardId) => (dispatch) => {
  services.getBoardById(boardId).then((board) => {
    dispatch({
      type: "GET_BOARD",
      payload: {
        board,
      },
    });
    dispatch({
      type: "GET_LISTS",
      payload: { lists: board.lists },
    });

    dispatch({
      type: "GET_CARDS",
      payload: { lists: board.lists },
    });
  });
};
