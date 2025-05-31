// import {HfInference} from '@huggingface/inference'

// const SYSTEM_PROMPT= `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`;

// const hf= new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);



// export async function getRecipeFromMistral(ingredientsArr){
//     const ingredientsString = ingredientsArr.join(",");
//     try {
//         const response = await hf.chatCompletion({
//             model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
//             messages: [
//                 {role: "system", content: SYSTEM_PROMPT},
//                 {role : "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`},
//             ],
//             max_tokens: 1024,
//         })
//         return response.choices[0].message.content
        
//     } catch (error) {
//         console.log(error.message);
        
//     }
// }

//OTHER AI FOR MORE RESPONSES SINCE CREDIT REACHED

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Make keyword title, ingredients, instructions heading bold and each heading followed by : symbol. Format your response in markdown to make it easier to render to a web page.`;


const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    const endpoint = "https://openrouter.ai/api/v1/chat/completions";

    const payload = {
        model: "mistralai/mistral-7b-instruct",
        messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` }
        ],
        max_tokens: 1024
    };

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.log("Error fetching recipe:", error.message);
        return null;
    }
}
