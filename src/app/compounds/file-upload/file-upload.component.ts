import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  private uploadProgress;
  constructor() { }

  ngOnInit() {
  }

}
