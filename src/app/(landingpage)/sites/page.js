import React from 'react';

const sites = [
  {
    id: 1,
    name: 'General site',
    image: '/images/bs1.jpg',
    description: 'This is just an example layout',
    link: 'https://example.com/general-site'
  },
  {
    id: 2,
    name: 'Official blog',
    image: '/images/bs2.jpg',
    description: 'Experts will answer your questions.',
    link: 'https://example.com/blog'
  },
  {
    id: 3,
    name: 'Garbera Seminars',
    image: '/images/bs3.jpg',
    description: 'We regularly hold a wide range of seminars on topics such as tax, labor, legal matters, and overseas expansion.',
    link: 'https://example.com/seminars'
  },
  {
    id: 4,
    name: 'Garbera Partners Group Recruitment/Job Site',
    image: '/images/bs5.jpg',
    description: 'We are looking for people to work with us in our group.',
    link: 'https://example.com/jobs'
  },
  {
    id: 5,
    name: 'Recruitment Agent',
    image: '/images/bs6.jpg',
    description: 'We provide a recruitment support consulting service called "Recruitment Agent" for companies that are having trouble recruiting personnel.',
    link: 'https://example.com/recruitment'
  }
];

const Page = () => {
  return (
    <div className="bg-white text-black w-full flex justify-center p-6">
      <div className="max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-4 border-b-8 pb-2">Site Introduction</h2>
        <p className="font-semibold mb-4">Garbera Partners Group</p>
        <div className="space-y-4">
          {sites.map((site) => (
            <a
              key={site.id}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:bg-gray-100 p-2 rounded-lg transition"
            >
              <img src={site.image} alt={site.name} className="w-24 h-16 object-cover rounded" />
              <div>
                <h3 className="font-bold text-lg">{site.name}</h3>
                {site.description && <p className="text-gray-600 text-sm">{site.description}</p>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
