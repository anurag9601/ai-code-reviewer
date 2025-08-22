import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const authenticationQuestion = "Authneticate your github account to proceed further. (y/n)"

function githubAuthentication() {
    rl.write("Welcome to AI code reviewer on PR request.")
    rl.question(authenticationQuestion, (answer) => {
        if(answer ){

        }
    } )
}