import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Reponse from './Reponse'

export default function Quizz() {

    const url = "http://127.0.0.1:8000/api/questions";
    const [questionsData, setQuestionsData] = useState({})
    const {categ} = useParams();
    const categories = ["Géographie", "Français", "Sciences", "Sport"]
    const category = categories[categ - 1] || '';

    //METHODE FETCH
  
    
  
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

    //Page de chargement le temps d'attendre l'API
    const [isLoading, setIsLoading] = useState(true);
      if (isLoading) {
        return (
          <div>
            <div className="chargement">Chargement...</div>
          </div>
        ); }

  return (
    <div>
        <Reponse datas={questionsData}/>
    </div>
    
  )
}
