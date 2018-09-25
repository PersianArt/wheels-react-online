const ReviewsAPI = {
  reviews: [
    { 
		id: 16,
		star: 3,
		comment: "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		dateadded: "2014-05-19 15:07:24",
		user_id: 1,
		item_id: 1
	},
    { 
		id: 15,
		star: 4,
		comment: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
		dateadded: "2014-05-19 15:10:10",
		user_id: 1,
		item_id: 11
	},
    { 
		id: 14,
		star: 5,
		comment: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
		dateadded: "2014-05-19 15:09:29",
		user_id: 3,
		item_id: 3
	},
    { 
		id: 13,
		star: 3,
		comment: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		dateadded: "2014-05-19 15:08:58",
		user_id: 1,
		item_id: 5
	},
    { 
		id: 12,
		star: 5,
		comment: "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		dateadded: "2014-05-19 15:07:24",
		user_id: 2,
		item_id: 1
	},
    { 
		id: 11,
		star: 5,
		comment: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		dateadded: "2014-05-19 15:06:56",
		user_id: 2,
		item_id: 2
	},
    { 
		id: 10,
		star: 4,
		comment: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.",
		dateadded: "2014-05-19 15:05:39",
		user_id: 3,
		item_id: 6
	},
    { 
		id: 9,
		star: 1,
		comment: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
		dateadded: "2014-05-19 15:05:07",
		user_id: 1,
		item_id: 8
	},
    { 
		id: 8,
		star: 2,
		comment: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		dateadded: "2014-05-19 15:04:44",
		user_id: 3,
		item_id: 9
	},
    { 
		id: 7,
		star: 5,
		comment: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		dateadded: "2014-05-19 15:03:11",
		user_id: 2,
		item_id: 13
	},
    { 
		id: 6,
		star: 4,
		comment: "Lorem ipsum dolor sit amet, consectetur Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		dateadded: "2014-05-19 15:02:42",
		user_id: 1,
		item_id: 7
	},
    { 
		id: 5,
		star: 4,
		comment: "printer took a galley of type and scrambled it to make a type specimen book.",
		dateadded: "2014-05-18 19:05:34",
		user_id: 3,
		item_id: 4
	},
    { 
		id: 4,
		star: 4,
		comment: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.",
		dateadded: "2014-05-18 18:59:56",
		user_id: 3,
		item_id: 12
	},
    { 
		id: 3,
		star: 4,
		comment: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		dateadded: "2014-05-18 18:59:43",
		user_id: 1,
		item_id: 10
	},
    { 
		id: 2,
		star: 3,
		comment: "printer took a galley of type and scrambled it to make a type specimen book.",
		dateadded: "2014-05-18 18:59:32",
		user_id: 2,
		item_id: 4
	},
    { 
		id: 1,
		star: 5,
		comment: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
		dateadded: "2014-05-18 18:59:05",
		user_id: 1,
		item_id: 12
	}
  ],
  all: function() { return this.reviews},
  get: function(id) {
    const isReview = p => p.id === id
    return this.reviews.find(isReview)
  },
	getItemReview: function(id) {
        return this.reviews.filter( p => p.item_id === id );
	}
}

export default ReviewsAPI
