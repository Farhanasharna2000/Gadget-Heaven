import { useEffect, useState } from "react";
import Card from "./Card";
import { useLoaderData, useParams } from "react-router-dom";

const GadgetCards = () => {
const data=useLoaderData();

  const {category}=useParams();
  const[cards,setCards]=useState([]);
  useEffect(()=>{
if (category) {
  const filteredCategory=[...data].filter(card=>card.category===category)
setCards(filteredCategory);
}
else{
  setCards(data);
}
  },[data, category])
  
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
cards.map((card,idx)=>
<Card key={idx} card={card}>

</Card>)
}
      </div>
    );
};

export default GadgetCards;