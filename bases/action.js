/**
 * Created by sunny.yu2 on 9/19/2016.
 */

var config=require('../utility/config');
module.exports = {
    openUrl: function (url) {
        console.log('hi');
        global.browser.url(url).waitForElementVisible('body', config.timeout);
    },

    click: function (classname) {
        global.browser.waitForElementVisible(classname, config.timeout)
            .click(classname)
    },
    findSelector: function (classname, containsText) {
        global.browser.waitForElementVisible(classname, config.timeout)
            .assert.containsText(classname, containsText);
    },
    findSelectorWithcssProperty: function (classname, containsText, property, propertyValue) {
        global.browser.waitForElementVisible(classname, config.timeout)
            .assert.containsText(classname, containsText)
            .assert.cssProperty(classname, property, propertyValue);
    }
}

