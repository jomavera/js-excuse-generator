/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  let who_ix = Math.floor(Math.random() * 5);
  let action_ix = Math.floor(Math.random() * 5);
  let what_ix = Math.floor(Math.random() * 4);
  let when_ix = Math.floor(Math.random() * 6);

  //write your code here

  excuse.innerHTML =
    who[who_ix] +
    " " +
    action[action_ix] +
    " " +
    what[what_ix] +
    " " +
    when[when_ix] +
    ".";
  console.log("Hello Rigo from the console!");
};
