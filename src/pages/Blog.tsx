import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../lib/constants';

export function Blog() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative bg-[#0284c7] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container relative z-10 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Actueel</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog
            </h1>
            
            <p className="text-xl text-primary-100 mb-8">
              Het laatste nieuws vanaf de werkvloer, we laten je graag zien wat er speelt.
            </p>
          </div>
        </div>
        
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      5 min
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center gap-1 text-primary-600 font-medium hover:gap-2 transition-all">
                    Lees meer
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Blijf op de hoogte
            </h2>
            
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Schrijf je in voor onze nieuwsbrief en ontvang het laatste nieuws over sociale veiligheid op de werkvloer.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Jouw e-mailadres"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
              >
                Inschrijven
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Gratis</span>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Brochure ontvangen?
              </h2>
              
              <p className="text-gray-600 text-lg mb-6">
                Benieuwd wat een externe vertrouwenspersoon voor jouw organisatie kan betekenen? In onze brochure vind je een helder en compleet overzicht van onze aanpak en werkwijze.
              </p>
              
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Vraag brochure aan
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary-200 rounded-3xl transform -rotate-3" />
              <div className="relative bg-white rounded-2xl shadow-xl p-8">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src="https://puntuit.nl/wp-content/uploads/2024/07/shared-logo-1.png"
                      alt="PuntUit"
                      className="h-16 w-auto mx-auto mb-4"
                    />
                    <p className="text-primary-800 font-semibold">Productbrochure</p>
                    <p className="text-primary-600 text-sm">Externe Vertrouwenspersonen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
