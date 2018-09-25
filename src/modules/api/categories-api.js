const CategoriesAPI = {
  categories: [
    { 
		id: 5,
		cat_name: "south korea"
	},
	{
		id: 4,
		cat_name: "japan"
	},
	{
		id: 3,
		cat_name: "usa"
	},
	{
		id: 2,
		cat_name: "italy"
	},
	{
		id: 1,
		cat_name: "german"
	}
  ],
  all: function() { return this.posts},
  get: function(id) {
    const isCategory = p => p.id === id
    return this.categories.find(isCategory)
  }
}

export default CategoriesAPI
