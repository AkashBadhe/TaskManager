// TODO: Implement the mock service.
import shortid from "shortid";
class Services {
  delay = 1;
  boardsKey = "boardsKey";
  modeKey = "Theme mode";

  _getMode() {
    return JSON.parse(localStorage.getItem(this.modeKey));
  }

  _setMode(mode) {
    localStorage.setItem(this.modeKey, JSON.stringify(mode));
  }

  _getListByTitle(boardId, listTitle) {
    const board = this._getBoard(boardId);
    const list = board.lists.find((list) => list.title === listTitle);
    return list;
  }

  _getList(boardId, listId) {
    const board = this._getBoard(boardId);
    const list = board.lists.find((list) => list._id === listId);
    return list;
  }

  _getLists(boardId) {
    const board = this._getBoard(boardId);
    return board.lists;
  }

  _setList(boardId, newList) {
    const board = this._getBoard(boardId);
    const list = board.lists.find((list) => list._id === newList._id);
    if (list) {
      list.title = newList.title;
      list.cards = newList.cards;
    } else {
      board.lists.push(newList);
    }

    this._setBoard(board);
  }

  _getBoard(boardId) {
    const boards = JSON.parse(localStorage.getItem(this.boardsKey)) || [];
    return boards.find((board) => board._id === boardId);
  }

  _setBoard(newBoard) {
    const boards = JSON.parse(localStorage.getItem(this.boardsKey)) || [];
    let board = boards.find((b) => b._id === newBoard._id);
    if (board) {
      board.title = newBoard.title;
      board.lists = newBoard.lists;
    } else {
      boards.push(newBoard);
    }
    localStorage.setItem(this.boardsKey, JSON.stringify(boards));
  }

  _getBoards = () => {
    return JSON.parse(localStorage.getItem(this.boardsKey)) || [];
  };

  _setBoards(boards) {
    localStorage.setItem(this.boardsKey, JSON.stringify(boards));
  }

  getListByTitle(boardId, listTitle) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._getListByTitle(boardId, listTitle));
      }, this.delay);
    });
  }

  getLists(boardId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._getList(boardId));
      }, this.delay);
    });
  }

  addCard(cardTitle, listId, boardId) {
    let self = this;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const list = self._getList(boardId, listId);
        const cardId = shortid.generate();
        const newCard = {
          title: cardTitle,
          _id: cardId,
        };
        list.cards.push(newCard);
        self._setList(boardId, list);
        resolve({ cardTitle, cardId, listId });
      }, this.delay);
    });
  }

  editCard(cardTitle, cardId, listId, boardId) {
    let self = this;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const list = self._getList(boardId, listId);
        const card = list.cards.find((card) => card._id === cardId);
        card.title = cardTitle;
        self._setList(boardId, list);
        resolve({
          cardTitle,
          cardId,
          listId,
        });
      }, this.delay);
    });
  }

  deleteCard(cardId, listId, boardId) {
    let self = this;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const list = self._getList(boardId, listId);
        list.cards = list.cards.filter((card) => card._id !== cardId);
        self._setList(boardId, list);
        resolve({
          cardId,
          listId,
        });
      }, this.delay);
    });
  }

  reorderList(
    cardId,
    sourceId,
    destinationId,
    sourceIndex,
    destinationIndex,
    boardId
  ) {
    let self = this;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Reorder within the same list
        if (sourceId === destinationId) {
          const list = self._getList(boardId, sourceId);
          const newCards = Array.from(list.cards);
          const [removedCard] = newCards.splice(sourceIndex, 1);
          newCards.splice(destinationIndex, 0, removedCard);
          self._setList(boardId, list);
        } else {
          const sourceList = self._getList(boardId, sourceId);
          const destinationList = self._getList(boardId, destinationId);
          const sourceCards = Array.from(sourceList.cards);
          const [removedCard] = sourceCards.splice(sourceIndex, 1);
          const destinationCards = Array.from(destinationList.cards);
          destinationCards.splice(destinationIndex, 0, removedCard);
          sourceList.cards = sourceCards;
          destinationList.cards = destinationCards;
          self._setList(boardId, sourceList);
          self._setList(boardId, destinationList);
        }
        resolve({
          sourceId,
          destinationId,
          sourceIndex,
          destinationIndex,
        });
      }, this.delay);
    });
  }

  addList(listTitle, boardId) {
    let self = this;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (self._getListByTitle(boardId, listTitle)) {
          reject({
            errorMessage: "List already exists",
          });
        }
        const listId = shortid.generate();
        const newList = {
          title: listTitle,
          _id: listId,
          cards: [],
        };

        self._setList(boardId, newList);
        resolve({ boardId, listId, listTitle });
      }, this.delay);
    });
  }

  editListTitle(listTitle, listId, boardId) {
    let self = this;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const list = self._getList(boardId, listId);
        list.title = listTitle;
        self._setList(boardId, list);
        resolve({ listTitle, listId });
      }, this.delay);
    });
  }

  deleteList(cards, listId, boardId) {
    let self = this;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let board = self._getBoard(boardId);
        board.lists = board.lists.filter((list) => list._id !== listId);
        self._setBoard(board);
        resolve({ cards, listId, boardId });
      }, this.delay);
    });
  }

  addBoard(boardTitle) {
    let self = this;
    return new Promise((resolve) => {
      setTimeout(() => {
        let boardId = shortid.generate();
        let board = {
          title: boardTitle,
          _id: boardId,
          lists: [],
        };
        self._setBoard(board);
        resolve({ boardTitle, boardId });
      }, this.delay);
    });
  }

  deleteBoard(boardId) {
    let self = this;
    return new Promise((resolve) => {
      setTimeout(() => {
        let boards = self._getBoards();
        boards = boards.filter((b) => b._id !== boardId);
        self._setBoards(boards);
        resolve({ boardId });
      }, this.delay);
    });
  }

  reorderBoard(listId, sourceId, sourceIndex, destinationIndex) {
    let self = this;
    return new Promise((resolve) => {
      setTimeout(() => {
        const board = self._getBoard(sourceId);
        const newLists = Array.from(board.lists);
        const [removedList] = newLists.splice(sourceIndex, 1);
        newLists.splice(destinationIndex, 0, removedList);
        board.lists = newLists;
        self._setBoard(board);
        resolve({
          sourceId,
          sourceIndex,
          destinationIndex,
        });
      }, this.delay);
    });
  }

  getBoards = () => {
    let self = this;
    return new Promise((resolve) => {
      setTimeout(() => {
        let boards = self._getBoards();
        boards = boards.map((board) => {
          return {
            ...board,
            lists: board.lists.map((list) => list._id),
          };
        });
        resolve(boards);
      }, this.delay);
    });
  };

  getBoardById(boardId) {
    let self = this;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(self._getBoard(boardId));
      }, this.delay);
    });
  }

  getMode() {
    let self = this;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(self._getMode());
      }, this.delay);
    });
  }

  setMode(mode) {
    let self = this;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(self._setMode(mode));
      }, this.delay);
    });
  }
}

const services = new Services();
export default services;
