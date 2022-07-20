import Image from "shared/Image"
const NoData = () => {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70vh",
    }}
  >
    <Image
      src="NoRecordsFound.png"
      style={{ objectFit: "contain", width: 200 }}
    />
  </div>
  )
}

export default NoData
