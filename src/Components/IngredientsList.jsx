import React, { useEffect, useState } from 'react'

const IngredientsList = ({ingredients, getRecipe, recipeRef}) => {
    // console.log(ingredients);
    const [isLoading, setIsLoading] = useState(false);
    const [isGenerated, setIsGenerated] = useState(false);
    const ingredientList = ingredients.map((ingredient)=>(
        <li key={ingredient}>{ingredient}</li>
      ));

      const handleClick = async () => {
        setIsLoading(true);
        setIsGenerated(false);
        await getRecipe();
        setIsLoading(false);
        setIsGenerated(true);
      };

      useEffect(()=>{
        if(isGenerated){
          recipeRef.current.scrollIntoView({behavior: 'smooth'});
        }
      })
    
  return (
    <div>
        {ingredients.length>0 ?
(
  <section className="flex flex-col w-[90%] gap-y-3 pl-6 rounded-md mt-7 sm:w-[51%]">
{ ingredients.length<4 &&  <p className='text-gray-500 font-black'>Add minimum of 4 ingredients to generate recipe</p>  }
  <h1 className='text-3xl font-medium '>Ingredients on hand:</h1>
<ul className='list-disc pl-5 text-gray-500 text-xl h-fit overflow-y-auto mb-4'>{ingredientList}</ul>
{ingredients.length>3 && <div className='border-none rounded-lg p-6 bg-[#ededed] flex flex-col items-center sm:flex sm:flex-row shadow-lg'>
<div className='sm:flex-[4]'>
  <h3 className='font-bold'>Ready for recipe?</h3>
  <p className='text-gray-500'>Generate a recipe from given list of ingredients.</p>
</div>
<button className='bg-[#D17557] h-fit border border-blue-400 text-white rounded-md min-w-[100px] py-1 mt-2 sm:mt-0 sm:flex-[1] sm:ml-2'
onClick={handleClick} disabled={isLoading}>    {isLoading
  ? 'Creating recipe...'
  : isGenerated
  ? 'Recipe generated'
  : 'Get a recipe'}</button>
</div>}

</section>

) : (
  <h3 className='text-gray-500 mt-6'>Add some ingredients to generate recipe</h3>
)
}
    </div>
  )
}

export default IngredientsList