import Banner from "../Banner";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Home = () => {
    const cards = useLoaderData();

    return (
        <div className="p-2">
            <Banner/>

            <div className="mt- mb-20">
                <h1 className="text-5xl font-bold text-center">Our Properties</h1>
                <p className="text-lg mt-5 text-center">
                Our properties, vital assets meticulously managed, fuel organizational growth. <br /> We prioritize their upkeep, assess value constantly, and ensure stringent security measures. <br /> Sustainability guides our development strategies, adhering to regulatory standards. <br /> Adaptability and innovation underpin our approach, fostering resilience across our diverse portfolio.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                
                {
                    cards.map(card => <Card key={card._id} card={card}></Card>)
                }
            </div>
            
        </div>
    );
};

export default Home;