const categories = [
    {
        id: 0,
        name: "Wireless Headphones",
        products: [
            {
                image: "images/headphone1.png",
                brand: "boAt",
                name: "boAt Rockerz 450 Bluetooth Wireless Headphones",
                price: 1499,
                oldPrice: 3990,
                rating: 4.3,
                reviewCount: 84532,
                description: "The boAt Rockerz 450 delivers punchy bass and clear vocals with up to 15 hours of playback on a single charge. Its padded ear cushions and adjustable headband make it comfortable for extended listening sessions, while the foldable design makes it easy to carry.",
                features: [
                    "Bluetooth v5.0",
                    "15 Hours Playback",
                    "40mm Dynamic Drivers",
                    "Padded Ear Cushions",
                    "Foldable Design",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 5, title: "Great bass for the price", text: "Sound quality is punchy and the battery easily lasts two days of daily commute.", author: "Naman" },
                    { rating: 4, title: "Comfortable but a bit heavy", text: "Fits well and controls are easy to use, though it feels slightly heavy after 3 hours.", author: "Rahul Kumar" },
                    { rating: 5, title: "Best budget headphone", text: "Bluetooth range is impressive and pairs instantly with my phone every time.", author: "Priya Singh" }
                ]
            },
            {
                image: "images/headphone2.png",
                brand: "Sony",
                name: "Sony WH-CH520 Wireless Headphones",
                price: 2990,
                oldPrice: 4990,
                rating: 4.4,
                reviewCount: 21456,
                description: "The Sony WH-CH520 combines Sony's signature sound tuning with a lightweight on-ear design. With up to 50 hours of battery life and quick charging support, it's built for all-day use without compromising on comfort.",
                features: [
                    "Up to 50 Hours Battery",
                    "Quick Charge (10 min = 4.5 hrs)",
                    "Lightweight On-Ear Design",
                    "Multipoint Connection",
                    "Built-in Voice Assistant",
                    "1 Year Sony Warranty"
                ],
                reviews: [
                    { rating: 5, title: "Battery life is unbeatable", text: "I charge this once a week and it never dies on me. Sound is crisp too.", author: "Deepak Katiyar" },
                    { rating: 4, title: "Great for calls", text: "Mic clarity during calls is excellent, though bass could be a touch stronger.", author: "Manshvi Gupta" },
                    { rating: 4, title: "Solid everyday headphone", text: "Lightweight and comfortable for long work-from-home calls.", author: "Naman Trivedi" }
                ]
            },
            {
                image: "images/headphone3.png",
                brand: "JBL",
                name: "JBL Tune 510BT Wireless On-Ear Headphones",
                price: 1999,
                oldPrice: 3499,
                rating: 4.2,
                reviewCount: 45210,
                description: "JBL Tune 510BT brings JBL's Pure Bass sound to a compact, foldable on-ear headphone. With 40 hours of battery life and fast USB-C charging, it's designed for music lovers on the move.",
                features: [
                    "JBL Pure Bass Sound",
                    "40 Hours Battery Life",
                    "Fast USB-C Charging",
                    "Foldable & Lightweight",
                    "Hands-Free Calls",
                    "Multi-Color Options"
                ],
                reviews: [
                    { rating: 4, title: "Punchy bass", text: "Exactly the JBL sound signature I expected, great for hip-hop and EDM.", author: "Rohit Malhotra" },
                    { rating: 4, title: "Good value", text: "For this price the build quality feels much better than expected.", author: "Anjali Gupta" },
                    { rating: 5, title: "Long battery backup", text: "Used it for a full week of commuting before needing a recharge.", author: "Deepak Joshi" }
                ]
            },
            {
                image: "images/headphone4.png",
                brand: "Skullcandy",
                name: "Skullcandy Hesh Evo Wireless Headphones",
                price: 2499,
                oldPrice: 4999,
                rating: 4.1,
                reviewCount: 12897,
                description: "The Skullcandy Hesh Evo is built for comfort with plush ear cushions and a rapid charge feature that gives 3 hours of playback from just 10 minutes of charging. Ideal for long flights and daily use.",
                features: [
                    "Rapid Charge (10 min = 3 hrs)",
                    "36 Hours Total Battery",
                    "Plush Memory Foam Cushions",
                    "Multipoint Bluetooth",
                    "Call & Music Controls",
                    "IPX4 Sweat Resistant"
                ],
                reviews: [
                    { rating: 4, title: "Super comfortable", text: "Memory foam cushions make these great for wearing all day at the office.", author: "Nikhil Verma" },
                    { rating: 4, title: "Rapid charge actually works", text: "A quick 10 minute charge really does get me through a couple hours.", author: "Meera Iyer" },
                    { rating: 5, title: "Great for gym", text: "Sweat resistance held up well through my workouts.", author: "Arjun Kapoor" }
                ]
            }
        ]
    },
    {
        id: 1,
        name: "Smart Watch",
        products: [
            {
                image: "images/watch1.png",
                brand: "Noise",
                name: "Noise ColorFit Pro 4 Smart Watch",
                price: 1999,
                oldPrice: 4999,
                rating: 4.1,
                reviewCount: 32145,
                description: "The Noise ColorFit Pro 4 features a 1.85-inch HD display, Bluetooth calling, and over 100 sports modes to track your fitness journey. Its 7-day battery life keeps you moving without frequent charging.",
                features: [
                    "1.85\" HD Display",
                    "Bluetooth Calling",
                    "100+ Sports Modes",
                    "SpO2 & Heart Rate Monitor",
                    "7 Day Battery Life",
                    "IP68 Water Resistant"
                ],
                reviews: [
                    { rating: 4, title: "Great display", text: "Screen is bright and easy to read even in sunlight.", author: "Suresh Kumar" },
                    { rating: 4, title: "Calling works well", text: "Bluetooth calling quality is surprisingly clear for a smartwatch.", author: "Pooja Sharma" },
                    { rating: 5, title: "Good battery backup", text: "Easily lasts a week with regular notifications and heart rate tracking on.", author: "Vivek Singh" }
                ]
            },
            {
                image: "images/watch2.png",
                brand: "boAt",
                name: "boAt Wave Call Smart Watch",
                price: 1299,
                oldPrice: 3990,
                rating: 4.0,
                reviewCount: 28734,
                description: "boAt Wave Call offers a 1.69-inch display, single-chip Bluetooth calling, and 7 days of battery backup, making it a stylish and functional companion for everyday wear.",
                features: [
                    "1.69\" Display",
                    "Bluetooth Calling",
                    "7 Days Battery Backup",
                    "60+ Sports Modes",
                    "Multiple Watch Faces",
                    "IP68 Rating"
                ],
                reviews: [
                    { rating: 4, title: "Stylish and light", text: "Looks premium and doesn't feel heavy on the wrist at all.", author: "Ritika Bansal" },
                    { rating: 3, title: "Decent for the price", text: "Works fine, though the app could use some polish.", author: "Manish Tiwari" },
                    { rating: 5, title: "Loved the calling feature", text: "Answering calls directly on the watch is really convenient.", author: "Neha Kapoor" }
                ]
            },
            {
                image: "images/watch3.png",
                brand: "Fire-Boltt",
                name: "Fire-Boltt Ninja Call Pro Plus Smart Watch",
                price: 1399,
                oldPrice: 3999,
                rating: 4.0,
                reviewCount: 51203,
                description: "The Fire-Boltt Ninja Call Pro Plus comes with a 1.83-inch display, Bluetooth calling, and 100+ sports modes, backed by a metal body for a premium feel at an affordable price.",
                features: [
                    "1.83\" HD Display",
                    "Bluetooth Calling",
                    "Metal Body Design",
                    "100+ Sports Modes",
                    "24x7 Heart Rate Tracking",
                    "IP67 Water Resistant"
                ],
                reviews: [
                    { rating: 4, title: "Good build quality", text: "Metal frame feels sturdy and premium for this price range.", author: "Ashok Reddy" },
                    { rating: 4, title: "Feature packed", text: "So many sports modes and health tracking options for the price.", author: "Divya Menon" },
                    { rating: 3, title: "Average app experience", text: "Watch is good but the companion app can be laggy at times.", author: "Sandeep Rao" }
                ]
            },
            {
                image: "images/watch4.png",
                brand: "Fastrack",
                name: "Fastrack Reflex Vox Smart Watch",
                price: 1795,
                oldPrice: 3495,
                rating: 3.9,
                reviewCount: 18654,
                description: "Fastrack Reflex Vox combines a sporty design with voice assistant support, offering seamless notifications and fitness tracking wrapped in Fastrack's youthful styling.",
                features: [
                    "1.8\" HD Display",
                    "Built-in Voice Assistant",
                    "Sporty Design",
                    "SpO2 Monitoring",
                    "10 Days Battery Life",
                    "IP68 Water Resistant"
                ],
                reviews: [
                    { rating: 4, title: "Trendy design", text: "Looks great with both casual and formal outfits.", author: "Kavita Joshi" },
                    { rating: 4, title: "Battery lasts long", text: "Genuinely gets close to 10 days on a single charge for me.", author: "Rajesh Pillai" },
                    { rating: 3, title: "Voice assistant is basic", text: "Works but responses are limited compared to phone assistants.", author: "Shalini Desai" }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Gaming Mouse",
        products: [
            {
                image: "images/mouse1.png",
                brand: "Logitech",
                name: "Logitech G102 LIGHTSYNC Gaming Mouse",
                price: 999,
                oldPrice: 1495,
                rating: 4.5,
                reviewCount: 67234,
                description: "The Logitech G102 LIGHTSYNC is a lightweight gaming mouse with customizable RGB lighting and a responsive 8000 DPI optical sensor, trusted by gamers for its precision and durability.",
                features: [
                    "8000 DPI Optical Sensor",
                    "Customizable RGB Lighting",
                    "6 Programmable Buttons",
                    "Lightweight Design",
                    "Durable Mechanical Switches",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 5, title: "Perfect for FPS games", text: "Sensor tracking is spot on and the clicks feel very responsive.", author: "Aditya Rao" },
                    { rating: 5, title: "Great RGB customization", text: "Software makes it easy to sync lighting with other Logitech gear.", author: "Harsh Vora" },
                    { rating: 4, title: "Solid budget gaming mouse", text: "Feels durable and comfortable for long gaming sessions.", author: "Nitin Chauhan" }
                ]
            },
            {
                image: "images/mouse2.png",
                brand: "Redgear",
                name: "Redgear A-15 Gaming Mouse",
                price: 599,
                oldPrice: 1499,
                rating: 4.2,
                reviewCount: 43521,
                description: "Redgear A-15 gaming mouse offers adjustable DPI up to 3200 and a comfortable ergonomic grip, making it a popular choice for budget gamers who want reliable performance.",
                features: [
                    "Up to 3200 DPI",
                    "Ergonomic Grip Design",
                    "6 Programmable Buttons",
                    "Braided Cable",
                    "RGB Backlight",
                    "Plug & Play"
                ],
                reviews: [
                    { rating: 4, title: "Great value for money", text: "Performs well above its price point for casual gaming.", author: "Yash Thakur" },
                    { rating: 4, title: "Comfortable grip", text: "Fits my hand well during long gaming sessions.", author: "Komal Bhatt" },
                    { rating: 4, title: "Good backlight effects", text: "RGB looks nice and adds to the gaming setup vibe.", author: "Gaurav Sinha" }
                ]
            },
            {
                image: "images/mouse3.png",
                brand: "HP",
                name: "HP M100 Wired Mouse",
                price: 499,
                oldPrice: 899,
                rating: 4.0,
                reviewCount: 29873,
                description: "The HP M100 is a simple, reliable wired mouse designed for everyday computing, offering smooth tracking and a comfortable grip for both work and casual gaming.",
                features: [
                    "1600 DPI Optical Sensor",
                    "Ambidextrous Design",
                    "Plug & Play USB",
                    "Durable Build",
                    "Smooth Scroll Wheel",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 4, title: "Reliable daily driver", text: "Works consistently for office use without any lag.", author: "Farhan Sheikh" },
                    { rating: 4, title: "Simple and effective", text: "No fuss mouse that just works out of the box.", author: "Ritu Chawla" },
                    { rating: 3, title: "Basic but dependable", text: "Not for hardcore gaming but great for daily tasks.", author: "Om Prakash" }
                ]
            },
            {
                image: "images/mouse4.png",
                brand: "Zebronics",
                name: "Zebronics Zeb-Fury Wired Mouse",
                price: 349,
                oldPrice: 699,
                rating: 3.9,
                reviewCount: 15632,
                description: "Zebronics Zeb-Fury is an affordable wired optical mouse with a sleek design, ideal for students and everyday users looking for smooth cursor control.",
                features: [
                    "1000 DPI Optical Sensor",
                    "Sleek Compact Design",
                    "Plug & Play",
                    "Durable Scroll Wheel",
                    "1.5m Cable Length",
                    "6 Month Warranty"
                ],
                reviews: [
                    { rating: 4, title: "Good budget option", text: "Does the job well for browsing and typing tasks.", author: "Tanya Malhotra" },
                    { rating: 4, title: "Lightweight and simple", text: "Easy to carry around with a laptop bag.", author: "Sameer Khan" },
                    { rating: 3, title: "Works as expected", text: "Nothing fancy but reliable for the price.", author: "Bhavna Iyer" }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Power Bank",
        products: [
            {
                image: "images/powerbank1.png",
                brand: "Mi",
                name: "Mi Power Bank 3i 20000mAh",
                price: 1499,
                oldPrice: 1999,
                rating: 4.3,
                reviewCount: 87213,
                description: "The Mi Power Bank 3i offers a massive 20000mAh capacity with dual input/output ports and 18W fast charging, keeping your devices powered through long travel days.",
                features: [
                    "20000mAh Capacity",
                    "18W Fast Charging",
                    "Dual Input/Output Ports",
                    "Triple Layer Protection",
                    "Compact Design",
                    "6 Month Warranty"
                ],
                reviews: [
                    { rating: 5, title: "Charges my phone thrice", text: "Great capacity, easily charges my phone three times fully.", author: "Alok Nigam" },
                    { rating: 4, title: "Fast charging works great", text: "18W output charges my phone noticeably faster than older power banks.", author: "Swati Kulkarni" },
                    { rating: 4, title: "Reliable brand", text: "Mi build quality feels solid and trustworthy.", author: "Imran Sheikh" }
                ]
            },
            {
                image: "images/powerbank2.png",
                brand: "boAt",
                name: "boAt 10000mAh Power Bank",
                price: 999,
                oldPrice: 1799,
                rating: 4.1,
                reviewCount: 34521,
                description: "boAt's 10000mAh power bank combines a compact form factor with fast charging support, making it perfect for daily commutes and quick top-ups on the go.",
                features: [
                    "10000mAh Capacity",
                    "Type-C Fast Charging",
                    "Compact & Portable",
                    "Multiple Safety Protections",
                    "LED Charge Indicator",
                    "6 Month Warranty"
                ],
                reviews: [
                    { rating: 4, title: "Perfect for daily commute", text: "Fits easily in my bag and charges my phone twice.", author: "Rakesh Yadav" },
                    { rating: 4, title: "Charges fast", text: "Type-C fast charging noticeably reduces charge time.", author: "Preeti Nair" },
                    { rating: 4, title: "Good build", text: "Feels sturdy and the LED indicator is a nice touch.", author: "Vikram Chandra" }
                ]
            },
            {
                image: "images/powerbank3.png",
                brand: "Ambrane",
                name: "Ambrane 20000mAh Power Bank",
                price: 1399,
                oldPrice: 2499,
                rating: 4.0,
                reviewCount: 21987,
                description: "Ambrane's 20000mAh power bank delivers reliable high-capacity charging with multiple ports, ideal for charging multiple devices simultaneously during travel.",
                features: [
                    "20000mAh Capacity",
                    "Triple Output Ports",
                    "12W Fast Charging",
                    "Multi-Device Charging",
                    "Compact Build",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 4, title: "Great for travel", text: "Charged my phone and earbuds together without any issues.", author: "Ananya Das" },
                    { rating: 4, title: "Good capacity", text: "Lasts several days of moderate phone usage between charges.", author: "Manoj Verma" },
                    { rating: 3, title: "Slightly bulky", text: "Capacity is great but it's a bit heavy to carry daily.", author: "Shreya Pandey" }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "USB Keyboard",
        products: [
            {
                image: "images/keyboard1.png",
                brand: "Logitech",
                name: "Logitech K120 Wired Keyboard",
                price: 595,
                oldPrice: 795,
                rating: 4.3,
                reviewCount: 45123,
                description: "The Logitech K120 is a full-size, spill-resistant keyboard built for durability and comfort, making it a reliable choice for everyday office and home use.",
                features: [
                    "Full-Size Layout",
                    "Spill-Resistant Design",
                    "Quiet Typing",
                    "Plug & Play USB",
                    "Durable Keys (10 Million Keystrokes)",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 5, title: "Reliable and simple", text: "Been using it for months without a single issue.", author: "Deepika Rao" },
                    { rating: 4, title: "Great for office use", text: "Quiet keys are perfect for shared workspaces.", author: "Girish Nair" },
                    { rating: 4, title: "Sturdy build", text: "Feels well made and survives daily heavy use.", author: "Anita Kumar" }
                ]
            },
            {
                image: "images/keyboard2.png",
                brand: "Dell",
                name: "Dell KB216 Wired Keyboard",
                price: 699,
                oldPrice: 999,
                rating: 4.2,
                reviewCount: 32456,
                description: "Dell KB216 is a quiet, comfortable keyboard designed with a spill-resistant design and adjustable tilt legs, ideal for extended typing sessions at work.",
                features: [
                    "Spill-Resistant Design",
                    "Adjustable Tilt Legs",
                    "Quiet Keys",
                    "Full-Size Layout",
                    "Plug & Play USB",
                    "3 Year Warranty"
                ],
                reviews: [
                    { rating: 4, title: "Comfortable typing", text: "Keys feel soft and comfortable for long work hours.", author: "Rohan Kapoor" },
                    { rating: 4, title: "Great warranty", text: "3 year warranty gives good peace of mind.", author: "Simran Kaur" },
                    { rating: 4, title: "Solid Dell quality", text: "Consistent with Dell's reliable build standards.", author: "Ajay Mishra" }
                ]
            },
            {
                image: "images/keyboard3.png",
                brand: "HP",
                name: "HP K200 Wired Keyboard",
                price: 649,
                oldPrice: 950,
                rating: 4.1,
                reviewCount: 18762,
                description: "HP K200 wired keyboard offers a comfortable typing experience with a sleek design, perfect for both office productivity and casual home computing.",
                features: [
                    "Sleek Compact Design",
                    "Comfortable Key Travel",
                    "Spill-Resistant",
                    "Plug & Play USB",
                    "Adjustable Feet",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 4, title: "Good for daily typing", text: "Keys are responsive and comfortable through the day.", author: "Nisha Bhatt" },
                    { rating: 4, title: "Compact design", text: "Doesn't take much desk space, fits my setup well.", author: "Kunal Saxena" },
                    { rating: 4, title: "Value for money", text: "Does everything I need at an affordable price.", author: "Payal Shah" }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Laptop Backpack",
        products: [
            {
                image: "images/bag1.png",
                brand: "American Tourister",
                name: "American Tourister Casual Backpack",
                price: 899,
                oldPrice: 1999,
                rating: 4.2,
                reviewCount: 27431,
                description: "This American Tourister backpack offers a padded laptop compartment, multiple organizer pockets, and durable water-resistant fabric, perfect for daily commutes and travel.",
                features: [
                    "Fits Laptops up to 15.6\"",
                    "Water-Resistant Fabric",
                    "Padded Shoulder Straps",
                    "Multiple Organizer Pockets",
                    "Reinforced Zippers",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 4, title: "Sturdy and spacious", text: "Fits my 15 inch laptop plus books and chargers comfortably.", author: "Aarav Malhotra" },
                    { rating: 4, title: "Comfortable straps", text: "No shoulder strain even after a full day of carrying.", author: "Ishita Roy" },
                    { rating: 4, title: "Good quality fabric", text: "Survived monsoon rains without any water seeping in.", author: "Varun Oberoi" }
                ]
            },
            {
                image: "images/bag2.png",
                brand: "Skybags",
                name: "Skybags Helix Pro Backpack",
                price: 1199,
                oldPrice: 2499,
                rating: 4.3,
                reviewCount: 19845,
                description: "Skybags Helix Pro combines a modern design with a dedicated laptop sleeve and USB charging port access, built for professionals who are always on the move.",
                features: [
                    "USB Charging Port Access",
                    "Padded Laptop Sleeve (15.6\")",
                    "Anti-Theft Zipper",
                    "Water-Resistant Material",
                    "Ergonomic Back Support",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 5, title: "USB port is super handy", text: "Being able to charge my phone through the bag while walking is great.", author: "Siddharth Rana" },
                    { rating: 4, title: "Professional look", text: "Looks great for office use and fits my laptop perfectly.", author: "Megha Chawla" },
                    { rating: 4, title: "Comfortable to carry", text: "Back support makes long commutes much easier.", author: "Abhishek Dutta" }
                ]
            },
            {
                image: "images/bag3.png",
                brand: "Wildcraft",
                name: "Wildcraft Wiki 1 Backpack",
                price: 799,
                oldPrice: 1499,
                rating: 4.0,
                reviewCount: 14567,
                description: "Wildcraft Wiki 1 is a compact, durable backpack designed for students and casual users, offering ample storage with a rugged outdoor-inspired build.",
                features: [
                    "Rugged Outdoor Build",
                    "Multiple Storage Compartments",
                    "Padded Back Panel",
                    "Water-Resistant Coating",
                    "Adjustable Straps",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 4, title: "Great for students", text: "Fits books, laptop and a water bottle easily.", author: "Riya Sen" },
                    { rating: 4, title: "Durable material", text: "Been using it daily for a year without wear and tear.", author: "Aditya Bhandari" },
                    { rating: 3, title: "Decent for the price", text: "Basic but gets the job done for college use.", author: "Neel Trivedi" }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Wireless Earbuds",
        products: [
            {
                image: "images/earbuds1.png",
                brand: "boAt",
                name: "boAt Airdopes 141 Wireless Earbuds",
                price: 1299,
                oldPrice: 2999,
                rating: 4.2,
                reviewCount: 98234,
                description: "boAt Airdopes 141 delivers up to 42 hours of total playback with ENx Environmental Noise Cancellation, making it ideal for calls and music on the go.",
                features: [
                    "42 Hours Total Playback",
                    "ENx Noise Cancellation for Calls",
                    "IPX4 Water Resistance",
                    "Low Latency Gaming Mode",
                    "Touch Controls",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 4, title: "Great battery with case", text: "Case charging gives me almost a week of use before recharging.", author: "Tarun Bhalla" },
                    { rating: 4, title: "Clear calls", text: "ENC makes a noticeable difference during calls in noisy places.", author: "Isha Kapoor" },
                    { rating: 5, title: "Best in budget", text: "Sound quality punches above its price point easily.", author: "Devansh Rathi" }
                ]
            },
            {
                image: "images/earbuds2.png",
                brand: "Noise",
                name: "Noise Buds VS104 Wireless Earbuds",
                price: 899,
                oldPrice: 1999,
                rating: 4.0,
                reviewCount: 43219,
                description: "Noise Buds VS104 offers a lightweight design with quad-mic environmental noise cancellation, ensuring clear calls and immersive sound in a compact form factor.",
                features: [
                    "Quad-Mic ENC",
                    "30 Hours Total Playback",
                    "Lightweight Ergonomic Fit",
                    "Touch Controls",
                    "IPX5 Water Resistance",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 4, title: "Comfortable fit", text: "Doesn't fall out even during workouts.", author: "Rachit Sharma" },
                    { rating: 4, title: "Good sound clarity", text: "Vocals sound crisp for calls and podcasts.", author: "Aparna Reddy" },
                    { rating: 3, title: "Average bass", text: "Sound is fine but bass could be stronger for music lovers.", author: "Mohit Arora" }
                ]
            },
            {
                image: "images/earbuds3.png",
                brand: "realme",
                name: "realme Buds Air 5 Wireless Earbuds",
                price: 2499,
                oldPrice: 3999,
                rating: 4.4,
                reviewCount: 32541,
                description: "realme Buds Air 5 features active noise cancellation up to 45dB along with 30 hours of total battery life, delivering a premium listening experience at a competitive price.",
                features: [
                    "45dB Active Noise Cancellation",
                    "30 Hours Total Battery",
                    "Dual Device Connection",
                    "Low Latency Mode",
                    "IPX5 Water Resistance",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 5, title: "ANC is impressive", text: "Blocks out traffic noise really well during my commute.", author: "Kabir Malhotra" },
                    { rating: 4, title: "Great sound quality", text: "Bass and clarity are well balanced for the price.", author: "Sonal Mehta" },
                    { rating: 4, title: "Comfortable for hours", text: "No ear fatigue even after long listening sessions.", author: "Yuvraj Singh" }
                ]
            }
        ]
    },
    {
        id: 7,
        name: "Bluetooth Speaker",
        products: [
            {
                image: "images/speaker1.png",
                brand: "JBL",
                name: "JBL Go 3 Portable Bluetooth Speaker",
                price: 1999,
                oldPrice: 2999,
                rating: 4.5,
                reviewCount: 54123,
                description: "JBL Go 3 is an ultra-portable speaker with bold JBL Pro Sound and IP67 waterproof and dustproof rating, perfect for outdoor adventures and everyday use.",
                features: [
                    "JBL Pro Sound",
                    "IP67 Waterproof & Dustproof",
                    "5 Hours Playtime",
                    "Ultra-Portable Design",
                    "Multiple Color Options",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 5, title: "Amazing sound for the size", text: "Loud and clear, punches way above its tiny size.", author: "Aryan Kohli" },
                    { rating: 5, title: "Waterproof works great", text: "Took it to the pool and it survived splashes with no issues.", author: "Naina Chopra" },
                    { rating: 4, title: "Great for travel", text: "Compact enough to carry anywhere without adding bulk.", author: "Rohit Bajaj" }
                ]
            },
            {
                image: "images/speaker2.png",
                brand: "boAt",
                name: "boAt Stone 350 Bluetooth Speaker",
                price: 1299,
                oldPrice: 2490,
                rating: 4.2,
                reviewCount: 43287,
                description: "boAt Stone 350 delivers immersive sound with up to 10 hours of playback and IPX7 water resistance, making it a rugged companion for parties and outdoor trips.",
                features: [
                    "10 Hours Playback",
                    "IPX7 Water Resistant",
                    "TWS Feature for Dual Pairing",
                    "Immersive Sound",
                    "Durable Rugged Build",
                    "1 Year Warranty"
                ],
                reviews: [
                    { rating: 4, title: "Great bass output", text: "Fills up a room easily with rich bass for house parties.", author: "Sahil Verma" },
                    { rating: 4, title: "Rugged and reliable", text: "Survived a drop from the table without any damage.", author: "Ritika Sen" },
                    { rating: 4, title: "TWS pairing is cool", text: "Pairing two speakers together for stereo sound works great.", author: "Amitoj Singh" }
                ]
            },
            {
                image: "images/speaker3.png",
                brand: "Zebronics",
                name: "Zebronics Zeb-County Bluetooth Speaker",
                price: 599,
                oldPrice: 999,
                rating: 3.9,
                reviewCount: 21456,
                description: "Zebronics Zeb-County is a compact and affordable Bluetooth speaker with FM radio and USB/SD card support, ideal for casual listening at home or outdoors.",
                features: [
                    "Bluetooth v5.0",
                    "FM Radio Support",
                    "USB/SD Card Playback",
                    "Built-in Rechargeable Battery",
                    "Compact Design",
                    "6 Month Warranty"
                ],
                reviews: [
                    { rating: 4, title: "Good budget speaker", text: "Sound quality is decent for casual use at home.", author: "Parth Desai" },
                    { rating: 4, title: "FM radio is a nice extra", text: "Enjoy listening to FM stations during my morning routine.", author: "Kritika Bhatt" },
                    { rating: 3, title: "Battery could be better", text: "Needs charging every couple of days with regular use.", author: "Dev Patel" }
                ]
            }
        ]
    }
];

// Flat product list for easy lookup by global index
const allProducts = [];
categories.forEach((category, catIndex) => {
    category.products.forEach((product, prodIndex) => {
        allProducts.push({
            ...product,
            categoryIndex: catIndex,
            productIndex: prodIndex,
            categoryName: category.name
        });
    });
});

// Utility functions
function qs(selector, scope) {
    return (scope || document).querySelector(selector);
}

function qsa(selector, scope) {
    return Array.from((scope || document).querySelectorAll(selector));
}

function formatPrice(value) {
    return "₹" + Number(value).toLocaleString("en-IN");
}

function computeDiscount(price, oldPrice) {
    if (!oldPrice || oldPrice <= price) return 0;
    return Math.round(((oldPrice - price) / oldPrice) * 100);
}

function buildStarString(rating) {
    const rounded = Math.round(rating);
    return "★".repeat(rounded) + "☆".repeat(5 - rounded);
}

// Cart functions
function getCartCount() {
    return parseInt(localStorage.getItem("fk_cartCount") || "0", 10);
}

function setCartCount(count) {
    localStorage.setItem("fk_cartCount", String(count));
    qsa(".cart-count, #cartCount").forEach(el => {
        el.textContent = count;
    });
}

// Purchase functions
function getPurchases() {
    try {
        return JSON.parse(localStorage.getItem("fk_purchases") || "[]");
    } catch (err) {
        return [];
    }
}

function addPurchase(productName) {
    const purchases = getPurchases();
    purchases.unshift(productName);
    localStorage.setItem("fk_purchases", JSON.stringify(purchases));
    renderPurchaseList();
}

function renderPurchaseList() {
    const listEl = qs("#purchaseList");
    const countEl = qs("#purchaseCount");
    const purchases = getPurchases();

    if (countEl) countEl.textContent = purchases.length;

    if (listEl) {
        if (purchases.length === 0) {
            listEl.innerHTML = "<p>NO Products Purchased</p>";
        } else {
            listEl.innerHTML = purchases.map(name => `<p>${name}</p>`).join("");
        }
    }
}

// Selected product for checkout flow (stored in localStorage)
function getSelectedProduct() {
    try {
        return JSON.parse(localStorage.getItem("fk_selectedProduct") || "null");
    } catch (err) {
        return null;
    }
}

function setSelectedProduct(product, quantity) {
    const data = {
        ...product,
        quantity: quantity || 1
    };
    localStorage.setItem("fk_selectedProduct", JSON.stringify(data));
}

function clearSelectedProduct() {
    localStorage.removeItem("fk_selectedProduct");
}

// Toast notification
function showToast(message) {
    const toast = qs("#toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

// Header dropdown interactions
function initHeaderInteractions() {
    const menuBtn = qs(".menu-btn");
    const headerLinks = qs(".header-links");
    if (menuBtn && headerLinks) {
        menuBtn.addEventListener("click", () => {
            headerLinks.classList.toggle("mobile-open");
        });
    }
}

// Hero slider
function initHeroSlider() {
    const slides = qsa(".slide");
    const dots = qsa(".dot");
    const prevBtn = qs(".hero .prev");
    const nextBtn = qs(".hero .next");

    if (slides.length === 0) return;

    let current = 0;
    let autoTimer = null;

    function goTo(index) {
        current = (index + slides.length) % slides.length;
        const slider = qs(".slider");
        if (slider) {
            slider.style.transform = `translateX(-${current * 100}%)`;
        }
        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[current]) {
            dots[current].classList.add("active");
        }
    }

    function startAuto() {
        autoTimer = setInterval(() => goTo(current + 1), 5000);
    }

    function resetAuto() {
        clearInterval(autoTimer);
        startAuto();
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            goTo(current - 1);
            resetAuto();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            goTo(current + 1);
            resetAuto();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            goTo(index);
            resetAuto();
        });
    });

    startAuto();
}

