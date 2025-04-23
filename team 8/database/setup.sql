-- Create the database
CREATE DATABASE IF NOT EXISTS travel_tales;
USE travel_tales;

-- Create destinations table
CREATE TABLE IF NOT EXISTS destinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255) NOT NULL,
    features JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO destinations (name, category, description, image, features) VALUES
('Goa', 'beach', 'Experience the perfect blend of sun, sand, and sea on India\'s most popular beach destination.', 'images/goa-beach.jpg', '["Beach", "Seafood", "Nightlife"]'),
('Manali', 'mountain', 'Discover the majestic beauty of the Himalayas with breathtaking views and adventure activities.', 'images/manali-mountains.jpg', '["Mountain", "Skiing", "Trekking"]'),
('Mumbai', 'city', 'Experience the magic of India\'s financial capital with its iconic landmarks and vibrant culture.', 'images/mumbai-city.jpg', '["Culture", "Street Food", "Shopping"]'),
('Varanasi', 'cultural', 'Immerse yourself in India\'s spiritual heart with ancient temples and the sacred Ganges River.', 'images/varanasi-ganges.jpg', '["Temples", "Ganges", "Spirituality"]'),
('Agra', 'cultural', 'Witness the timeless beauty of the Taj Mahal, one of the Seven Wonders of the World.', 'images/agra-tajmahal.jpg', '["Heritage", "Photography", "History"]'),
('Kerala', 'mountain', 'Explore the serene backwaters, lush tea plantations, and pristine beaches of God\'s Own Country.', 'images/kerala-backwaters.jpg', '["Backwaters", "Nature", "Ayurveda"]'); 