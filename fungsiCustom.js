// TODO: import module bila dibutuhkan di sini
const fs = require("fs/promises")

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = async (val) => {
  let hasil = await fs.readFile(val, 'utf8');

  return JSON.parse(hasil).message.split(" ").splice(-1).toString()
};
let modifyFile2 = async (val) => {
  let data = await fs.readFile(val, 'utf8',);
  return JSON.parse(data)[0].message.split(" ").splice(-1).toString()
};
let modifyFile3 = async (val) => {
  let data = await fs.readFile(val, 'utf8');
  return JSON.parse(data)[0].data.message.split(" ").splice(-1).toString()

};

// TODO: Kerjakan bacaData
const bacaData = async () => {
  let arr = [await modifyFile1(file1),await modifyFile2(file2), await modifyFile3(file3)];

  console.log(arr);

};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
