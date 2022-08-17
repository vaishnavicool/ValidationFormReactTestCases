import classNames from "classnames"
import { FormattedMessage } from "react-intl"
import { useLocation, NavLink } from "react-router-dom"
import "./style.scss"


const Breadcrumb = () => {
  const { pathname } = useLocation()
  let paths = pathname.split("/")
  paths = paths.filter((d) => d != "")
  let path = ""

  return (
    <div>
      {paths.map((d, i) => {
        let isLast = i != paths.length - 1
        path = `${path}/${d}`

        return (
          <div className="content" key={d}>
            <NavLink
              className={classNames("content_text", { isActive: !isLast })}
              to={path}
            >
              <FormattedMessage id={`menubar.${d}`} />
            </NavLink>
            {isLast && " / "}
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrumb
