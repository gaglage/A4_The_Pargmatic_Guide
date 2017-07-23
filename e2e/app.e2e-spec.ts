import { A4ThePragmaticGuidePage } from './app.po';

describe('a4-the-pragmatic-guide App', function() {
  let page: A4ThePragmaticGuidePage;

  beforeEach(() => {
    page = new A4ThePragmaticGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
