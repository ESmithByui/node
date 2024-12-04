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
      title: "To Do List (C++)",
      img: "/images/cpp_todo.png",
      description: "This is a small project made using C++. The hardest part of this project was properly compiling the code. Otherwise, it was fun to make. The data is saved and pulled from a local text file. Overall, this was a good beginning project for the year.",
      url_destination: "GitHub Repository",
      url: "https://github.com/ESmithByui/CPP-To-Do-List" },
    { id: 2,
      title: "Cake Quest",
      img: "/images/cake_quest.png",
      description: "This is a game I created using the python pygame library. This game was simple controls, using the 'wasd' keys for controlling your slime character, with the 'q' key firing off a slimeball to hit enemies while the 'e' key allows the slime to slam down a hammer. As of writing this, there are 2 levels with enemies in them and 2 enemy types. In addition, there are variants of certain enemies, making them behave differently starting in level two. Overall, it adds a lot of fun into this game. I personally made all of the art for this game and utilized the silkscreen font. Overall, this project was a lot of fun and I keep working on it to add new features. As of now, there are death animations, better spawners that alert the player when they are about to spawn new enemies, and a spawning system that randomizes both types and variants of enemies. Overall, this is the project I'm most proud of.",
      url_destination: "GitHub Repository",
      url: "https://github.com/ESmithByui/Cake-Quest" },
    { id: 3,
      title: "Match The Sequence (Erlang)",
      img: "/images/match_the_sequence.png",
      description: "This is a small game I coded in the erlang language. It makes use of a process to handle remembering the current sequence. When starting the game, you can specify a standard length, as well as if you wish to use numbers, or a list of atoms that are predefined. In this example, I used colors. The best score you can get is lower than the number of elements there could be in the list. For example, guesing numbers in a sequence from 1 to 10, the score to beat is 10, because 10 is the max number of guesses one can make if they go one number per slot. Error handling is performed to ensure the users guess is valid, and invalid guesses do not count agaisnt the user in the total guesses used.",
      url_destination: "GitHub Repository",
      url: "https://github.com/ESmithByui/match_the_sequence" },
    { id: 4,
      title: "Sort Comparator (Typescript)",
      img: "/images/sort_comp.png",
      description: "This is a typescript project I created with the purpose of comparing three different sorting algorithms. This is all done using javascript in the end, but the initial code was typed using typescript. What's cool about this program is that it can give you the information on what it's currently sorting. Normally, it mainly shows if it's stuck on bubble sort. You can edit how many different numbers, the sizes of the lists, and the number of lists it iterates through. Overall, it's fairly simple, but a first time working with this coding language.",
      url_destination: "GitHub Repository",
      url: "https://github.com/ESmithByui/Sort-Compare" },
    { id: 5,
      title: "Web App (Node)",
      img: "/images/web_app.png",
      description: "This is the project you are viewing this all from. The main part of this project is the ability to generate all of this text from clicking the button. It's done using node js using express. Essentailly, I use a dictionary to form the buttons you click on (the pictures and titles) and then it pulls in all that items specific information to give you this descriptive text. I would also like to add that this is was mostly difficult in terms of getting css down once I got the code working. In reality, it just loads this page again using the relevant information and using if statements things appear or not. The GitHub Repository button will actually change depending on what's there, and may dissapear if there is no link to a project. After all, if it's a project that is an excel file, I can't share that here.",
      url_destination: "GitHub Repository",
      url: "https://github.com/ESmithByui/web_app" },
    
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