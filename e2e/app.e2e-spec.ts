import { HomeAutomationProPage } from './app.po';

describe('home-automation-pro App', function() {
  let page: HomeAutomationProPage;

  beforeEach(() => {
    page = new HomeAutomationProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
