import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-edit-compound-dialog',
  templateUrl: './edit-compound-dialog.component.html',
  styleUrls: ['./edit-compound-dialog.component.scss']
})
export class EditCompoundDialogComponent implements OnInit {
  form: FormGroup;
  private item;
  private id;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditCompoundDialogComponent>,
    public firebaseService: FirebaseService,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
      this.item = data.payload.doc.data();
      this.id = data.payload.doc.id;
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      code: [this.item.code, Validators.required],
      name: this.item.name,
      selectivityConditions: this.item.selectivityConditions,
      temperature: this.item.temperature,
      formula: this.item.formula,
    });
  }

  submit() {
    this.firebaseService.updateCompound(this.id, this.form.value)
    this.dialogRef.close();
  }

  close(){
     this.dialogRef.close();
  }

}
