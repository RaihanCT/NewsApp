import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsArticleComponent } from './sports-article.component';

describe('SportsArticleComponent', () => {
  let component: SportsArticleComponent;
  let fixture: ComponentFixture<SportsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
