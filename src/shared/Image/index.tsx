import React from "react"

const importAll = (require: any) =>
  require.keys().reduce((acc: any, next: any) => {
    acc[next.replace("./", "")] = require(next)
    return acc
  }, {})

const images = importAll(
  require.context("assets/icon", false, /\.(png|jpe?g|svg|jfif)$/)
)

const Image = ({ src, mouseOver , ...props }: any) => {
  return <img src={images[src]} onMouseOver={e => e.currentTarget.src = `${images[mouseOver]}` } onMouseOut={e => e.currentTarget.src = `${images[src]}` } {...props} />
}

export const PreLoad = () => (
  <div style={{ position: "absolute", zIndex: -1000, opacity: 0, bottom: 0 }}>
    {Object.keys(images).map((src) => (
      <img key={src} src={images[src]} />
    ))}
  </div>
)

export default Image
