import { Component, OnInit } from '@angular/core';
import { ICompound, Compound } from '../compound.model';
import { ActivatedRoute } from '@angular/router';
import { EditNotesDialogComponent } from '../dialogs/edit-notes-dialog/edit-notes-dialog.component';
import { AddTaskDialogComponent } from '../dialogs/add-task-dialog/add-task-dialog.component';
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
  private compound : ICompound;
  private currentCompound: ICompound = new Compound();
  private id: string;
  editNotesDialogRef: MatDialogRef<EditNotesDialogComponent>;
  addTaskDialogRef: MatDialogRef<AddTaskDialogComponent>;

  constructor(
    private route: ActivatedRoute, 
    private dialog: MatDialog, 
    public firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getCompound();
      this.getAllTasks();
    });
  }

  getCompound() {
    this.firebaseService.getCompound(this.id).subscribe(data => {
      this.compound = data;
    });
  }

  openEditNotesDialog() {
    this.editNotesDialogRef = this.dialog.open(EditNotesDialogComponent, {
      width: '600px',
      data: {
        notes: this.compound.notes
      }
    });
    this.editNotesDialogRef.afterClosed().subscribe(result => {
      this.firebaseService.updateCompoundNotes(this.compound.id, result);
      });
  }

  openAddTaskDialog() {
    this.addTaskDialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '400px',
      height: '200px',
      data: this.id

    });
  }

    getAllTasks() {
    this.firebaseService.getTasks(this.id).subscribe(data => {
      this.tasks = data;
    });
  }

}
