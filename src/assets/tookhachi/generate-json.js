// usage
// run node generate-json.js in this directory
let node_xj = require("xls-to-json");
node_xj({
  input: "roster.xlsx",
  output: "roster.json",
  sheet: "roster"
}, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});
