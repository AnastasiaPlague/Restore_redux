import { uniqueId } from "lodash";

export default class BookstoreService {
  data = [
    {
      id: uniqueId(),
      title: "Pale blue dot",
      author: "Carl Sagan",
      price: 30,
      coverImage: "https://img-gorod.ru/25/217/2521729_detail.jpg"
    },
    {
      id: uniqueId(),
      title: "Cosmos",
      author: "Carl Sagan",
      price: 50,
      coverImage: "https://img-gorod.ru/25/583/2558348_detail.jpg"
    },
    {
      id: uniqueId(),
      title:
        "Billions and Billions: Thoughts on Life and Death at the Brink of the Millennium",
      author: "Carl Sagan",
      price: 20,
      coverImage:
        "https://www.alpinabook.ru/upload/setka-editor/e94/e941ffa6d84aa7477d6ea7e7f6deeccc.jpg"
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (Math.random() > 0.75) {
        //   reject(new Error("Something went wrong"));
        // } else {
          resolve(this.data);
        // }
      }, 700);
    });
  }
}
