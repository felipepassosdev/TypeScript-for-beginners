"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default('felipe', 'felipepassosdev@gmail.com', '12312dasd34d');
    return response.json({
        msg: "Hello " + user.name + ", your email is " + user.email + " and your passwword is " + user.password
    });
}
exports.helloWorld = helloWorld;
