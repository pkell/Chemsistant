import { Component, OnInit } from '@angular/core';
import { CompoundService } from '../services/compound.service';
import { ICompound } from '../compound.model';
import { ActivatedRoute } from '@angular/router';
import { AddCompoundDialogComponent } from '../add-compound-dialog/add-compound-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditCompoundDialogComponent } from '../edit-compound-dialog/edit-compound-dialog.component';

@Component({
  selector: 'app-compound-list',
  templateUrl: './compound-list.component.html',
  styleUrls: ['./compound-list.component.scss']
})
export class CompoundListComponent implements OnInit {
  private compounds: ICompound[];
  private display: string;
  addCompoundialogRef: MatDialogRef<AddCompoundDialogComponent>;
  editCompoundialogRef: MatDialogRef<EditCompoundDialogComponent>;
  constructor(private compoundService: CompoundService, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllCompounds();
    this.route.paramMap.subscribe(params => {
      console.log(params.get('display'));
      this.display = params.get('display');
    });
  }

  getAllCompounds() {
    this.compoundService.getCompounds().subscribe(data => {
      this.compounds = data;
    });
  }

  openAddComponentDialog() {
    this.addCompoundialogRef = this.dialog.open(AddCompoundDialogComponent, {
      width: '500px'
    });
  }

  openEditComponentDialog(compound) {
    this.editCompoundialogRef = this.dialog.open(EditCompoundDialogComponent, {
      width: '500px',
      data: compound
    });
  }

  getIcon(pin: boolean): string {
    if (pin === true) {
        return 'bookmark';
    }
    return 'bookmark_border';
  }

  changePinnedStatus(compound) {
    compound.Pinned = ! compound.Pinned;
  }

}
