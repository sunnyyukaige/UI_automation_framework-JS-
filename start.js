/* eslint strict: 'off' */
'use strict';

const path = require('path');
const glob = require('glob');
const fs = require('fs');
const Yadda = require('yadda');

const library = Yadda.localisation.English.library();
const featureParser = new Yadda.parsers.FeatureParser();

const steps = {}; // This is what is passed to Nightwatch.
const context = {};

beforeEach();
stepDefs().forEach(importStepDef);
const yadda = Yadda.createInstance(library);
featureFiles().forEach(executeFeature);
addDefaultSteps();

function featureFiles() {
  return glob.sync('qa/features/**/*.feature');
}


function stepDefs() {
  return glob.sync('qa/steps/**/*.js');
}

function importStepDef(stepDef) {
  /* eslint global-require: "off" */
  const file = path.resolve(`./${stepDef}`);
  require(file)(library, context);
}

function executeFeature(featureFile) {
  const text = fs.readFileSync(featureFile, 'utf8');
  const feature = featureParser.parse(text);

  feature.scenarios.forEach((scenario) => {
    steps[scenario.title] = (browser) => yadda.run(scenario.steps, { browser });
  });
}

function addDefaultSteps() {
  steps['Close session'] = (browser) =>{ browser.end();}
}

function beforeEach(){
  steps['Init session'] = (browser)=> {
     global.browser=browser;
  }
}

module.exports = steps;
