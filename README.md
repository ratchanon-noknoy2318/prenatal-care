# ANC Website

เว็บไซต์สำหรับระบบฝากครรภ์ (ANC) เชื่อมต่อกับ LINE Official Account (OA) และ HIS/HOSxP  
รองรับการแสดงตารางนัด, การแจ้งเตือน, และการบันทึกข้อมูล

## ฟีเจอร์
- แสดงตารางนัด ANC
- ส่งข้อความแจ้งเตือนผ่าน LINE OA
- บันทึกข้อมูลลง Google Sheets หรือ HIS/HOSxP
- รองรับ push และ reply message

## ความต้องการระบบ
- Node.js เวอร์ชันล่าสุด
- npm หรือ yarn สำหรับจัดการ dependencies
- LINE Messaging API key
- Google Sheets API key
- Hosting เช่น Vercel, Netlify หรือ server โรงพยาบาล

## วิธีใช้งาน
1. Clone repo  
   ```bash
   git clone https://github.com/ratchanon-noknoy2318/anc_website.git
   npm install
   npm run dev
   
2. เปิดเว็บที่ http://localhost:3000 เพื่อดูหน้าเว็บ ANC
3. แก้ไข content ในโฟลเดอร์ app/ เช่น ตารางนัด, ข้อมูลสุขภาพ, FAQ

---

## Author

**Ratchanon Noknoy**  
- GitHub: [@ratchanon-noknoy2318](https://github.com/ratchanon-noknoy2318)  
- LinkedIn: [linkedin.com/in/ratchanon-noknoy](https://linkedin.com/in/ratchanon-noknoy)  
- Role: Solo Software Engineer

---
## Usage Policy

- ใช้สำหรับ **เว็บไซต์ ANC ของโรงพยาบาล** เท่านั้น
- ห้ามนำไปใช้เพื่อการค้า หรือใช้งานนอกเหนือจากบริบทโรงพยาบาล
- ต้องเคารพกฎหมายและข้อบังคับด้านข้อมูลส่วนบุคคล (PDPA/HIPAA)
- ผู้พัฒนาขอสงวนสิทธิ์ไม่รับผิดชอบต่อการใช้งานที่ผิดวัตถุประสงค์
