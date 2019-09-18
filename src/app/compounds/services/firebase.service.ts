import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../core/services/auth.service';
import { map } from 'rxjs/operators';
import { Compound, ICompound } from '../compound.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public db: AngularFirestore,
    public auth: AuthService) {}

  getCompounds(): Observable<ICompound[]>{
      return this.db.collection<Compound>('compounds', ref =>
        ref.where('userId', '==', this.auth.currentUserId)).snapshotChanges().pipe(map(items => {      
          return items.map(a => {
            const data = a.payload.doc.data() as Compound;
            const id = a.payload.doc.id;
            return {id, ...data};   
          });
        }));
  }

  getCompound(id: string) : Observable<ICompound> {
    return this.db.collection<Compound>('compounds', ref => 
      ref.where('userId', '==', this.auth.currentUserId)).doc(id).snapshotChanges().pipe(map(action => {
        const data = action.payload.data() as Compound;
        const id = action.payload.id;
        return { id, ...data };
      }));
  }

  updateCompound(id, value){
    return this.db.collection('compounds').doc(id).set(
      { 
        name: value.name,
        code: value.code,
        selectivityConditions: value.selectivityConditions,
        temperature: value.temperature,
        formula: value.formula,
     }, 
     { merge: true });
  }

  createCompound(value){
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
      let val = data.pinned;
      val = ! val;
    return this.db
        .collection("compounds")
        .doc(data.id)
        .set({ pinned: val }, { merge: true });
 }

 updateCompoundNotes(cId, data) {
  return this.db
    .collection("compounds")
    .doc(cId)
    .set({ notes: data }, { merge: true });
}

  getTasks(compoundId){
  return this.db.collection('tasks', ref =>
      ref.where('compoundId', '==', compoundId)).snapshotChanges();
  }

  createTask(cId, value){
    return this.db.collection('tasks').add({
      compoundId: cId,
      name: value.name,
      data: "",
    });
  }
}