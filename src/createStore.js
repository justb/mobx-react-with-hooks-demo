import TodoStore from "./store";
import { createContext } from "react";
export default function(global) {
  return {
    TodoStore: new TodoStore()
  };
}
