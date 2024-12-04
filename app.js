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
    { id: 2,
      title: "Cake Quest",
      img: "/images/cake_quest.png",
      description: "This is a game I created using the python pygame library. This game was simple controls, using the 'wasd' keys for controlling your slime character, with the 'q' key firing off a slimeball to hit enemies while the 'e' key allows the slime to slam down a hammer. As of writing this, there are 2 levels with enemies in them and 2 enemy types. In addition, there are variants of certain enemies, making them behave differently starting in level two. Overall, it adds a lot of fun into this game. I personally made all of the art for this game and utilized the silkscreen font. Overall, this project was a lot of fun and I keep working on it to add new features. As of now, there are death animations, better spawners that alert the player when they are about to spawn new enemies, and a spawning system that randomizes both types and variants of enemies. Overall, this is the project I'm most proud of.",
      url_destination: "GitHub Repository",
      url: "https://github.com/ESmithByui/Cake-Quest" },
    
  ];
const info = {items, item: null};


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