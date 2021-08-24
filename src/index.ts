import World from "./world"

const root = document.getElementById("root")

const world = new World("Hello TypeScript")

world.sayHello(root)