/**
 * Lapisan API (API Layer) untuk Komunikasi Google Apps Script
 * Semua fungsi mengembalikan ES6 Promise.
 */

const loginAPI = (username, password) => {
  return new Promise((resolve) => {
    console.log("GAS API: Menghubungi endpoint login...");
    setTimeout(() => resolve({ success: true, user: username }), 500);
  });
};

const loadClasses = () => {
  return new Promise((resolve) => {
    console.log("GAS API: Memuat turun senarai kelas...");
    setTimeout(() => resolve(["Kelas Imersif", "Kelas Progresif"]), 500);
  });
};

const loadStudents = (classId) => {
  return new Promise((resolve) => {
    console.log(`GAS API: Memuat turun nama murid untuk kelas ${classId}...`);
    setTimeout(() => resolve(["Ahmad", "Siti", "Zul"]), 500);
  });
};

const saveAnswer = (questionData) => {
  return new Promise((resolve) => {
    console.log("GAS API: Menyimpan log jawapan...", questionData);
    setTimeout(() => resolve({ status: "saved" }), 300);
  });
};

const saveSession = (sessionData) => {
  return new Promise((resolve) => {
    console.log("GAS API: Menyimpan rekod sesi permainan...", sessionData);
    setTimeout(() => resolve({ status: "synced" }), 400);
  });
};

const saveHallOfFameAPI = (name, score) => {
  return new Promise((resolve) => {
    console.log(`GAS API: Menyimpan rekod papan markah ${name} - ${score}`);
    setTimeout(() => resolve({ success: true }), 500);
  });
};