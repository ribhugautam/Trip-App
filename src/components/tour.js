import Cards from "./cards";
function Tour ({tours, removeTour}) {

    return (
        <div className="flex flex-wrap justify-center items-center max-w-[1300px] mx-auto">
            
        {
            tours.map((tour) => {
                return <Cards key={tour.id} {...tour} removeTour = {removeTour}></Cards>
            })
        }
        
        </div>
    );
}

export default Tour;