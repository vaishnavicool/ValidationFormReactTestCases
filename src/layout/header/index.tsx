import "./style.scss"
import Image from "shared/Image"
import enhancer from "./enhancer"
import { FormattedMessage } from "react-intl"

function Header(props: any) {
  return (
    <div className="row">
      <div className="col-2">
        <Image src="Logo.png" alt="coreLogo" className="logo-img" />
      </div>
      <div className="col-10 row ">
        <div className="details">
          <div className="mx-4">
            <Image src="cube.png" alt="coreLogo" className="question-icon" />
          </div>
          <div className="mx-4">
            <Image
              src="question.png"
              alt="coreLogo"
              className="question-icon"
            />
          </div>
          <div className="mx-4">
            <Image src="bell.png" alt="coreLogo" className="bell-icon" />
          </div>
          <div className="profile-info">
            <div className="profile-img">
              <Image src="profile-image.png" />
            </div>
            <div className="profile-detail">
              <div className="username"><FormattedMessage id="mohan_patcha" /></div>
              <div className="role"><FormattedMessage id="admin" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default enhancer(Header)
