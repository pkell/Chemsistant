import { Component, OnInit, Input } from '@angular/core';
import { IImage } from '../models/image.model';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  @Input() images: IImage[];
  constructor() { }

  ngOnInit() {
  }

}
