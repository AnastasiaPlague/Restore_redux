export default class BookstoreService {
	data = [
		{
			id: 1,
			title: "Pale blue dot",
			author: "Carl Sagan",
			price: 30,
			coverImage: "https://img-gorod.ru/25/217/2521729_detail.jpg"
		},
		{
			id: 2,
			title: "Cosmos",
			author: "Carl Sagan",
			price: 50,
			coverImage: "https://img-gorod.ru/25/583/2558348_detail.jpg"
		}
	];

	getBooks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.75) {
					reject(new Error("Something went wrong"));
				} else {
					resolve(this.data);
				}
			}, 700);
		});
	}
}
