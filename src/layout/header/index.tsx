import "./style.scss"
import Image from "shared/Image"
import enhancer from "./enhancer"

function Header(props: any) {
  return (
    <div className="row">
      <div className="col-2">
        {/* <Image className="menu-icon" src="menu-icon.png" alt="sortIcon" /> */}
        <Image src="Logo.png" alt="coreLogo" className="logo-img" />
      </div>
      <div className="col-10 row ">
        <div className="details">
        <div className="mx-4">
          <Image src="cube.png" alt="coreLogo" className='question-icon' />
          </div>
          <div className="mx-4">
          <Image src="question.png" alt="coreLogo" className='question-icon' />
          </div>
          <div className="mx-4">
          <Image src="bell.png" alt="coreLogo" className='bell-icon' />
          </div>
          <div className="profile-info mx-4">
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
