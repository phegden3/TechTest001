import { baseUrl } from "../../support/urls";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class Page {

  //Page Locators:
  get btnSignOut() { return $('a.logout'); }


  //Page Methods:
  async launchBaseUrl() {
    await browser.url(baseUrl);
  }

  async clickButton (selector) {
    await selector.waitForEnabled();
    await selector.waitForClickable();
    await selector.click();
  }
  
}

export default new Page();