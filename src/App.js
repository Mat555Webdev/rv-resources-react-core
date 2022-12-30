import React, { Component } from "react"
import "./App.css"

//ported
import Navbar from "./components/Navbar.js"
import Herocontent from "./components/Herocontent.js"
import Herosection from "./components/Herosection.js"
import About from "./components/About.js"
import Aboutcontent from "./components/Aboutcontent.js"
import Testimonialcards from "./components/Testimonialcards.js"
import Footer from "./components/Footer.js"

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Herocontent />
        <Herosection />
        <About />
        <Aboutcontent />
        <Testimonialcards />
        <Footer />
      </div>
    )
  }
}

export default App
