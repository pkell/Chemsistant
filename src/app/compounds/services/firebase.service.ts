import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../core/services/auth.service';
import { map } from 'rxjs/operators';
import { Compound, ICompound } from '../models/compound.model';
import { Observable } from 'rxjs';
import { Task, ITask } from '../models/task.model';
import { IImage, Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public db: AngularFirestore,
    public auth: AuthService) {}

  getCompounds(): Observable<ICompound[]>{
      return this.db.collection<Compound>('compounds', ref =>
        ref.where('uid', '==', this.auth.currentUserId)).snapshotChanges().pipe(map(compounds => {      
          return compounds.map(c => {
            const data = c.payload.doc.data() as Compound;
            const id = c.payload.doc.id;
            return {id, ...data};   
          });
        }));
  }

  getCompound(id: string) : Observable<ICompound> {
    return this.db.collection<Compound>('compounds', ref => 
      ref.where('uid', '==', this.auth.currentUserId)).doc(id).snapshotChanges().pipe(map(compound => {
        const data = compound.payload.data() as Compound;
        const id = compound.payload.id;
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
      notes: "",
      uid: this.auth.currentUserId
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

  updateTaskNotes(tId, data){
    return this.db
    .collection("tasks")
    .doc(tId)
    .set({ data: data}, { merge: true });
  }

  getTasks(compoundId) : Observable<ITask[]>{
  return this.db.collection('tasks', ref =>
      ref.where('compoundId', '==', compoundId).where('uid', '==', this.auth.currentUserId)).snapshotChanges().pipe(map(
        tasks => {      
        return tasks.map(task => {
          const data = task.payload.doc.data() as Task;
          const id = task.payload.doc.id;
          return {id, ...data};   
        });
      }));;
  }

  getTask(id: string) : Observable<ITask> {
    return this.db.collection<Task>('tasks', ref => 
      ref.where('uid', '==', this.auth.currentUserId)).doc(id).snapshotChanges().pipe(map(task => {
        const data = task.payload.data() as Task;
        const id = task.payload.id;
        return { id, ...data };
      }));
  }

  createTask(cId, value){
    return this.db.collection('tasks').add({
      compoundId: cId,
      name: value.name,
      data: "",
      uid: this.auth.currentUserId
    });
  }

  getImage(id: string) : Observable<IImage> {
    return this.db.collection<Task>('images', ref =>
      ref.where('uid', '==', this.auth.currentUserId)).doc(id).snapshotChanges().pipe(map(image => {
        const data = image.payload.data() as Image;
        const id = image.payload.id;
        return { id, ...data };
      }));
  }

  getImagesForTask(taskId: string) : Observable<IImage[]>{
    return this.db.collection('images', ref =>
        ref.where('parentId', '==', taskId).where('uid', '==', this.auth.currentUserId)).snapshotChanges().pipe(map(
          images => {      
          return images.map(image => {
            const data = image.payload.doc.data() as Image;
            const id = image.payload.doc.id;
            return {id, ...data};   
          });
        }));;
    }

  createImage(parent, downloadUrl){
    return this.db.collection('images').add({
      parentId: parent,
      url: downloadUrl,
      uid: this.auth.currentUserId
    });
  }
}