import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbikesListComponent } from './ebikes-list.component';

describe('EbikesListComponent', () => {
  let component: EbikesListComponent;
  let fixture: ComponentFixture<EbikesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbikesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbikesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
