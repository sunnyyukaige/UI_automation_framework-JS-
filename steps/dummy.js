module.exports = (yadda) => {
  yadda
    .when('I visit group with ID $ID', function openUrl(id) {
      this.browser.url(`http://localhost.ef.com:8080/group/${id}`, () => {
        this.browser.waitForElementVisible('body', 3000);
      });
    })
    .when('I click the attendance button', function clickAttendance() {
      this.browser.waitForElementVisible('.test-button-go-to-attendance', 3000)
        .click('.test-button-go-to-attendance')
        .pause(1000);
    })
    .then('I see the attendance button', function findSelector() {
      this.browser.waitForElementVisible('.test-button-go-to-attendance', 3000)
        .assert.containsText('.test-button-go-to-attendance', 'ATTENDANCE');
    })
    .then('I see the attendance view', function findSelector() {
      this.browser.waitForElementVisible('.BaseSessionNav_content_line_heading___3gwRP', 3000)
        .assert.containsText('.BaseSessionNav_content_line_heading___3gwRP', 'TESTFORLE_SESSION');
    })
    .then('The Day View button is highlighted', function findSelector() {
      this.browser.waitForElementVisible('.ViewNav_navButton___2otLH', 3000)
        .assert.containsText('.ViewNav_navButton___2otLH', 'DAY')
        .assert.cssProperty(
          '.ViewNav_navButton___2otLH', 'background-color', 'rgba(0, 135, 230, 1)');
    });
};
