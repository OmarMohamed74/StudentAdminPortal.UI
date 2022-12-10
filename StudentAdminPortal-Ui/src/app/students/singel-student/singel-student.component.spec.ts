import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingelStudentComponent } from './singel-student.component';

describe('SingelStudentComponent', () => {
  let component: SingelStudentComponent;
  let fixture: ComponentFixture<SingelStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingelStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingelStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
