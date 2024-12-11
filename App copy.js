/*
react element (object)===> HTML(browser understands) ..


*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "childOne" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h2", {}, "I am a H2 tag"),
    React.createElement("h3", {}, "I am a H3 tag"),
  ]),
  React.createElement("div", { id: "childTwo" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h2", {}, "I am a H2 tag"),
    React.createElement("h4", {}, "I am a H4 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", color: "red" },
  "Hello world from React!!"
);
console.log(heading); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // render function does the job of converting JS object to HTML tags
