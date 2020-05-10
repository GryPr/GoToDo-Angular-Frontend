import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOptionBarComponent } from './task-option-bar.component';

describe('TaskOptionBarComponent', () => {
  let component: TaskOptionBarComponent;
  let fixture: ComponentFixture<TaskOptionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskOptionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskOptionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
