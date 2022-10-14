// let coba = document.getElementById("coba-el");
// 1. object literal
// let mahasiswa = {
//   nama: "sembada",
//   energy: 10,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   },
// };
// coba.textContent = mahasiswa.nama + " : " + mahasiswa.energy + " : " + mahasiswa.makan;

// 2. function declaration
// function Mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;
//   mahasiswa.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energy -= jam;
//     console.log(`halo ${this.nama}, selmat bermain`);
//   };
//   return mahasiswa;
// }
// let sembada = Mahasiswa("SEMBADA", 10);
// let dodo = Mahasiswa("dodo", 90);
// coba.textContent = sembada + dodo;

// 3. constructor function ini menggunakan keyword New
// function Mahasiswa(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;
//   this.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   };
//   this.main = function (jam) {
//     this.energy -= jam;
//     console.log(`halo ${this.nama}, selmat bermain`);
//   };
// }
// let sembada = new Mahasiswa("SEMBADA", 10);
// let dodo = new Mahasiswa("dodo", 90);

// 4. object.create

// function Mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;
//   mahasiswa.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energy -= jam;
//     console.log(`halo ${this.nama}, selmat bermain`);
//   };
//   return mahasiswa;
// }
// let sembada = Mahasiswa("SEMBADA", 10);
// let dodo = Mahasiswa("dodo", 90);
// coba.textContent = sembada + dodo;
const methodeMahasiswa = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`halo ${this.nama}, selamat makan`);
  },
  main: function (jam) {
    this.energy -= jam;
    console.log(`halo ${this.nama}, selmat bermain`);
  },
};
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}
