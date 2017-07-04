import { PriceServiceDemoPage } from './app.po';

describe('price-service-demo App', () => {
  let page: PriceServiceDemoPage;

  beforeEach(() => {
    page = new PriceServiceDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
