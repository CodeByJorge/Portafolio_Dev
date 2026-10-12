import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { portfolioConfig } from './config/portfolio.config';

describe('App', () => {
  beforeEach(async () => {
    // The app derives its initial language from storage, then the browser.
    // Pin it so the assertions below do not depend on the test runner's locale.
    localStorage.setItem('jgdev.language', portfolioConfig.defaultLanguage);

    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  afterEach(() => {
    localStorage.removeItem('jgdev.language');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the hero headline from config', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const { headline } = portfolioConfig.locales[portfolioConfig.defaultLanguage].hero;
    expect(compiled.querySelector('h1')?.textContent).toContain(headline);
  });

  it('should hide the testimonials section while there are none', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const hasTestimonials =
      portfolioConfig.locales[portfolioConfig.defaultLanguage].testimonials.length > 0;
    expect(!!compiled.querySelector('#testimonials')).toBe(hasTestimonials);
  });
});
