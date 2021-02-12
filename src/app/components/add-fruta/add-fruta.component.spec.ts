import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFrutaComponent } from './add-fruta.component';

describe('AddFrutaComponent', () => {
  let component: AddFrutaComponent;
  let fixture: ComponentFixture<AddFrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
