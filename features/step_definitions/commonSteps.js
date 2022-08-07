import { Then } from "@wdio/cucumber-framework";
import Page from "../pageobjects/Page";

Then(/^I logout from the applicaiton$/, async () => {
    await Page.clickButton(Page.btnSignOut);
});