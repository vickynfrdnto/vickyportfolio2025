import React from 'react';
import salesDashboardImg from '../assets/salesdashboard.jpeg';
import pamfletDesignImg from '../assets/pamfletdesign.jpeg';
import daysofInventoryImg from '../assets/daysofinventory.png';

const projects = [
  {
    title: 'Sales Dashboard',
    description: 'Interactive dashboard using Power BI to visualize sales data and trends for decision making.',
    image: salesDashboardImg,
    tech: ['Excel', 'Data Analysis', 'Data Visualization'],
    link: '#',
  },
  {
    title: 'Days of Inventory',
    description: 'Tracks average inventory duration, helping businesses optimize stock levels and reduce holding costs.',
    image: daysofInventoryImg,
    tech: ['Excel', 'Data Analysis', 'Purchasing'],
    link: '#',
  },
  {
    title: 'Pamflet Design',
    description: 'Esports match poster created for Liga Esports Nasional Indonesia, published on Instagram @umt.esports to boost audience engagement and team branding.',
    image: pamfletDesignImg,
    tech: ['Canva', 'Photoshop', 'Social Media'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">Featured Projects</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">Some of my recent work and accomplishments</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <a href={project.link} className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition">View Project</a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
                <p className="mt-2 text-sm">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-800 rounded-full text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="px-6 py-3 border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 rounded-lg font-medium transition inline-flex items-center">
            <i className="fas fa-eye mr-2"></i> View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;