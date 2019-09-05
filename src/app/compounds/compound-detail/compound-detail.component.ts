import { Component, OnInit } from '@angular/core';
import { ICompound, Compound } from '../compound.model';
import { CompoundService } from '../services/compound.service';
import { ActivatedRoute } from '@angular/router';
import { EditNotesDialogComponent } from '../edit-notes-dialog/edit-notes-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ITask } from '../task-detail/task.model';

@Component({
  selector: 'app-compound-detail',
  templateUrl: './compound-detail.component.html',
  styleUrls: ['./compound-detail.component.scss']
})
export class CompoundDetailComponent implements OnInit {
  private tasks: ITask[];
  private currentCompound: ICompound = new Compound();
  private id: number;
  editNotesialogRef: MatDialogRef<EditNotesDialogComponent>;

  constructor(private compoundService: CompoundService, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = +params.get('id');
      this.getCompound();
    });
    this.getAllTasks();
  }

  getCompound() {
    this.compoundService.getCompound(this.id).subscribe(data => {
      this.currentCompound = data;
    });
  }

  openEditNotesDialog() {
    this.editNotesialogRef = this.dialog.open(EditNotesDialogComponent, {
      width: '600px',
      data: this.currentCompound
    });
    this.editNotesialogRef.afterClosed().subscribe(result => {
      if(this.currentCompound.notes !== result){
        this.currentCompound.notes = result;
      }
    });
  }

    getAllTasks() {
    this.compoundService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

}
