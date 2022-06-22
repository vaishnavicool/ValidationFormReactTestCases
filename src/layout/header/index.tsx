import "./style.scss"

import { Form, FormControl, InputGroup } from "react-bootstrap"

import Image from "shared/Image"
import enhancer from "./enhancer"

function Header(props: any) {
  return (
    <div className="row">
      <div className="col-2">
        <Image className="menu-icon" src="menu-icon.png" alt="sortIcon" />
        <Image src="Logo.png" alt="coreLogo" className="logo-img" />
      </div>
      <div className="col-10 row">
        <div className="col-8">
          <InputGroup className="search-container">
            <div>
              <Image
                className="search-icon"
                src="search.png"
                alt="searchIcon"
              />
            </div>
            <FormControl type="text" placeholder="Search..." className="search-input"/>
          </InputGroup>
        </div>
        {/* <div className="col-4 details">
          <div className="col-6 img-container">
          <Image src="question.png" alt="coreLogo" className='question-icon' />
          <Image src="bell.png" alt="coreLogo" className='bell-icon' />
          </div>
          <div className="profile-info col-6">
            <div className="profile-img"><Image src="profile-image.png"/></div>
            <div>
              <div>Mohan Patcha</div>
              <div>Admin</div>
            </div>
          </div>
        </div> */}
        <div className="col-3 details offset-1">
          <div>
          <Image src="question.png" alt="coreLogo" className='question-icon' />
          </div>
          <div>
          <Image src="bell.png" alt="coreLogo" className='bell-icon' />
          </div>
          <div className="profile-info">
            <div className="profile-img"><Image src="profile-image.png"/></div>
            <div className="profile-detail">
              <div className="username">Mohan Patcha</div>
              <div className="role">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default enhancer(Header)
