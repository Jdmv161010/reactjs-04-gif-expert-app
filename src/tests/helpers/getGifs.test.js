import { getGifs } from "../../Components/helpers/getGifs";

describe("Pruebas en el getGifs fetch", () => {
  test("Debe retornar 10 elementos imagen", async () => {
    const categoria = "Dragon";
    const gifs = await getGifs(categoria);
    expect(gifs.length).toBe(10);
  });

  test("Debe retornar 0 elementos imagen", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
