import { firestore } from "./firebaseUtils";

export const createList = (name, location) => {
  firestore
    .collection("lists")
    .doc(name + " - " + location)
    .set({
      name: name,
      location: location,
      points: [],
    })
    .then(() => {
      console.log("List Created!");
    })
    .catch((error) => {
      console.log("Error on creating list", error);
    });
};

export const deleteList = (name, location) => {
  firestore
    .collection("lists")
    .doc(name + " - " + location)
    .delete()
    .then(() => {
      console.log("Document Delete!");
    })
    .catch((error) => {
      console.log("Document not deleted", error);
    });
};

export const saveList = (name, location, tasks) => {
  firestore
    .collection("lists")
    .doc(name + " - " + location)
    .update({
      points: tasks,
    })
    .then(() => {
      console.log("Saved List!");
    })
    .catch((error) => {
      console.log("List not saved", error);
    });
};
