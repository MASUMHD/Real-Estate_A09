import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Card = ( { card }) => {

    const {estate_title, segment_name,id,status,location,image,description } = card;
    
  return (
    <div className="md:ml-5 ">
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 border border-2 border-slate-500 rounded-xl pb-5">
        
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xl font-extrabold pt-4">
              <span>{segment_name}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div rel="noopener noreferrer" href="#" className="block pb-2">
              <h3 className="text-xl font-bold dark:text-default-600">
                {estate_title}
              </h3>
            </div>
            <hr  className="border border-slate-500 pt-1"/>
            <div className="pt-2 pb-4">
              <p className="text-gray-500 dark:text-gray-600">
                {description}
              </p>
            </div>
            <p className="flex justify-between">
                <p className="bg-orange-200 p-2 rounded-full md:mr-2 mr-2 w-1/2  md:w-1/2 text-center text-lg leading-snug dark:text-gray-600">
                    <span className="font-semibold">Status: </span><span className="text-xl font-bold">{status}</span>
                </p>
              <p className="bg-cyan-200 p-2 rounded-full w-1/2 text-center text-lg leading-snug dark:text-gray-600 flex items-center justify-center">
              <span className="mr-2 text-xl"><IoLocationOutline /></span>
                { location }
              </p>
            </p>
            <div className="justify-center items-center text-center">
            <Link to={`/details/${id}`} >
              <button className="btn bg-green-400 w-1/2 rounded-full ">View Property</button>
            </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
