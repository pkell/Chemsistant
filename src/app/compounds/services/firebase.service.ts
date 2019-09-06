import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getCompounds(){
      return this.db.collection('compounds').snapshotChanges()
  }

  getCompound(id: string){
    console.log(id);
    return this.db.collection('compounds').doc(id).snapshotChanges();
  }

  updateCompound(id, value){
    return this.db.collection('compounds').doc(id).set(value);
  }

  getTasks(compoundId){
    return this.db.collection('tasks', ref =>
        ref.where('compoundId', '==', compoundId)).snapshotChanges();
  }

  createUser(value){
    return this.db.collection('compounds').add({
      name: value.name,
      code: value.code,
      selectivityConditions: value.selectivityConditions,
      temperature: parseFloat(value.temperature),
      formula: value.formula,
      pinned: false,
      notes: ""
    });
  }

  updatePinnedStatus(data) {
      let val = data.payload.doc.data().pinned;
      val = ! val;
    return this.db
        .collection("compounds")
        .doc(data.payload.doc.id)
        .set({ pinned: val }, { merge: true });
 }
}