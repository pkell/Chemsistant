import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompoundDialogComponent } from './add-compound-dialog.component';

describe('AddCompoundDialogComponent', () => {
  let component: AddCompoundDialogComponent;
  let fixture: ComponentFixture<AddCompoundDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompoundDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
