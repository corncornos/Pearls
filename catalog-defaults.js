// Shared fallback product catalog.
// Used by BOTH index.html (public site) and admin.html (admin panel) as the
// bundled default when the live Vercel Blob catalog hasn't been saved yet.
//
// IMPORTANT: This is the single source of truth for the fallback list.
// Edit this file only — do NOT hand-edit a duplicate array inside
// index.html or admin.html, or the two will silently drift out of sync.
//
// Once an admin saves changes via /admin.html, the live Blob JSON becomes
// the real source of truth and this file is only used before the first
// save (or if the Blob fetch fails).

window.DEFAULT_PRODUCTS = [
    // Category: Purified
    {
        id: 1, name: "Single Membrane System", category: "Purified Water Systems", price: "₱25,000",
        desc: "Reliable single membrane purification for entry-level stations.",
        images: ["/regenerated_image_1777348959001.png", "https://images.unsplash.com/photo-1523413651479-59cb1f1f619b?auto=format&fit=crop&q=80&w=600"]
    },
    {
        id: 2, name: "Double Membrane System", category: "Purified Water Systems", price: "₱45,000",
        desc: "Dual RO filtration strength for medium to high volume operations.",
        images: ["/regenerated_image_1777348429470.png", "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=600"]
    },
    {
        id: 3, name: "Triple Membrane (Auto)", category: "Purified Water Systems", price: "₱68,000",
        desc: "Automated high-capacity triple membrane system for commercial use.",
        images: ["/regenerated_image_1777348377790.png", "https://images.unsplash.com/photo-1550508821-654a1a3e6af2?auto=format&fit=crop&q=80&w=600"]
    },
    {
        id: 4, name: "Quadruple Membrane", category: "Purified Water Systems", price: "₱90,000",
        desc: "Industrial-grade heavy duty quadruple membrane setup.",
        images: ["/regenerated_image_1777348345639.png", "https://images.unsplash.com/photo-1584486665790-2e45da27e9ff?auto=format&fit=crop&q=80&w=600"]
    },

    // Category: Mineral & High pH
    {
        id: 5, name: "Mineral Water System", category: "Mineral & High pH", price: "₱35,000",
        desc: "Remineralization system to add essential minerals back into purified water.",
        images: ["/regenerated_image_1777348342303.png", "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=600"]
    },
    {
        id: 6, name: "High pH Alkaline Unit", category: "Mineral & High pH", price: "₱42,000",
        desc: "Boosts your water pH securely for excellent alkaline health benefits.",
        images: ["/regenerated_image_1777352616332.png", "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"]
    },
    {
        id: 7, name: "Ultrafine Mineral + Alkaline", category: "Mineral & High pH", price: "₱55,000",
        desc: "The ultimate 2-in-1 combo system providing both mineral and alkaline outputs.",
        images: ["https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=600", "https://images.unsplash.com/photo-1606550262100-305141e5dc42?auto=format&fit=crop&q=80&w=600"]
    },
    {
        id: 8, name: "3-in-1 Complete Station", category: "Mineral & High pH", price: "₱85,000",
        desc: "Dispenses Purified, Mineral, and Alkaline from one integrated powerhouse.",
        images: ["https://images.unsplash.com/photo-1606550262100-305141e5dc42?auto=format&fit=crop&q=80&w=600", "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&q=80&w=600"]
    },

    // Category: Services
    {
        id: 18, name: "Complete Rehab Treatment", category: "Services", price: "Get Quote",
        desc: "Full system overhaul, deep sanitization, and pipe realignment.",
        images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600", "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600"]
    },
    {
        id: 19, name: "Membrane Replacement Labor", category: "Services", price: "₱1,500",
        desc: "Professional on-site installation and tuning service.",
        images: ["https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600", "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"]
    },
    {
        id: 20, name: "Staff Re-training Course", category: "Services", price: "₱3,000",
        desc: "Comprehensive on-site operational and maintenance training for your staff.",
        images: ["https://plus.unsplash.com/premium_photo-1661631481102-127e9f3b1add?auto=format&fit=crop&q=80&w=600", "https://images.unsplash.com/photo-1582216503947-6bcf49457637?auto=format&fit=crop&q=80&w=600"]
    },

    // Category: Water Related Products
    {
        id: 200, name: "Ice Maker Machine", category: "Water Related Products", price: "Get Quote",
        desc: "Commercial-grade ice maker machine, a natural add-on business alongside your water refilling station - extra income stream, same foot traffic.",
        images: ["https://images.unsplash.com/photo-1638513892459-c5b6a5da0ecd?auto=format&fit=crop&q=80&w=600", "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=600"]
    },
    {
        id: 201, name: "Laundry Business Showcase", category: "Water Related Products", price: "Get Quote",
        desc: "See how a coin or app-operated laundry setup pairs with a water station for a combined water-and-laundry business - shared space, shared customers, dual income.",
        images: ["https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=600", "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=600"]
    },

    // Category: Consumables -> Wall Hung Filters
    { id: 101, name: "PW1", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["/consumables/wallhungfilters/PW1.JPG"] },
    { id: 102, name: "PW2", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["/consumables/wallhungfilters/PW2.JPG"] },
    { id: 103, name: "Mineral", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["/consumables/wallhungfilters/MINERAL.JPG"] },
    { id: 104, name: "M+", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["/consumables/wallhungfilters/M+.JPG"] },
    { id: 105, name: "PW1 C", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["consumables/wallhungfilters/M+.JPG"] },
    { id: 106, name: "PW2 C", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["consumables/wallhungfilters/M+.JPG"] },
    { id: 107, name: "PW3 C", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["consumables/wallhungfilters/M+.JPG"] },
    { id: 108, name: "Mineral C", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["/consumables/wallhungfilters/MINERAL C.JPG"] },
    { id: 109, name: "M+ C", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: [""] },
    { id: 110, name: "Brine Tank", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "Available in 70, 80, and 120 liters", images: ["/consumables/wallhungfilters/BRINE TANK.JPG"] },
    { id: 111, name: "PU Elbow (10 or 12 mm)", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "Available in 10 and 12 mm", images: ["/consumables/wallhungfilters/PU ELBOW.JPG"] },
    { id: 112, name: "PU Straight (10 or 12 mm)", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "Available in 10 and 12 mm", images: ["/consumables/wallhungfilters/PU STRAIGHT.JPG"] },
    { id: 113, name: "Quick Connect (1/2 or 1/4)", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "Available in 1/2 and 1/4", images: ["/consumables/wallhungfilters/QUICK CONNECT.JPG"] },

    // Category: Consumables -> Sediment Filters
    { id: 120, name: "10x54", category: "Consumables", subCategory: "Sediment Filters", price: "Ask for Price", desc: "", images: ["consumables/wallhungfilters/M+.JPG"] },
    { id: 121, name: "13x54", category: "Consumables", subCategory: "Sediment Filters", price: "Ask for Price", desc: "", images: ["consumables/wallhungfilters/M+.JPG"] },
    { id: 122, name: "16x54", category: "Consumables", subCategory: "Sediment Filters", price: "Ask for Price", desc: "", images: ["consumables/wallhungfilters/M+.JPG"] },

    // Category: Consumables -> Carbon Block
    { id: 123, name: "AC Cream", category: "Consumables", subCategory: "Carbon Block", price: "Ask for Price", desc: "Hydrosep", images: ["/ac cream.png"] },
    { id: 124, name: "AC Green", category: "Consumables", subCategory: "Carbon Block", price: "Ask for Price", desc: "CocoPure, CocoPlus, CocoOne, CocoSure", images: ["/consumables/sediment/ac green.JPG"] },

    // Category: Consumables -> UV Sterilizer
    { id: 170, name: "UV Lamp", category: "Consumables", subCategory: "UV Sterilizer", price: "Ask for Price", desc: "Available in 16, 24, 25, and 35 watts", images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"] },
    { id: 171, name: "UV Ballast", category: "Consumables", subCategory: "UV Sterilizer", price: "Ask for Price", desc: "Available in 16, 24, 25, and 35 watts", images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"] },
    { id: 172, name: "UV Chamber", category: "Consumables", subCategory: "UV Sterilizer", price: "Ask for Price", desc: "Available in 16, 24, 25, and 35 watts", images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"] },
    { id: 173, name: "UV Quartz Glass", category: "Consumables", subCategory: "UV Sterilizer", price: "Ask for Price", desc: "Available in 16, 24, 25, and 35 watts", images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"] },

    // Category: Consumables -> Elements
    { id: 130, name: "Activated Carbon", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["/carbon.png"] },
    { id: 131, name: "Anthracite", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["/anthracite.jpeg"] },
    { id: 132, name: "Pebbles", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["/pebbles.png"] },
    { id: 133, name: "Resin", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["/consumables/elements/RESIN.webp"] },
    { id: 134, name: "Salt", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["/claro vida salt.png"] },
    { id: 135, name: "Silica Sand", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["consumables/elements/SILICA_SAND.png"] },
    { id: 136, name: "Solenoid Valve", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["/consumables/elements/SOLENOID_VALVE.png"] },

    // Category: Consumables -> Heads
    { id: 140, name: "Manual Head Softener", category: "Consumables", subCategory: "Heads", price: "Ask for Price", desc: "", images: ["/consumables/heads//MANUAL_HEAD_SOFTENER.png"] },
    { id: 141, name: "Manual Head Multimedia of Carbon", category: "Consumables", subCategory: "Heads", price: "Ask for Price", desc: "", images: ["/consumables/heads//MANUAL_HEAD_MULTIMEDIA OF_CARBON.png"] },
    { id: 142, name: "Automatic Head Softener", category: "Consumables", subCategory: "Heads", price: "Ask for Price", desc: "", images: ["consumables/heads/AUTOMATIC_HEAD_SOFTENER.png"] },

    // Category: Consumables -> FRP Tanks
    { id: 143, name: "10x54", category: "Consumables", subCategory: "FRP Tanks", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"] },
    { id: 144, name: "13x54", category: "Consumables", subCategory: "FRP Tanks", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"] },
    { id: 145, name: "16x54", category: "Consumables", subCategory: "FRP Tanks", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"] },

    // Category: Consumables -> RO Membrane
    { id: 154, name: "40X40", category: "Consumables", subCategory: "RO Membrane", price: "Ask for Price", desc: "Vontron (ULP 21, ULP 11), Dupont-Filmtec Before (BW 30), Netto (Espa 3, Espa 4), Octagon, Hydropure, YQS, American Power", images: ["https://images.unsplash.com/photo-1523413651479-59cb1f1f619b?auto=format&fit=crop&q=80&w=600"] },
    { id: 155, name: "80x40", category: "Consumables", subCategory: "RO Membrane", price: "Ask for Price", desc: "Dupont-Filmtec Before (RO 400, RO 400 Advance), American Power (RO 400, RO 400 Advance)", images: ["https://images.unsplash.com/photo-1523413651479-59cb1f1f619b?auto=format&fit=crop&q=80&w=600"] },

    // Category: Consumables -> Filter Cartridge
    { id: 160, name: "SL10 Blue/Clear", category: "Consumables", subCategory: "Filter Cartridge", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600"] },
    { id: 161, name: "SL 20 Blue/Clear", category: "Consumables", subCategory: "Filter Cartridge", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600"] },
    { id: 162, name: "BB20", category: "Consumables", subCategory: "Filter Cartridge", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600"] },

    // Category: Consumables -> Accessories
    { id: 163, name: "Membrane", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "Available in manual and reverse osmosis", images: ["https://images.unsplash.com/photo-1523413651479-59cb1f1f619b?auto=format&fit=crop&q=80&w=600"] },
    { id: 164, name: "Spanner", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "Available in black and white", images: ["https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600"] },
    { id: 165, name: "Upper Strainer", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600"] },
    { id: 166, name: "Lower Strainer", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600"] },
    { id: 167, name: "Oil Pressure Gauge", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "Available in 100 psi and 350 psi", images: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600"] },
    { id: 168, name: "Flow Meter", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600"] },
    { id: 169, name: "Selector Switch", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600"] },
    { id: 174, name: "Pilot Light", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "Available in red, green, and blue", images: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600"] },
    { id: 175, name: "Buzzer", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600"] },
    { id: 176, name: "Timer", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600"] },
    { id: 177, name: "Heat Gun", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600"] },
    { id: 178, name: "Blue Hose", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600"] },
    { id: 179, name: "White Hose", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600"] },
    { id: 180, name: "PVC Clamp White", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "Available in size big and small", images: ["https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600"] }
];
