import { Then } from "@wdio/cucumber-framework";
import MyAccountPage from "../pageobjects/MyAccountPage";

Then(/^I should see My Account page$/, async () => {
    await MyAccountPage.verifyPageHeader();
});