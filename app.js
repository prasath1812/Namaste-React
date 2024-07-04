// this is react element and js object not an html tag

const heading=React.createElement("h1",{id:"heading"},"hello prasath from react");


// this is the modern way of using react 
const parent=React.createElement("div",{id:"parent"},
       [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"hai iam h1 tag"),React.createElement("h2",{},"hai iam h2 tag")]
    )],
    [ React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"hai iam h1 tag"),React.createElement("h2",{},"hai iam h2 tag")]
    )]
)


        const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);
console.log(parent)