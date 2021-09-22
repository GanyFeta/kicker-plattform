import firestore from "@/firebase";

const db = firestore.collection("/games");
class DataService {
  getAll() {
    return db;
  }
  create(game) {
    return db.add(game);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new DataService();
