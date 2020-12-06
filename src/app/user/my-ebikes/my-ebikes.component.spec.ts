import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEbikesComponent } from './my-ebikes.component';

describe('MyEbikesComponent', () => {
  let component: MyEbikesComponent;
  let fixture: ComponentFixture<MyEbikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEbikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
