import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar() {

    const quote = [
        '\′Classic\′ – a book which people praise and don’t read. ~ Mark Twain',
        'so many books, so little time. ~ Frank Zappa',
        'there is no friend as loyal as a book. ~ Ernest Hemingway',
        'that\'s the thing about books. They let you travel without moving your feet. ~Jhumpa Lahiri',
        'if you have a garden and a library, you have everything you need. ~ Cicero',
        'One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time. ~ Carl Sagan',
        'but for my own part, if a book is well written, I always find it too short. ~ Jane Austen',
        'knowing someone who belongs to another species can enlarge your soul in surprising ways. ~ Sy Montgomery',
        'Fill your house with stacks of books, in all the crannies and all the nooks. ~ Dr Seuss',

    ];

    let quotes = quote[Math.floor(Math.random() * quote.length)];

    return ( <
        nav className = 'navbar'
        role = 'navigation'
        aria label = 'main navigation' >
        <
        div className = 'booksoulhug' >
        <
        p className = 'booksoul' > { quotes } < /p> < /
        div > <
        div className = 'links' >
        <
        h6 > < Link to = '/search'
        className = {
            window.location.pathname === '/search' ?
            'nav-link active' : 'nav-link'
        } >
        Search
        for a Book <
        /Link>

        <
        /h6>

        <
        h6 > < Link to = '/saved'
        className = {
            window.location.pathname === '/saved' ?
            'nav-link active' : 'nav-link'
        } >
        Your Saved Books <
        /Link>

        <
        /h6 > <
        /div> < /
        nav >
    )
}

export default Navbar