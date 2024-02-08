const nestedhead = React.createElement("div", { className: "parent" },
    React.createElement("div", { className: "child" },
        React.createElement("h1", { className: "heading" }, "Nested Heading")));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedhead);
