import classNames from "classnames"
import { FormattedMessage } from "react-intl"
import { useLocation, Link } from "react-router-dom"

const Breadcrumb = () => {
  const { pathname } = useLocation()
  let paths = pathname.split("/")
  paths = paths.filter((d) => d != "")
  let path=''

  return (
    <div>
      {paths.map((d, i) =>{ 
        let isLast=i != paths.length - 1
        path=`${path}/${d}`
        return (
        <div className="content" key={d}>
          <Link className={classNames("content_text",{active:!isLast})} to={path}>
            <FormattedMessage id={`menubar.${d}`} />
          </Link>
        {isLast && " / "}
        </div>
      )})}
    </div>
  )
}

export default Breadcrumb
