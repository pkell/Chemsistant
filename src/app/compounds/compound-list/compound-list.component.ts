import { Component, OnInit } from '@angular/core';
import { CompoundService } from '../services/compound.service';
import { ICompound, Compound } from '../compound.model';
import { ActivatedRoute } from '@angular/router';
import { AddCompoundDialogComponent } from '../add-compound-dialog/add-compound-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditCompoundDialogComponent } from '../edit-compound-dialog/edit-compound-dialog.component';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-compound-list',
  templateUrl: './compound-list.component.html',
  styleUrls: ['./compound-list.component.scss']
})
export class CompoundListComponent implements OnInit {
  private compounds: ICompound[];
  items: Array<any>;
  private display: string;
  addCompoundialogRef: MatDialogRef<AddCompoundDialogComponent>;
  editCompoundialogRef: MatDialogRef<EditCompoundDialogComponent>;
  constructor(private compoundService: CompoundService, private route: ActivatedRoute, private dialog: MatDialog, public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getAllCompounds();
    this.route.paramMap.subscribe(params => {
      console.log(params.get('display'));
      this.display = params.get('display');
    });
  }

  getAllCompounds() {
    this.firebaseService.getCompounds().subscribe(data => {
      this.items = data;
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

  changePinnedStatus(item) {
    //item.payload.doc.data().pinned = !item.payload.doc.data().pinned;
    this.firebaseService.updatePinnedStatus(item)
    console.log(item.payload.doc.data().pinned);
  }


}
