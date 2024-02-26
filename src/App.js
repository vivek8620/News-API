import React, { Component } from 'react'
import News from './News'
import Menu from './Menu'
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<News category="all" />} />
            <Route path="/business" element={<News category="business" />} />
            <Route path="/sports" element={<News category="sports" />} />
            <Route path="/Entertainment" element={<News category="Entertainment" />} />
            <Route path="/technology" element={<News category="technology" />} />
            <Route path="/science" element={<News category="science" />} />
            <Route path="/general" element={<News category="general" />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </>
    )
  }
}
