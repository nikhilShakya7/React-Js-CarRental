import { ChevronRight, Star, MapPin, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const vehicles = [
    {
      id: 1,
      name: "Toyota Camry",
      type: "sedan",
      price: 65,
      rating: 4.8,
      seats: 5,
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: 2,
      name: "Ford Mustang",
      type: "sports",
      price: 120,
      rating: 4.9,
      seats: 4,
      transmission: "Manual",
      image:
        "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: 3,
      name: "Honda CR-V",
      type: "suv",
      price: 85,
      rating: 4.7,
      seats: 5,
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Chevrolet Suburban",
      type: "suv",
      price: 110,
      rating: 4.6,
      seats: 8,
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: "Insurance Included",
      description: "All rentals come with comprehensive insurance coverage",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Quick Booking",
      description: "Reserve your vehicle in just a few clicks",
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: "Nationwide Locations",
      description: "Pick up and drop off at any of our 100+ locations",
    },
  ];

  const filteredVehicles =
    activeTab === "all"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Rent the Perfect Car for Your Journey
              </h1>
              <p className="text-xl mb-8">
                Choose from our wide selection of vehicles at competitive prices
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                  Book Now
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Car"
                className="rounded-lg shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white -mt-10 shadow-lg rounded-lg max-w-5xl mx-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Pick-Up Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="City or Airport"
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="p-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Pick-Up Date
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="p-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Drop-Off Date
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="p-4 flex items-end">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-medium transition-colors duration-200">
                Search Cars
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section id="cars" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vehicle Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of vehicles to suit your needs and
              budget
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full ${
                activeTab === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All Vehicles
            </button>
            <button
              onClick={() => setActiveTab("sedan")}
              className={`px-4 py-2 rounded-full ${
                activeTab === "sedan"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Sedans
            </button>
            <button
              onClick={() => setActiveTab("suv")}
              className={`px-4 py-2 rounded-full ${
                activeTab === "suv"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              SUVs
            </button>
            <button
              onClick={() => setActiveTab("sports")}
              className={`px-4 py-2 rounded-full ${
                activeTab === "sports"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Sports
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover"
                  />
                  {vehicle.featured && (
                    <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {vehicle.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 text-gray-600">
                          {vehicle.rating}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-blue-600">
                        ${vehicle.price}
                      </span>
                      <span className="block text-sm text-gray-500">
                        per day
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between text-sm text-gray-500">
                    <span>{vehicle.seats} Seats</span>
                    <span>{vehicle.transmission}</span>
                  </div>

                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center mx-auto">
              View All Vehicles <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the best car rental experience with our premium
              services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Deals */}
      <section id="deals" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Special Deals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take advantage of our limited-time offers and save on your next
              rental
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Special Deal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Limited Time Offer
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Weekend Special
                </h3>
                <p className="text-gray-600 mb-4">
                  Rent any car for the weekend and get 20% off your total rental
                  price. Offer valid Friday through Sunday.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">20%</span>
                  <span className="text-xl text-gray-600 ml-1">OFF</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  Book This Deal
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  Offer ends in 3 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I've rented from CarRent multiple times and always had a
                  great experience. The cars are clean, well-maintained, and the
                  prices are competitive."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">John D.</h4>
                    <p className="text-sm text-gray-500">Business Traveler</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your perfect car today and enjoy a seamless rental experience
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200">
            Book Your Car Now
          </button>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Homepage;
