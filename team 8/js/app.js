// Angular.js Application
var travelTalesApp = angular.module('travelTalesApp', []);

// Main Controller
travelTalesApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
    // Fetch destinations from the database
    $http.get('api/destinations.php')
        .then(function(response) {
            $scope.destinations = response.data;
        })
        .catch(function(error) {
            console.error('Error fetching destinations:', error);
        });

    $scope.packages = [
        {
            name: 'Adventure Explorer',
            description: 'Perfect for thrill-seekers and nature lovers',
            duration: '5 Days / 4 Nights',
            features: ['Adventure Activities', 'Mountain Trekking', 'Camping', 'Local Guide'],
            price: '₹79,999'
        },
        {
            name: 'Luxury Escape',
            description: 'Indulge in premium experiences and comfort',
            duration: '7 Days / 6 Nights',
            features: ['5-Star Hotels', 'Private Tours', 'Fine Dining', 'Spa Services'],
            price: '₹1,99,999'
        },
        {
            name: 'Cultural Discovery',
            description: 'Immerse yourself in local culture and traditions',
            duration: '6 Days / 5 Nights',
            features: ['Cultural Workshops', 'Local Experiences', 'Boutique Hotels'],
            price: '₹1,19,999'
        }
    ];

    $scope.partnershipBenefits = [
        {
            icon: 'fa-chart-line',
            title: 'Increased Visibility',
            description: 'Reach thousands of potential customers through our platform'
        },
        {
            icon: 'fa-hand-holding-usd',
            title: 'Revenue Growth',
            description: 'Boost your business with our extensive customer base'
        },
        {
            icon: 'fa-tools',
            title: 'Easy Management',
            description: 'Access our partner dashboard to manage bookings and services'
        },
        {
            icon: 'fa-star',
            title: 'Quality Assurance',
            description: 'Maintain high standards with our quality control system'
        },
        {
            icon: 'fa-bullhorn',
            title: 'Marketing Support',
            description: 'Benefit from our marketing campaigns and promotional activities'
        },
        {
            icon: 'fa-chart-pie',
            title: 'Analytics & Insights',
            description: 'Access detailed reports and customer behavior analytics'
        },
        {
            icon: 'fa-users-cog',
            title: 'Dedicated Support',
            description: 'Get personalized assistance from our partnership team'
        }
    ];

    $scope.selectedCategory = 'all';
    $scope.searchQuery = '';

    $scope.filterDestinations = function() {
        return $scope.destinations.filter(function(destination) {
            var matchesCategory = $scope.selectedCategory === 'all' || destination.category === $scope.selectedCategory;
            var matchesSearch = !$scope.searchQuery || 
                              destination.name.toLowerCase().includes($scope.searchQuery.toLowerCase()) ||
                              destination.description.toLowerCase().includes($scope.searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    };

    $scope.setCategory = function(category) {
        $scope.selectedCategory = category;
    };

    $scope.selectPackage = function(packageName) {
        $scope.selectedPackage = packageName;
    };

    // Add partnership form handling
    $scope.partnership = {
        businessName: '',
        businessType: '',
        contactName: '',
        email: '',
        phone: '',
        location: '',
        message: ''
    };

    $scope.submitPartnership = function() {
        // Here you would typically send the data to your backend
        console.log('Partnership form submitted:', $scope.partnership);
        
        // Show success message (you can enhance this with a proper UI notification)
        alert('Thank you for your interest! We will contact you soon.');
        
        // Reset the form
        $scope.partnership = {
            businessName: '',
            businessType: '',
            contactName: '',
            email: '',
            phone: '',
            location: '',
            message: ''
        };
    };
}]); 