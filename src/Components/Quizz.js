import React from 'react'
import { useParams } from 'react-router-dom'

export default function Quiz() {

    const {categ} = useParams();
    const id = parseInt(categ)

  return (
    <div>
        <p>{id === 1 ? "Géographie" : id === 2 ? "Français" : id === 3 ? "Sciences" : "Sport"}</p>
    </div>
  )
}
