import { HowAngularWorksPage } from './app.po';

describe('how-angular-works App', () => {
  let page: HowAngularWorksPage;

  beforeEach(() => {
    page = new HowAngularWorksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
