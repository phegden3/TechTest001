import {baseUrl} from "../../support/urls";
import donor from "../../dataFiles/donor.json";
import state from "../../support/state";

class DonationPage {
    //locators on donation page
    get bannerCookies() { return browser.$("//div[@id=\"onetrust-banner-sdk\"]"); }
    get btnCookieConsentYes() { return browser.$("//button[@id=\"onetrust-accept-btn-handler\"]"); }
    get imgCrukLogo() { return browser.$("//img[@alt=\"Cancer Research UK logo\"]"); }
    get txtDonation() { return browser.$("//div[contains(@class,\"ProgressBar\")]//li[text()=\"Donation\"]"); }
    get txtbxOtherAmount() { return browser.$('//input[@id="otherAmount"]'); }
    get drpdownMotivation() { return browser.$('//select[@name="motivation"]'); }
    get txtbxMotivatorName() { return browser.$('//input[@id="inMemoryName"]'); }
    get btnContinue() { return browser.$('//button[@type="submit"]'); }
    get drpdownCancerType() { return browser.$('//select[@name="restriction"]'); }

    //methods on donation page
    async launchBaseURL() {
        await browser.url(baseUrl);
        if (await this.bannerCookies.waitForExist(3000)){
            await this.btnCookieConsentYes.click();
        }
        await this.imgCrukLogo.waitForDisplayed(3000);
        await browser.maximizeWindow();
    }

    async completePage() {
        await this.txtDonation.waitForDisplayed();
        state.amount = donor.amount;
        await this.txtbxOtherAmount.setValue(donor.amount);
        let radiobtnDonationType = browser.$('//label[span[text()="' + donor.donationType + '"]]/div/span');
        await radiobtnDonationType.click();
        await this.drpdownMotivation.scrollIntoView();
        await this.drpdownMotivation.waitForClickable();
        await this.drpdownMotivation.selectByVisibleText(donor.motivation);
        if (donor.motivation === "In memory of someone"){
            await this.txtbxMotivatorName.setValue(donor.add_info.motivator);
        }
        let radiobtnDonationFundwhere = browser.$('//label[span[contains(text(),"' + donor.add_info.donationGoes + '")]]/div[2]/span');
        await radiobtnDonationFundwhere.click();
        if (donor.add_info.donationGoes === "Choose a cancer type or an area of research") {
            await this.drpdownCancerType.selectByVisibleText(donor.cancerType);
        }
        await this.btnContinue.click();
    }
}
export default new DonationPage();