// Quantity controls
function initQuantityControls(scope) {
    qsa(".minus", scope).forEach(btn => {
        btn.addEventListener("click", () => {
            const qtyEl = btn.parentElement.querySelector(".qty");
            if (!qtyEl) return;
            let value = parseInt(qtyEl.textContent, 10) || 1;
            if (value > 1) qtyEl.textContent = value - 1;
        });
    });

    qsa(".plus", scope).forEach(btn => {
        btn.addEventListener("click", () => {
            const qtyEl = btn.parentElement.querySelector(".qty");
            if (!qtyEl) return;
            let value = parseInt(qtyEl.textContent, 10) || 1;
            if (value < 10) qtyEl.textContent = value + 1;
        });
    });
}

// Featured cards on homepage
function initFeaturedCards() {
    qsa(".featured-card").forEach((card, index) => {
        const nameEl = card.querySelector("h3");
        const qtyEl = card.querySelector(".qty");
        const addBtn = card.querySelector(".add-cart");
        const buyBtn = card.querySelector(".buy-now");
        const viewLink = card.querySelector(".view-details");
        const name = nameEl ? nameEl.textContent.trim() : "Product";

        // Map featured card index to allProducts
        const product = allProducts[index] || allProducts[0];

        if (viewLink) {
            viewLink.href = `product-details.html?cat=${product.categoryIndex}&prod=${product.productIndex}`;
        }

        if (addBtn) {
            addBtn.addEventListener("click", () => {
                const qty = qtyEl ? parseInt(qtyEl.textContent, 10) || 1 : 1;
                setCartCount(getCartCount() + qty);
                showToast(`${name} added to cart!`);
            });
        }

        if (buyBtn) {
            buyBtn.addEventListener("click", () => {
                const qty = qtyEl ? parseInt(qtyEl.textContent, 10) || 1 : 1;
                setSelectedProduct(product, qty);
                window.location.href = "order-summary.html";
            });
        }
    });
}

