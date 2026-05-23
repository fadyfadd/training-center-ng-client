import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudent } from './all-student';

describe('AllStudent', () => {
  let component: AllStudent;
  let fixture: ComponentFixture<AllStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllStudent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllStudent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
