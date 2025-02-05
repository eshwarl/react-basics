const heading=React.createElement("div",{id:"heading"},"hiee react");

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"hiee eshwar"),
        React.createElement("h2",{},"hiee helloo/..!"),
    ]),

]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);