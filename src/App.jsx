import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Layout from "./Layout"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="text-white overflow-x-hidden">
      <Layout />
    </div>
  )
}

export default App
