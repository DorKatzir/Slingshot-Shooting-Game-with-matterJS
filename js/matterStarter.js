
// create an engine
let engine = Matter.Engine.create()

// create a renderer
let render = Matter.Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
let boxA = Matter.Bodies.rectangle(400, 200, 80, 80)
let boxB = Matter.Bodies.rectangle(450, 50, 80, 80)
let ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true })

// add all of the bodies to the world
Matter.Composite.add(engine.world, [boxA, boxB, ground])

// run the renderer
Matter.Render.run(render)

// create runner
let runner = Matter.Runner.create()

// run the engine
Matter.Runner.run(runner, engine)


