const categories = [
	{
		name: 'Training Shoes',
		image: 'http://placeimg.com/640/480',
	},
	{
		name: 'Skateboarding Shoes',
		image: 'http://placeimg.com/640/480',
	},
	{
		name: "Kids' Shoes",
		image: 'http://placeimg.com/640/480',
	},
	{
		name: 'Limited Edition',
		image: 'http://placeimg.com/640/480',
	},
	{
		name: 'Running Shoes',
		image: 'http://placeimg.com/640/480',
	},
	{
		name: 'Basketball Shoes',
		image: 'http://placeimg.com/640/480',
	},
	{
		name: 'Soccer Cleats',
		image: 'http://placeimg.com/640/480',
	},
	{
		name: 'Tennis Shoes',
		image: 'http://placeimg.com/640/480',
	},
	{
		name: 'Casual Sneakers',
		image: 'http://placeimg.com/640/480',
	},
	{
		name: 'Sandals & Slides',
		image: 'http://placeimg.com/640/480',
	},
];

const products = [
	{
		name: 'Nike Air Zoom Pegasus',
		price: 120,
		description: 'Comfortable running shoes for everyday use.',
		image: 'http://placeimg.com/640/480',
		categoryId: 1,
	},
	{
		name: 'Nike React Infinity Run',
		price: 160,
		description: 'Designed to reduce injury and keep you on the run.',
		image: 'http://placeimg.com/640/480',
		categoryId: 1,
	},
	{
		name: 'Nike Air Zoom Alphafly NEXT%',
		price: 275,
		description: 'Performance running shoes for marathon runners.',
		image: 'http://placeimg.com/640/480',
		categoryId: 1,
	},
	{
		name: 'Nike ZoomX Vaporfly NEXT%',
		price: 250,
		description: 'Lightweight and fast, perfect for race day.',
		image: 'http://placeimg.com/640/480',
		categoryId: 1,
	},
	{
		name: 'Nike Free RN 5.0',
		price: 100,
		description: 'Flexible and lightweight running shoes.',
		image: 'http://placeimg.com/640/480',
		categoryId: 1,
	},
	{
		name: 'Nike Air Max 270 React',
		price: 150,
		description: 'Cushioned for comfort and style.',
		image: 'http://placeimg.com/640/480',
		categoryId: 1,
	},
	{
		name: 'Nike Joyride Run Flyknit',
		price: 180,
		description: 'Innovative cushioning for a smooth ride.',
		image: 'http://placeimg.com/640/480',
		categoryId: 1,
	},
	{
		name: 'Nike Zoom Fly 3',
		price: 160,
		description: 'Designed for training and racing.',
		image: 'http://placeimg.com/640/480',
		categoryId: 1,
	},
	{
		name: 'Nike Air Zoom Structure',
		price: 130,
		description: 'Stability and support for overpronators.',
		image: 'http://placeimg.com/640/480',
		categoryId: 1,
	},
	{
		name: 'Nike Wildhorse 6',
		price: 130,
		description: 'Trail running shoes for rough terrains.',
		image: 'http://placeimg.com/640/480',
		categoryId: 1,
	},

	{
		name: 'Nike Air Jordan 1',
		price: 170,
		description: 'Classic basketball shoes with iconic style.',
		image: 'http://placeimg.com/640/480',
		categoryId: 2,
	},
	{
		name: 'Nike LeBron 17',
		price: 200,
		description: 'High-performance basketball shoes for power players.',
		image: 'http://placeimg.com/640/480',
		categoryId: 2,
	},
	{
		name: 'Nike KD 13',
		price: 150,
		description: 'Responsive cushioning for quick movements.',
		image: 'http://placeimg.com/640/480',
		categoryId: 2,
	},
	{
		name: 'Nike Kobe 5 Protro',
		price: 180,
		description: 'Lightweight and low-profile for agility.',
		image: 'http://placeimg.com/640/480',
		categoryId: 2,
	},
	{
		name: 'Nike PG 4',
		price: 120,
		description: 'Comfort and stability for versatile play.',
		image: 'http://placeimg.com/640/480',
		categoryId: 2,
	},
	{
		name: 'Nike Kyrie 6',
		price: 140,
		description: 'Supportive and responsive for quick cuts.',
		image: 'http://placeimg.com/640/480',
		categoryId: 2,
	},
	{
		name: 'Nike Zoom Freak 2',
		price: 130,
		description: 'Designed for power and speed on the court.',
		image: 'http://placeimg.com/640/480',
		categoryId: 2,
	},
	{
		name: 'Nike Adapt BB 2.0',
		price: 400,
		description: 'Self-lacing technology for a perfect fit.',
		image: 'http://placeimg.com/640/480',
		categoryId: 2,
	},
	{
		name: 'Nike Hyperdunk X',
		price: 140,
		description: 'Versatile performance for all positions.',
		image: 'http://placeimg.com/640/480',
		categoryId: 2,
	},
	{
		name: 'Nike Air Max Impact',
		price: 90,
		description: 'Affordable performance for casual players.',
		image: 'http://placeimg.com/640/480',
		categoryId: 2,
	},

	{
		name: 'Nike Mercurial Vapor 13',
		price: 250,
		description: 'Lightweight cleats for explosive speed.',
		image: 'http://placeimg.com/640/480',
		categoryId: 3,
	},
	{
		name: 'Nike Phantom Venom Elite',
		price: 220,
		description: 'Engineered for powerful strikes.',
		image: 'http://placeimg.com/640/480',
		categoryId: 3,
	},
	{
		name: 'Nike Tiempo Legend 8',
		price: 230,
		description: 'Comfortable and durable for control.',
		image: 'http://placeimg.com/640/480',
		categoryId: 3,
	},
	{
		name: 'Nike Phantom Vision 2',
		price: 250,
		description: 'Precision and control for playmakers.',
		image: 'http://placeimg.com/640/480',
		categoryId: 3,
	},
	{
		name: 'Nike Hypervenom Phantom 3',
		price: 300,
		description: 'Agility and power for strikers.',
		image: 'http://placeimg.com/640/480',
		categoryId: 3,
	},
	{
		name: 'Nike Mercurial Superfly 7',
		price: 270,
		description: 'Speed-focused cleats for quick players.',
		image: 'http://placeimg.com/640/480',
		categoryId: 3,
	},
	{
		name: 'Nike Premier II',
		price: 130,
		description: 'Classic design with modern performance.',
		image: 'http://placeimg.com/640/480',
		categoryId: 3,
	},
	{
		name: 'Nike Magista Obra II',
		price: 300,
		description: 'Control and comfort for midfielders.',
		image: 'http://placeimg.com/640/480',
		categoryId: 3,
	},
	{
		name: 'Nike TiempoX Legend VII',
		price: 200,
		description: 'Designed for small-sided games.',
		image: 'http://placeimg.com/640/480',
		categoryId: 3,
	},
	{
		name: 'Nike Phantom GT',
		price: 250,
		description: 'Innovative design for precision.',
		image: 'http://placeimg.com/640/480',
		categoryId: 3,
	},

	{
		name: 'Nike Air Zoom Vapor X',
		price: 140,
		description: 'Lightweight and responsive for fast movements.',
		image: 'http://placeimg.com/640/480',
		categoryId: 4,
	},
	{
		name: 'NikeCourt Air Zoom Zero',
		price: 130,
		description: 'Innovative cushioning for comfort on the court.',
		image: 'http://placeimg.com/640/480',
		categoryId: 4,
	},
	{
		name: 'NikeCourt React Vapor NXT',
		price: 160,
		description: 'Advanced technology for competitive players.',
		image: 'http://placeimg.com/640/480',
		categoryId: 4,
	},
	{
		name: 'Nike Air Zoom GP Turbo',
		price: 140,
		description: 'High-performance shoes for intense matches.',
		image: 'http://placeimg.com/640/480',
		categoryId: 4,
	},
	{
		name: 'NikeCourt Flare 2',
		price: 120,
		description: 'Designed for agility and support.',
		image: 'http://placeimg.com/640/480',
		categoryId: 4,
	},
	{
		name: 'NikeCourt Lite 2',
		price: 75,
		description: 'Affordable and durable for everyday play.',
		image: 'http://placeimg.com/640/480',
		categoryId: 4,
	},
	{
		name: 'NikeCourt Vapor Cage 4',
		price: 150,
		description: 'Built for stability and durability.',
		image: 'http://placeimg.com/640/480',
		categoryId: 4,
	},
	{
		name: 'NikeCourt Zoom Pro',
		price: 130,
		description: 'Pro-level shoes for serious players.',
		image: 'http://placeimg.com/640/480',
		categoryId: 4,
	},
	{
		name: 'NikeCourt Dri-FIT',
		price: 90,
		description: 'Comfortable and stylish for practice.',
		image: 'http://placeimg.com/640/480',
		categoryId: 4,
	},
	{
		name: 'NikeCourt Royale',
		price: 65,
		description: 'Classic design for everyday wear.',
		image: 'http://placeimg.com/640/480',
		categoryId: 4,
	},

	{
		name: 'Nike Air Force 1',
		price: 90,
		description: 'Iconic sneakers for everyday style.',
		image: 'http://placeimg.com/640/480',
		categoryId: 5,
	},
	{
		name: 'Nike Air Max 90',
		price: 120,
		description: 'Classic design with modern comfort.',
		image: 'http://placeimg.com/640/480',
		categoryId: 5,
	},
	{
		name: "Nike Blazer Mid '77",
		price: 100,
		description: 'Vintage-inspired sneakers with a modern twist.',
		image: 'http://placeimg.com/640/480',
		categoryId: 5,
	},
	{
		name: 'Nike Dunk Low',
		price: 100,
		description: 'Stylish and versatile for any occasion.',
		image: 'http://placeimg.com/640/480',
		categoryId: 5,
	},
	{
		name: 'Nike Air Max 97',
		price: 170,
		description: 'Sleek design with maximum comfort.',
		image: 'http://placeimg.com/640/480',
		categoryId: 5,
	},
	{
		name: 'Nike SB Dunk',
		price: 100,
		description: 'Popular sneakers with a skateboarding edge.',
		image: 'http://placeimg.com/640/480',
		categoryId: 5,
	},
	{
		name: 'Nike Air Max 270',
		price: 150,
		description: 'Modern design with exceptional comfort.',
		image: 'http://placeimg.com/640/480',
		categoryId: 5,
	},
	{
		name: 'Nike Cortez',
		price: 75,
		description: 'Classic sneakers with a retro look.',
		image: 'http://placeimg.com/640/480',
		categoryId: 5,
	},
	{
		name: 'Nike Roshe One',
		price: 75,
		description: 'Simple and stylish for everyday wear.',
		image: 'http://placeimg.com/640/480',
		categoryId: 5,
	},
	{
		name: 'Nike Air Huarache',
		price: 120,
		description: 'Comfortable and trendy with a unique design.',
		image: 'http://placeimg.com/640/480',
		categoryId: 5,
	},

	{
		name: 'Nike Benassi JDI',
		price: 25,
		description: 'Comfortable slides for casual wear.',
		image: 'http://placeimg.com/640/480',
		categoryId: 6,
	},
	{
		name: 'Nike Kawa Slide',
		price: 30,
		description: 'Soft and comfortable slides for post-game relaxation.',
		image: 'http://placeimg.com/640/480',
		categoryId: 6,
	},
	{
		name: 'Nike Victori One',
		price: 35,
		description: 'Durable slides with a comfortable fit.',
		image: 'http://placeimg.com/640/480',
		categoryId: 6,
	},
	{
		name: 'Nike Canyon Sandal',
		price: 60,
		description: 'Rugged sandals for outdoor adventures.',
		image: 'http://placeimg.com/640/480',
		categoryId: 6,
	},
	{
		name: 'Nike Offcourt Slide',
		price: 40,
		description: 'Soft cushioning for all-day comfort.',
		image: 'http://placeimg.com/640/480',
		categoryId: 6,
	},
	{
		name: 'Nike Asuna Slide',
		price: 45,
		description: 'Versatile slides with a stylish design.',
		image: 'http://placeimg.com/640/480',
		categoryId: 6,
	},
	{
		name: 'Nike ACG Air Deschutz',
		price: 80,
		description: 'Performance sandals for rugged terrain.',
		image: 'http://placeimg.com/640/480',
		categoryId: 6,
	},
	{
		name: 'Nike Ultra Comfort 3',
		price: 35,
		description: 'Plush slides for ultimate relaxation.',
		image: 'http://placeimg.com/640/480',
		categoryId: 6,
	},
	{
		name: 'Nike Solarsoft Slide',
		price: 30,
		description: 'Lightweight and flexible slides.',
		image: 'http://placeimg.com/640/480',
		categoryId: 6,
	},
	{
		name: 'Nike Jordan Hydro 7',
		price: 50,
		description: 'Stylish and comfortable Jordan slides.',
		image: 'http://placeimg.com/640/480',
		categoryId: 6,
	},

	{
		name: 'Nike Metcon 6',
		price: 130,
		description: 'Versatile training shoes for all types of workouts.',
		image: 'http://placeimg.com/640/480',
		categoryId: 7,
	},
	{
		name: 'Nike Free Metcon 3',
		price: 120,
		description: 'Flexible and durable for high-intensity training.',
		image: 'http://placeimg.com/640/480',
		categoryId: 7,
	},
	{
		name: 'Nike Air Zoom SuperRep',
		price: 120,
		description:
			'Designed for circuit training and high-intensity workouts.',
		image: 'http://placeimg.com/640/480',
		categoryId: 7,
	},
	{
		name: 'Nike React Metcon',
		price: 150,
		description: 'Cushioned and stable for heavy lifting.',
		image: 'http://placeimg.com/640/480',
		categoryId: 7,
	},
	{
		name: 'Nike Air Max Alpha Trainer',
		price: 90,
		description: 'Affordable and reliable for everyday training.',
		image: 'http://placeimg.com/640/480',
		categoryId: 7,
	},
	{
		name: 'Nike Legend Essential',
		price: 60,
		description: 'Lightweight and breathable for versatile workouts.',
		image: 'http://placeimg.com/640/480',
		categoryId: 7,
	},
	{
		name: 'Nike Romaleos 4',
		price: 200,
		description: 'Weightlifting shoes for serious lifters.',
		image: 'http://placeimg.com/640/480',
		categoryId: 7,
	},
	{
		name: 'Nike Free x Metcon 2',
		price: 120,
		description: 'Combines flexibility with stability.',
		image: 'http://placeimg.com/640/480',
		categoryId: 7,
	},
	{
		name: 'Nike Flex Control 4',
		price: 65,
		description: 'Durable and flexible for varied training.',
		image: 'http://placeimg.com/640/480',
		categoryId: 7,
	},
	{
		name: 'Nike ZoomX Invincible Run',
		price: 180,
		description: 'Maximum cushioning for long runs.',
		image: 'http://placeimg.com/640/480',
		categoryId: 7,
	},

	{
		name: 'Nike SB Dunk Low Pro',
		price: 100,
		description: 'Classic skate shoes with durable construction.',
		image: 'http://placeimg.com/640/480',
		categoryId: 8,
	},
	{
		name: 'Nike SB Zoom Blazer Mid',
		price: 85,
		description: 'Mid-top skate shoes for added support.',
		image: 'http://placeimg.com/640/480',
		categoryId: 8,
	},
	{
		name: 'Nike SB Stefan Janoski',
		price: 85,
		description: 'Minimalist design with maximum performance.',
		image: 'http://placeimg.com/640/480',
		categoryId: 8,
	},
	{
		name: 'Nike SB Bruin React',
		price: 100,
		description: 'Modern updates to a classic skate shoe.',
		image: 'http://placeimg.com/640/480',
		categoryId: 8,
	},
	{
		name: 'Nike SB Nyjah Free 2',
		price: 95,
		description: 'Durable and flexible for all-day skating.',
		image: 'http://placeimg.com/640/480',
		categoryId: 8,
	},
	{
		name: 'Nike SB Check Solarsoft',
		price: 70,
		description: 'Affordable and comfortable skate shoes.',
		image: 'http://placeimg.com/640/480',
		categoryId: 8,
	},
	{
		name: 'Nike SB Shane',
		price: 80,
		description: "Signature shoes for pro skater Shane O'Neill.",
		image: 'http://placeimg.com/640/480',
		categoryId: 8,
	},
	{
		name: 'Nike SB Dunk High Pro',
		price: 110,
		description: 'High-top version of the popular skate shoes.',
		image: 'http://placeimg.com/640/480',
		categoryId: 8,
	},
	{
		name: 'Nike SB GTS Return',
		price: 80,
		description: 'Retro style with modern skate performance.',
		image: 'http://placeimg.com/640/480',
		categoryId: 8,
	},
	{
		name: 'Nike SB Alleyoop',
		price: 75,
		description: 'Versatile skate shoes for everyday wear.',
		image: 'http://placeimg.com/640/480',
		categoryId: 8,
	},

	{
		name: 'Nike Air Max 270 React Kids',
		price: 100,
		description: 'Stylish and comfortable for young feet.',
		image: 'http://placeimg.com/640/480',
		categoryId: 9,
	},
	{
		name: 'Nike Revolution 5 Kids',
		price: 50,
		description: 'Affordable and durable for everyday play.',
		image: 'http://placeimg.com/640/480',
		categoryId: 9,
	},
	{
		name: 'Nike Air Force 1 Kids',
		price: 70,
		description: 'Classic style for the next generation.',
		image: 'http://placeimg.com/640/480',
		categoryId: 9,
	},
	{
		name: 'Nike Flex Runner Kids',
		price: 40,
		description: 'Easy to put on and take off.',
		image: 'http://placeimg.com/640/480',
		categoryId: 9,
	},
	{
		name: 'Nike Team Hustle D 10 Kids',
		price: 65,
		description: 'Supportive and comfortable for active kids.',
		image: 'http://placeimg.com/640/480',
		categoryId: 9,
	},
	{
		name: 'Nike Star Runner 2 Kids',
		price: 50,
		description: 'Lightweight and breathable for everyday use.',
		image: 'http://placeimg.com/640/480',
		categoryId: 9,
	},
	{
		name: 'Nike Air Max 90 Kids',
		price: 90,
		description: "Iconic design in kids' sizes.",
		image: 'http://placeimg.com/640/480',
		categoryId: 9,
	},
	{
		name: 'Nike Pico 5 Kids',
		price: 35,
		description: 'Easy to wear and comfortable.',
		image: 'http://placeimg.com/640/480',
		categoryId: 9,
	},
	{
		name: 'Nike Court Borough Low 2 Kids',
		price: 50,
		description: 'Basketball-inspired design for everyday wear.',
		image: 'http://placeimg.com/640/480',
		categoryId: 9,
	},
	{
		name: 'Nike Downshifter 10 Kids',
		price: 40,
		description: 'Lightweight and durable for active kids.',
		image: 'http://placeimg.com/640/480',
		categoryId: 9,
	},

	{
		name: 'Nike Air Jordan 1 Retro High OG',
		price: 170,
		description: 'Limited edition sneakers with iconic style.',
		image: 'http://placeimg.com/640/480',
		categoryId: 10,
	},
	{
		name: 'Nike Air Max 1/97 Sean Wotherspoon',
		price: 500,
		description: 'Highly sought-after limited edition release.',
		image: 'http://placeimg.com/640/480',
		categoryId: 10,
	},
	{
		name: 'Nike Air Fear of God 1',
		price: 350,
		description: 'Collaboration with Fear of God designer Jerry Lorenzo.',
		image: 'http://placeimg.com/640/480',
		categoryId: 10,
	},
	{
		name: 'Nike SB Dunk Low Travis Scott',
		price: 1500,
		description: 'Exclusive collaboration with rapper Travis Scott.',
		image: 'http://placeimg.com/640/480',
		categoryId: 10,
	},
	{
		name: 'Nike Air Yeezy 2 Red October',
		price: 5000,
		description: 'Iconic and rare sneakers designed by Kanye West.',
		image: 'http://placeimg.com/640/480',
		categoryId: 10,
	},
	{
		name: 'Nike Mag Back to the Future',
		price: 15000,
		description:
			"Limited edition replica from the movie 'Back to the Future'.",
		image: 'http://placeimg.com/640/480',
		categoryId: 10,
	},
	{
		name: 'Nike LeBron 8 South Beach',
		price: 250,
		description: 'Limited edition release celebrating LeBron James.',
		image: 'http://placeimg.com/640/480',
		categoryId: 10,
	},
	{
		name: 'Nike SB Dunk Low Paris',
		price: 8000,
		description: 'Ultra-rare sneakers with unique artwork.',
		image: 'http://placeimg.com/640/480',
		categoryId: 10,
	},
	{
		name: 'Nike Kobe 6 Protro Grinch',
		price: 200,
		description: 'Limited edition release for Kobe Bryant fans.',
		image: 'http://placeimg.com/640/480',
		categoryId: 10,
	},
	{
		name: 'Nike Air Max 97 Swarovski',
		price: 400,
		description: 'Sparkling design with Swarovski crystals.',
		image: 'http://placeimg.com/640/480',
		categoryId: 10,
	},
];

async function loadCategories(category) {
	const response = await fetch('http://localhost:3000/api/v1/categories', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(category),
	});

	const data = await response.json();
	return data;
}

async function loadProducts(product) {
	const response = await fetch('http://localhost:3000/api/v1/products', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(product),
	});

	const data = await response.json();
	return data;
}

const loadDB = async (categories, products) => {
	for (const category of categories) {
		try {
			const data = await loadCategories(category);
			if (data.id) {
				console.log('Category created:', data.name);
			}
		} catch (error) {
			console.log(error.message);
		}
	}

	for (const product of products) {
		try {
			const data = await loadProducts(product);
			if (data.id) {
				console.log('Product created:', data.name);
			}
		} catch (error) {
			console.log(error.message);
		}
	}
};

loadDB(categories, products);
