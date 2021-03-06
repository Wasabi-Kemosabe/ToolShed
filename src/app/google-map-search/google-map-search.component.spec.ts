import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapSearchComponent } from './google-map-search.component';

describe('GoogleMapSearchComponent', () => {
  let component: GoogleMapSearchComponent;
  let fixture: ComponentFixture<GoogleMapSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
