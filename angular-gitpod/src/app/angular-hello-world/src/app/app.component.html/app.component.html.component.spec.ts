import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentHtmlComponent } from './app.component.html.component';

describe('AppComponentHtmlComponent', () => {
  let component: AppComponentHtmlComponent;
  let fixture: ComponentFixture<AppComponentHtmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponentHtmlComponent]
    });
    fixture = TestBed.createComponent(AppComponentHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
