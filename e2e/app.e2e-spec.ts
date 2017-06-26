import { TruncatePage } from './app.po';

describe('truncate App', function() {
  let page: TruncatePage;

  beforeEach(() => {
    page = new TruncatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
