import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsArticlePageComponent } from './sports-article-page.component';

describe('SportsArticlePageComponent', () => {
  let component: SportsArticlePageComponent;
  let fixture: ComponentFixture<SportsArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsArticlePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
