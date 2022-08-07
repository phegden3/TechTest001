import { Given, When, Then } from "@wdio/cucumber-framework";
import page from "../pageobjects/Page";
import loginPage from "../pageobjects/LoginPage";
import createAnAccountPage from "../pageobjects/CreateAnAccountPage";
import state from "../../support/state";
import * as helpers from "../../support/helpers";

Then(/^I create a new account with below criteria$/, async (criteriaDataTable) => {
    const inputData = await criteriaDataTable.hashes();
    console.log(inputData);
    for(const input of inputData){
        console.log(input);
        let gender = await input?.gender === 'female' ? 'female' : 'male';
        state[gender].emailAddress = helpers.randomiseEmailAddress();
        await loginPage.enterCreatAnAccountEmailAddress(state[gender].emailAddress);
        await page.clickButton(loginPage.btnCreateAnAccount);
        await createAnAccountPage.fillCompletePageMandatoryFields(input);
        await createAnAccountPage.clickRegisterButton();
        await page.clickButton(page.btnSignOut);
    }
});

Then(/^I create a new account$/, async () => {
    state.male.emailAddress = helpers.randomiseEmailAddress();
    await loginPage.enterCreatAnAccountEmailAddress(state.male.emailAddress);
    await page.clickButton(loginPage.btnCreateAnAccount);
    await createAnAccountPage.fillCompletePageMandatoryFields();
    await createAnAccountPage.clickRegisterButton();
    await page.clickButton(page.btnSignOut);
});