// Product Details Page
function isProductDetailsPage() {
    return !!qs("#productImage");
}

function getProductFromUrl() {
    const params = new URLSearchParams(window.location.search);
    let catIndex = parseInt(params.get("cat"), 10);
    let prodIndex = parseInt(params.get("prod"), 10);

    // Fallback for old ?id= format
    if (isNaN(catIndex) && params.has("id")) {
        catIndex = parseInt(params.get("id"), 10);
        prodIndex = 0;
    }

    if (isNaN(catIndex) || catIndex < 0 || catIndex >= categories.length) catIndex = 0;
    const category = categories[catIndex];
    if (isNaN(prodIndex) || prodIndex < 0 || prodIndex >= category.products.length) prodIndex = 0;

    return { catIndex, prodIndex };
}

const productDetailsState = {
    categoryIndex: 0,
    productIndex: 0
};

function renderReviews(reviews) {
    const container = qs("#reviewsList");
    if (!container) return;

    container.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-rating">${buildStarString(review.rating)}</div>
            <h3>${review.title}</h3>
            <p>${review.text}</p>
            <span>- ${review.author}</span>
        </div>
    `).join("");
}

function renderRelatedProducts(categoryIndex, activeProductIndex) {
    const grid = qs("#relatedGrid");
    const titleEl = qs("#relatedTitle");
    if (!grid) return;

    const category = categories[categoryIndex];
    if (titleEl) titleEl.textContent = `Related ${category.name}`;

    grid.innerHTML = category.products.map((product, index) => `
        <div class="related-card ${index === activeProductIndex ? "active-product" : ""}"
             data-cat="${categoryIndex}" data-prod="${index}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${formatPrice(product.price)}</p>
        </div>
    `).join("");

    qsa(".related-card", grid).forEach(card => {
        card.addEventListener("click", () => {
            const cat = parseInt(card.getAttribute("data-cat"), 10);
            const prod = parseInt(card.getAttribute("data-prod"), 10);
            productDetailsState.categoryIndex = cat;
            productDetailsState.productIndex = prod;
            renderProductDetails();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
}

function renderProductDetails() {
    const { categoryIndex, productIndex } = productDetailsState;
    const category = categories[categoryIndex];
    const product = category.products[productIndex];
    const discount = computeDiscount(product.price, product.oldPrice);

    document.title = `${product.name} - Flipkart`;

    const setText = (selector, text) => {
        const el = qs(selector);
        if (el) el.textContent = text;
    };

    const imageEl = qs("#productImage");
    if (imageEl) {
        imageEl.src = product.image;
        imageEl.alt = product.name;
    }

    setText("#productBrand", product.brand);
    setText("#productName", product.name);
    setText("#productRating", `${product.rating} ★`);
    setText("#productReviews", `${product.reviewCount.toLocaleString("en-IN")} Ratings & ${product.reviews.length} Reviews`);
    setText("#productPrice", formatPrice(product.price));
    setText("#oldPrice", formatPrice(product.oldPrice));
    setText("#productOffer", `${discount}% OFF`);
    setText("#productDescription", product.description);
    setText("#categoryPosition", `Product ${productIndex + 1} of ${category.products.length}`);

    const featuresEl = qs("#productFeatures");
    if (featuresEl) {
        featuresEl.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join("");
    }

    const qtyEl = qs(".product-right .qty") || qs(".quantity-box .qty");
    if (qtyEl) qtyEl.textContent = "1";

    renderReviews(product.reviews);
    renderRelatedProducts(categoryIndex, productIndex);

    const newUrl = `${window.location.pathname}?cat=${categoryIndex}&prod=${productIndex}`;
    window.history.replaceState(null, "", newUrl);
}

function initProductDetailsPage() {
    const { catIndex, prodIndex } = getProductFromUrl();
    productDetailsState.categoryIndex = catIndex;
    productDetailsState.productIndex = prodIndex;

    const prevBtn = qs("#prevBtn");
    const nextBtn = qs("#nextBtn");

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            const category = categories[productDetailsState.categoryIndex];
            productDetailsState.productIndex =
                (productDetailsState.productIndex - 1 + category.products.length) % category.products.length;
            renderProductDetails();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            const category = categories[productDetailsState.categoryIndex];
            productDetailsState.productIndex =
                (productDetailsState.productIndex + 1) % category.products.length;
            renderProductDetails();
        });
    }

    const addBtn = qs(".action-buttons .add-cart");
    const buyBtn = qs(".action-buttons .buy-now");
    const qtyEl = qs(".product-right .qty") || qs(".quantity-box .qty");

    if (addBtn) {
        addBtn.addEventListener("click", () => {
            const category = categories[productDetailsState.categoryIndex];
            const product = category.products[productDetailsState.productIndex];
            const qty = qtyEl ? parseInt(qtyEl.textContent, 10) || 1 : 1;
            setCartCount(getCartCount() + qty);
            showToast(`${product.name} added to cart!`);
        });
    }

    if (buyBtn) {
        buyBtn.onclick = null;
        buyBtn.addEventListener("click", () => {
            const category = categories[productDetailsState.categoryIndex];
            const product = category.products[productDetailsState.productIndex];
            const qty = qtyEl ? parseInt(qtyEl.textContent, 10) || 1 : 1;
            setSelectedProduct({
                ...product,
                categoryIndex: productDetailsState.categoryIndex,
                productIndex: productDetailsState.productIndex,
                categoryName: category.name
            }, qty);
            window.location.href = "order-summary.html";
        });
    }

    renderProductDetails();
}

// Order Summary Page
function isOrderSummaryPage() {
    return window.location.pathname.includes("order-summary.html");
}

function renderOrderSummary() {
    const product = getSelectedProduct();
    if (!product) {
        window.location.href = "index.html";
        return;
    }

    const discount = computeDiscount(product.price, product.oldPrice);
    const totalPrice = product.price * (product.quantity || 1);

    const imageEl = qs(".detail-image");
    if (imageEl) {
        imageEl.src = product.image;
        imageEl.alt = product.name;
    }

    const brandEl = qs(".product-brand");
    if (brandEl) brandEl.textContent = product.brand;

    const nameEl = qs(".product-right h1");
    if (nameEl) nameEl.textContent = product.name;

    const ratingBadge = qs(".rating-badge");
    if (ratingBadge) ratingBadge.textContent = `${product.rating} ★`;

    const reviewsEl = qs(".rating-box span:not(.rating-badge)");
    if (reviewsEl) reviewsEl.textContent = `${product.reviewCount.toLocaleString("en-IN")} Ratings`;

    const priceEl = qs(".price-box h2");
    if (priceEl) priceEl.textContent = formatPrice(product.price);

    const oldPriceEl = qs(".old-price");
    if (oldPriceEl) oldPriceEl.textContent = formatPrice(product.oldPrice);

    const offerEl = qs(".offer");
    if (offerEl) offerEl.textContent = `${discount}% OFF`;

    const qtyEl = qs(".quantity-box .qty");
    if (qtyEl) qtyEl.textContent = product.quantity || 1;

    // Price details
    const priceDetails = qsa(".product-right p");
    priceDetails.forEach(p => {
        if (p.textContent.includes("Product Price")) {
            p.innerHTML = `<strong>Product Price :</strong> ${formatPrice(product.price)}`;
        }
    });

    const totalEl = qs(".product-right h2:last-of-type");
    if (totalEl && totalEl.textContent.includes("Total")) {
        totalEl.textContent = `Total Amount : ${formatPrice(totalPrice)}`;
    }

    // Update quantity controls
    initQuantityControls(document);
    qsa(".quantity-box .minus, .quantity-box .plus").forEach(btn => {
        btn.addEventListener("click", () => {
            setTimeout(() => {
                const newQty = parseInt(qs(".quantity-box .qty").textContent, 10) || 1;
                const newTotal = product.price * newQty;
                const totalEl = qs(".product-right h2:last-of-type");
                if (totalEl && totalEl.textContent.includes("Total")) {
                    totalEl.textContent = `Total Amount : ${formatPrice(newTotal)}`;
                }
                setSelectedProduct(product, newQty);
            }, 10);
        });
    });
}

// Delivery Page
function isDeliveryPage() {
    return window.location.pathname.includes("delivery.html");
}

function renderDeliveryPage() {
    const product = getSelectedProduct();
    if (!product) {
        window.location.href = "index.html";
        return;
    }

    const totalPrice = product.price * (product.quantity || 1);

    // Update price summary if elements exist
    const priceEls = qsa(".product-right p, [style*='line-height']  p");
    priceEls.forEach(p => {
        if (p.textContent.includes("Product Price")) {
            p.innerHTML = `<strong>Product Price :</strong> ${formatPrice(product.price)}`;
        }
        if (p.textContent.includes("Total Amount")) {
            p.innerHTML = `<strong>Total Amount :</strong> ${formatPrice(totalPrice)}`;
        }
    });
}

// Payment Page
function isPaymentPage() {
    return window.location.pathname.includes("payment.html");
}

function renderPaymentPage() {
    const product = getSelectedProduct();
    if (!product) {
        window.location.href = "index.html";
        return;
    }

    const totalPrice = product.price * (product.quantity || 1);

    // Update all price displays
    qsa("p").forEach(p => {
        if (p.textContent.includes("Product Price")) {
            p.innerHTML = `<strong>Product Price :</strong> ${formatPrice(product.price)}`;
        }
        if (p.textContent.includes("Total Amount")) {
            p.innerHTML = `<strong>Total Amount :</strong> ${formatPrice(totalPrice)}`;
        }
    });
}

// Success Page
function isSuccessPage() {
    return window.location.pathname.includes("success.html");
}

function handleSuccessPage() {
    const product = getSelectedProduct();
    if (product) {
        addPurchase(product.name);
        clearSelectedProduct();
    }
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
    setCartCount(getCartCount());
    renderPurchaseList();

    initHeaderInteractions();
    initHeroSlider();
    initQuantityControls(document);

    if (isProductDetailsPage()) {
        initProductDetailsPage();
    } else if (isOrderSummaryPage()) {
        renderOrderSummary();
    } else if (isDeliveryPage()) {
        renderDeliveryPage();
    } else if (isPaymentPage()) {
        renderPaymentPage();
    } else if (isSuccessPage()) {
        handleSuccessPage();
    } else {
        // Homepage
        initFeaturedCards();
    }
});
