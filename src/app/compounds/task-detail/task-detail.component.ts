import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FirebaseService } from '../services/firebase.service';
import { Task } from '../models/task.model';
import { EditNotesDialogComponent } from '../dialogs/edit-notes-dialog/edit-notes-dialog.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  id: string
  task: Task;
  editNotesDialogRef: MatDialogRef<EditNotesDialogComponent>;
  constructor(
    private route: ActivatedRoute, 
    private dialog: MatDialog, 
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getTask();
    });
  }

  getTask() {
    this.firebaseService.getTask(this.id).subscribe(data => {
      this.task = data;
    });
  }

  openEditNotesDialog() {
    this.editNotesDialogRef = this.dialog.open(EditNotesDialogComponent, {
      width: '600px',
      data: {
        notes: this.task.data
      }
    });
    this.editNotesDialogRef.afterClosed().subscribe(result => {
      this.firebaseService.updateTaskNotes(this.task.id, result);
      });
  }

}
