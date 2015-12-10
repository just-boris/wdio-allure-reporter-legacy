describe('e2e tests', function() {
    it('should open page', function() {
        browser.url('/');
        expect(browser.getTitle()).toBe('Yandex');
    });

    it('should be broken', function() {
        throw new Error('failure example');
    });

    it('should be failed', function() {
        expect(true).toBeFalsy();
    });

    it('is pending');
});
