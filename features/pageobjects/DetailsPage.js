import donor from "../../dataFiles/donor.json";
import state from "../../support/state";

class DetailsPage {
    //locators on details page
    get txtYourDetails() { return browser.$('//legend/h2[text()="Your details"]'); }
    get drpdownTitle() { return browser.$('//select[@name="title"]'); }
    get txtbxFirstName() { return browser.$('//input[@id="forename"]'); }
    get txtbxLastName() { return browser.$('//input[@id="surname"]'); }
    get txtbxEmailAdd() { return browser.$('//input[@id="emailAddress"]'); }
    get txtbxPhoneNum() { return browser.$('//input[@id="phoneNumber"]'); }
    get txtbxPostCode() { return browser.$('//input[@id="postalCode"]'); }
    get btnFindAddress() { return browser.$('//button[@type="button"]/span[text()="Find address"]'); }
    get drpdownAddSelection() { return browser.$('//select[@name="addressSelection"]'); }
    get btnContinue() { return browser.$('//button[@type="submit"]'); }

    //methods on details page
    async completePage() {
        await this.txtYourDetails.waitForDisplayed(3000);
        await this.drpdownTitle.selectByVisibleText(donor.add_info.title);
        state.firstname = donor.firstname;
        await this.txtbxFirstName.setValue(donor.firstname);
        await this.txtbxLastName.setValue(donor.lastname);
        await this.txtbxEmailAdd.setValue(donor.email);
        await this.txtbxPhoneNum.setValue(donor.phone);
        await this.txtbxPostCode.setValue(donor.homeAddress.postcode);
        await this.btnFindAddress.click();
        let strAddress = donor.homeAddress.address1 + ', ' + donor.homeAddress.town + ', ' + donor.homeAddress.postcode;
        console.log(strAddress);
        await this.drpdownAddSelection.click();
        await this.drpdownAddSelection.selectByVisibleText(strAddress);
        let radiobtnEmail = browser.$('//fieldset[legend[text()="Email"]]//label[input[@value="' + donor.emailOptIn + '"]]/div/span');
        let radiobtnText = browser.$('//fieldset[legend[text()="Text"]]//label[input[@value="' + donor.add_info.textOption + '"]]/div/span');
        let radiobtnPhone = browser.$('//fieldset[legend[text()="Phone"]]//label[input[@value="' + donor.add_info.phoneOption + '"]]/div/span');
        let radiobtnPost = browser.$('//fieldset[legend[text()="Post"]]//label[input[@value="' + donor.add_info.postOption + '"]]/div/span');
        await radiobtnEmail.click();
        await radiobtnText.click();
        await radiobtnPhone.click();
        await radiobtnPost.click();
        await this.btnContinue.click();
    }

}
export default new DetailsPage();