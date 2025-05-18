import React, { useState, useEffect } from 'react';
import './Students.css';
import bg31 from './images/Fayoum History.png';
import bg32 from './images/WhatsApp Image 2025-05-14 at 01.41.18.jpeg';
import bg33 from './images/WhatsApp Image 2025-05-14 at 11.59.48.jpeg';
import bg34 from './images/WhatsApp Image 2025-05-14 at 01.41.05.jpeg';
import bg35 from './images/WhatsApp Image 2025-05-14 at 01.42.20.jpeg';

const StudentProfilesSection = () => {
  const studentsData = [
    { src: bg32, description: 'أحمد حسني السيد عبد الهادي' },
    { src: bg33, description: 'باسم محمد فتحي محمد' },
    { src: bg34, description: 'احمد هاني سيد محمود' },
    { src: bg35, description: 'السيد سليمان السيد سليمان' }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKey = e => e.key === 'Escape' && setSelectedImage(null);
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="profiles-section" dir="rtl">
      <div className="main-content">
        <h2 className="section-title">الطلاب</h2>

        <div className="cards-row">
          {studentsData.map((item, idx) => (
            <div
              key={idx}
              className="student-card"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.description}
                className="student-img"
                onError={e => {
                  e.target.src = "/api/placeholder/200/200";
                  e.target.alt = 'صورة غير متوفرة';
                }}
              />
              <p className="student-text">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Decorative bg31 at the bottom */}
        <div className="decoration-section">
        <h2 className="section-title">Scan</h2>
          <img src={bg31} alt="آثار الفيوم التاريخية" className="decoration-img" />
          <p className="scan-text">Scan Me To Go Website</p>
        </div>
      </div>

      <footer className="footer">
        <small>صفحة الطلاب © 2025 - جميع الحقوق محفوظة</small>
      </footer>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.src} alt={selectedImage.description} className="modal-img" />
            <p className="modal-text">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProfilesSection;
