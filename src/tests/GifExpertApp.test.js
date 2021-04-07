import React from "react";
import { shallow } from "enzyme";
import { GifExpertApp } from "../Components/GifExpertApp";

describe("Pruebas en el componente", () => {
  test("debe mostrar correctamente el componente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe mostrar una lista de categorias", () => {
    const categories = ["Naruto", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
