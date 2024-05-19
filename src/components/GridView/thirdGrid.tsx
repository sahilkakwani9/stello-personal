import { THIRD_GRID_HEADLINE } from "../constatnts";

function ThirdGrid(){
    return (
        <div className="pt-8 flex flex-col justify-between gap-8 md:gap-4 text-2xl ">
            <h1 className="font-primary-medium text-2xl px-3 text-center">{THIRD_GRID_HEADLINE}</h1>
            <section className="h-full px-12">
                <img src={"/third_grid_card.png"} className="md:w-full mx-auto my-0 w-[70%] md:h-full " />
            </section>
        </div>
    )
}

export default ThirdGrid;