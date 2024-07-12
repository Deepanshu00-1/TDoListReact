import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header.jsx'
import Content from './content.jsx'

function App(){
    return (
        <div>
            <Header />
            {/* Other components or content */}
            <Content />
        </div>

    );
}

export default App