import img1 from "../img/afogato.png";
import img2 from "../img/cafeleche.png";
import img3 from "../img/capu.png";
import img4 from "../img/cold.png";
import img5 from "../img/latte.png";
import img6 from "../img/moca.png";


export const productos = [
  {
    id: 1,
    nombre: "Affogato de Vainilla",
    descripcion: "Delicioso café con helado de vainilla.",
    precio: 1000,
    categoria: "frio",
    imagen: img1,
  },
  {
    id: 2,
    nombre: "Café con Leche",
    descripcion: "Clásico café con un toque de leche.",
    precio: 800,
    categoria: "caliente",
    imagen: img2,
  },
  {
    id: 3,
    nombre: "Cappuccino",
    descripcion: "Espuma cremosa y sabor intenso.",
    precio: 1200,
    categoria: "caliente",
    imagen: img3,
  },
  {
    id: 4,
    nombre: "Café Frío",
    descripcion: "Refrescante café para días calurosos.",
    precio: 900,
    categoria: "frio",
    imagen: img4,
  },
  {
    id: 5,
    nombre: "Latte",
    descripcion: "Perfecta mezcla de café y leche.",
    precio: 1000,
    categoria: "caliente",
    imagen: img5,
  },
  {
    id: 6,
    nombre: "Moca",
    descripcion: "Café con un toque de chocolate.",
    precio: 1100,
    categoria: "caliente",
    imagen: img6,
  },
];

export default productos;
