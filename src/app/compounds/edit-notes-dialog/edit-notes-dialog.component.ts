import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-edit-notes-dialog',
  templateUrl: './edit-notes-dialog.component.html',
  styleUrls: ['./edit-notes-dialog.component.scss']
})
export class EditNotesDialogComponent implements OnInit {
  public Editor = ClassicEditor;
  private notesEdit: string;
  constructor(
    private dialogRef: MatDialogRef<EditNotesDialogComponent>,
    public firebaseService: FirebaseService,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.notesEdit = this.data.notes;
  }

  save(){
    this.firebaseService.updateCompoundNotes(this.data.id, this.notesEdit);
    this.dialogRef.close();
  }

  close(){
    this.dialogRef.close();
  }
}
