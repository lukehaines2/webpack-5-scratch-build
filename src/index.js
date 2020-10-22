import './styles/main.scss';
import eekeekpraak from "./images/eek.png";
import cubess from "./images/cubes.svg";

// Create a class property without a constructor
class Game {
  name = 'Violin Charades'
}
const myGame = new Game();
// Create paragraph node
const p = document.createElement('p');
p.textContent = `I like ${myGame.name}.`;

// Create heading node
const heading = document.createElement('h1');
heading.textContent = 'Interesting!';

// Append heading node to the DOM
const app = document.querySelector('#root');
app.append(heading);

const dolphin = document.createElement("img");
dolphin.src = eekeekpraak;
dolphin.style = "width:150px;height:150px;";
app.append(dolphin);

const cubes = document.createElement("img");
cubes.src = cubess;
cubes.style = "width:150px;height:150px;";
app.append(cubes);
