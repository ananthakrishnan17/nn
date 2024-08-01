const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,  // Corrected capitalization
        required: [true, "please enter product name"],
        trim: true,
        maxLength: [100, "product name cannot exceed 100 characters"]  // Corrected typo in message
    },
    price: {
        type: Number,  // Corrected capitalization
        required: [true, "please enter product price"],  // Added missing error message
        default: 0.0
    },
    description: {
        type: String,  // Corrected capitalization
        required: [true, "please enter product description"]
    },
    ratings: {
        type: Number,  // Corrected data type
        default: 0
    },
    images: [  // Corrected property name
        {
            public_id: {  // Added public_id field
                type: String
               
            },
            url: {
                type: String
                
            }
        }
    ],
    category: {
        type: String,  // Corrected capitalization
        required: [true, "please enter product category"],
        enum: {
            values: [
                'Electronics',
                'Mobile Phones',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',  // Corrected capitalization
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: "please select correct category"
        }
    },
    seller: {
        type: String,  // Corrected capitalization
        required: [true, "please enter product seller"]
    },
    stock: {
        type: Number,  // Corrected capitalization
        required: [true, "please enter product stock"],
        maxLength: [20, 'product stock cannot exceed 20']  // Corrected error message
    },
    numOfReviews: {
        type: Number,  // Corrected capitalization
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,  // Corrected capitalization
                required: true
            },
            rating: {
                type: Number,  // Corrected data type
                required: true
            },
            comment: {
                type: String,  // Corrected capitalization
                required: true
            }
        }
    ],
    createdAt: {  // Corrected property name
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);
