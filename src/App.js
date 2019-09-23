import React, { useContext, useState, useEffect } from "react";
import ReactDom from "react-dom";
import { useObserver, observer, inject } from "mobx-react";
import { Route, Switch, Link } from "react-router-dom";
import TodoStore from "./store";
export default inject(store => {
  return {
    store: store.TodoStore
  };
})(
  observer(({ store }) => {
    const [count, setCount] = useState(0);
    return (
      <>
        <img src="/images/abc.png?123" alt="" />
        <div className="App">
          <button
            onClick={e => {
              setCount(count + 1);
            }}
          >
            button + {count}
          </button>
          {store.todos.map((item, index) => (
            <div
              key={index}
              style={{ opacity: item.completed ? 1 : 0.5 }}
              onClick={e => store.changeItem(index)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </>
    );
  })
);
