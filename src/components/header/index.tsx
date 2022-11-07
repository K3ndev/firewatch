import type { Component } from 'solid-js';
import Hero from './hero/index'
import Nav from './nav/index'


export const Header: Component = () => {

    return (
        <header class='header'>
            <Nav/>     
            <Hero/>
        </header>
    );
};

