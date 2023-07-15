import block from "../../assets/orange-block.png"


const OrangeBlock = () => {
  return (
    <div className=" flex justify-end absolute h-2/4 lg:h-3/4 w-1/3 lg:w-2/3 left-[66.66vw] lg:left-[33.33vw] -z-10">
        <img src={block} className="" alt=" block "/>
    </div>
  )
}

export default OrangeBlock
