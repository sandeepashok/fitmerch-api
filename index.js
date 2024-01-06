const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors({ origin: 'https://fitmerch.netlify.app' }));

const products = [
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642429452/fitMerch/Products/nike/m-cu6270-458-nike-original-imafzajpfhxgzdjz_up1o70.jpg?q=50",
    title: "Hoodie Sweatshirt",
    description: "Full Sleeve Printed Men Sweatshirt",
    price: 2500,
    mrp: 3295,
    discount: 24,
    itemId: 1,
    brand: 'NIKE',
    rating: 4.1,
    category: 'Sweatshirts',
    gender: 'men',
    inStock: true,
    reviews: 24
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642429483/fitMerch/Products/nike/m-cj4839-011-nike-original-imafvuxs6yzxpdyb_zdjsaw.jpg?q=50",
    title: "Designer Track's",
    description: "Self Design Men Black Track Pants",
    price: 2577,
    mrp: 4295,
    discount: 40,
    itemId: 2,
    brand: 'NIKE',
    rating: 3,
    category: 'Track Pants',
    gender: 'men',
    inStock: true,
    reviews: 37
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642429520/fitMerch/Products/nike/m-ar5005-010-nike-original-imafzhfkzshakbhg_pqdxpk.jpg?q=50",
    title: "Round Neck T-Shirt",
    description: "Printed Men Round Neck Black T-Shirt",
    price: 1081,
    mrp: 1395,
    discount: 24,
    itemId: 3,
    brand: 'NIKE',
    rating: 4,
    category: 'T-shirts',
    gender: 'men',
    inStock: true,
    reviews: 42
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642429576/fitMerch/Products/nike/lebron-witness-5-ep-basketball-shoe-RRFJkZ_za20ue.jpg?q=50",
    title: "LeBron Witness 5",
    description: "LeBron Witness 5 EP Basketball Shoes",
    price: 8295,
    mrp: 9954,
    discount: 22,
    itemId: 4,
    brand: 'NIKE',
    rating: 5,
    category: 'Shoes',
    gender: 'men',
    inStock: true,
    reviews: 54
  },


  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642430477/fitMerch/Products/puma/s-58978002-puma-original-imafwgeyrzzzc7m7_afxuhb.jpg?q=50",
    title: "Full Sleeve Sweatshirt",
    description: "Full Sleeve Printed Women Sweatshirt",
    price: 1318,
    mrp: 2299,
    discount: 42,
    itemId: 5,
    brand: 'PUMA',
    rating: 4,
    category: 'Sweatshirts',
    gender: 'women',
    inStock: true,
    reviews: 24
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642430622/fitMerch/Products/puma/m-58980501-puma-original-imafxuyaqyhhydwc_txom7n.jpg?q=50",
    title: "Women's Track Pants",
    description: "Printed Women Black Track Pants",
    price: 1068,
    mrp: 2499,
    discount: 57,
    itemId: 6,
    brand: 'PUMA',
    rating: 4,
    category: 'Track Pants',
    gender: 'women',
    inStock: true,
    reviews: 31
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642430705/fitMerch/Products/puma/s-51897006-puma-original-imafptgrfhjrkwtg_fbnr4q.jpg?q=50",
    title: "Graphic T-shirt",
    description: "Graphic Print Women Round Neck Black T-Shirt",
    price: 1010,
    mrp: 2010,
    discount: 50,
    itemId: 7,
    brand: 'PUMA',
    rating: 5,
    category: 'T-shirts',
    gender: 'women',
    inStock: true,
    reviews: 40
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642430785/fitMerch/Products/puma/PUMA-x-MAISON-KITSUN_C3_89-Ralph-Sampson-70-Shoes_u7nmu5.jpg?q=50",
    title: "Ralph Sampson-70",
    description: "PUMA x MAISON KITSUNÉ Ralph Sampson 70 Shoes",
    price: 4999,
    mrp: 9999,
    discount: 50,
    itemId: 8,
    brand: 'PUMA',
    rating: 3,
    category: 'Shoes',
    gender: 'women',
    inStock: true,
    reviews: 51
  },


  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642431168/fitMerch/Products/adidas/m-ec0746-adidas-originals-original-imafkhescauzmpqn_kb3lkf.jpg?q=50",
    title: "Embroidered sweatshirt",
    description: "Full Sleeve Embroidered Women Sweatshirt",
    price: 3950,
    mrp: 4599,
    discount: 14,
    itemId: 9,
    brand: 'ADIDAS',
    rating: 4,
    category: 'Sweatshirts',
    gender: 'women',
    inStock: true,
    reviews: 26
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642431216/fitMerch/Products/adidas/s-fl0167-adidas-original-imafye9dhv3urnnf_u22ju5.jpg?q=50",
    title: "Striped Track pants",
    description: "Striped Women Black Track Pants",
    price: 1713,
    mrp: 2299,
    discount: 25,
    itemId: 10,
    brand: 'ADIDAS',
    rating: 5,
    category: 'Track Pants',
    gender: 'women',
    inStock: true,
    reviews: 33
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642431277/fitMerch/Products/adidas/s-fk6971-adidas-original-imagfgc7jnz79var_rxkwap.jpg?q=50",
    title: "Sports T-shirt",
    description: "Sports Women Round Neck Red T-Shirt",
    price: 1041,
    mrp: 1799,
    discount: 42,
    itemId: 11,
    brand: 'ADIDAS',
    rating: 4,
    category: 'T-shirts',
    gender: 'women',
    inStock: false,
    reviews: 45
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642431413/fitMerch/Products/adidas/11-lgl33-11-adidas-ftwwht-cblack-solred-original-imag6rz4hzfuys3u_hwxav9.jpg?q=50",
    title: "Running Shoes",
    description: "WOMEN'S ADIDAS SPORT INSPIRED RESPONSE SUPER SHOES",
    price: 8999,
    mrp: 9899,
    discount: 10,
    itemId: 12,
    brand: 'ADIDAS',
    rating: 4,
    category: 'Shoes',
    gender: 'women',
    inStock: true,
    reviews: 52
  },


  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642431611/fitMerch/Products/hrx/s-11846056-hrx-by-hrithik-roshan-original-imafyuw5zr9khzay_k7aajz.jpg?q=50",
    title: "Printed Sweatshirt",
    description: "Full Sleeve Printed Men Sweatshirt",
    price: 1049,
    mrp: 2199,
    discount: 52,
    itemId: 13,
    brand: 'HRX',
    rating: 4,
    category: 'Sweatshirts',
    gender: 'men',
    inStock: true,
    reviews: 28
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642431674/fitMerch/Products/hrx/xl-12167158-hrx-by-hrithik-roshan-original-imafz3mbkfzjajkh_ee9ous.jpg?q=50",
    title: "Plane Trackpants",
    description: "Solid Men Blue Track Pants",
    price: 1034,
    mrp: 2299,
    discount: 55,
    itemId: 14,
    brand: 'HRX',
    rating: 3,
    category: 'Track Pants',
    gender: 'men',
    inStock: false,
    reviews: 36
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642431736/fitMerch/Products/hrx/m-6825447-hrx-by-hrithik-roshan-original-imafdwrdhmz3bx8k_sb1996.jpg?q=50",
    title: "Round Neck T-Shirt",
    description: "Printed Men Round Neck Blue T-Shirt",
    price: 1010,
    mrp: 2010,
    discount: 50,
    itemId: 15,
    brand: 'HRX',
    rating: 5,
    category: 'T-shirts',
    gender: 'men',
    inStock: true,
    reviews: 44
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642431801/fitMerch/Products/hrx/11999352-42-hrx-by-hrithik-roshan-green-original-imafzdpnmbw8yufg_bbcvkr.jpg?q=50",
    title: "sport Shoes",
    description: "Grey Black Printed Football Shoes Football Shoes For Men",
    price: 2549,
    mrp: 3399,
    discount: 25,
    itemId: 16,
    brand: 'HRX',
    rating: 4,
    category: 'Shoes',
    gender: 'men',
    inStock: true,
    reviews: 30
  },


  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642432034/fitMerch/Products/underarmour/s-12263046-under-armour-original-imagyf4z3tgkxgkh_kcoxp8.jpg?q=50",
    title: "Pullover Sweatshirt",
    description: "Full Sleeve Solid Men Sweatshirt",
    price: 3549,
    mrp: 4499,
    discount: 60,
    itemId: 17,
    brand: 'UNDERARMOUR',
    rating: 5,
    category: 'Sweatshirts',
    gender: 'men',
    inStock: true,
    reviews: 22
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642432094/fitMerch/Products/underarmour/m-1352031-408-under-armour-original-imafx642cpwhbcfz_zdhzoi.jpg?q=50",
    title: "Men's Trackpants",
    description: "Solid Men Dark Blue Track Pants",
    price: 1879,
    mrp: 3299,
    discount: 43,
    itemId: 18,
    brand: 'UNDERARMOUR',
    rating: 4,
    category: 'Track Pants',
    gender: 'men',
    inStock: true,
    reviews: 39
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642432151/fitMerch/Products/underarmour/xl-1350179-014-under-armour-original-imafubdjyxwcenvz_pgvjpw.jpg?q=50",
    title: "Women's T-shirt",
    description: "Printed Women Round Neck Grey T-Shirt",
    price: 2041,
    mrp: 3999,
    discount: 48,
    itemId: 19,
    brand: 'UNDERARMOUR',
    rating: 4,
    category: 'T-shirts',
    gender: 'women',
    inStock: true,
    reviews: 41
  },
  {
    imageURL:
      "https://res.cloudinary.com/dkavbodkk/image/upload/v1642432231/fitMerch/Products/underarmour/6-5-12247254-40-5-under-armour-grey-original-imagyzgzrttrfbyx_c895l1.jpg?q=50",
    title: "Running Shoes",
    description: "Running Shoes For Women (Grey)",
    price: 5999,
    mrp: 6599,
    discount: 10,
    itemId: 20,
    brand: 'UNDERARMOUR',
    rating: 4,
    category: 'Shoes',
    gender: 'women',
    inStock: false,
    reviews: 55
  }
];

app.get('/', function (req, res) {
  console.log(req.query)
  const query = req.query
  res.json(query)
})

app.get('/products', function (req, res) {
  res.header("Access-Control-Allow-Origin", "https://fitmerch.netlify.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json(products);
})

app.listen(3000, function () {
  console.log('connected')
})

