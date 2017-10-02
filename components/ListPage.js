var List = React.createClass({
    propTypes: {
            items: React.PropTypes.array
        },
    render: function () {
       let listOfListItems = this.props.items.map(function (item) {
           var thisKey = item.key;
            return (React.createElement("li", {key: thisKey},
                    React.createElement("a",{href:"#list/" + thisKey},
                    React.createElement("span", {id: thisKey}, item.name+" "),
                )));
        });
        return (React.createElement("div", {},
                React.createElement("ul", {}, listOfListItems),
                React.createElement(NavMenu,{})
            )
        )
    }
});


var state = {};

function setState(changes) {
//    if (location.hash !== "#new") {
//        location.hash = "#list"
//    }
    state = Object.assign({}, state, changes);
    var MainView = React.createElement(List, state);
    ReactDOM.render(MainView, document.getElementById("react-app"));
}

setState(globalItems);