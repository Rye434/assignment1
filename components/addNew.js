let AddNew = React.createClass({
    
    handleClick: function(e) {
        e.preventDefault;
        let nameI = document.getElementById("nameInput").value;
        let emailI = document.getElementById("emailInput").value;
        var newKey = globalItems.items.length+1;
        var newItem = {
            key: newKey,
            id: newKey,
            name: nameI,
            email: emailI
        }
        globalItems.items.push(newItem);
        setState(globalItems);
    },
    
    
    render: function () {
        return (
            React.createElement("div", {},
                React.createElement("div", {id:"Wrapper"},
                React.createElement("form",{},
                React.createElement("input",{type:"text", placeholder:"Name", id:"nameInput"}),
                React.createElement("input",{type:"Email", placeholder:"Email", id:"emailInput"}),
                React.createElement("button",{onClick: this.handleClick, id:"submitBtn"},"submit"))),
                React.createElement(NavMenu,{}),
            )
        )
    }
});

function onSubmit() {
    console.log("works")
}