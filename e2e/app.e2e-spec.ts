import { StateProjectPage } from './app.po';

describe('state-project App', () => {
  let page: StateProjectPage;

  beforeEach(() => {
    page = new StateProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
