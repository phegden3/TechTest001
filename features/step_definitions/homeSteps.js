import { Given, When } from "@wdio/cucumber-framework";
import homePage from "../pageobjects/HomePage";
import page from "../pageobjects/Page";

Given(/^I launch the application url$/, async () => {
  await page.launchBaseUrl();
});

When(/^I navigate to Authentication page$/, async () => {
  await page.clickButton(homePage.signIn);
});
