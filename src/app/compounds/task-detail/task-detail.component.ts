import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FirebaseService } from '../services/firebase.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  id: string
  task: Task;
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

}
