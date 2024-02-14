import { LuWaves } from "react-icons/lu";
import { LuWind } from "react-icons/lu";


const Indicator=({windSpeed,humidity})=>{
return(
<div className="flex justify-between m-10">
<div className="flex items-center text-white">
    <LuWaves className="mr-3 text-5xl" />
    <div className="flex-col">
    <h6 className="text-2xl">{humidity &&`${humidity}%`}</h6>
        <h6>Humidity</h6>
    </div>
</div>
<div className="flex items-center text-white">
    <LuWind className="mr-3 text-5xl"/>
    <div className="flex-col">
    <h6 className="text-2xl">{(windSpeed || windSpeed===0) && `${windSpeed} km/h`}</h6>
        <h6>Wind Speed</h6>
    </div>
</div>
</div>
)
}
export default Indicator;