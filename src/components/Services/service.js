import { Ropa } from "../Data/Ropa";

const getAll = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Ropa);
      }, [500]);
    });
  };

  const get = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Ropa.find((elem) => elem.id.toString() === id));
      }, [500]);
    });
  };

  const getByCategory = (category) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Ropa.filter((elem) => elem.category.toString() === category));
      }, [500]);
    });
  };

const add = (ropa) => {};

export const ropas = { getAll, get, add, getByCategory };