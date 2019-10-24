import { Component, OnInit } from '@angular/core';
import { ICompound, Compound } from '../models/compound.model';
import { ActivatedRoute } from '@angular/router';
import { AddCompoundDialogComponent } from '../dialogs/add-compound-dialog/add-compound-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditCompoundDialogComponent } from '../dialogs/edit-compound-dialog/edit-compound-dialog.component';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-compound-list',
  templateUrl: './compound-list.component.html',
  styleUrls: ['./compound-list.component.scss']
})
export class CompoundListComponent implements OnInit {
  displayPinned: boolean = false;
  searchTerm = '';
  compounds: ICompound[];
  private display: string;
  addCompoundialogRef: MatDialogRef<AddCompoundDialogComponent>;
  editCompoundialogRef: MatDialogRef<EditCompoundDialogComponent>;
  constructor(
    private route: ActivatedRoute, 
    private dialog: MatDialog, 
    public firebaseService: FirebaseService,
    public auth: AuthService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.display = params.get('display');
      if(this.display === 'pinned'){
        this.displayPinned = true;
      }
      else{
        this.displayPinned = false;
      }
      this.getAllCompounds();
    });
  }

  getAllCompounds() {
    this.firebaseService.getCompounds().subscribe(data => {
      this.compounds = data;
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
}
