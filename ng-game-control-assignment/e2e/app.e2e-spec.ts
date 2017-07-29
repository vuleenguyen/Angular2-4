import { NgGameControlAssignmentPage } from './app.po';

describe('ng-game-control-assignment App', () => {
  let page: NgGameControlAssignmentPage;

  beforeEach(() => {
    page = new NgGameControlAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
