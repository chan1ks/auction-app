import { AcutionPage } from './app.po';

describe('acution App', () => {
  let page: AcutionPage;

  beforeEach(() => {
    page = new AcutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
