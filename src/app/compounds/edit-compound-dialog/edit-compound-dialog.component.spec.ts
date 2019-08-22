import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompoundDialogComponent } from './edit-compound-dialog.component';

describe('EditCompoundDialogComponent', () => {
  let component: EditCompoundDialogComponent;
  let fixture: ComponentFixture<EditCompoundDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompoundDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
