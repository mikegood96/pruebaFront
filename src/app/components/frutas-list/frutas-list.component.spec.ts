import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasListComponent } from './frutas-list.component';

describe('FrutasListComponent', () => {
  let component: FrutasListComponent;
  let fixture: ComponentFixture<FrutasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
