import { NgCliDemoPage } from './app.po';

describe('ng-cli-demo App', () => {
  let page: NgCliDemoPage;

  beforeEach(() => {
    page = new NgCliDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
