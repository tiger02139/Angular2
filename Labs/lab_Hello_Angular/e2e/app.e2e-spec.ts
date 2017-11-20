import { LabHelloAngularPage } from './app.po';

describe('lab-hello-angular App', function() {
  let page: LabHelloAngularPage;

  beforeEach(() => {
    page = new LabHelloAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
