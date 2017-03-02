require("../../util.js");

describe('Login dialog', function() {
    browser.windowHandleSize({width: 1024, height: 1366});

    it('should insert credentials and submit', function() {
        browser.url("/exist/apps/guides/works/");
        browser.login();
    });
});