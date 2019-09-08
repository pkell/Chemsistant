import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundListComponent } from './compound-list/compound-list.component';
import { CompoundDetailComponent } from './compound-detail/compound-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { CompoundsRoutingModule } from './compounds-routing.module';
import { MatCardModule, MatGridListModule, MatToolbarModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { AddCompoundDialogComponent } from './dialogs/add-compound-dialog/add-compound-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {FlexModule, FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { EditCompoundDialogComponent } from './dialogs/edit-compound-dialog/edit-compound-dialog.component';
import { EditNotesDialogComponent } from './dialogs/edit-notes-dialog/edit-notes-dialog.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AddTaskDialogComponent } from './dialogs/add-task-dialog/add-task-dialog.component';
import { FirebaseService } from './services/firebase.service';
import { CompoundFilter } from './pipes/compound-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    CompoundsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    FlexModule,
    MatIconModule,
    CKEditorModule
  ],
  entryComponents: [AddCompoundDialogComponent, EditCompoundDialogComponent, EditNotesDialogComponent, AddTaskDialogComponent],
  declarations: [CompoundListComponent, CompoundDetailComponent, TaskDetailComponent,
    AddCompoundDialogComponent, EditCompoundDialogComponent, EditNotesDialogComponent, AddTaskDialogComponent, CompoundFilter],
  providers: [FirebaseService]
})
export class CompoundsModule { }
