const ProductsAPI = {
  products: [
    { 
		id: 13,
		name: "Adrenalin Potenza",
		price: 95.00,
		oldprice: "",
		image: "tire13.jpg",
		hitcounter: 31,
		description: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		display: 1,
		sale: 0,
		userid: 1,
		dateadded: "",
		cat_id: 2
	},
    { 
		id: 12,
		name: "Fondmetala",
		price: 85.00,
		oldprice: 70.00,
		image: "tire12.jpg",
		hitcounter: 228,
		description: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		display: 1,
		sale: 0,
		userid: 2,
		dateadded: "",
		cat_id: 5
	},
    { 
		id: 11,
		name: "Goodyear Wrangler",
		price: 100.00,
		oldprice: "",
		image: "tire11.jpg",
		hitcounter: 18,
		description: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		display: 1,
		sale: 0,
		userid: 3,
		dateadded: "",
		cat_id: 2
	},
    { 
		id: 10,
		name: "Ats dtm competition",
		price: 85.00,
		oldprice: "",
		image: "tire10.jpg",
		hitcounter: 31,
		description: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		display: 1,
		sale: 0,
		userid: 1,
		dateadded: "",
		cat_id: 1
	},
    { 
		id: 9,
		name: "Bridgestone potenza",
		price: 99.50,
		oldprice: "",
		image: "tire9.jpg",
		hitcounter: 18,
		description: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		display: 1,
		sale: 0,
		userid: 1,
		dateadded: "",
		cat_id: 2
	},
    { 
		id: 8,
		name: "Bridgestone turanza",
		price: 104.00,
		oldprice: "",
		image: "tire8.jpg",
		hitcounter: 34,
		description: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		display: 1,
		sale: 0,
		userid: 3,
		dateadded: "",
		cat_id: 4
	},
    { 
		id: 7,
		name: "Goodyear hydragrip",
		price: 120.00,
		oldprice: "",
		image: "tire7.jpg",
		hitcounter: 17,
		description: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		display: 1,
		sale: 0,
		userid: 2,
		dateadded: "",
		cat_id: 1
	},
    { 
		id: 6,
		name: "Keskin KT",
		price: 80.00,
		oldprice: 94.50,
		image: "tire4.jpg",
		hitcounter: 46,
		description: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		display: 1,
		sale: 1,
		userid: 2,
		dateadded: "",
		cat_id: 2
	},
    { 
		id: 5,
		name: "Pirelli cinturato P4",
		price: 95.00,
		oldprice: "",
		image: "tire5.jpg",
		hitcounter: 25,
		description: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		display: 1,
		sale: 0,
		userid: 1,
		dateadded: "",
		cat_id: 2
	},
    { 
		id: 4,
		name: "Reifen 356",
		price: 120.00,
		oldprice: "",
		image: "tire4.jpg",
		hitcounter: 36,
		description: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		display: 1,
		sale: 0,
		userid: 3,
		dateadded: "",
		cat_id: 3
	},
    { 
		id: 3,
		name: "Reifen hafen",
		price: 65.00,
		oldprice: "",
		image: "tire3.jpg",
		hitcounter: 43,
		description: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		display: 1,
		sale: 0,
		userid: 1,
		dateadded: "",
		cat_id: 4
	},
    { 
		id: 2,
		name: "Reifen hafen 43",
		price: 76.50,
		oldprice: "",
		image: "tire2.jpg",
		hitcounter: 57,
		description: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		display: 1,
		sale: 0,
		userid: 2,
		dateadded: "",
		cat_id: 5
	},
    { 
		id: 1,
		name: "Reifen landwirt",
		price: 60.00,
		oldprice: "",
		image: "tire1.jpg",
		hitcounter: 29,
		description: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		display: 1,
		sale: 0,
		userid: 1,
		dateadded: "",
		cat_id: 5
	}
  ],
  all: function() { return this.products},
  get: function(id) {
    const isProduct = p => p.id === id
    return this.products.find(isProduct)
  },
  getCat: function(catId, id) {
	  let productCat = []
	  this.products.forEach(function(p){
		  if ( p.cat_id === parseInt(catId, 10) ) {
			  if ( p.id !== parseInt(id, 10) ) {
				  productCat.push(p)
			  }
		  }
	  })
	  return productCat
  }
}

export default ProductsAPI
