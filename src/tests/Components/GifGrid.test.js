import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../Components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import "@testing-library/jest-dom";
jest.mock("../../hooks/useFetchGifs");

const category = "naruto";

describe("Pruebas en el GifGrid component", () => {
  test("match con el snapshot", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar items cuando se cargan imagenes con el useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  });
});
