import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-compound-dialog',
  templateUrl: './edit-compound-dialog.component.html',
  styleUrls: ['./edit-compound-dialog.component.css']
})
export class EditCompoundDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditCompoundDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      code: [this.data.code, Validators.required],
      name: this.data.name,
      selectivityConditions: this.data.selectivityConditions,
      temperature: this.data.temperature,
      placeholder: this.data.placeholder,
    });
  }

  submit(form) {
    this.dialogRef.close(`${form.value.code}`);
  }

}
