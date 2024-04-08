import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewProperty = () => {
    const { id } = useParams();
  const [property, setproperty] = useState(false);

  useEffect(() => {
      fetch(`/fackData.json`)
        .then(res => res.json())
        .then((data) => {
            const property = data.find(pd => pd.id == id);
            setproperty(property);
            
        })
  }, [id]);

  if (!property) {
    return <div>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-default-600 bg-rose-500 justify-center text-center items-center mx-auto"></div>
    </div>;
  }
  const { facilities } = property;

    return (
        <div>
            <div className="p-3">
                <img className="w-full h-[500px] rounded-2xl" src={property.image} alt="" />
                <div className=" mt-5 mb-5 ml-8  ">
                    <h1 className="text-5xl font-extrabold text-green-500">{property.segment_name}</h1>
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold text-grey-400">{property.estate_title}</h1>
                </div>
                <hr  className="border border-slate-500 pt-1 mt-5 "/>
                <div className="mt-5 mb-5">
                    <p className="text-gray-500 dark:text-gray-600">
                    {property.description}</p>
                </div>
                <div className="mb-5">
                    <h1 className="text-2xl font-bold text-slate-500"><span className="text-4xl font-bold text-gray-800">Facilities:</span > {facilities.map((ing, index) => (<li className="ml-5 mt-2" key={index}>{ing}</li>))}</h1>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Status:
                            <span className="text-2xl font-bold text-slate-500">   {property.status}</span>
                    </h1>

                </div>
                <div className=" mt-5 mb-5">
                    <h1 className="text-2xl font-bold text-slate-500"><span className="text-4xl font-bold text-gray-800">Area:</span> {property.area}</h1>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-500"><span className="text-4xl font-bold text-gray-800">Location:</span> {property.location}</h1>
                </div>
                <hr  className="border border-slate-500 pt-1 mt-5 "/>
                <div className=" mt-5 mb-5 bg-orange-200 p-2 rounded-full w-full md:w-1/3 pl-8">
                    <h1 className="text-2xl font-bold text-slate-500"><span className="text-4xl font-bold text-gray-800">Price:</span> {property.price}</h1>
                </div>

            </div>
            
        </div>
    );
};

export default ViewProperty;