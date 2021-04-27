import * as React from "react"
import Footer from "../utils/footer"
import { DropDownMenu } from '../utils/navigation/dropDownMenu';
import { Navbar } from '../utils/navigation/navbar'
import { NavItem } from '../utils/navigation/navItem'


const IndexPage = () => {
  return (
    <div className='main'>
      <Navbar>
        <NavItem icon="😀" >
          <DropDownMenu></DropDownMenu>
        </NavItem>
        <NavItem icon="😁" />
        <NavItem icon="temp" >
          <p>Hello World</p>
        </NavItem>
      </Navbar>
      <body className='hero'>
        <h1>TITLE</h1>
        <p>Laboris magna velit ut est veniam nostrud deserunt. 
          Ex fugiat cillum quis nulla sit irure ipsum Lorem mollit officia laborum. 
          Cillum ut do aliquip irure irure dolore nostrud fugiat elit adipisicing enim magna. 
          Duis dolore mollit adipisicing anim occaecat cillum aute ea commodo exercitation sunt exercitation.</p>
      </body>
      <Footer className='footer-silhouette'/>
    </div>
  )
}

export default IndexPage
