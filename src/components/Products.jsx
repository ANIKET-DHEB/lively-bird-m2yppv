import React from "react";
import { Product } from "./Product";

const products = [
  {
    id: Math.random(),
    productName: "Pedigree Adult Meat & Rice 10kg    ",
    imgUrl:
      "https://passport.petcart.in/images/prodimgs//p/e/pedigree_10kg_adult_meat_and_rice_1.png",
    originalPrice: 1500,
    currency: "₹",
    discountedPrice: 1700,
  },

  {
    id: Math.random(),
    productName: "Whiskas Adult Hairball Control Chicken ",
    imgUrl: "https://passport.petcart.in/images/prodimgs//1/_/1.2.jpg",
    originalPrice: 499,
    currency: "₹",
    discountedPrice: 699,
  },
  {
    id: Math.random(),
    productName: "Pedigree Active Adult Professional 10kg",
    imgUrl:
      "https://passport.petcart.in/images/prodimgs//p/e/pedigree_pro_active_adult_10_kg.png",
    originalPrice: 3000,
    currency: "₹",
    discountedPrice: 3999,
  },
  {
    id: Math.random(),
    productName: "Pedigree Puppy Milk & Vegetables 1.2Kg",
    imgUrl:
      "https://passport.petcart.in/images/prodimgs//p/e/pedigree_1.2_kg_puppy_milk_and_veg_1.png",
    originalPrice: 7999,
    currency: "₹",
    discountedPrice: 8999,
  },
  {
    id: Math.random(),
    productName: "Dash Dog Zoom Walk Along Harness - Violet & Red",
    imgUrl:
      "https://headsupfortails.com/cdn/shop/products/DSC_8320-Edit_6557c290-cbdf-4d88-b850-2d8f4c778b55.jpg?v=1680507932&width=823",
    originalPrice: 3499,
    currency: "₹",
    discountedPrice: 999,
  },
  {
    id: Math.random(),
    productName: "Churu Cat Treats Juicy Bites",
    imgUrl:
      "https://www.petsy.online/cdn/shop/products/ChuruCatTreatsJuicyBites-Shrimp_SeafoodMix_3sticksx11g_502x502.png?v=1680703024",
    originalPrice: 259,
    currency: "₹",
    discountedPrice: 299,
  },
  {
    id: Math.random(),
    productName: "Me-O Cat Food Tuna",
    imgUrl:
      "https://passport.petcart.in/images/prodimgs//m/e/me-o_cat_food_tuna_adult_450g.png",
    originalPrice: 159,
    currency: "₹",
    discountedPrice: 299,
  },
  {
    id: Math.random(),
    productName: "Royal Canin Persian",
    imgUrl:
      "https://passport.petcart.in/images/prodimgs//r/o/royal_canin_persian_adult_-_400_gms.jpg",
    originalPrice: 459,
    currency: "₹",
    discountedPrice: 499,
  },
  {
    id: Math.random(),
    productName: "JerHigh roasted duck in gravy ",
    imgUrl:
      "https://passport.petcart.in/images/prodimgs//j/e/jerhighroasted_duck_in_garvy.jpg",
    originalPrice: 59,
    currency: "₹",
    discountedPrice: 99,
  },
  {
    id: Math.random(),
    productName: "Royal Pets Cart Dog & Cat Bed Anti-Skid Bottom ",
    imgUrl:
      "https://royalpetscart.com/cdn/shop/products/photo4_720x716.jpg?v=1664275838",
    originalPrice: 8999,
    currency: "₹",
    discountedPrice: 9999,
  },
  {
    id: Math.random(),
    productName: "  Acana Sport & Agility Dog Food",
    imgUrl:
      "https://headsupfortails.com/cdn/shop/files/064992530112.jpg?v=1705916011&width=823",
    originalPrice: 8999,
    currency: "₹",
    discountedPrice: 9999,
  },
  {
    id: Math.random(),
    productName: "  TickFree Dog Soap",
    imgUrl: "https://m.media-amazon.com/images/I/81MCW+ww0oL._SX569_.jpg",
    originalPrice: 99,
    currency: "₹",
    discountedPrice: 199,
  },
  {
    id: Math.random(),
    productName: "EPISKEY Pet Hair Remover Brush",
    imgUrl: "https://m.media-amazon.com/images/I/516NDoHIbxL._SX569_.jpg",
    originalPrice: 299,
    currency: "₹",
    discountedPrice: 399,
  },
  {
    id: Math.random(),
    productName: "Captain Zack Zoey Cat & Kittens Shampoo ",
    imgUrl: "https://m.media-amazon.com/images/I/61EpMvQLnuL._SX569_.jpg",
    originalPrice: 299,
    currency: "₹",
    discountedPrice: 399,
  },
  {
    id: Math.random(),
    productName:
      "Wahl Four in One Lavender Chamomile Calming Shampoo for Dogs ",
    imgUrl:
      "https://supertails.com/cdn/shop/files/GroomingShampoo_1_ba738813-5e82-445f-9e5d-124f7c224777.png?v=1696635067",
    originalPrice: 419,
    currency: "₹",
    discountedPrice: 500,
  },
  {
    id: Math.random(),
    productName: "Glucklich Heavy Duty Leash for Dogs (Black) ",
    imgUrl: "https://supertails.com/cdn/shop/files/image1325.png?v=1706181450",
    originalPrice: 359,
    currency: "₹",
    discountedPrice: 399,
  },
  {
    id: Math.random(),
    productName: "Truelove Classic Harness for Dogs (Grey) ",
    imgUrl:
      "https://supertails.com/cdn/shop/products/Frame1-2022-04-27T151157.543.png?v=1696628707",
    originalPrice: 2294,
    currency: "₹",
    discountedPrice: 2999,
  },
  {
    id: Math.random(),
    productName:
      "Pedigree Dentastix Oral Care for Adult (Medium Breed of 10 to 25 kg) Dog Treats",
    imgUrl: "https://supertails.com/cdn/shop/files/Frame10818.png?v=1701773139",
    originalPrice: 199,
    currency: "₹",
    discountedPrice: 299,
  },
  {
    id: Math.random(),
    productName: "Kitty Yums Ocean Fish Kitten (1 to 12 Months) Cat Dry Food ",
    imgUrl:
      "https://supertails.com/cdn/shop/files/KittyYumsKitten_1-12Months_DryCatFood_OceanFish_7kg.png?v=1699452062",
    originalPrice: 1700,
    currency: "₹",
    discountedPrice: 1900,
  },
  {
    id: Math.random(),
    productName: "Wahl Grooming Comb for Dogs and Cats (24cm) ",
    imgUrl: "https://supertails.com/cdn/shop/files/Frame12095.png?v=1696635418",
    originalPrice: 299,
    currency: "₹",
    discountedPrice: 399,
  },
  {
    id: Math.random(),
    productName: "Captain Zack Zoey Cat & Kittens Shampoo ",
    imgUrl: "https://m.media-amazon.com/images/I/61EpMvQLnuL._SX569_.jpg",
    originalPrice: 299,
    currency: "₹",
    discountedPrice: 399,
  },
];

const Products = () => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
