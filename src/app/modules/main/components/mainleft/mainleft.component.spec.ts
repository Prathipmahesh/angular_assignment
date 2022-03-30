import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainleftComponent } from './mainleft.component';

describe('MainleftComponent', () => {
  let component: MainleftComponent;
  let fixture: ComponentFixture<MainleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainleftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
