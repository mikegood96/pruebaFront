import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutaDetailsComponent } from './fruta-details.component';

describe('FrutaDetailsComponent', () => {
  let component: FrutaDetailsComponent;
  let fixture: ComponentFixture<FrutaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
