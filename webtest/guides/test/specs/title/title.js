describe('Home page', function() {
  it('should have the right title', function () {
      browser.url('/exist/apps/guides/works/');
      assert.equal(browser.getTitle(), 'Guides');
  });
});
