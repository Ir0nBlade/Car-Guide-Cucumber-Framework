$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Find the dealers and verify the dealers are in the list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Find a Dealer\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027Car Dealers\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see the dealers names \"\u003cDealers Name\u003e\" are display on page",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;",
  "rows": [
    {
      "cells": [
        "Dealers Name"
      ],
      "line": 12,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;1"
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 13,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;2"
    },
    {
      "cells": [
        "4WDD Spec"
      ],
      "line": 14,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;3"
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 15,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9295917300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 256574100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Find the dealers and verify the dealers are in the list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Find a Dealer\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027Car Dealers\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see the dealers names \"3 Point Motors Epping\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindDealers.iClickOnFindADealerLink()"
});
formatter.result({
  "duration": 185405200,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 1869594700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Point Motors Epping",
      "offset": 32
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealersNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 20050951000,
  "status": "passed"
});
formatter.after({
  "duration": 629738500,
  "status": "passed"
});
formatter.before({
  "duration": 4730254800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 205662900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Find the dealers and verify the dealers are in the list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Find a Dealer\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027Car Dealers\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see the dealers names \"4WDD Spec\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindDealers.iClickOnFindADealerLink()"
});
formatter.result({
  "duration": 235764200,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 951861700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4WDD Spec",
      "offset": 32
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealersNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 20017537700,
  "status": "passed"
});
formatter.after({
  "duration": 629399800,
  "status": "passed"
});
formatter.before({
  "duration": 2849845000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy + sell\u0027 tab",
  "keyword": "When "
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 250401100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Find the dealers and verify the dealers are in the list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Find a Dealer\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027Car Dealers\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see the dealers names \"5 Star Auto\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindDealers.iClickOnFindADealerLink()"
});
formatter.result({
  "duration": 1098149800,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 25872100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 Star Auto",
      "offset": 32
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealersNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 16364211600,
  "status": "passed"
});
formatter.after({
  "duration": 625870200,
  "status": "passed"
});
});