// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const items = [
    { id: 1,
      title: "Item 1",
      img: "/images/test1.png",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Massa libero accumsan aliquam taciti pharetra taciti porttitor elit. Dapibus varius praesent enim non facilisi vivamus. Mus posuere cursus malesuada pretium vitae interdum malesuada nullam. Odio pharetra scelerisque curae per cras elementum. Molestie quis aenean arcu sodales malesuada. Amet aptent sociosqu imperdiet eu malesuada arcu massa elit. Vestibulum cursus sollicitudin, conubia class etiam tempor. Malesuada class adipiscing luctus et lacus facilisis facilisis dolor.",
      url_destination: "GitHub Repository",
      url: null },
    { id: 2, title: "Item 2", img: "/images/test2.png", description: "Details about Item 2", url_destination: "GitHub Repository", url: "https://esmithbyui.github.io/web-portfolio/personal-site/index.html" },
    { id: 3, title: "Item 3", img: "/images/test3.png", description: "Details about Item 3", url_destination: "GitHub Repository", url: "https://esmithbyui.github.io/web-portfolio/personal-site/index.html" },
  ];
const info = {items, item: null};
console.log(info)


app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.render("index", { info });
  });


app.post("/details", (req, res) => {
    const id = parseInt(req.body.id, 10); // Get the ID from the POST request
    const item = items.find((item) => item.id === id); // Find the item in the list
    if (item) {
      res.render("index", {info: {items, item} });
    } else {
      res.status(404).send("Item not found");
    }
  });


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});