
// create an engine
let engine = Matter.Engine.create()

// create a renderer
let render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
        // background: '#fafafa',
        wireframes: false
    }
})

// create two boxes and a ground
let ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true })
let boxA = Matter.Bodies.rectangle(100, 150, 80, 80)
let boxB = Matter.Bodies.rectangle(150, 50, 80, 80)

let mouse = Matter.Mouse.create(render.canvas)
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        render: { visible: false }
    }
})


// add all of the bodies to the world
Matter.Composite.add(engine.world, [boxA, boxB, ground, mouseConstraint])


// keep the mouse in sync with rendering
render.mouse = mouse

 // fit the render viewport to the scene
Matter.Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 }
});


// run the renderer
Matter.Render.run(render)

// create runner
let runner = Matter.Runner.create()

// run the engine
Matter.Runner.run(runner, engine)


