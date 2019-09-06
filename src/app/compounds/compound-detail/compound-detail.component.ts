import { Component, OnInit } from '@angular/core';
import { ICompound, Compound } from '../compound.model';
import { CompoundService } from '../services/compound.service';
import { ActivatedRoute } from '@angular/router';
import { EditNotesDialogComponent } from '../edit-notes-dialog/edit-notes-dialog.component';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ITask } from '../task-detail/task.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-compound-detail',
  templateUrl: './compound-detail.component.html',
  styleUrls: ['./compound-detail.component.scss']
})
export class CompoundDetailComponent implements OnInit {
  private tasks: ITask[];
  private item;
  private currentCompound: ICompound = new Compound();
  private id: string;
  editNotesDialogRef: MatDialogRef<EditNotesDialogComponent>;
  addTaskDialogRef: MatDialogRef<AddTaskDialogComponent>;

  constructor(
    private compoundService: CompoundService, 
    private route: ActivatedRoute, 
    private dialog: MatDialog, 
    public firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //console.log(params.get('id'));
      this.id = params.get('id');
      this.getCompound();
    });
    this.getAllTasks();
  }

  getCompound() {
    this.firebaseService.getCompound(this.id).subscribe(data => {
      console.log(data);
      this.item = data.payload.data();
    });
  }

  openEditNotesDialog() {
    this.editNotesDialogRef = this.dialog.open(EditNotesDialogComponent, {
      width: '600px',
      data: this.currentCompound
    });
    this.editNotesDialogRef.afterClosed().subscribe(result => {
      if(this.currentCompound.notes !== result){
        this.currentCompound.notes = result;
      }
    });
  }

  openAddTaskDialog() {
    this.addTaskDialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '400px',
      height: '200px',
      data: this.id

    });
    this.addTaskDialogRef.afterClosed().subscribe(result => {
      if(result){
        // save
      }
    });
  }

    getAllTasks() {
    this.compoundService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

}
