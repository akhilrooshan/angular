import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingjsonComponent } from './testingjson.component';

describe('TestingjsonComponent', () => {
  let component: TestingjsonComponent;
  let fixture: ComponentFixture<TestingjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingjsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
