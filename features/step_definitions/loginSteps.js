import { Given, When, Then } from "@wdio/cucumber-framework";
import loginPage from "../pageobjects/LoginPage";
import page from "../pageobjects/Page";
import state from "../../support/state";
import createAnAccountData from "../../dataFiles/createAnAccountData.json";
import myAccountPage from "../pageobjects/MyAccountPage";

When(/^I login with (\w+@\w+\.\w+) and (.+)$/, async (email, password) => {
  await loginPage.login(email, password);
});

When(/^I login with the newly created account credentials$/, async () => {
  await loginPage.login(state.male.emailAddress, createAnAccountData.password);
});

When(/^I verify login functionality with the newly created account credentials for below criteria$/, async (criteriaTable) => {
  let inputData = criteriaTable.hashes();
  for(let input of inputData){
    let email = input?.gender === 'female' ? state.female.emailAddress : state.male.emailAddress;
    await loginPage.login(email, createAnAccountData.password);
    await myAccountPage.verifyPageHeader();
    await page.clickButton(page.btnSignOut);
  }
});