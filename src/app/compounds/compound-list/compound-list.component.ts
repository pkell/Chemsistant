import { Component, OnInit } from '@angular/core';
import { ICompound, Compound } from '../compound.model';
import { ActivatedRoute } from '@angular/router';
import { AddCompoundDialogComponent } from '../dialogs/add-compound-dialog/add-compound-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditCompoundDialogComponent } from '../dialogs/edit-compound-dialog/edit-compound-dialog.component';
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
  constructor(
    private route: ActivatedRoute, 
    private dialog: MatDialog, 
    public firebaseService: FirebaseService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('display'));
      this.display = params.get('display');
      if(this.display === 'pinned'){
        if(this.items){
          this.items = this.items.filter(this.getPinned);
        }
        else{
          this.firebaseService.getCompounds().subscribe(data => {
            this.items = data;
            this.items = this.items.filter(this.getPinned);
          });
        }
      }
      else{
        this.getAllCompounds();
      }
    });
  }

  getAllCompounds() {
    this.firebaseService.getCompounds().subscribe(data => {
      this.items = data;
    });
  }

  getPinnedCompounds() {
    this.firebaseService.getPinnedCompounds().subscribe(data => {
      this.items = data;
    });
  }

  openAddComponentDialog() {
    this.addCompoundialogRef = this.dialog.open(AddCompoundDialogComponent, {
      width: '500px',
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
    this.firebaseService.updatePinnedStatus(item)
  }

  getPinned(element, index, array) { 
    return (element.payload.doc.data().pinned == true); 
 } 
}
