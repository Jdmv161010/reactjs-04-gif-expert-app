import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../Components/AddCategory";

describe("Pruebas en el componente AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Snapshot del componente AddCategory", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Cambios en el input", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe postear informacion con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe llamar el setCategories y limpiar la caja de texto", () => {
    const value = "value";

    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find("input").text().trim()).toBe("");
  });
});
