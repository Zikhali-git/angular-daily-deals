import { AngularDailyDealsPage } from './app.po';

describe('angular-daily-deals App', function() {
  let page: AngularDailyDealsPage;

  beforeEach(() => {
    page = new AngularDailyDealsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
