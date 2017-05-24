import { OutlayPage } from './app.po';

describe('outlay App', () => {
  let page: OutlayPage;

  beforeEach(() => {
    page = new OutlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
