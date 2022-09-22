//despues de la version 17 de react no es necesario hacer este import 
import { react } from 'react';
import { useState } from 'react';
import { AddCategories } from './Components/addCategories';
import { GifGrid } from './Components/GifGrid';


export const GifExpertApp =()=>{
    const [category, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
       if(category.includes(newCategory)) return;
       setCategories([newCategory,...category]);
    }

    return (
        <>  
            <h1>GifExpertApp</h1>

            <AddCategories //setCategories={setCategories}
                onNewCategory={(event)=>onAddCategory(event)}
            />
    
            {category.map(category => {
                return (<GifGrid key={category} category={category}/>);
            })}

        </>
    )
}