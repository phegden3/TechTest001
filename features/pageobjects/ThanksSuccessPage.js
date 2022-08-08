import donor from "../../dataFiles/donor.json";
import state from "../../support/state";

class ThanksSuccessPage {
    //locators on Thank You page
    get msgThankYou() { return browser.$('//h2[text()="Thank you "]'); }
    get imgGiftAdded() { return browser.$('//div[text()="25% Gift Aid added"]'); }
    get txtReference() { return browser.$('//p[text()="Your reference number is "]'); }

    //methods on Thank You, Page
    async completePage() {
        //let txtThankYouSuccessMsg = browser.$('//h2[text()="Thank you " and text()="' + state.firstname + '" and text()=" for your donation of £" and text()="' + state.amount + '"]');
        await this.msgThankYou.waitForDisplayed();
        if (donor.giftaid === "yes") {
            await this.imgGiftAdded.waitForDisplayed();
        }
        await this.txtReference.waitForDisplayed();
    }
}
export default new ThanksSuccessPage();