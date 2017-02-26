import { WhoWasItPage } from './app.po';

describe('who-was-it App', () => {
  let page: WhoWasItPage;

  beforeEach(() => {
    page = new WhoWasItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
