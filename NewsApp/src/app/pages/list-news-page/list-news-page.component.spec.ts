import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNewsPageComponent } from './list-news-page.component';

describe('ListNewsPageComponent', () => {
  let component: ListNewsPageComponent;
  let fixture: ComponentFixture<ListNewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNewsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
