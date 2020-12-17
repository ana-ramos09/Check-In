import { firestore } from "./firebaseUtils";

export const createList = (name, location) => {
	firestore
		.collection("lists")
		.add({
			name: name,
			location: location,
			tasks: [
				{
					visited: false,
					description: "",
					latitude: "",
					longitude: "",
				},
			],
		})
		.then(() => {
			console.log("List Created!");
		})
		.catch((error) => {
			console.log("Error on creating list", error);
		});
};

export const deleteListFb = (id) => {
	firestore
		.collection("lists")
		.doc(id)
		.delete()
		.then(() => {
			console.log("Document Delete!");
		})
		.catch((error) => {
			console.log("Document not deleted", error);
		});
};

export const saveList = (name, location, tasks, id) => {
	firestore
		.collection("lists")
		.doc(id)
		.update({
			name: name,
			location: location,
			tasks: tasks,
		})
		.then(() => {
			console.log("List Saved!");
		})
		.catch((error) => {
			console.log("List not saved", error);
		});
};
