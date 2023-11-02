import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Heading from "./components/Heading"
import ImageContainer from "./components/ImageContainer"


export default function App() {
    return (
        <main>
            <Header />
            <Heading />
            <Description />
            <ImageContainer />
            <Footer />
        </main>
    )
}