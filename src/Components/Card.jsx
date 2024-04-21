const Card=({name})=>{
    return <a href="#" className="overflow-hidden rounded-xl flex justify-center max-w-fit relative">
        <img className="xsm-mx:w-32 xsm-mx:h-40 sm-mx:w-40 sm-mx:h-52 md-mx:w-48 md-mx:h-60 lg-mx:w-60 lg-mx:h-72  lg:max-w-40 lg:max-h-[240px] hover:scale-[1.2] transform transition-transform duration-[400ms]" src={`/Images/${name}.jpg`} />
        <span className="absolute top-4 text-white text-center xsm:text-lg sm:text-xl md:text-2xl font-bold">{name}</span>
    </a>
}
export default Card;