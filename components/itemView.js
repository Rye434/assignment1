let ItemView = React.createClass({
    propTypes: {
            key: React.PropTypes.number
        },
    render: function () {  
        let splitURL = location.hash.replace(/^#\/?|\/$/g, "").split("/")[1];
        console.log(splitURL);
        let item = globalItems.items[splitURL-1]
        return (React.createElement("div", {},
                React.createElement("ul", {},
                React.createElement("li", {key: location.hash},
                React.createElement("span", {id: "name"}, item.name),
                React.createElement("a", {
                href: "mailto:" + item.email, id: "email"
                }, item.email))),
                React.createElement(NavMenu,{})));
        }
});