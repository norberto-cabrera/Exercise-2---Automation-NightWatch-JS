module.exports = {
    'Microsoft.com': function (browser) {
      browser
        //1.-Go to microsoft.com/en-us/
        .url     ('https://www.microsoft.com/en-us/')
        .waitForElementVisible('body', 1000)
        .pause(3000)

        //2.-Go to Windows.
        .click('#shellmenu_2')

        //3.-Click on Windows 10 Menu drop down.
        .click('#c-shellmenu_53')

        //4.-Verify menu element are present: “Get windows 10”, “Why upgrade”, “Features”. ("How to get windows 10", "Buy Windows 10 Home")
        .assert.visible("#c-shellmenu_54")
        .assert.visible("#c-shellmenu_55")
        .assert.visible("#c-shellmenu_56")
        .assert.visible("#c-shellmenu_57")
        .assert.visible("#c-shellmenu_58")
        .assert.visible("#c-shellmenu_59")
        .assert.visible("#c-shellmenu_60")
        .assert.visible("#c-shellmenu_61")
        .assert.visible("#c-shellmenu_62")
        .assert.visible("#c-shellmenu_63")

        //5.-Click on Get windows 10. ("How to get windows 10")
        .click("#c-shellmenu_54")

        //6.-Verify the following text is displayed: What are you looking for today? (Want to get Windows 10?)
        .assert.containsText(".c-heading-2",'Want to get Windows 10?')

        //7.-Click on the search bar.
        .click('#search')

        
        //8.-Search for Visual Studio Community.
        .setValue('#search','Visual Studio Community')
        .keys(browser.Keys.ENTER)
        

        //9.-Take a screenshot.
        .saveScreenshot('./reports/search-result.png')

        //10.-Validate that there are only 20 results in the search page.
        .elements('css selector','.f-result-item',getInfo)
        function getInfo(elements) {
          console.log('Number of results: ' + elements.value.length);
    
          elements.value.forEach(function (element) {
            browser.elementIdText(element.ELEMENT, function (res) {
              console.log('RESULT ' + element.ELEMENT + '\n', res.value);
            });
          });
        };

        //11.-Create validation for clicking next in first 3 pages.
        browser.useXpath()
        for (i=0;i<3;i++){
           if( browser.assert.visible("//span[contains(text(),'Next')]") )
             browser.click("//span[contains(text(),'Next')]");
           else 
             console.log("Next Button is not available in page" + i)
        }     
  
        browser.end();
    }
  };