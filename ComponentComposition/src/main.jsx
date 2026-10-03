import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Card.jsx'

//1)Containment (Children prop)
  const Header=()=><header><h1>WELOME TO MY WEBSITE</h1></header>
  const Content=()=><main><h2>... Main Content ...</h2></main>
  const Footer=()=><footer><p>Manisha &copy;2026</p></footer>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Header/>
    <Content/>

      <Card>
      <h2>Welcome</h2>
      <p>This is content inside the card component</p>
      <button>Click Here</button>
      </Card>
      
      <App/>
      -----------------
      <Footer/>
    </StrictMode>,
)
