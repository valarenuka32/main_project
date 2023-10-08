const CronJob=require("cron").CronJob;
const {start}=require("repl");
const config=require("../config/config");
const {emailService,userService}=require("../services");
const{User}=require("../model");

new CronJob(
    "*/3 * * * * *",
    function(){
        console.log("It's running on every 3 seconds.")
    },
    null,
    false,
    "asia/kolkata"
).start();