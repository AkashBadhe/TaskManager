import shortid from "shortid";
export default class services {
  delay = 1000;
  createBoard(boardTitle) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let itemId = shortid.generate();
        let item = {
          boardTitle: boardTitle,
          id: itemId,
        };
        localStorage.setItem(itemId, item);
        resolve(item);
      }, this.delay);
    });
  }
}
