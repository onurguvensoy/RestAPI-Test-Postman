const { By, until } = require("selenium-webdriver");
const addContext = require('mochawesome/addContext');


class LoginPage {
    constructor(driver) {
        /**
        * @type {import("selenium-webdriver").WebDriver}
        */
        this.driver = driver;
        this.loginButton =  By.xpath('//button[text()="Login"]');
        this.newUserButton = By.id("newUser");
        this.registerButton = By.id("register");
        this.recaptcha = By.className("recaptcha-checkbox-border");
        this.firstnameInput = By.id("firstname");
        this.lastnameInput = By.id("lastname");
        this.usernameInput = By.id("userName");
        this.passwordInput = By.id("password");
 
    }

    /*async register(firstName,lastName,username,password) {
        await this.driver.wait(until.elementLocated(this.loginButton),15000).click();
        await this.driver.wait(until.elementLocated(this.newUserButton),15000).click();
        await this.driver.wait(until.elementLocated(this.firstnameInput),15000).sendKeys(firstName);
        await this.driver.wait(until.elementLocated(this.lastnameInput),15000).sendKeys(lastName);
        await this.driver.wait(until.elementLocated(this.usernameInput),15000).sendKeys(username);
        await this.driver.wait(until.elementLocated(this.passwordInput),15000).sendKeys(password);
        const recaptchaIframe = await this.driver.wait(until.elementLocated(By.css('iframe[title="reCAPTCHA"]')), 15000);
        await this.driver.switchTo().frame(recaptchaIframe);
        console.log(this.driver.getPageSource());
        await this.driver.wait(until.elementLocated(this.recaptcha),15000).click();
        await this.driver.switchTo().defaultContent();
        await this.driver.wait(until.elementLocated(this.registerButton),15000).click();
    }*/

    async login(username,password) {
        await this.driver.wait(until.elementLocated(this.loginButton),15000).click();
        await this.driver.wait(until.elementLocated(this.usernameInput),15000).sendKeys(username);
        await this.driver.wait(until.elementLocated(this.passwordInput),15000).sendKeys(password);
        await this.driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
        await this.driver.wait(until.elementLocated(this.loginButton),15000).click();
    }

}

module.exports = LoginPage;
