class MyAccountPage {
    
    //Page Locators:
    get pageHeader() { return $('//h1[text()="My account"]'); }
    get linkBottomHome() { return $('a[title="Home"]'); }

    
    //Page Methods:
    async verifyPageHeader () {
        await this.pageHeader.waitForDisplayed();
    }

}

export default new MyAccountPage();