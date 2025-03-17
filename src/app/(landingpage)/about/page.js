import React from 'react';


const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white text-black">
      <div className="p-6 max-w-4xl w-full">
        <h2 className="text-2xl font-bold">Group Overview</h2>

        <section className="mt-4 p-4 bg-black text-white font-bold">Management Philosophy</section>
        <p className="mt-2">We will create a system that allows everyone involved with our company to enjoy benefits and become an organization that can save as many people and companies as possible.</p>
        
        <h2 style={{ fontWeight: 'bold', fontStyle: 'italic', borderLeft: '5px solid black', paddingLeft: '10px' }}>Garbera Partners Inc.</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
          <tbody>
            <tr><td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid black' }}>Date of Establishment</td><td style={{ padding: '10px', border: '1px solid black' }}>November 15, 2005</td></tr>
            <tr><td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid black' }}>Tokyo Office</td><td style={{ padding: '10px', border: '1px solid black' }}>RBM Toranomon Building 7F, 3-23-6 Toranomon, Minato-ku, Tokyo</td></tr>
            <tr><td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid black' }}>Osaka Office</td><td style={{ padding: '10px', border: '1px solid black' }}>Honmachi Heisei Building 3rd floor, 1-2-12 Tachimichibori, Nishi-ku, Osaka</td></tr>
            <tr><td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid black' }}>Fukuoka Office</td><td style={{ padding: '10px', border: '1px solid black' }}>More Grand Hakata Building 4F, 1-5-8 Hakata Station East, Hakata Ward, Fukuoka City</td></tr>
            <tr><td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid black' }}>Representative</td><td style={{ padding: '10px', border: '1px solid black' }}>Yukinobu Yoshizumi</td></tr>
          </tbody>
        </table>
        
        <h2 style={{ fontWeight: 'bold', fontStyle: 'italic', borderLeft: '5px solid black', paddingLeft: '10px' }}>Garbera Partners Tax Accountants Corporation</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr><td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid black' }}>Date of Establishment</td><td style={{ padding: '10px', border: '1px solid black' }}>January 4, 2007</td></tr>
            <tr><td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid black' }}>Tokyo Office</td><td style={{ padding: '10px', border: '1px solid black' }}>RBM Toranomon Building 7F, 3-23-6 Toranomon, Minato-ku, Tokyo</td></tr>
            <tr><td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid black' }}>Osaka Office</td><td style={{ padding: '10px', border: '1px solid black' }}>Honmachi Heisei Building 3rd floor, 1-2-12 Tachimichibori, Nishi-ku, Osaka</td></tr>
            <tr><td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid black' }}>Fukuoka Office</td><td style={{ padding: '10px', border: '1px solid black' }}>More Grand Hakata Building 4F, 1-5-8 Hakata Station East, Hakata Ward, Fukuoka City</td></tr>
            <tr><td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid black' }}>Representatives</td><td style={{ padding: '10px', border: '1px solid black' }}>Shinya Aihara, Mitsuhiro Kitamura, and Kazushi Hirata</td></tr>
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default Page;
