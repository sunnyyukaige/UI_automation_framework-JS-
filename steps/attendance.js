/**
 * Created by sunny.yu2 on 9/29/2016.
 */
var config=require('../utility/config');
const actions = require('../bases/action');
var attendancePage=
module.exports = (yadda) => {
    yadda
        .when('I visit group with ID $ID', function openUrl(id) {
            actions.openUrl(+id);
        })
        .when('I click the attendance button', function clickAttendance() {
            actions.click('.Button___3X-i-')
        })
        .then('I see the attendance button', function findSelector() {
            actions.findSelector('.Button___3X-i-','ATTENDANCE')
        })
        .then('I see the attendance view', function findSelector() {
            actions.findSelector('.BaseSessionNav_content_line_heading___3gwRP', 'TESTFORLE_SESSION')
        })
        .then('The Day View button is highlighted', function findSelector() {
            actions.findSelectorWithcssProperty('.ViewNav_navButton___2otLH','DAY', 'background-color', 'rgba(0, 135, 230, 1)')
        });

};