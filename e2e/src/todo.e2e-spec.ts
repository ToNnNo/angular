import {$, $$, browser, logging, protractor} from 'protractor';

describe('workspace-project Todo', () => {
  let input: any;
  let btn: any;
  let liste: any;

  beforeEach(() => {
    browser.get(browser.baseUrl + '/todo');

    input = $('app-todo #task_input');
    btn = $('app-todo .input-group-append > button');
    liste = $$('app-todo .list-group button');

    input.sendKeys('Task #1');
    btn.click();

    input.sendKeys('Task #2');
    btn.click();

    input.sendKeys('Task #3', protractor.Key.ENTER);
  });

  it('should have "Exercice Todo List" header', () => {
    const h1 = $('app-todo header h1').getText();

    expect(h1).toEqual('Exercice Todo List');
  });

  it('liste.length = 3', () => {

    expect(liste.count()).toEqual(3);
  });

  it('Check each value of liste', () => {

    expect(liste.get(0).getText()).toEqual('Task #1');
    expect(liste.get(1).getText()).toEqual('Task #2');
    expect(liste.get(2).getText()).toEqual('Task #3');
  });

  it('Delete first Task', () => {

    liste.get(0).click();

    expect(liste.get(0).getText()).toEqual('Task #2');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
