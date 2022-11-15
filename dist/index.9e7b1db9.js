const Pet = (props)=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal)
    ]);
};
const App = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Hey"),
        React.createElement(Pet, {
            name: "Lucas",
            animal: "Dog"
        }),
        React.createElement(Pet, {
            name: "Julian",
            animal: "Roaster"
        })
    ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

//# sourceMappingURL=index.9e7b1db9.js.map
