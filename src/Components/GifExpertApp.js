import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = ({defaultCategories = []}) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category}></GifGrid>;
        })}
      </ol>
    </>
  );
};
