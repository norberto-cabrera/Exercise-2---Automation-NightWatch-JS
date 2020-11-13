module.exports = {
    'Microsoft.com': function (browser) {
      browser
        //1.-Go to microsoft.com/en-us/
        .url     ('https://www.microsoft.com/en-us/')
        .waitForElementVisible('body', 1000)
        .pause(3000)
        //Use an Assert in order to verify that you are actually on the page
        .assert.urlEquals("https://www.microsoft.com/en-us/")
        .saveScreenshot('./reports/search-result1.png')

        //2.-Go to Windows.
        .waitForElementVisible('#shellmenu_2', 1000)
        .click('#shellmenu_2')

        //3.-Click on Windows 10 Menu drop down.
        .waitForElementVisible('#c-shellmenu_54', 1000)
        .click('#c-shellmenu_54')

        //4.-Verify menu element are present: “Get windows 10”, “Why upgrade”, “Features”. ("How to get windows 10", "Buy Windows 10 Home")
        .waitForElementVisible('#c-shellmenu_55', 1000)
        .assert.visible("#c-shellmenu_55")
        .waitForElementVisible('#c-shellmenu_56', 1000)
        .assert.visible("#c-shellmenu_56")
        .waitForElementVisible('#c-shellmenu_57', 1000)
        .assert.visible("#c-shellmenu_57")
        .waitForElementVisible('#c-shellmenu_58', 1000)
        .assert.visible("#c-shellmenu_58")
        .waitForElementVisible('#c-shellmenu_59', 1000)
        .assert.visible("#c-shellmenu_59")
        .waitForElementVisible('#c-shellmenu_60', 1000)
        .assert.visible("#c-shellmenu_60")
        .waitForElementVisible('#c-shellmenu_61', 1000)
        .assert.visible("#c-shellmenu_61")
        .waitForElementVisible('#c-shellmenu_62', 1000)
        .assert.visible("#c-shellmenu_62")
        .waitForElementVisible('#c-shellmenu_63', 1000)
        .assert.visible("#c-shellmenu_63")
        .waitForElementVisible('#c-shellmenu_64', 1000)
        .assert.visible("#c-shellmenu_64")
        .saveScreenshot('./reports/search-result2.png')

        //5.-Click on Get windows 10. ("How to get windows 10")
        .click("#c-shellmenu_55")

        //6.-Verify the following text is displayed: What are you looking for today? (Want to get Windows 10?)
        .assert.containsText(".c-heading-2",'Want to get Windows 10?')
        .saveScreenshot('./reports/search-result3.png')

        //7.-Click on the search bar.
        .waitForElementVisible('#search', 1000)
        .click('#search')

        
        //8.-Search for Visual Studio Community.
        .setValue('#search','Visual Studio Community')
        .keys(browser.Keys.ENTER)
        
        //Alert
        .click('#R1MarketRedirect-close')

        //9.-Take a screenshot.
        .saveScreenshot('./reports/search-result4.png')

        //10.-Validate that there are only 20 results in the search page.
        .elements('css selector','.f-result-item',getInfo)
        function getInfo(elements) {
          console.log('Number of results: ' + elements.value.length);
        
        //Verify using any conditional that indded you only have 20 results
          if (elements.value.length==22)
             console.log("The number of results is 22");
          else
             console.log("The number of results is not 22")   
    
          elements.value.forEach(function (element) {
            browser.elementIdText(element.ELEMENT, function (res) {
              console.log('RESULT ' + element.ELEMENT + '\n', res.value);
            });
          });
        };
        browser.saveScreenshot('./reports/search-result5.png')

        //11.-Create validation for clicking next in first 3 pages.
        browser.useXpath()
        for (i=0;i<3;i++){
           if( browser.assert.visible("//span[contains(text(),'Next')]"))
               browser.click("//span[contains(text(),'Next')]");
           else 
             console.log("Next Button is not available in page" + i)
        }     
        browser.saveScreenshot('./reports/search-result6.png')
        browser.end();
    }
  };