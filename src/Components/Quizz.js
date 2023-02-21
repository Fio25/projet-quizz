import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Reponse from './Reponse'

export default function Quiz() {

    const {categ} = useParams();
    // const idCateg = parseInt(categ)
    const categories = ["Géographie", "Français", "Sciences", "Sport"]
    const url = "http://127.0.0.1:8000/api/questions";
    const [questionsData, setQuestionsData] = useState({})
    const category = categories[categ - 1] || '';
  
    
  
  //Page de chargement le temps d'attendre l'API
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetch(url)
      .then((response) => response.json())
      .then(questions => {
        var filteredData = questions.filter(item => item.categorie === category); 
        var randomData = filteredData.sort((a, b) => 0.5 - Math.random());  
        console.log(randomData);
        setQuestionsData(randomData)
          setIsLoading(false);
      });
    }, []);

    if (isLoading) {
      return (
        <div>
          <div className="chargement">Chargement...</div>
        </div>
      );
    }

  return (
    <div>
        <Reponse datas={questionsData}/>
        {/* <p>{idCateg === 1 ? "Géographie" : idCateg === 2 ? "Français" : idCateg === 3 ? "Sciences" : "Sport"}</p> */}
    </div>
    
  )
}
