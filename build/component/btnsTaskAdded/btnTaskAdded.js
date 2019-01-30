"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var square_1 = require("../../reducer/square");
var BtnsTaskAdded = /** @class */ (function (_super) {
    __extends(BtnsTaskAdded, _super);
    function BtnsTaskAdded() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = square_1["default"].getState();
        _this._unsubscribe = function () { };
        _this.btnDuration = [
            { id: 1, name: 10, duration: 1 },
            { id: 2, name: 20, duration: 2 },
            { id: 3, name: 30, duration: 3 },
            { id: 4, name: 40, duration: 4 },
            { id: 5, name: 50, duration: 5 },
            { id: 6, name: 60, duration: 6 }
        ];
        return _this;
    }
    BtnsTaskAdded.prototype.componentDidMount = function () {
        var _this = this;
        this._unsubscribe = square_1["default"].subscribe(function () {
            _this.setState(square_1["default"].getState());
        });
    };
    BtnsTaskAdded.prototype.componentWillUnmount = function () {
        this._unsubscribe();
    };
    BtnsTaskAdded.prototype.press = function (item, e) {
        //e.stopPropagation();
        square_1["default"].open(item);
    };
    BtnsTaskAdded.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "btnsTaskAdded" },
            react_1["default"].createElement("input", { type: "button", className: "quickCompaign", value: "+ Quick compaign" }),
            react_1["default"].createElement("input", { type: "button", className: "btnSave", value: "Save" }),
            react_1["default"].createElement("div", { className: "btnsDuration" }, this.btnDuration.map(function (btn) {
                return (react_1["default"].createElement("input", { type: "button", key: btn.id, className: _this.state.square == true ? "btnDuration disabled" : "btnDuration", value: btn.name, onClick: function (e) { return _this.press(btn.id, e); } }));
            }))));
    };
    return BtnsTaskAdded;
}(react_1.Component));
exports["default"] = BtnsTaskAdded;
