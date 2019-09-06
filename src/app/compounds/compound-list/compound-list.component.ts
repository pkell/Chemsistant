import { Component, OnInit } from '@angular/core';
import { CompoundService } from '../services/compound.service';
import { ICompound, Compound } from '../compound.model';
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
    this.addCompoundialogRef.afterClosed().subscribe(result => {
      if(result){
        let comp = new Compound();
        comp.code = result.code;
        comp.formula = result.formula;
        comp.name = result.name;
        comp.pinned = false;
        comp.selectivityConditions = result.selectivityConditions;
        comp.temperature = result.temperature;
        this.compounds.push(comp);
        const postData = {
          description: comp
          };
        this.compoundService.createCompound(postData).subscribe(data => {
          console.log(data);
        });
      }
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
