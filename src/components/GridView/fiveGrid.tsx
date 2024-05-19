import { FIFTH_GRID_HEADLINE } from "../constatnts";

function FiveGrid(){
    return (
        <div className="pt-2 flex flex-col justify-between h-full w-full text-2xl items-center">
            <img src={"/fifth_grid_earn.png"} alt="earn-coins" className="w-[35%] object-cover" />
            <h1 className="font-primary-medium text-center px-2 mb-8 w-[80%]">{FIFTH_GRID_HEADLINE}</h1>
            <section className="w-full h-full">
                <img src={"/fifth_grid_spin.png"} alt="spin" />
            </section>
        </div>
    )
}

export default FiveGrid;