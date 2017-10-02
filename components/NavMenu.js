let NavMenu = React.createClass({
    render: function() {
        return (
            React.createElement("ul", {className: "nav-menu"},
                React.createElement("li", {},
                    React.createElement("a", {href: "#new"}, "Add new item")
                ),
                React.createElement("li", {},
                    React.createElement("a", {href: "#list"}, "List View")
                )
            )
        )
    }
});

window.onhashchange = function() {
    //let component;
    if (location.hash == "#new") {
        //component = MenuPage;
        ReactDOM.render(React.createElement(AddNew, {}), document.getElementById("react-app"));
    } else if (location.hash == "#list"){
        setState(globalItems);
    } else {
        ReactDOM.render(React.createElement(ItemView, {}), document.getElementById("react-app"));
    }

    
};