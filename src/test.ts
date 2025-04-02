import _ from "lodash"; // Importing an npm package
import { greet } from "./utils"; // Importing a local module

const app = document.getElementById("app");
if (app) {
  app.innerHTML = `<h1>${greet("Pedro")}</h1>`;
}

// Example usage of lodash
console.log(_.capitalize("hello, world!"));
