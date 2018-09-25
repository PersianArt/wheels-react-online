const UsersAPI = {
  users: [
    { 
		id: 3,
		firstname: "Stella",
		lastname: "Kromstain",
		username: "demo",
		password: "demo",
		email: "stella@yahoo.com",
		avatar: "avatar3.jpg",
		registerdate: "2014-05-03 17:03:01",
		address: "sari - fanaee street",
		gender_id: 1,
		city_id: 6,
		randomcode: ""
	},
    { 
		id: 2,
		firstname: "Patrick",
		lastname: "Pool",
		username: "patrick",
		password: "admin",
		email: "patrick@yahoo.com",
		avatar: "avatar2.jpg",
		registerdate: "2014-05-03 15:11:22",
		address: "tehran",
		gender_id: 0,
		city_id: 1,
		randomcode: ""
	},
    { 
		id: 1,
		firstname: "Bradley",
		lastname: "Grosh",
		username: "admin",
		password: "admin",
		email: "bradley@yahoo.com",
		avatar: "avatar1.jpg",
		registerdate: "2014-05-03 16:57:58",
		address: "tehran",
		gender_id: 0,
		city_id: 1,
		randomcode: ""
	},
  ],
  all: function() { return this.users},
  get: function(id) {
    const isUser = p => p.id === id
    return this.users.find(isUser)
  }
}

export default UsersAPI
