import {
  MapPin,
  ShieldCheck,
  Zap,
  Star,
  Users,
  Settings2,
  Fuel,
  Heart,
  Share2,
  Calendar,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import vehicles from "../assets/data";

const CarDetail = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [selectedTab, setSelectedTab] = useState("overview");
  const { id } = useParams();
  const vehicle = vehicles.find((v) => String(v.id) === String(id));
  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-semibold text-gray-600">
            Vehicle not found
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative container mx-auto px-4 py-8 md:py-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-3/5 group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-4">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-auto rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 right-6 flex gap-2">
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 ${
                      isSaved
                        ? "bg-red-500 text-white shadow-lg shadow-red-500/25"
                        : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
                    }`}
                  >
                    <Heart
                      className={`h-5 w-5 ${isSaved ? "fill-current" : ""}`}
                    />
                  </button>
                  <button className="p-3 rounded-full bg-white/80 backdrop-blur-md text-gray-600 hover:bg-white hover:text-blue-600 transition-all duration-300">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                {vehicle.featured && (
                  <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    Featured
                  </span>
                )}
                <span className="inline-block bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm font-medium capitalize shadow-sm">
                  {vehicle.type}
                </span>
              </div>

              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                  {vehicle.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(vehicle.rating)
                              ? "fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {vehicle.rating}
                    </span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">156 reviews</span>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2">
                  ${vehicle.price}
                  <span className="text-xl text-gray-500 font-normal">
                    /day
                  </span>
                </div>
                <p className="text-green-600 text-sm font-medium">
                  Free cancellation • No hidden fees
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Users, label: `${vehicle.seats} seats` },
                  { icon: Settings2, label: vehicle.transmission },
                  { icon: Fuel, label: "Hybrid" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <stat.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <span className="text-sm font-medium text-gray-700">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-500/25">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Book Now
                  </div>
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-5 w-5" />
                    Reserve Later
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex">
              {[
                { id: "overview", label: "Overview" },
                { id: "specifications", label: "Specifications" },
                { id: "terms", label: "Rental Terms" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium transition-colors ${
                    selectedTab === tab.id
                      ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {selectedTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    About this vehicle
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The {vehicle.name} is a perfect choice for your next trip.
                    With its comfortable interior and excellent fuel efficiency,
                    you'll enjoy every mile of your journey. This premium
                    vehicle combines luxury, performance, and sustainability in
                    one exceptional package.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Highlights
                    </h4>
                    {[
                      "Premium interior with leather seats",
                      "Advanced safety features",
                      "Exceptional fuel efficiency",
                      "Latest infotainment system",
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Quick Facts
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Year</span>
                        <span className="font-semibold">2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mileage</span>
                        <span className="font-semibold">12,450 miles</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Engine</span>
                        <span className="font-semibold">Electric</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "features" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Why Choose Us
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-br from-gray-50 to-blue-50/50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-center mb-6">
                        {index === 0 && (
                          <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                            <ShieldCheck className="h-8 w-8 text-blue-600" />
                          </div>
                        )}
                        {index === 1 && (
                          <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                            <Zap className="h-8 w-8 text-blue-600" />
                          </div>
                        )}
                        {index === 2 && (
                          <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                            <MapPin className="h-8 w-8 text-blue-600" />
                          </div>
                        )}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === "specifications" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Basic Information
                      </h4>
                      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                        {[
                          { label: "Type", value: vehicle.type },
                          {
                            label: "Transmission",
                            value: vehicle.transmission,
                          },
                          { label: "Seats", value: vehicle.seats },
                          { label: "Rating", value: `${vehicle.rating}/5` },
                        ].map((spec, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                          >
                            <span className="text-gray-600 font-medium">
                              {spec.label}
                            </span>
                            <span className="font-semibold text-gray-900 capitalize">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Performance
                      </h4>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 space-y-4">
                        {[
                          { label: "Top Speed", value: "155 mph" },
                          { label: "0-60 mph", value: "3.1 seconds" },
                          { label: "Range", value: "405 miles" },
                          { label: "Charging Time", value: "45 minutes" },
                        ].map((spec, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-2 border-b border-white/50 last:border-b-0"
                          >
                            <span className="text-gray-600 font-medium">
                              {spec.label}
                            </span>
                            <span className="font-semibold text-gray-900">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "terms" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Rental Terms & Conditions
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      Included in your rental
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Comprehensive insurance coverage",
                        "24/7 roadside assistance",
                        "Unlimited mileage",
                        "Free cancellation up to 24 hours before pickup",
                        "GPS navigation system",
                        "Emergency contact support",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Valid driver's license",
                        "Credit card in the renter's name",
                        "Minimum age: 21 years",
                        "Clean driving record",
                        "Government-issued photo ID",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
