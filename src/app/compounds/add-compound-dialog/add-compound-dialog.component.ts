import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-compound-dialog',
  templateUrl: './add-compound-dialog.component.html',
  styleUrls: ['./add-compound-dialog.component.scss']
})
export class AddCompoundDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddCompoundDialogComponent>
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      code: ['', Validators.required],
      name: '',
      selectivityConditions: '',
      temperature: '',
      formula: '',
    });
  }

  submit() {
    this.dialogRef.close(this.form.value);
  }

}
