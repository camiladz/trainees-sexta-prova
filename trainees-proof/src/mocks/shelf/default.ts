import productImage from '../../assets/product-image.svg'

// Necessária uma API para consultar catálogo
export default [
  {
    id: 1,
    name: "Maçã 100g",
    imageUrl: productImage,
    brand: "Nescau",
    price: 120,
    listPrice: 120,
    isWeighable: true,
    unitWeight: 100,
  },
  {
    id: 3,
    name: "Pão 200g",
    imageUrl: productImage,
    brand: "Nescau",
    price: 260,
    listPrice: 260,
    isWeighable: true,
    unitWeight: 200,
  },
  {
    id: 4,
    name: "Ovo 12un",
    imageUrl: productImage,
    brand: "Nescau",
    price: 240,
    listPrice: 240,
    isWeighable: false,
  },
  {
    id: 5,
    name: "Alface",
    imageUrl: productImage,
    brand: "Nescau",
    price: 320,
    listPrice: 320,
    isWeighable: false,
  },
  {
    id: 6,
    name: "Tomate",
    imageUrl: productImage,
    brand: "Nescau",
    price: 370,
    listPrice: 370,
    isWeighable: false,
  },
  {
    id: 9,
    name: "Batata",
    imageUrl: productImage,
    brand: "Nescau",
    price: 400,
    listPrice: 400,
    isWeighable: true,
    unitWeight: 100,
  }
];
