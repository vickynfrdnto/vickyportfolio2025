import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Ready to collaborate or have questions? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="card p-8 h-full">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-blue-400 text-xl mr-4 mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>Legok, Tangerang, Banten. 15820</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-blue-400 text-xl mr-4 mt-1">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>(+62) 895-3737-70641</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-blue-400 text-xl mr-4 mt-1">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>ferdiantovicky00@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-blue-400 text-xl mr-4 mt-1">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Portfolio</h4>
                  <a
                    href="https://linkedin.com/in/vickynfrdnto"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    linkedin.com/in/vickynfrdnto
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/vickynfrdnto"
                  className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center hover:bg-blue-400 hover:bg-opacity-10 transition"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://instagram.com/vickynfrdnto"
                  className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center hover:bg-blue-400 hover:bg-opacity-10 transition"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              Send Me a Message
            </h3>
            <form
              action="https://formspree.io/f/xbjvdbbe"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;