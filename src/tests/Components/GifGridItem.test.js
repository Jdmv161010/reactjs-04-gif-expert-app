import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../Components/GifGridItem";

describe("Componente GifGridItem", () => {
  const titulo = "titulo";
  const url = "https://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={titulo} url={url} />);

  test("Mostrar correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener un parrafo con el titulo", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(titulo);
  });

  test("Debe tener una imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(titulo);
  });

  test("Debe tener la clase FadeIn de animacion", () => {
    const div = wrapper.find("div");
    expect(div.hasClass("animate__fadeIn")).toEqual(true);
  });
});
