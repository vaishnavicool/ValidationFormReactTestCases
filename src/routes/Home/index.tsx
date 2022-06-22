import "./style.scss"
import TopSection from "../../layout/breadcrumb/index";
import LeftPanel from "./components/LeftPanel"
import RightPanel from "./components/RightPanel";
import useEnhancer from "./enhancer"

function Dashboard(props: any) {
  let extraProps = useEnhancer();

  return (
    <div className="container-fluid p-0">
      <TopSection {...extraProps}/>
      <div className="profile-container pt-3 ">
        <div className="row">
          <LeftPanel {...extraProps} />
          <RightPanel {...extraProps} />
        </div>
      </div>
    </div>
  )
}
export default Dashboard
