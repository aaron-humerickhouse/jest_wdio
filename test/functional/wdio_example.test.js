const makeClient = require('../wdio.setup.js');

beforeAll(async () => {
  	jest.setTimeout(60000);
    browser = makeClient();
    await browser.init();
});

beforeEach(async() => {
  await browser.url('http://www.google.com');
});

afterAll(async() => {
  await browser.end();
});

test('Webdriver.io can execute', async () => {
  const title = await browser.element('#gb').getText()
  expect(title).toContain('About')
});
