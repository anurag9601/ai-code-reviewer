"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const authenticationQuestion = "Authneticate your github account to proceed further. (y/n)";
function githubAuthentication() {
    rl.write("Welcome to AI code reviewer on PR request.");
    rl.question(authenticationQuestion, (answer) => {
        if (answer) {
        }
    });
}
