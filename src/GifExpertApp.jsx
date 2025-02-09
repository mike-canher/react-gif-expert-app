import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //console.log(newCategory);
    setCategories([newCategory, ...categories]);
  }
  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>

      {/* Input */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />


      {categories.map(category => {
        return (
          <GifGrid
            key={category}
            category={category} />
        )
      })}

    </>

  )
}
