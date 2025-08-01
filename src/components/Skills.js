import React from 'react';

const skillCategories = [
  {
    icon: 'fas fa-code',
    title: 'Technical Skills',
    skills: {
      'Programming Languages': ['HTML', 'CSS', 'JavaScript', 'Python', 'Visual Basic'],
      'Libraries': ['JQuery', 'React', 'Pandas', 'Matplotlib', 'Numpy'],
    },
  },
  {
    icon: 'fas fa-tools',
    title: 'Tools & Platforms',
    skills: {
      'Analytics Tools': ['Excel', 'Power BI', 'Access', 'Word', 'PowerPoint'],
      'Development': ['Github', 'Node.js', 'VS Code', 'Canva', 'Photoshop'],
    },
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Professional Skills',
    skills: {
      'Hard Skills': ['Data Analysis', 'Data Cleaning', 'Data Modeling', 'Data Visualization', 'ETL'],
      'Soft Skills': ['Problem-Solving', 'Critical Thinking', 'Communication', 'Time Management', 'Adaptability'],
    },
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800 bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">Skills Summary</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            The tools and technologies I use to create amazing results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="card p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
                <i className={`${category.icon} mr-2`}></i> {category.title}
              </h3>
              <div className="space-y-4">
                {Object.entries(category.skills).map(([group, skills]) => (
                  <div key={group}>
                    <h4 className="font-semibold mb-2">{group}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, i) => (
                        <span key={i} className="skill-pill px-3 py-1 bg-blue-600 bg-opacity-20 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;