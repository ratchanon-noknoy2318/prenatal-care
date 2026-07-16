'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';


// --- Component หลักสำหรับหน้าแรก (Homepage) ---
// หน้านี้เป็นหน้า Landing Page หลักของเว็บไซต์ ประกอบด้วยส่วนต่างๆ ที่ออกแบบมาเพื่อแนะนำโรงพยาบาลและบริการ
export default function HomePage() {
  // --- ข้อมูลและ Logic สำหรับ FAQ Accordion ---
  const [openFaqId, setOpenFaqId] = useState(null);
  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // --- ข้อมูล FAQ สำหรับแสดงผลและทำ SEO Schema Markup ---
  const faqData = [
    { id: 1, question: "สามารถขอใบรับรองแพทย์เพื่อใช้ในราชการที่โรงพยาบาลได้หรือไม่?", answer: "ได้ค่ะ หากใช้แบบฟอร์มของทางเรา สามารถขอใบรับรองแพทย์ได้ทันทีค่ะ แต่หากเป็นแบบฟอร์มจากหน่วยงานอื่น กรุณาให้เจ้าหน้าที่ตรวจสอบก่อน เพื่อพิจารณาความเหมาะสมในการออกใบรับรองค่ะ " },
    { id: 2, question: "สามารถขอใบรับรองแพทย์ได้มากกว่าหนึ่งฉบับหรือไม่?", answer: "ได้ค่ะ ใบแรก 80 บาทใบถัดไปเพิ่มใบละ 30 บาท" },
    { id: 3, question: "โรงพยาบาลเปิดให้บริการในวันเสาร์-อาทิตย์หรือไม่?", answer: "ทางเราปิดให้บริการในวันเสาร์ วันอาทิตย์ และวันหยุดนักขัตฤกษ์ค่ะ" },
    { id: 4, question: "ในวันทำการปกติ โรงพยาบาลเปิดให้บริการถึงเวลาใด?", answer: "คุณหมอจะตรวจตั้งแต่ 08:30 น. ถึง 12.00 น. แต่จะรับคิวตรวจถึง 11.30 น. ค่ะ" },
    { id: 5, question: "สามารถจองคิวนวดกับทางโรงพยาบาลได้หรือไม่?", answer: "รบกวนโทรติดต่อที่ 055714924 ค่ะ" },
    { id: 6, question: "ไม่ทราบว่าทางนี้มีกำหนดการฉีดวัคซีนสำหรับเด็กในวันที่เท่าใดคะ?", answer: "สัปดาห์ที่ 2 และสัปดาห์ที่ 4 ของทุกเดือน ในวันพฤหัสบดีช่วงบ่ายค่ะ สามารถติดต่อสอบถามเพิ่มเติมได้ที่หมายเลขโทรศัพท์ 055-716715" }
  ];
   const pregnantFaqData = [
    {
      id: 1,
      question: "ควรมาฝากครรภ์เมื่อไหร่ ?",
      answer: "คุณแม่ควรมาฝากครรภ์โดยเร็วที่สุดเมื่อทราบว่าตั้งครรภ์ หรืออย่างช้าที่สุดไม่ควรเกิน 12 สัปดาห์ เพื่อให้แพทย์ได้ประเมินความเสี่ยงและให้การดูแลที่เหมาะสมตั้งแต่เนิ่นๆ ค่ะ"
    },
    {
      id: 2,
      question: "ขอสอบถามค่ะ คลินิกฝากครรภ์อยู่ตรงไหนคะ",
      answer: "ซอยหลังวัดคูยางค่ะ"
    },
    {
      id: 3,
      question: "หนูจะติดต่อเจ้าหน้าที่โดยตรงได้ไหมคะ",
      answer: "ได้ค่ะ รบกวนโทร 055 716 715 ในเวลาราชการ แล้วขอสายพี่เอ้นะคะ"
    },
    {
      id: 4,
      question: " สามารถฝากครรภ์นอกเวลาราชการได้หรือไม่?",
      answer: "คลินิกฝากครรภ์เปิดให้บริการเฉพาะวันและเวลาราชการค่ะ"
    }
  ];

  // --- JSON-LD Schema สำหรับ FAQPage (SEO) ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    // <main> เป็น container หลักสำหรับเนื้อหาทั้งหมดในหน้านี้
    <main className={styles.main}>
      {/* SEO: เพิ่ม JSON-LD Schema สำหรับ FAQ เพื่อให้ Google แสดงผล Rich Snippet */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 
        Hero Section: ส่วนแรกที่ผู้ใช้เห็นเมื่อเข้ามาในเว็บไซต์ (Above the fold)
        - ประกอบด้วยภาพผู้บริหารเพื่อสร้างความน่าเชื่อถือ
        - ชื่อโรงพยาบาลและคำโปรยหลัก (Tagline)
        - คำอธิบายสั้นๆ เกี่ยวกับพันธกิจของโรงพยาบาล
        - ปุ่ม Call-to-Action (CTA) ที่ชัดเจนเพื่อนำผู้ใช้ไปยังหน้า "เกี่ยวกับเรา"
      */}
       <header className={styles.heroContainer}>
      <div className={styles.heroContent}>
        
        {/* 📸 ฝั่งรูปภาพและข้อมูลคุณหมอกวาง (เปลี่ยนชื่อคลาสคุมลำดับบนมือถือ) */}
        <div className={styles.imageColumn}>
          <div className={styles.doctorWrapper}>
            <Link href="https://www.facebook.com/kppmu/posts/pfbid0CRZhheAtjZi6Nkrb5weAtoNXaq2P2f5TCjthqbsZPUtc2zXfMQV2hSmULX2ha9tal?rdid=TZ79r6jU0kpKMRSt#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/team/dr.kwang-2.png"
                alt="จริดา สันธิติพงศ์ - หมอกกวาง"
                width={400}
                height={500}
                className={styles.heroImage}
                priority 
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
            </Link>
            <div className={styles.doctorInfoBadge}>
              <p className={styles.docName}><strong>พญ.จริดา สันธิติพงศ์</strong></p>
              <p className={styles.docPosition}>แพทย์เฉพาะทางเวชศาสตร์ครอบครัว</p>
            </div>
          </div>
        </div>

        {/* 📝 ฝั่งข้อความและปุ่มกดลงทะเบียนสีชมพู */}
        <div className={styles.textColumn}>
          <h1 className={styles.heroMainTitle}>คลินิกฝากครรภ์ เทศบาลกำแพงเพชร</h1>
          <p className={styles.heroSubText}>
           คุณแม่ที่ต้องการ <strong>ฝากครรภ์ วางแผนครอบครัว หรือดูแลสุขภาพและพัฒนาการของลูกน้อย</strong> สามารถลงทะเบียนเพื่อนัดหมายได้ที่ปุ่มด้านล่างค่ะ
          </p>
          <a 
            href="https://kppmch-pregnantt.vercel.app/register.html" 
            target='_blank' 
            className={styles.registerButton} 
            aria-label="ลงทะเบียนฝากครรภ์"
            rel="noopener noreferrer"
          >
            ลงทะเบียนฝากครรภ์
          </a>
        </div>

      </div>
    </header>
         <section id="pregnant-schedule" className={styles.scheduleSection}>
      <h2 className={styles.sectionTitle}>ตารางเวลาเปิดให้บริการคลินิกฝากครรภ์</h2>
      <p className={styles.sectionSubtitle}>
        งานส่งเสริมสุขภาพแม่และเด็ก โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร
      </p>

      {/* 🌟 ตัวครอบเปิดระบบ Overflow-X สไลด์ปัดจอบนมือถือโดยเว็บหลักไม่เบี้ยว */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>วัน</th>
              <th>09.00 - 11.30 น.</th>
              <th>13.00 - 15.30 น.</th>
            </tr>
          </thead>
          <tbody>
            {/* วันจันทร์ - สีเหลือง */}
            <tr className={styles.mondayRow}>
              <td>จันทร์</td>
              <td>
                <span className={styles.clinicName}>ฝากครรภ์, วางแผนครอบครัว</span><br />
                <span className={styles.doctorName}>พญ.จริดา สันธิติพงศ์</span>
              </td>
              <td>
                <span className={styles.clinicName}>พัฒนาการเด็ก</span><br />
                <span className={styles.staffName}>น.ส.มณฑ์ศิริ กล่อมยัง</span>
              </td>
            </tr>

            {/* วันอังคาร - สีชมพู */}
            <tr className={styles.tuesdayRow}>
              <td>อังคาร</td>
              <td>
                <span className={styles.clinicName}>ฝากครรภ์, วางแผนครอบครัว</span><br />
                <span className={styles.doctorName}>พญ.จริดา สันธิติพงศ์</span>
              </td>
              <td>
                <span className={styles.clinicName}>พัฒนาการเด็ก</span><br />
                <span className={styles.staffName}>น.ส.มณฑ์ศิริ กล่อมยัง</span>
              </td>
            </tr>

            {/* วันพุธ - สีเขียว */}
            <tr className={styles.wednesdayRow}>
              <td>พุธ</td>
              <td>
                <span className={styles.clinicName}>ฝากครรภ์, วางแผนครอบครัว</span><br />
                <span className={styles.doctorName}>พญ.จริดา สันธิติพงศ์</span>
              </td>
              <td>
                <span className={styles.clinicName}>พัฒนาการเด็ก</span><br />
                <span className={styles.staffName}>น.ส.มณฑ์ศิริ กล่อมยัง</span>
              </td>
            </tr>

            {/* วันพฤหัสบดี - สีส้ม */}
            <tr className={styles.thursdayRow}>
              <td>พฤหัสบดี</td>
              <td>
                <span className={styles.clinicName}>ฝากครรภ์, วางแผนครอบครัว</span><br />
                <span className={styles.doctorName}>พญ.จริดา สันธิติพงศ์</span>
              </td>
              <td>
                <span className={styles.clinicName}>พัฒนาการเด็ก</span><br />
                <span className={styles.staffName}>น.ส.มณฑ์ศิริ กล่อมยัง</span>
              </td>
            </tr>

            {/* วันศุกร์ - สีฟ้าพาสเทล */}
            <tr className={styles.fridayRow}>
              <td>ศุกร์</td>
              <td>
                <span className={styles.clinicName}>ฝากครรภ์, วางแผนครอบครัว</span><br />
                <span className={styles.doctorName}>พญ.จริดา สันธิติพงศ์</span>
              </td>
              <td>
                <span className={styles.clinicName}>พัฒนาการเด็ก</span><br />
                <span className={styles.staffName}>น.ส.มณฑ์ศิริ กล่อมยัง</span>
              </td>
            </tr>

            {/* วันหยุดราชการและวันหยุดสุดสัปดาห์ */}
            <tr className={styles.holidayRow}>
              <td>วันเสาร์-อาทิตย์<br />วันหยุดราชการ</td>
              <td className={styles.closedText}>ปิดทำการ</td>
              <td className={styles.closedText}>ปิดทำการ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
 <section id="pregnant-faq" className={styles.faqSection}>
  {/* หัวตารางจัดกึ่งกลางสวยงาม */}
  <h2 className={styles.sectionTitle}>คำถามที่พบบ่อย (FAQ)</h2>

  {/* 🌟 กล่องครอบสำหรับเปิดระบบสไลด์แนวนอนบนจอมือถือ (คอลัมน์ไม่เบี้ยว) */}
  <div className={styles.tableWrapper}>
    <table className={styles.faqTable}>
      <thead>
        <tr>
          <th className={styles.colQuestion}>คำถาม</th>
          <th className={styles.colAnswer}>คำตอบ</th>
        </tr>
      </thead>
      <tbody>
        {/* ลูปข้อมูลจากตัวแปร pregnantFaqData ที่เราแก้บั๊กกันรอบที่แล้ว */}
        {pregnantFaqData.map((item) => (
          <tr key={item.id} className={styles.tableRow}>
            <td className={styles.questionCell}>{item.question}</td>
            <td className={styles.answerCell}>{item.answer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

    </main>
  );
}
