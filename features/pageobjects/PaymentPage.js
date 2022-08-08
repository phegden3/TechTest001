import donor from "../../dataFiles/donor.json";

class PaymentPage {
    //locators on Payment page
    get txtPaymentPage() { return browser.$('//legend//h2[text()="How would you like to donate?"]'); }
    get radiobtnCardPay() { return browser.$('//label[input[@value="bt"]]/div/span'); }
    get txtbxCardholderName() { return browser.$('//input[@id="cardholderName"]'); }
    get txtbxCardNumber() { return browser.$('//div[@id="card-number"]'); }
    get txtbxExpiryDate() { return browser.$('//input[@id="expiration"]'); }
    get txtbxCVV() { return browser.$('//input[@id="cvv"]'); }
    get radiobtnGiftAid() { return browser.$('//div[input[@name="giftAid"]]/label'); }
    get btnCompleteDonation() { return browser.$('//button[@type="submit"]'); }

    //methods on payment page
    async completePage() {
        await this.txtPaymentPage.waitForDisplayed(3000);
        await this.radiobtnCardPay.click();
        await this.txtbxCardholderName.setValue(donor.firstname);
        await browser.pause(1000);
        await browser.keys('Tab');
        await browser.keys(donor.cardNumber);
        await browser.pause(2000);
        await browser.keys('Tab');
        await browser.keys(donor.cardExpiry);
        await browser.pause(1000);
        await browser.keys('Tab');
        await browser.keys(donor.cvv);
        await browser.pause(1000);
        await browser.keys('Tab');
        // await this.txtbxCardNumber.setValue(donor.cardNumber);
        // await this.txtbxExpiryDate.setValue(donor.cardExpiry);
        // await this.txtbxCVV.setValue(donor.cvv);
        if (donor.giftaid === "yes") {
            await this.radiobtnGiftAid.click();
        }
        await this.btnCompleteDonation.click();
        await browser.pause(5000);
    }

}
export default new PaymentPage();