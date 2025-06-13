import React from 'react';

const experiences = [
  {
    title: "Data Analyst & Support",
    company: "PT. Oliver Bayi Andalan",
    location: "Head Office",
    date: "2024 - 2025",
    descriptions: [
      "Branch SPV Data: Proyeksi Omset, Matrix Summary, Route ID, BAP",
      "Ensure Branch Admin Support Understand Pivot Data Processing Especially Data Report Sales",
      "Decision Making in Make a Purchase Orders (PO) to 24 Branches Throughout Indonesia",
      "Data Stock Opname SPV of 22 Branches",
      "Analysis of Stock – Purchase – Sales Report Data for the Next Purchase Order (PO) Budgeting Process",
    ],
  },
  {
    title: "IT Support",
    company: "Basement Developer (Business)",
    date: "2023 – 2024",
    descriptions: [
      "Managing and Creating Instagram Content Using Photoshop",
      "Handling Java System Design Projects Using Apache NetBeans IDE",
      "Teaching Customers the Cashier Application Using Moka POS",
      "Create a Catering Website Project Using HTML, CSS, Javascript, Git/Github",
    ],
  },
  {
    title: "Stock & Admin Sparepart",
    company: "PT Enviro Buana Cipta",
    date: "2021 – 2023",
    descriptions: [
      "Evaluate Stock Master and Stock Group Codes",
      "Quality Control, Stock Opname, Inventory Control and Purchasing",
      "Capture, Collect and Analyze Data, Daily, Weekly and Monthly Reports",
      "Create Barcode Inventory Software Using Visual Basic",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">Work Experience</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">My Professional Journey</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 h-full w-0.5 bg-blue-600 bg-opacity-20 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 flex flex-col sm:flex-row items-start group">
              <div className="flex items-center sm:order-2 relative">
                <div className="h-4 w-4 bg-blue-600 rounded-full border-4 border-slate-800 transform group-hover:scale-150 transition"></div>
              </div>

              <div className={`sm:w-6/12 pt-2 ${index % 2 === 0 ? 'pr-10 text-right sm:order-1' : 'pl-16 sm:pl-10 sm:order-3'}`}>
                <p className="text-sm text-blue-400">{exp.date}</p>
              </div>

              <div className={`sm:w-6/12 pt-2 ${index % 2 === 0 ? 'pl-16 sm:pl-10 sm:order-3' : 'pr-10 text-right sm:order-1'}`}>
                <div className="card p-6 group-hover:bg-slate-800 transition">
                  <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                  <p className="text-lg">{exp.company}</p>
                  <ul className="mt-4 space-y-3 text-sm list-disc pl-5">
                    {exp.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;