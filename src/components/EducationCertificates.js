import React from 'react';

const education = [
  {
    title: 'Universitas Terbuka',
    date: '2024 – Present',
    desc: 'Faculty of Science and Technology, Statistics',
    gpa: '3.29 / 4.00',
  },
  {
    title: 'Universitas Muhammadiyah Tangerang',
    date: '2020 – 2022',
    desc: 'Faculty of Engineering, Informatics',
    gpa: '3.72 / 4.00',
  },
  {
    title: 'SMK Negeri 7 Kabupaten Tangerang',
    date: '2016 – 2019',
    desc: 'Automotive Engineering',
    gpa: '8.3 / 10.0',
  },
];

const certificates = [
  { title: 'EF Standard English Test', date: 'May 2025', desc: 'English Test; Level: B2 - Upper Intermediate' },
  { title: 'Seratus Ilmu', date: 'Aug 2024', desc: 'Dashboard Excel Training for Professional' },
  { title: 'RevoU', date: 'Jan 2024', desc: 'Mini Course: Data Analytics' },
  { title: 'Hi Xperts', date: 'Nov 2023', desc: 'Data Analyst' },
];

const EducationCertificates = () => {
  return (
    <section className="py-20 bg-slate-800 bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold gradient-text inline-block mb-8">Education</h2>
          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i} className="card p-6 relative timeline-item pl-12">
                <h3 className="text-xl font-bold text-blue-400">{edu.title}</h3>
                <p className="text-sm text-blue-400">{edu.date}</p>
                <p className="mt-2">{edu.desc}</p>
                <p className="font-bold">GPA: {edu.gpa}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h2 className="text-3xl font-bold gradient-text inline-block mb-8">Certificates</h2>
          <div className="space-y-8">
            {certificates.map((cert, i) => (
              <div key={i} className="card p-6 relative timeline-item pl-12">
                <h3 className="text-xl font-bold text-blue-400">{cert.title}</h3>
                <p className="text-sm text-blue-400">{cert.date}</p>
                <p className="mt-2">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertificates;