import { FOURTH_GRID_HEADLINE } from "../constatnts";

function FourthGrid(){
    return (
        <div className="pt-4 flex flex-col justify-between gap-4 h-full w-full text-2xl items-center">
            <h1 className="font-primary-medium self-start w-[55%] px-6 pt-2">{FOURTH_GRID_HEADLINE}</h1>
            <section className="w-[70%]">
                <img src={"/fourth_grid_card.png"} className="h-full" />
            </section>
        </div>
    )
}

export default FourthGrid;