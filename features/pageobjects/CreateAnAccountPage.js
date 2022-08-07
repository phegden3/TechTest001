import createAnAccountData from "../../dataFiles/createAnAccountData.json";
import state from "../../support/state";
import * as helpers from "../../support/helpers";

class CreateAnAccountPage {

    //Page Locators:
    get pageHeader() { return $('.page-heading'); }
    get radioBtnMr() { return $('#id_gender1'); }
    get radioBtnMrs() { return $('#id_gender2'); }
    get inputPersonalInfoFirstName() { return $('#customer_firstname'); }
    get inputPersonalInfoLastName() { return $('#customer_lastname'); }
    get inputPersonalInfoEmailAddress() { return $('#email'); }
    get inputPersonalInfoPassword() { return $('#passwd'); }
    get selectDOBDate() { return $('select#days'); }
    get selectDOBMonth() { return $('select#months'); }
    get selectDOBYear() { return $('select#years'); }
    // get selectDOBYear() { return $('//select[@id="years"]'); }
    get inputYourAddressFirstName() { return $('#firstname'); }
    get inputYourAddressLastName() { return $('#lastname'); }
    get inputCompany() { return $('#company'); }
    get inputAddressLine1() { return $('#address1'); }
    get inputAddressLine2() { return $('#address2'); }
    get inputCity() { return $('#city'); }
    get selectState() { return $('select#id_state'); }
    get inputPostalCode() { return $('#postcode'); }
    get selectCountry() { return $('#id_country'); }
    get inputMobileNumber() { return $('#phone_mobile'); }
    get inputAliasAddress() { return $('#alias'); }
    get btnRegister() { return $('#submitAccount'); }

    
    //Page Methods:
    async fillCompletePageMandatoryFields(inputData) {
        let gender = await inputData?.gender === 'female' ? 'female' : 'male';
        await expect(this.pageHeader).toHaveText('CREATE AN ACCOUNT');
        await this.fillYourPersonalInfo(inputData);
        await expect(this.inputPersonalInfoEmailAddress).toHaveValue(state[gender].emailAddress);
        await this.fillYourAddress(inputData);
    }

    async fillYourPersonalInfo(inputData) {
        let gender = await inputData?.gender === 'female' ? 'female' : 'male';
        await this.selectTitle(inputData);
        await this.inputPersonalInfoFirstName.setValue(createAnAccountData[gender].firstName);
        await this.inputPersonalInfoLastName.setValue(createAnAccountData[gender].lastName);
        await this.inputPersonalInfoPassword.setValue(createAnAccountData.password);
        await this.selectRandomDOB(inputData);
    }

    async fillYourAddress(inputData) {
        let gender = await inputData?.gender === 'female' ? 'female' : 'male';
        await this.inputYourAddressFirstName.setValue(createAnAccountData[gender].firstName);
        await this.inputYourAddressLastName.setValue(createAnAccountData[gender].lastName);
        await this.inputCompany.setValue(createAnAccountData.company);
        await this.inputAddressLine1.setValue(createAnAccountData.address);
        await this.inputAddressLine2.setValue(createAnAccountData.addressLine2);
        await this.inputCity.setValue(createAnAccountData.city);
        await this.selectRandomState();
        await this.fillRandomPostalCode();
        await this.selectCountry.selectByVisibleText('United States');
        await this.inputMobileNumber.setValue(createAnAccountData.mobileNumber);
        await this.inputAliasAddress.setValue(createAnAccountData.addressAliasName);
    }

    async selectTitle(inputData) {
        let radioBtnToBeSelected = await inputData?.gender === 'female' ? this.radioBtnMrs : this.radioBtnMr;
        await radioBtnToBeSelected.click();
    }

    async selectRandomDOB(inputData) {
        let dobDateIndexToBeSelected = Math.floor(Math.random() * 31) + 1;
        let dobMonthIndexToBeSelected = Math.floor(Math.random() * 12) + 1;
        let noOfYearsOptions = await $$(`${await this.selectDOBYear.selector} > option`).length;
        let dobYearIndexToBeSelected = Math.floor(Math.random() * noOfYearsOptions) + 1;
        state[await inputData?.gender === 'female' ? 'female' : 'male'].dob_date = (await $(`${await this.selectDOBDate.selector} > option:nth-child(${dobDateIndexToBeSelected + 1})`).getText()).trim();
        state[await inputData?.gender === 'female' ? 'female' : 'male'].dob_month = (await $(`${await this.selectDOBMonth.selector} > option:nth-child(${dobMonthIndexToBeSelected + 1})`).getText()).trim();
        state[await inputData?.gender === 'female' ? 'female' : 'male'].dob_year = (await $(`${await this.selectDOBYear.selector} > option:nth-child(${dobYearIndexToBeSelected + 1})`).getText()).trim();
        await this.selectDOBDate.selectByIndex(dobDateIndexToBeSelected);
        await this.selectDOBMonth.selectByIndex(dobMonthIndexToBeSelected);
        await this.selectDOBYear.selectByIndex(dobYearIndexToBeSelected);
        // await this.selectDOBYear.click();
        // await $(`//select[@id="years"]/option[text()="1989  "]`).click();
        // await $(`${await this.selectDOBYear.selector}/option[text()="1989  "]`).click();
        // await $(`//select[@id="years"]/option[contains(text(),"1989")]`).click();
        // await $(`${await this.selectDOBYear.selector}/option[contains(text(),"1989")]`).click();
        // await helpers.selectOptByVisibleTxtFromDropdownUsingDOMMtd('//select[@id="years"]', "1989");
        // await helpers.selectOptByVisibleTxtFromDropdownUsingDOMMtd(await this.selectDOBYear.selector, "1589");
        // await browser.pause(5000);
    }

    async selectRandomState() {
        let noOfStateOptions = await browser.$$(`${await this.selectState.selector} > option`).length;
        let stateNameIndexToBeSelected = Math.floor(Math.random() * noOfStateOptions) + 1;
        state.stateName = await $(`${await this.selectState.selector} > option:nth-child(${stateNameIndexToBeSelected + 1})`).getText();
        await this.selectState.selectByIndex(stateNameIndexToBeSelected);
    }

    async fillRandomPostalCode() {
        state.postalCode = `1${helpers.randomiseNumber(4)}`;
        await this.inputPostalCode.setValue(state.postalCode);
    }

    async clickRegisterButton() {
        await this.btnRegister.click();
        await browser.pause(2000);
    }
    
}

export default new CreateAnAccountPage();