import React from 'react'
import Services from "@/app/static/Services"
import UrlParser from "@/app/utils/UrlParser"
import Image from "next/image"
import Link from "next/link"
import { FaCheckCircle, FaArrowRight, FaStar } from "react-icons/fa"

const ServicePage = ({params}) => {

  const { Service } = params;
  const urlparsed = UrlParser(Service)

  const FetchService = (serv) => {
    return Services.filter((S) => S.tag === serv)
  }


  
  const Response = FetchService(urlparsed)

 
  if (!Response || Response.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link href="/services" className="text-green-300 hover:text-green-400">
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const service = Response[0]
  const serviceFeatures = [
    "Tailored Solutions",
    "Expert Team",
    "Quality Assurance",
    "On-time Delivery",
    "24/7 Support",
    "Latest Technology"
  ]

  const processSteps = [
    { title: "Discovery", desc: "Understanding your needs and goals" },
    { title: "Strategy", desc: "Planning the perfect approach" },
    { title: "Development", desc: "Building with precision and care" },
    { title: "Delivery", desc: "Launching your project successfully" }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] px-5 md:px-10 lg:px-28 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-green-400 text-sm font-semibold uppercase tracking-widest">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                {service.tag}
              </h1>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {service.para}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center gap-2">
                Get Started <FaArrowRight size={16} />
              </button>
              <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold py-3 px-8 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={16} />
                ))}
              </div>
              <span className="text-gray-400">4.9/5 - Trusted by 200+ clients</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={service.picture}
              fill
              className="object-cover"
              alt={service.tag}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-5 md:px-10 lg:px-28 py-16 md:py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            We deliver excellence through innovation, dedication, and expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-green-500/20 rounded-xl p-6 hover:border-green-500/50 transition duration-300">
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-white">{feature}</h3>
                    <p className="text-gray-400 text-sm mt-2">
                      Delivering outstanding results every single time
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-5 md:px-10 lg:px-28 py-16 md:py-24 bg-[#1a1a1a] border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-400 mb-12">
            A streamlined approach to deliver exceptional results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-green-500/10 to-green-400/10 border border-green-500/30 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-3 text-green-500">
                    <FaArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-5 md:px-10 lg:px-28 py-16 md:py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-gray-400 mb-12">
            Transparent pricing with no hidden fees
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Starter", "Professional", "Enterprise"].map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl border p-8 ${
                  index === 1
                    ? "bg-gradient-to-br from-green-500/20 to-green-400/10 border-green-500 transform md:scale-105"
                    : "bg-[#1a1a1a] border-gray-700 hover:border-green-500/50"
                } transition duration-300`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan}</h3>
                <p className="text-gray-400 text-sm mb-6">Perfect for growing teams</p>
                <div className="text-4xl font-bold mb-6">
                  ${[999, 2499, 4999][index]}
                  <span className="text-lg text-gray-400">/mo</span>
                </div>
                <button className={`w-full py-3 rounded-lg font-bold transition duration-300 ${
                  index === 1
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "border border-green-500 text-green-400 hover:bg-green-500/10"
                }`}>
                  Choose Plan
                </button>
                <ul className="space-y-3 mt-8">
                  {["Feature 1", "Feature 2", "Feature 3"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <FaCheckCircle className="text-green-400" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 md:px-10 lg:px-28 py-16 md:py-24 bg-gradient-to-r from-green-500/10 to-green-400/10 border-t border-gray-800 border-b">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let us help you transform your vision into reality. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              Schedule a Call <FaArrowRight size={16} />
            </button>
            <Link href="/contact" className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold py-4 px-10 rounded-lg transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-5 md:px-10 lg:px-28 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              { q: "What is included in your service?", a: "Our comprehensive service includes consultation, design, development, testing, and ongoing support." },
              { q: "How long does the project typically take?", a: "Project timelines vary based on scope, but we typically deliver within 4-12 weeks." },
              { q: "Do you provide post-launch support?", a: "Yes, we offer 24/7 support and maintenance packages tailored to your needs." },
              { q: "Can I request custom modifications?", a: "Absolutely! We customize every project to match your specific requirements and brand." }
            ].map((item, index) => (
              <details key={index} className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 cursor-pointer group">
                <summary className="font-bold text-lg flex items-center justify-between">
                  {item.q}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-400 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="px-5 md:px-10 lg:px-28 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link href="/services" className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2">
            ← Back to Services
          </Link>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition">
              Share
            </button>
            <button className="px-6 py-2 border border-green-400 text-green-400 hover:bg-green-400/10 rounded-lg font-semibold transition">
              Save
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicePage