const PostsAPI = {
  posts: [
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
  ],
  all: function() { return this.posts},
  get: function(id) {
    const isPost = p => p.id === id
    return this.posts.find(isPost)
  },
  getCat: function(id) {
	  postCat = []
	  PostsAPI.forEach(function(){
		  const isPost = p => p.cat_id === id
		  postCat.push(this.posts.find(isPost))
	  })
    
    return postCat
  }
}

export default PostsAPI
