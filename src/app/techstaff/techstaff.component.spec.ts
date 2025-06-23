import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechstaffComponent } from './techstaff.component';

describe('TechstaffComponent', () => {
  let component: TechstaffComponent;
  let fixture: ComponentFixture<TechstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechstaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
