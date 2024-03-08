import React,{useState} from 'react';

function Cards({id, name, info, image, price, removeTour}) {

    const[readmore,setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}.... `

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card flex flex-col max-w-[400px] p-4 m-4 bg-white rounded-md items-center justify-center shadow-lg">
            <a href={image} target="_blank" rel='noreferrer'>
                <img src={image} className="image aspect-square shadow-md rounded-lg" alt="Destination"/>
            </a>

            <div className='flex flex-col justify-between gap-3 p-2'>
            <div className='tourinfo'>
            <h4 className='price text-green-600 font-bold'>Rs.{price}</h4>
            <h4 className='name font-extrabold text-2xl'>{name}</h4>
            </div>

            <div className='description font-semibold pb-4'>
                {description}
                <span className="read-more text-blue-600 hover:text-blue-500 transition-all duration-200 cursor-pointer" onClick={readmoreHandler}>
                    {readmore ? ` Show less` : `Read more`} 
                </span>
            </div>
            </div>

            <button className='btn border-2 border-red-500 bg-red-300 p-1 rounded-lg w-full hover:bg-red-500 hover:text-white transition-all duration-200' onClick={() => removeTour(id)}>
                Not Intrested
            </button>

        </div>
    );
}

export default Cards;