import { ScrumAppPage } from './app.po';

describe('scrum-app App', function() {
  let page: ScrumAppPage;

  beforeEach(() => {
    page = new ScrumAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
