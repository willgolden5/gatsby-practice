import * as React from "react"
import Footer from "../utils/footer"
import { DropDownMenu } from '../utils/navigation/dropDownMenu';
import { Navbar } from '../utils/navigation/navbar'
import { NavItem } from '../utils/navigation/navItem'
import { NYCHero } from '../utils/PageComponents/NycHero'


const IndexPage = () => {
  return (
    <div className='main'>
      <Navbar>
        <NavItem icon="😀" >
          <DropDownMenu></DropDownMenu>
        </NavItem>
        <NavItem icon="😁" />
        <NavItem icon="😁" >
          <p>Hello World</p>
        </NavItem>
      </Navbar>
      <NYCHero />
      <Footer className='footer-silhouette'/>
    </div>
  )
}

export default IndexPage
