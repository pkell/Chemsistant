import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {
  form: FormGroup;
  private id;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddTaskDialogComponent>,
    public firebaseService: FirebaseService,
    @Inject(MAT_DIALOG_DATA) private data
  ) 
  { 
    this.id = data;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  submit() {
    this.firebaseService.createTask(this.id, this.form.value)
    this.dialogRef.close();
  }

}
