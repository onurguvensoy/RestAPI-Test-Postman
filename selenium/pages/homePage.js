const { By, until } = require("selenium-webdriver");

class HomePage {
    constructor(driver) {
        /**
 * @type {import("selenium-webdriver").WebDriver}
 */
        this.driver = driver;
        this.accountBalance = By.id("com.ziraat.ziraatmobil:id/account_info_value");
        this.logoutButton = By.id('submit');
        this.bookStoreButton = By.xpath('//span[text()="Book Store"]');
        this.profileButton = By.xpath('//span[text()="Profile"]');
        this.deleteButton = By.xpath('//button[text()="Delete Account"]');
        this.deleteAllBooksButton = By.xpath('//button[text()="Delete All Books"]');
        this.firstBook = By.css('.rt-tr-group .rt-td .action-buttons span a');
        this.deleteApprovalButton = By.id('closeSmallModal-ok');
        this.isbnValue = By.id('userName-value');
        this.backToProfileButton = By.id("addNewRecordButton")

    }

    async getBookTitles() {
        await this.driver.executeScript('window.scrollBy(0, 500);');
        const bookTitleElements = await this.driver.findElements(By.css('.rt-tr-group .rt-td .action-buttons span a'));
        const bookTitles = [];
        for (let element of bookTitleElements) {
            const title = await element.getText();
            bookTitles.push(title);
        }
        return bookTitles;
    }
    
    async getBookDetails(){
        await this.driver.findElement(By.css('.rt-tr-group .rt-td .action-buttons span a')).click();
        const isbnValue = await this.driver.findElement(this.isbnValue).getText();
        await this.driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
        await this.driver.wait((until.elementLocated(this.backToProfileButton)),10000).click();
        return isbnValue;
    }


    async deleteAccount(){
        await this.driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
        await this.driver.wait((until.elementLocated(this.deleteButton)),10000).click();
        await this.driver.wait((until.elementLocated(this.deleteApprovalButton)),10000).click();
    }

    async deleteAllBooks() {
        await this.driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
        await this.driver.wait((until.elementLocated(this.deleteAllBooksButton)),10000).click();
        await this.driver.wait((until.elementLocated(this.deleteApprovalButton)),10000).click();
    }

    async getFirstBook() {
        await this.driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
        await this.driver.wait((until.elementLocated(this.profileButton)),10000).click();
       const firstBook =  await this.driver.wait((until.elementLocated(this.firstBook)),10000).getText();
       return firstBook;
    }

    async logout() {
        await this.driver.wait((until.elementLocated(this.logoutButton)),3000).click();
    }


}

module.exports = HomePage;
