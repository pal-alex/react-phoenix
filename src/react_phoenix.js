import React from "react"
import ReactDOM from "react-dom/client"

export default class ReactPhoenix {
  static init() {
    const elements = document.querySelectorAll('[data-react-class]')
    Array.prototype.forEach.call(elements, e => {
      const targetId = document.getElementById(e.dataset.reactTargetId)
      const target = targetId ? targetId : e
      const reactProps = e.dataset.reactProps ? e.dataset.reactProps : "{}"
      const reactClass = Array.prototype.reduce.call(
        e.dataset.reactClass.split('.'),
        (acc, el) => acc[el],
        window
      )
      const reactElement = React.createElement(reactClass, JSON.parse(reactProps))
      if (!target._reactRoot) {
        target._reactRoot = ReactDOM.createRoot(target);
      }
      target._reactRoot.render(reactElement);
    })
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactPhoenix.init()
})