import { NgSplitAppComponentPage } from './app.po';

describe('ng-split-app-component App', () => {
  let page: NgSplitAppComponentPage;

  beforeEach(() => {
    page = new NgSplitAppComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
