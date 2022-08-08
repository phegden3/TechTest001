import { Given, When, Then } from "@wdio/cucumber-framework";
import donationPage from "../pageobjects/DonationPage";
import detailsPage from "../pageobjects/DetailsPage";
import paymentPage from "../pageobjects/PaymentPage";
import thanksSuccessPage from "../pageobjects/ThanksSuccessPage";

Given(/^I Launch cruk donation application$/, async () => {
    await donationPage.launchBaseURL();
});

When(/^Donation details entered on donation page$/, async () => {
    await donationPage.completePage();
});

When(/^Details data entered in details page$/, async () => {
    await detailsPage.completePage();
});

When(/^Card payment completed$/, async () => {
    await paymentPage.completePage();
});

Then(/^Thank you page must be displayed with success message$/, async () => {
    await thanksSuccessPage.completePage();
});