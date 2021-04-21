import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownAdminHeaderComponent } from './unknown-admin-header.component';

describe('UnknownAdminHeaderComponent', () => {
  let component: UnknownAdminHeaderComponent;
  let fixture: ComponentFixture<UnknownAdminHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknownAdminHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownAdminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
