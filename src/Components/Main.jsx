import React, { useRef, useState } from 'react'
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromMistral } from '../ai';

const Main = () => {

  const [ingredients, setIngredients] = useState([]);
  // const [newIng, setNewIng] = useState("");
  const [recipe, setRecipe] = useState("");

  const recipeRef = useRef(null);


// const addIngredient = (e)=>{
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);                  // The code uses e.currentTarget (which refers to the form element) to create a FormData object. This object automatically collects the values of all form elements that have a name attribute.
//   const newIngredient = formData.get("ingredient");                // FormData.get("ingredient") looks for the form field with the name "ingredient" and retrieves its current value. This is the exact text you entered into the input field.
//   setIngredients((prevIngredients)=>[...prevIngredients, newIngredient])
//   e.currentTarget.reset();
// }

async function getRecipe(){
  const recipeMarkdown = await getRecipeFromMistral(ingredients);
  setRecipe(recipeMarkdown);
  
}

//NEW WAY REACT 19
const addIngredient = (formData)=>{
  const newIngredient = formData.get("ingredient");

  if (!newIngredient || !newIngredient.trim()) {
    return window.alert("Please enter an ingredient");
  }

  if(ingredients.some(ing=>ing.toLowerCase()===newIngredient.toLowerCase())){   //some allows callback, includes() does'nt
    return window.alert("Ingredient already in the list")
  }

  setIngredients((prevIngredients)=>[...prevIngredients, newIngredient])
}

 




  return (
    <main className='flex flex-col items-center w-full'>


<form  action={addIngredient} className='flex w-[90%] h-20 justify-center gap-x-4 flex-wrap sm:flex-nowrap sm:w-[70%] sm:h-9'>
            <input className='flex-2 max-w-[450px] pl-3 placeholder:pl-3 border border-gray-300
            focus:outline-none focus:ring-1 focus:ring-cyan-200 rounded-md' type="text"
            placeholder='e.g. oregano' 
            name='ingredient' 
            // value={newIng} onChange={(e)=>setNewIng(e.target.value)}
             aria-label='Add ingredient' />
             <button className='flex-1 max-w-[180px] text-nowrap border-none text-white bg-black rounded-md px-1'>&#43;
             Add ingredient</button>
        </form>
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} recipeRef={recipeRef}/>
        {recipe && <ClaudeRecipe recipe={recipe} scrollTargetRef={recipeRef}/>}
       

        
       
       
        {/* <div className="flex flex-col w-[90%] gap-y-3 pl-6 rounded-md mt-7 sm:w-[51%]">
          <h1 className='text-3xl font-medium '>Ingredients on hand:</h1>
        <ul className='list-disc pl-5 text-gray-500 text-xl h-60 overflow-y-auto'>
          {ingredients.map((ing)=>{
           return <li key={ing}>{ing}</li>
          }  */}
          {/* OR */}
          {/* {ingredients.map((ing)=>(
            <li key={ing}>{ing}</li>
          )

          )}
        </ul>
        </div> */}



      
    </main>
  )
}

export default Main