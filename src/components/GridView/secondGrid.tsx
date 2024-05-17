import { SECOND_GRID_HEADLINE } from "../constatnts";

function SecondGrid(){
    return(
        <div className="flex flex-col justify-between gap-4 h-full w-full ">
            <section className="p-4 pb-2">
                <h1 className="font-secondary-medium w-[80%]">{SECOND_GRID_HEADLINE}</h1>
            </section>
            <section className="relative flex h-[30vh] ">
                <img src={"/second_grid_ellipse.svg"} alt="grid-ellipse"   />
                <img src={"/second_grid_card.svg"} alt="grid-card" className="absolute z-20 right-0 bottom-0" />
                <img src={"/second_grid_card_2.svg"} alt="grid-card" className="absolute z-20 right-0 bottom-0 " />
                <img src={"/second_grid_card_3.svg"} alt="grid-card" className="absolute z-20 right-0 bottom-0" />
            </section>
        </div>
    )
}

export default SecondGrid;