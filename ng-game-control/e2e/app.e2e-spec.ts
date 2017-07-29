import { NgGameControlPage } from './app.po';

describe('ng-game-control App', () => {
  let page: NgGameControlPage;

  beforeEach(() => {
    page = new NgGameControlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
