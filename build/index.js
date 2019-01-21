"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
var moment_1 = require("moment");
var IExternal_1 = require("./type/IExternal");
var dateStart = moment_1["default"].unix(IExternal_1._campaign.periodStart);
var dateEnd = moment_1["default"].unix(IExternal_1._campaign.periodEnd);
// console.log(dateStart.diff(dateEnd, "hours"));
// console.log(moment().format("DD"));
react_dom_1["default"].render(react_1["default"].createElement(App_1["default"], null), document.getElementById("root"));
