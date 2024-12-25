const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert'); 
const fs = require("fs")
const HomePage = require("./pages/homePage");
const LoginPage= require("./pages/loginPage");

const path = require("path");
const addContext = require("mochawesome/addContext");
const { get } = require('http');


describe(`Demoqa books Testing`,function(){
  this.timeout(60000);

  /**
 * @type {import("selenium-webdriver").WebDriver}
 */
  let driver;
  /**
 * @type {import("./pages/loginPage")}
 */
  let loginPage;
   /**
 * @type {import("./pages/homePage")}
 */
  let homePage;



  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get("https://demoqa.com/books")
    console.log("Driver has started.")
    loginPage = new LoginPage(driver);
    homePage = new HomePage(driver);
  
  })



  it("Login with invalid credentials ",async function() {
    await loginPage.login("onurguvensoy","Paramcom@123")
    await driver.sleep(5000);
  })

  it("Get Book Titles", async function() {
    const bookTitles = await homePage.getBookTitles();
    assert.strictEqual(bookTitles.length, 8);
  });


  it("Get First Book", async function() {
    const firstBook = await homePage.getFirstBook();
    assert.strictEqual(firstBook, "Git Pocket Guide");
  });

  it("Get Book Details", async function() {
    const isbnValue = await homePage.getBookDetails();
    assert.strictEqual(isbnValue, "9781449325862");
  });

  it("Delete All Books", async function() {
    await homePage.deleteAllBooks();
  });

  it("Delete Account", async function() {
    
    await homePage.deleteAccount();
  });



 it("Logout ",async function() {
    await homePage.logout();
  })

  afterEach(async function () {
    if(this.currentTest.state==="failed"){
      const date = new Date();
      const timestamp = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;

      const screenShot = await driver.takeScreenshot();
      const screenShotPath = path.join(__dirname,"./testReports/ScreenShots", `${this.currentTest.title}${timestamp}.png`)
      
      fs.writeFileSync(screenShotPath,screenShot,"base64");
      addContext(this,"Test Fail Screenshot")
      addContext(this,screenShotPath)
      console.log(screenShotPath)
    }
  })


  after(async function () {
    if(driver){
      await driver.quit()
      console.log("Driver quited")
    }
  })
})
