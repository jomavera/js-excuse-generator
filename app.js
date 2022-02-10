/* eslint-disable */
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
  let who_ix = Math.floor(Math.random() * who.length);
  let action_ix = Math.floor(Math.random() * action.length);
  let what_ix = Math.floor(Math.random() * what.length);
  let when_ix = Math.floor(Math.random() * when.length);

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
};
