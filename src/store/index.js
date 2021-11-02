import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackTimeout: 1500,
    created: false,
    opened: false,
    kuesioner: {
        blok_1: {
            "id_blok": 0,
            "nama": "Blok I Pengenalan Tempat",
            "type": "row",
            "rincian":[{
                "id_rincian": 0,
                "nomor": "1",
                "nama": "Kode Provinsi",
                "isi": "",
                "tipe_data": "text"
            },{
                "id_rincian": 1,
                "nomor": "2",
                "nama":"Kode Kabupaten",
                "isi": "",
                "tipe_data": "text"
            },{
                "id_rincian": 2,
                "nomor": "3",
                "nama":"Kode Kecamatan",
                "isi": "",
                "tipe_data": "text"
            },{
                "id_rincian": 3,
                "nomor": "4",
                "nama":"Kode Desa",
                "isi": "",
                "tipe_data": "text"
            },{
                "id_rincian": 4,
                "nomor": "5",
                "nama":"Nama Dusun",
                "isi": "",
                "tipe_data": "text"
            },{
                "id_rincian": 5,
                "nomor": "6",
                "nama":"Alamat",
                "id_isi": 5,
                "isi": "",
                "tipe_data": "textarea"
            },{
                "id_rincian": 6,
                "nomor": "7",
                "nama":"Nomor Kartu Keluarga",
                "id_isi": 6,
                "isi": "",
                "tipe_data": "int"
            },{
                "id_rincian": 7,
                "nomor": "8",
                "nama":"Nama Kepala Keluarga",
                "id_isi": 7,
                "isi": "",
                "tipe_data":"text"
            },{
                "id_rincian": 8,
                "nomor": "9",
                "nama":"Jumlah Anggota",
                "id_isi": 8,
                "isi": "",
                "tipe_data":"int"
            },{
                "id_rincian": 9,
                "nomor": "10",
                "nama":"Nomor Bangunan Rumah",
                "isi": "",
                "tipe_data":"text"
            }]
        },
        blok_2: {   
            "id_blok": 1,
            "nama":"Blok II Keterangan Petugas Dan Responden",
            "type": "row",
            "rincian":[{
                "id_rincian": 10,
                "nomor": "1",
                "nama":"Tanggal Pencacahan",
                "isi": "",
                "tipe_data":"date" 
            },{
                "id_rincian": 11,
                "nomor": "2a",
                "nama":"Nama Pencacah",
                "isi": "",
                "tipe_data":"text" 
            },{
                "id_rincian": 12,
                "nomor": "2b",
                "nama":"Kode Petugas Pencacah",
                "isi": "",
                "tipe_data":"text"
            },{
                "id_rincian": 13,
                "nomor": "3",
                "nama":"Tanggal Pemeriksaan",
                "isi":"",
                "tipe_data":"date" 
            },{
                "id_rincian": 14,
                "nomor": "4a",
                "nama":"Nama Pemeriksa",
                "isi": "",
                "tipe_data":"text" 
            },{
                "id_rincian": 15,
                "nomor": "4b",
                "nama":"Kode Petugas Pemeriksa",
                "isi": "",
                "tipe_data":"text"
            }]
        },
        blok_3: {   
            "id_blok": 2,
            "nama": "Blok III Keterangan Perumahan",
            "type": "row",
            "rincian":[{
                "id_rincian": 15,
                "nomor": "1a",
                "nama":"Status penguasaan bangunan tempat tinggal yang ditempati",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 16,
                "nomor": "1b",
                "nama":"Jika 1a berkode 1 Status lahan tempat tinggal yang ditempati",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 17,
                "nomor": "2",
                "nama":"Luas lantai",
                 "isi":"",
                "tipe_data":"float",
                "unit": "m2"
            },{
                "id_rincian": 18,
                "nomor": "3",
                "nama":"Jenis lantai terluas",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 19,
                "nomor": "4a",
                "nama":"Jenis dinding terluas",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 20,
                "nomor": "4b",
                "nama":"Jika R.4a berkode 1, 2 atau 3, kondisi dinding",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 21,
                "nomor": "5a",
                "nama":"Jenis atap terluas",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 22,
                "nomor": "5b",
                "nama":"Jika R.5a berkode 1, 2, 3, 4, 5, 6 atau 7 kondisi atap: ",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 23,
                "nomor": "6",
                "nama":"Jumlah kamar tidur",
                 "isi":"",
                "tipe_data":"int"
            },{
                "id_rincian": 24,
                "nomor": "7",
                "nama":"Sumber air minum",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 25,
                "nomor": "8",
                "nama":"Cara memperoleh air minum",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 26,
                "nomor": "9a",
                "nama":"Sumber penerangan utama",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 27,
                "nomor": "9b",
                "nama":"Jika R.9a berkode 1, daya terpasang",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 28,
                "nomor": "10a",
                "nama":"Bahan bakar/energi utama untuk memasak",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 29,
                "nomor": "10b",
                "nama":"Jika 10.a berkode 8(kayu bakar), sumber kayu bakar",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 30,
                "nomor": "11a",
                "nama":"Penggunaan fasilitas tempat buang air besar",
                 "isi":"",
                "tipe_data":"label"
            },
            {
                "id_rincian": 31,
                "nomor": "11b",
                "nama":"Jenis kloset",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 32,
                "nomor": "12",
                "nama":"Tempat pembuangan akhir tinja",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 33,
                "nomor": "13",
                "nama":"Pengunaan Fasilitas Jendela",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 34,
                "nomor": "14a",
                "nama":"Tempat Pembuangan Sampah",
                 "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 35,
                "nomor": "14b",
                "nama":"Tempat pembuangan limbah cair",
                 "isi":"",
                "tipe_data":"label"
            }]
        },
        blok_4: {   
            "id_blok": 3,
            "type": "table",
            "nama": "Blok IV Keterangan Sosial Ekonomi Anggota Keluarga",
            isi: [],
            "rincian":[{
                "id_rincian": 36,
                "nomor": "1",
                "nama":"Nomor Urut Keluarga",
                "isi":"",
                "pimary": true,
                "tipe_data":"int"
            },{
                "id_rincian": 37,
                "nomor": "2a",
                "nama":"Nama Anggota Keluarga",
                "isi":"",
                "tipe_data":"text"
            },{
                "id_rincian": 38,
                "nomor": "2b",
                "nama":"NIK",
                "isi":"",
                "tipe_data":"text"
            },{
                "id_rincian": 39,
                "nomor": "3",
                "nama":"Hubungan Kepala Keluarga",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 40,
                "nomor": "4",
                "nama":"Jenis Kelamin",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 41,
                "nomor": "5",
                "nama":"Umur",
                "isi":"",
                "tipe_data":"int"
            },{
                "id_rincian": 42,
                "nomor": "6",
                "nama":"Status Perkawinan",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 43,
                "nomor": "7",
                "nama":"Kepemilikan Akta/Buku Nikah atau Akta Cerai",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 44,
                "nomor": "8",
                "nama":"Tercantum dalam Kartu Keluarga ini",
                "isi":"",
                "tipe_data":"y/n"
            },{
                "id_rincian": 45,
                "nomor": "9",
                "nama":"Kepemilikan Identitas",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 46,
                "nomor": "10",
                "nama":"Status Kehamilan",
                "isi":"",
                "tipe_data":"y/n"
            },{
                "id_rincian": 47,
                "nomor": "11",
                "nama":"Alat KB",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 48,
                "nomor": "12",
                "nama":"Jenis Cacat",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 49,
                "nomor": "13",
                "nama":"Penyakit Kronis/Menahun",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 50,
                "nomor": "14",
                "nama":"Golongan Darah",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 51,
                "nomor": "15",
                "nama":"Partisipasi Sekolah",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 52,
                "nomor": "16",
                "nama":"Jenjang pendidikan tertinggi yang pernah/sedang diduduki",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 53,
                "nomor": "17",
                "nama":"Kelas tertinggi yang pernah/sedang diduduki",
                "isi":"",
                "tipe_data":"int"
            },{
                "id_rincian": 54,
                "nomor": "18",
                "nama":"Ijazah tertinggi yang dimiliki",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 55,
                "nomor": "19",
                "nama":"Pensiunan",
                "isi":"",
                "tipe_data":"y/n"
            },{
                "id_rincian": 56,
                "nomor": "20",
                "nama":"Bekerja/Membantu Bekerja",
                "isi":"",
                "tipe_data":"y/n"
            },{
                "id_rincian": 57,
                "nomor": "21",
                "nama":"Lapangan usaha dari pekerjaan utama",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 58,
                "nomor": "22",
                "nama":"Status kedudukan dalam pekerjaan utama",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 59,
                "nomor": "23",
                "nama":"Agama",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 60,
                "nomor": "24",
                "nama":"Suku",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 61,
                "nomor": "25",
                "nama":"Domisili",
                "isi":"",
                "tipe_data":"label"
            },{
                "id_rincian": 124,
                "nomor": "26",
                "nama":"Bantuan Sosial (Bansos)",
                "isi":"",
                "tipe_data":"label"
            }]
        },
        blok_5: {   
            "id_blok": 4,
            "type": "table",
            "nama":"Blok V Sertifikat Tanah",
            isi:[],
            "rincian":[{
                "id_rincian": 63,
                "nomor": "2",
                "nama":"Nama Lahan",
                "isi":[],
                "tipe_data":"text"
            },{
                "id_rincian": 64,
                "nomor": "3",
                "nama":"Jenis Lahan",
                "isi":[],
                "tipe_data":"label"
            },{
                "id_rincian": 65,
                "nomor": "4",
                "nama":"Keberadaan SPPT",
                "isi":[],
                "tipe_data":"label"
            },{
                "id_rincian": 66,
                "nomor": "5",
                "nama":"Nomor Objek Pajak",
                "isi":[],
                "tipe_data":"text"
            },{
                "id_rincian": 67,
                "nomor": "6",
                "nama":"Luas Lahan",
                "isi":[],
                "tipe_data":"float"
            },{
                "id_rincian": 68,
                "nomor": "7",
                "nama":"Hak Kepemilikan Sertifikat",
                "isi":[],
                "tipe_data":"label"
            },{
                "id_rincian": 69,
                "nomor": "8",
                "nama":"Nama Hak Milik",
                "isi":[],
                "tipe_data":"text"
            }]
        },
        blok_6:  {   
            "id_blok": 5,
            "type": "row",
            "nama": "Blok VI Pendapatan Keluarga",
            "rincian":[{
                "id_rincian": 70,
                "nomor": "1a",
                "nama": "Pekerjaan yang menghasilkan pendapatan terbesar",
                "isi":"",
                "tipe_data":"text"
            },{
                "id_rincian": 71,
                "nomor": "",
                "nama": "Kode Lapangan Usaha",
                "isi":"",
                "tipe_data":"text"
            },{
                "id_rincian": 72,
                "nomor": "3",
                "nama": "Pendapatan seluruh anggota keluarga per bulan (Rp)",
                "isi":"",
                "tipe_data":"int"
            }]
        },
        blok_7: {   
            "id_blok": 6,
            "type": "row",
            "nama": "Blok VII Kepemilikan Aset dan Keikutsertaan Program",
            "rincian":[{
                "id_rincian": 73,
                "nomor": "1a",
                "nama": "Aset Tabung gas 5,5 kg atau lebih",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 74,
                "nomor": "1b",
                "nama": "Aset Lemari es/kulkas",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 75,
                "nomor": "1c",
                "nama": "Aset AC",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 76,
                "nomor": "1d",
                "nama": "Aset Pemanas air (water heater)",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 77,
                "nomor": "1e",
                "nama": "Aset Telepon rumah (PSTN)",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 78,
                "nomor": "1f",
                "nama": "Aset Televisi",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 79,
                "nomor": "1g",
                "nama": "Aset Emas/perhiasan & tabungan (senilai 10 gram emas)",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 80,
                "nomor": "1h",
                "nama": "Aset Komputer/Laptop",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 81,
                "nomor": "1i",
                "nama": "Aset Sepeda",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 82,
                "nomor": "1j",
                "nama": "Aset Sepeda Motor",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 83,
                "nomor": "1k",
                "nama": "Aset Mobil",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 84,
                "nomor": "1l",
                "nama": "Aset Perahu",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 85,
                "nomor": "1m",
                "nama": "Aset Motor Tempel",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 86,
                "nomor": "1n",
                "nama": "Aset Perahu motor",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 87,
                "nomor": "1o",
                "nama": "Aset Kapal",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 88,
                "nomor": "2a",
                "nama": "Jumlah nomor HP aktif yang dimiliki oleh seluruh anggota keluarga",
                "isi":{},
                "tipe_data":"int"
            },{
                "id_rincian": 89,
                "nomor": "2b",
                "nama": "Jumlah TV layar datar minimal 30 inch yang dimiliki keluarga",
                "isi":{},
                "tipe_data":"int"
            },{
                "id_rincian": 90,
                "nomor": "3a",
                "nama": "Aset Lahan",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 125,
                "nomor": "3a",
                "nama": "Luas aset Lahan",
                "isi":{},
                "tipe_data":"float"
            },{
                "id_rincian": 91,
                "nomor": "3b",
                "nama": "Aset Rumah di tempat Lain",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 92,
                "nomor": "4a",
                "nama": "Jumlah Ternak Sapi",
                "isi":{},
                "tipe_data":"int"
            },{
                "id_rincian": 93,
                "nomor": "4b",
                "nama": "Jumlah Ternak Kerbau",
                "isi":{},
                "tipe_data":"int"
            },{
                "id_rincian": 94,
                "nomor": "4c",
                "nama": "Jumlah Ternak Kuda",
                "isi":{},
                "tipe_data":"int"
            },{
                "id_rincian": 95,
                "nomor": "4d",
                "nama": "Jumlah Ternak Babi",
                "isi":{},
                "tipe_data":"int"
            },{
                "id_rincian": 96,
                "nomor": "4e",
                "nama": "Jumlah Ternak Kambing",
                "isi":{},
                "tipe_data":"int"
            },{
                "id_rincian": 97,
                "nomor": "5",
                "nama": "Rumah berada di bawah SUTET/SUTT/SUTTAS",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 98,
                "nomor": "6",
                "nama": "Rumah di bantaran sungai",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 99,
                "nomor": "7",
                "nama": "Rumah di lereng Bukit/Gunung",
                "isi":{},
                "tipe_data":"y/n"
            },{
                "id_rincian": 100,
                "nomor": "8",
                "nama": "Secara keseluruhan kondisi rumah",
                "isi":{},
                "tipe_data":"label"
            }]
        },
        blok_8: {   
            "id_blok": 7,
            "nama":"Blok VII Kepemilikan Aset dan Keikutsertaan Program",
            "type": "table",
            isi: [],
            "rincian":[
                {
                    "id_rincian": 101,
                    "nomor": "9a",
                    "nama": "Penghasilan dari No. Urut Anggota Keluarga (Sesuai Blok 4)",
                    "isi":"",
                    "pimary": true,
                    "tipe_data":"int"
                },{
                    "id_rincian": 102,
                    "nomor": "9b",
                    "nama": "Sumber Penghasilan",
                    "isi":"",
                    "tipe_data":"label"
                },{
                    "id_rincian": 103,
                    "nomor": "9c",
                    "nama": "Volume Jumlah",
                    "isi":"",
                    "tipe_data":"float"
                },{
                    "id_rincian": 104,
                    "nomor": "9d",
                    "nama": "Volume Satuan",
                    "isi":"",
                    "tipe_data":"float"
                },{
                    "id_rincian": 105,
                    "nomor": "9e",
                    "nama": "Penghasilan Setahun",
                    "isi":"",
                    "tipe_data":"integer"
                },{
                    "id_rincian": 106,
                    "nomor": "9f",
                    "nama": "Apakah diekspor",
                    "isi":"",
                    "tipe_data":"label"
                }
            ]
        },
        blok_9: {   
            "id_blok": 8,
            "nama": "Blok VII Kepemilikan Aset dan Keikutsertaan Program",
            "type": "table",
            isi: [],
            "rincian":[
                {
                    "id_rincian": 107,
                    "nomor": "1",
                    "nama": "Nomor Urut Keluarga (Sesuai Blok 4)",
                    "isi":"",
                    "pimary": true,
                    "tipe_data": "int"
                },{
                    "id_rincian": 108,
                    "nomor": "2",
                    "nama": "No Handphone",
                    "isi":"",
                    "tipe_data": "text"
                },{
                    "id_rincian": 109,
                    "nomor": "2",
                    "nama": "No Whatsapp",
                    "isi":"",
                    "tipe_data": "text"
                },{
                    "id_rincian": 110,
                    "nomor": "3",
                    "nama": "Email",
                    "isi":"",
                    "tipe_data": "text"
                },{
                    "id_rincian": 111,
                    "nomor": "3",
                    "nama": "Facebook",
                    "isi":"",
                    "tipe_data": "text"
                },{
                    "id_rincian": 112,
                    "nomor": "3",
                    "nama": "Twitter",
                    "isi":"",
                    "tipe_data": "text"
                },{
                    "id_rincian": 113,
                    "nomor": "3",
                    "nama": "Instagram",
                    "isi":"",
                    "tipe_data": "text"
                },{
                    "id_rincian": 114,
                    "nomor": "4",
                    "nama": "Penyakit yang diderita setahun terakhir",
                    "isi":"",
                    "tipe_data": "label"
                },{
                    "id_rincian": 115,
                    "nomor": "5",
                    "nama": "Fasilitas Kesehatan yang didatangi setahun terakhir",
                    "isi":"",
                    "tipe_data": "label"
                },{
                    "id_rincian": 116,
                    "nomor": "6",
                    "nama": "Berapa kali periksa setahun terakhir",
                    "isi":"",
                    "tipe_data": "int"
                }
            ]
        },
        blok_10: {   
            "id_blok": 9,
            "nama": "Blok VII Kepemilikan Aset dan Keikutsertaan Program",
            "type": "table",
            isi: [],
            "rincian":[
                {
                    "id_rincian": 117,
                    "nomor": "1",
                    "nama": "Nomor urut keluarga (Sesuai blok IV)",
                    "isi":"",
                    "pimary": true,
                    "tipe_data": "int"
                },{
                    "id_rincian": 118,
                    "nomor": "2",
                    "nama":"Kerja Bakti",
                    "isi":"",
                    "tipe_data":"int"
                },{
                    "id_rincian": 119,
                    "nomor": "3",
                    "nama":"Siskamling",
                    "isi":"",
                    "tipe_data":"int"
                },{
                    "id_rincian": 120,
                    "nomor": "4",
                    "nama":"Pesta Rakyat/Adat",
                    "isi":"",
                    "tipe_data":"int"
                },{
                    "id_rincian": 121,
                    "nomor": "5",
                    "nama":"Menolong warga saat Berkabung Kematian",
                    "isi":"",
                    "tipe_data":"int"
                },{
                    "id_rincian": 122,
                    "nomor": "2",
                    "nama":"Menolong warga saat Sakit",
                    "isi":"",
                    "tipe_data":"int"
                },{
                    "id_rincian": 123,
                    "nomor": "2",
                    "nama":"Menolong warga saat Kecelakaan",
                    "isi":"",
                    "tipe_data":"int"
                }
            ]
        },
        blok_catatan:{   
            "id_blok": 9999,
            "nama": "Catatan",
            "rincian":[{
                "nama": "catatan",
                "isi":"",
                "tipe_data": "textarea"
            }]
        },
        labels: [{
            "id_label":0,
            "label": "1",
            "nama": "Milik Sendiri",
            "id_rincian":15
        },{
            "id_label":1,
            "label": "2",
            "nama": "Kontrak sewa",
            "id_rincian":15
        },{
            "id_label":2,
            "label": "3",
            "nama": "Bebas sewa",
            "id_rincian":15
        },{
            "id_label":3,
            "label": "4",
            "nama": "Dinas",
            "id_rincian":15
        },{
            "id_label":4,
            "label": "5",
            "nama": "Lainnya",
            "id_rincian":15
        },{
            "id_label":5,
            "label": "1",
            "nama": "Milik Sendiri",
            "id_rincian":16
        },{
            "id_label":6,
            "label": "2",
            "nama": "Milik Orang Lain",
            "id_rincian":16
        },{
            "id_label":7,
            "label": "3",
            "nama": "Tanah Negara",
            "id_rincian":16
        },{
            "id_label":8,
            "label": "4",
            "nama": "Lainnya",
            "id_rincian":16
        },{
            "id_label":9,
            "label": "01",
            "nama": "Marmer/granit",
            "id_rincian":18
        },{
            "id_label":10,
            "label": "02",
            "nama": "Keramik",
            "id_rincian":18
        },{
            "id_label":11,
            "label": "03",
            "nama": "Parket/vinil/permadani",
            "id_rincian":18
        },{
            "id_label":12,
            "label": "04",
            "nama": "Ubin/tegel/teraso",
            "id_rincian":18
        },{
            "id_label":13,
            "label": "05",
            "nama": "Kayu/papan kualitas tinggi",
            "id_rincian":18
        },{
            "id_label":14,
            "label": "06",
            "nama": "Semen/bata merah",
            "id_rincian":18
        },{
            "id_label":15,
            "label": "07",
            "nama": "Bambu",
            "id_rincian":18
        },{
            "id_label":16,
            "label": "08",
            "nama": "Kayu/papan kualitas rendah",
            "id_rincian":18
        },{
            "id_label":17,
            "label": "09",
            "nama": "Tanah",
            "id_rincian":18
        },{
            "id_label":18,
            "label": "10",
            "nama": "Lainnya",
            "id_rincian":18
        },{
            "id_label":19,
            "label": "1",
            "nama": "Tembok",
            "id_rincian":19
        },{
            "id_label":20,
            "label": "2",
            "nama": "Plesteran anyaman bambu/kawat",
            "id_rincian":19
        },{
            "id_label":21,
            "label": "3",
            "nama": "Kayu",
            "id_rincian":19
        },{
            "id_label":22,
            "label": "4",
            "nama": "Anyaman bambu",
            "id_rincian":19
        },{
            "id_label":23,
            "label": "5",
            "nama": "Batang kayu",
            "id_rincian":19
        },{
            "id_label":24,
            "label": "6",
            "nama": "Bambu",
            "id_rincian":19
        },{
            "id_label":25,
            "label": "7",
            "nama": "Lainnya",
            "id_rincian":19
        },{
            "id_label":26,
            "label": "1",
            "nama": "Bagus/kualitas tinggi",
            "id_rincian":20
        },{
            "id_label":27,
            "label": "2",
            "nama": "Jelek/kualitas rendah",
            "id_rincian":20
        },{
            "id_label":28,
            "label": "01",
            "nama": "Air kemasan bermerk",
            "id_rincian":24
        },{
            "id_label":29,
            "label": "02",
            "nama": "Air isi ulang",
            "id_rincian":24
        },{
            "id_label":30,
            "label": "03",
            "nama": "Leding meteran",
            "id_rincian":24
        },{
            "id_label":31,
            "label": "04",
            "nama": "Leding eceran",
            "id_rincian":24
        },{
            "id_label":32,
            "label": "05",
            "nama": "Sumur bor/pompa",
            "id_rincian":24
        },{
            "id_label":33,
            "label": "06",
            "nama": "Sumur terlindung",
            "id_rincian":24
        },{
            "id_label":34,
            "label": "07",
            "nama": "Sumur tak terlindung",
            "id_rincian":24
        },{
            "id_label":35,
            "label": "08",
            "nama": "Mata air terlindung",
            "id_rincian":24
        },{
            "id_label":36,
            "label": "09",
            "nama": "Mata air tak terlindung",
            "id_rincian":24
        },{
            "id_label":37,
            "label": "10",
            "nama": "Air sungai/danau/waduk",
            "id_rincian":24
        },{
            "id_label":38,
            "label": "11",
            "nama": "Air hujan",
            "id_rincian":24
        },{
            "id_label":39,
            "label": "12",
            "nama": "Lainnya",
            "id_rincian":24
        },{
            "id_label":40,
            "label": "1",
            "nama": "Membeli eceran",
            "id_rincian":25
        },{
            "id_label":41,
            "label": "2",
            "nama": "Langganan",
            "id_rincian":25
        },{
            "id_label":42,
            "label": "3",
            "nama": "Tidak membeli",
            "id_rincian":25
        },{
            "id_label":43,
            "label": "01",
            "nama": "Beton/genteng beton",
            "id_rincian":21
        },{
            "id_label":44,
            "label": "02",
            "nama": "Genteng keramik",
            "id_rincian":21
        },{
            "id_label":45,
            "label": "03",
            "nama": "Genteng metal",
            "id_rincian":21
        },{
            "id_label":46,
            "label": "04",
            "nama": "Genteng tanah liat",
            "id_rincian":21
        },{
            "id_label":47,
            "label": "05",
            "nama": "Asbes",
            "id_rincian":21
        },{
            "id_label":48,
            "label": "06",
            "nama": "Seng",
            "id_rincian":21
        },{
            "id_label":49,
            "label": "07",
            "nama": "Sirap",
            "id_rincian":21
        },{
            "id_label":50,
            "label": "08",
            "nama": "Bambu",
            "id_rincian":21
        },{
            "id_label":51,
            "label": "09",
            "nama": "Jerami/ijuk/daun-daunan/rumbia",
            "id_rincian":21
        },{
            "id_label":52,
            "label": "10",
            "nama": "Lainnya",
            "id_rincian":21
        },{
            "id_label":53,
            "label": "1",
            "nama": "Bagus/kualitas tinggi",
            "id_rincian":22
        },{
            "id_label":54,
            "label": "2",
            "nama": "Jelek/kualitas rendah",
            "id_rincian":22
        },{
            "id_label":55,
            "label": "1",
            "nama": "Listrik PLN",
            "id_rincian":26
        },{
            "id_label":56,
            "label": "2",
            "nama": "Listrik Non PLN",
            "id_rincian":26
        },{
            "id_label":57,
            "label": "3",
            "nama": "Bukan Listrik",
            "id_rincian":26
        },{
            "id_label":58,
            "label": "1",
            "nama": "450 watt",
            "id_rincian":27
        },{
            "id_label":59,
            "label": "2",
            "nama": "900 watt",
            "id_rincian":27
        },{
            "id_label":60,
            "label": "3",
            "nama": "1300 watt",
            "id_rincian":27
        },{
            "id_label":61,
            "label": "4",
            "nama": "2200 watt",
            "id_rincian":27
        },{
            "id_label":62,
            "label": "5",
            "nama": ">2200 watt",
            "id_rincian":27
        },{
            "id_label":63,
            "label": "6",
            "nama": "Tanpa Meteran",
            "id_rincian":27
        },{
            "id_label":64,
            "label": "1",
            "nama": "Listrik",
            "id_rincian":28
        },{
            "id_label":65,
            "label": "2",
            "nama": "Gas > 3kg",
            "id_rincian":28
        },{
            "id_label":66,
            "label": "3",
            "nama": "Gas 3kg",
            "id_rincian":28
        },{
            "id_label":67,
            "label": "4",
            "nama": "Gas kota/biogas",
            "id_rincian":28
        },{
            "id_label":68,
            "label": "5",
            "nama": "Minyak Tanah",
            "id_rincian":28
        },{
            "id_label":69,
            "label": "6",
            "nama": "Briket",
            "id_rincian":28
        },{
            "id_label":70,
            "label": "7",
            "nama": "Arang",
            "id_rincian":28
        },{
            "id_label":71,
            "label": "8",
            "nama": "Kayu Bakar",
            "id_rincian":28
        },{
            "id_label":72,
            "label": "9",
            "nama": "Tidak memasak di rumah",
            "id_rincian":28
        },{
            "id_label":73,
            "label": "1",
            "nama": "Pembelian",
            "id_rincian":29
        },{
            "id_label":74,
            "label": "2",
            "nama": "Diambil dari hutan",
            "id_rincian":29
        },{
            "id_label":75,
            "label": "3",
            "nama": "Diambil diluar/Bukan Hutan",
            "id_rincian":29
        },{
            "id_label":76,
            "label": "4",
            "nama": "Lainnya",
            "id_rincian":29
        },{
            "id_label":77,
            "label": "1",
            "nama": "Sendiri",
            "id_rincian":30
        },{
            "id_label":78,
            "label": "2",
            "nama": "Bersama",
            "id_rincian":30
        },{
            "id_label":79,
            "label": "3",
            "nama": "Umum",
            "id_rincian":30
        },{
            "id_label":80,
            "label": "4",
            "nama": "Tidak ada",
            "id_rincian":30
        },{
            "id_label":81,
            "label": "1",
            "nama": "Leher angsa",
            "id_rincian":31
        },{
            "id_label":82,
            "label": "2",
            "nama": "Plengsengan",
            "id_rincian":31
        },{
            "id_label":83,
            "label": "3",
            "nama": "Cemplung/Cubluk",
            "id_rincian":31
        },{
            "id_label":84,
            "label": "4",
            "nama": "Tidak Pakai",
            "id_rincian":31
        },{
            "id_label":85,
            "label": "1",
            "nama": "Tangki",
            "id_rincian":32
        },{
            "id_label":86,
            "label": "2",
            "nama": "SPAL",
            "id_rincian":32
        },{
            "id_label":87,
            "label": "3",
            "nama": "Lubang Tanah",
            "id_rincian":32
        },{
            "id_label":88,
            "label": "4",
            "nama": "Kolam/sawah/sungai/danau/laut",
            "id_rincian":32
        },{
            "id_label":89,
            "label": "5",
            "nama": "Pantai/tanah lapang/kebun",
            "id_rincian":32
        },{
            "id_label":90,
            "label": "6",
            "nama": "Lainnya",
            "id_rincian":32
        },{
            "id_label":91,
            "label": "1",
            "nama": "Ada, Berfungsi",
            "id_rincian":33
        },{
            "id_label":92,
            "label": "2",
            "nama": "Ada, Tidak Berfungsi",
            "id_rincian":33
        },{
            "id_label":93,
            "label": "3",
            "nama": "Tidak ada",
            "id_rincian":33
        },{
            "id_label":94,
            "label": "1",
            "nama": "Tidak ada",
            "id_rincian":34
        },{
            "id_label":95,
            "label": "2",
            "nama": "Dikebun/Sungai/Drainase",
            "id_rincian":34
        },{
            "id_label":96,
            "label": "3",
            "nama": "Dibakar",
            "id_rincian":34
        },{
            "id_label":96,
            "label": "4",
            "nama": "Tempat Sampah",
            "id_rincian":34
        },{
            "id_label":97,
            "label": "5",
            "nama": "Tempat Sampah Diangkut Reguler",
            "id_rincian":34
        },{
            "id_label":98,
            "label": "1",
            "nama": "Tanki/Instalasi Pengelolaan Limbah",
            "id_rincian":35
        },{
            "id_label":99,
            "label": "2",
            "nama": "Sawah/Kolan/Drainase/Laut",
            "id_rincian":35
        },{
            "id_label":100,
            "label": "3",
            "nama": "Lubang tanah",
            "id_rincian":35
        },{
            "id_label":101,
            "label": "4",
            "nama": "Lainnya",
            "id_rincian":35
        },{
            "id_label":102,
            "label": "1",
            "nama": "Kepala Keluarga",
            "id_rincian":39
        },{
            "id_label":103,
            "label": "2",
            "nama": "Istri/Suami",
            "id_rincian":39
        },{
            "id_label":104,
            "label":"3",
            "nama":"Anak",
            "id_rincian":39
        },{
            "id_label":105,
            "label": "4",
            "nama": "Menantu",
            "id_rincian":39
        },{
            "id_label":106,
            "label": "5",
            "nama": "Cucu",
            "id_rincian":39
        },{
            "id_label":107,
            "label": "6",
            "nama": "Orang Tua/Mertua",
            "id_rincian":39
        },{
            "id_label":108,
            "label": "7",
            "nama": "Pembantu ruta",
            "id_rincian":39
        },{
            "id_label":109,
            "label": "8",
            "nama": "Lainnya",
            "id_rincian":39
        },{
            "id_label":110,
            "label": "1",
            "nama": "Laki-laki",
            "id_rincian":40
        },{
            "id_label":111,
            "label": "2",
            "nama": "Perempuan",
            "id_rincian":40
        },{
            "id_label":112,
            "label": "1",
            "nama": "Belum Kawin",
            "id_rincian":42
        },{
            "id_label":113,
            "label": "2",
            "nama": "Kawin/Nikah",
            "id_rincian":42
        },{
            "id_label":114,
            "label": "3",
            "nama": "Cerai Hidup",
            "id_rincian":42
        },{
            "id_label":115,
            "label": "4",
            "nama": "Cerai Mati",
            "id_rincian":42
        },{
            "id_label":116,
            "label": "0",
            "nama": "Tidak",
            "id_rincian":43
        },{
            "id_label":117,
            "label": "1",
            "nama": "Ya, dapat ditunjukkan",
            "id_rincian":43
        },{
            "id_label":118,
            "label": "2",
            "nama": "Ya, tidak dapat ditunjukkan",
            "id_rincian":43
        },{
            "id_label":119,
            "label": "0",
            "nama": "Tidak memiliki",
            "id_rincian":45
        },{
            "id_label":120,
            "label": "1",
            "nama": "Akta Kelahiran",
            "id_rincian":45
        },{
            "id_label":121,
            "label": "2",
            "nama": "Kartu Pelajar",
            "id_rincian":45
        },{
            "id_label":122,
            "label": "3",
            "nama": "KTP",
            "id_rincian":45
        },{
            "id_label":123,
            "label": "8",
            "nama": "SIM",
            "id_rincian":45
        },{
            "id_label":124,
            "label": "1",
            "nama": "MOW/Tubektomi",
            "id_rincian":47
        },{
            "id_label":125,
            "label": "2",
            "nama": "MOP/Vasektomi",
            "id_rincian":47
        },{
            "id_label":126,
            "label": "3",
            "nama": "AKDR/IUD/Spiral",
            "id_rincian":47
        },{
            "id_label":127,
            "label": "4",
            "nama": "Suntikan KB",
            "id_rincian":47
        },{
            "id_label":128,
            "label": "5",
            "nama": "Susuk KB/Norplan/Implanon/Alwalit",
            "id_rincian":47
        },{
            "id_label":129,
            "label": "6",
            "nama": "Pil KB",
            "id_rincian":47
        },{
            "id_label":130,
            "label": "7",
            "nama": "Kondom/Karet KB",
            "id_rincian":47
        },{
            "id_label":131,
            "label": "8",
            "nama": "Intravag/Tisue/Kondom Wanita",
            "id_rincian":47
        },{
            "id_label":132,
            "label": "9",
            "nama": "Cara Tradisional",
            "id_rincian":47
        },{
            "id_label":133,
            "label": "0",
            "nama": "Tidak KB",
            "id_rincian":47
        },{
            "id_label":134,
            "label": "00",
            "nama": "Tidak Cacat",
            "id_rincian":48
        },{
            "id_label":135,
            "label": "01",
            "nama": "Tuna Daksa/cacat tubuh",
            "id_rincian":48
        },{
            "id_label":136,
            "label": "02",
            "nama": "Tuna Netra/buta",
            "id_rincian":48
        },{
            "id_label":137,
            "label": "03",
            "nama": "Tuna Rungu",
            "id_rincian":48
        },{
            "id_label":138,
            "label": "04",
            "nama": "Tuna Wicara",
            "id_rincian":48
        },{
            "id_label":139,
            "label": "05",
            "nama": "Tuna rungu & wicara",
            "id_rincian":48
        },{
            "id_label":140,
            "label": "06",
            "nama": "Tuna netra & cacat tubuh",
            "id_rincian":48
        },{
            "id_label":141,
            "label": "07",
            "nama": "Tuna netra, rungu & wicara",
            "id_rincian":48
        },{
            "id_label":142,
            "label": "08",
            "nama": "Tuna rungu, wicara & cacat tubuh",
            "id_rincian":48
        },{
            "id_label":143,
            "label": "09",
            "nama": "Tuna rungu, wicara, netra & cacat tubuh",
            "id_rincian":48
        },{
            "id_label":144,
            "label": "10",
            "nama": "Cacat mental retardasi",
            "id_rincian":48
        },{
            "id_label":145,
            "label": "11",
            "nama": "Mantan penderita gangguan jiwa",
            "id_rincian":48
        },{
            "id_label":146,
            "label": "12",
            "nama": "Cacat fisik & mental",
            "id_rincian":48
        },{
            "id_label":147,
            "label": "0",
            "nama": "Tidak Ada",
            "id_rincian":49
        },{
            "id_label":148,
            "label": "1",
            "nama": "Hipertensi (Tekanan darah tinggi)",
            "id_rincian":49
        },{
            "id_label":149,
            "label": "2",
            "nama": "Rematik",
            "id_rincian":49
        },{
            "id_label":150,
            "label": "3",
            "nama": "Asma",
            "id_rincian":49
        },{
            "id_label":151,
            "label": "4",
            "nama": "Masalah Jantung",
            "id_rincian":49
        },{
            "id_label":152,
            "label": "5",
            "nama": "Diabetes (Kencing Manis)",
            "id_rincian":49
        },{
            "id_label":153,
            "label": "6",
            "nama": "Tubercolosis (TBC)",
            "id_rincian":49
        },{
            "id_label":154,
            "label": "7",
            "nama": "Stroke",
            "id_rincian":49
        },{
            "id_label":155,
            "label": "8",
            "nama": "Kanker atau tumor ganas",
            "id_rincian":49
        },{
            "id_label":156,
            "label": "9",
            "nama": "Lainnya (gagal ginjal, paru-paru flek, dan sejenisnya)",
            "id_rincian":49
        },{
            "id_label":157,
            "label": "1",
            "nama": "A",
            "id_rincian":50
        },{
            "id_label":158,
            "label": "2",
            "nama": "B",
            "id_rincian":50
        },{
            "id_label":159,
            "label": "3",
            "nama": "AB",
            "id_rincian":50
        },{
            "id_label":160,
            "label": "4",
            "nama": "O",
            "id_rincian":50
        },{
            "id_label":161,
            "label": "5",
            "nama": "Tidak Tahu",
            "id_rincian":50
        },{
            "id_label":162,
            "label": "0",
            "nama": "Tidak/Belum Pernah sekolah",
            "id_rincian":51
        },{
            "id_label":163,
            "label": "1",
            "nama": "Masih Sekolah",
            "id_rincian":51
        },{
            "id_label":164,
            "label": "2",
            "nama": "Tidak Bersekolah Lagi",
            "id_rincian":51
        },{
            "id_label":165,
            "label": "01",
            "nama": "SD/SDLB",
            "id_rincian":52
        },{
            "id_label":166,
            "label": "02",
            "nama": "Paket A",
            "id_rincian":52
        },{
            "id_label":167,
            "label": "03",
            "nama": "MI (Madrasah Ibtidaiyah)",
            "id_rincian":52
        },{
            "id_label":168,
            "label": "04",
            "nama": "SMP/SMPLB",
            "id_rincian":52
        },{
            "id_label":169,
            "label": "05",
            "nama": "Paket B",
            "id_rincian":52
        },{
            "id_label":170,
            "label": "06",
            "nama": "MTs (Madrasah Tsanawiyah)",
            "id_rincian":52
        },{
            "id_label":171,
            "label": "07",
            "nama": "SMA/SMK/SMALB",
            "id_rincian":52
        },{
            "id_label":172,
            "label": "08",
            "nama": "Paket C",
            "id_rincian":52
        },{
            "id_label":173,
            "label": "09",
            "nama": "MA (Madrasah Aliyah)",
            "id_rincian":52
        },{
            "id_label":174,
            "label": "10",
            "nama": "Perguruan Tinggi",
            "id_rincian":52
        },{
            "id_label":175,
            "label": "0",
            "nama": "Tidak Punya Ijazah",
            "id_rincian":54
        },{
            "id_label":176,
            "label": "1",
            "nama": "SD/sederajat",
            "id_rincian":54
        },{
            "id_label":177,
            "label": "2",
            "nama": "SMP/sederajat",
            "id_rincian":54
        },{
            "id_label":178,
            "label": "3",
            "nama": "SMA/sederajat",
            "id_rincian":54
        },{
            "id_label":179,
            "label": "4",
            "nama": "D1/D2/D3",
            "id_rincian":54
        },{
            "id_label":180,
            "label": "5",
            "nama": "D4/S1",
            "id_rincian":54
        },{
            "id_label":181,
            "label": "6",
            "nama": "S2/S3",
            "id_rincian":54
        },{
            "id_label":182,
            "label": "1",
            "nama": "Pertanian tanaman padi & palawija",
            "id_rincian":57
        },{
            "id_label":183,
            "label": "2",
            "nama": "Hortikultura",
            "id_rincian":57
        },{
            "id_label":184,
            "label": "3",
            "nama": "Perkebunan",
            "id_rincian":57
        },{
            "id_label":185,
            "label": "4",
            "nama": "Perikanan lengkap",
            "id_rincian":57
        },{
            "id_label":186,
            "label": "5",
            "nama": "Perikanan budidaya",
            "id_rincian":57
        },{
            "id_label":187,
            "label": "6",
            "nama": "Peternakan",
            "id_rincian":57
        },{
            "id_label":188,
            "label": "7",
            "nama": "Kehutanan & pertanian lainnya",
            "id_rincian":57
        },{
            "id_label":189,
            "label": "8",
            "nama": "Pertambangan/penggalian",
            "id_rincian":57
        },{
            "id_label":190,
            "label": "9",
            "nama": "Industri pengolahan",
            "id_rincian":57
        },{
            "id_label":191,
            "label": "10",
            "nama": "Listrik dan Gas",
            "id_rincian":57
        },{
            "id_label":192,
            "label": "11",
            "nama": "Bangunan/konstruksi",
            "id_rincian":57
        },{
            "id_label":193,
            "label": "12",
            "nama": "Perdagangan",
            "id_rincian":57
        },{
            "id_label":194,
            "label": "13",
            "nama": "Hotel & Rumah Makan",
            "id_rincian":57
        },{
            "id_label":197,
            "label": "14",
            "nama": "Transportasi & pergudangan",
            "id_rincian":57
        },{
            "id_label":198,
            "label": "15",
            "nama": "Informasi & komunikasi",
            "id_rincian":57
        },{
            "id_label":199,
            "label": "16",
            "nama": "Keuangan & asuransi",
            "id_rincian":57
        },{
            "id_label":200,
            "label": "17",
            "nama": "Jasa pendidikan",
            "id_rincian":57
        },{
            "id_label":201,
            "label": "18",
            "nama": "Jasa Kesehatan",
            "id_rincian":57
        },{
            "id_label":202,
            "label": "19",
            "nama": "Jasa kemasyarakatan, pemerintahan, dan perorangan",
            "id_rincian":57
        },{
            "id_label":203,
            "label": "20",
            "nama": "Pemulung",
            "id_rincian":57
        },{
            "id_label":204,
            "label": "21",
            "nama": "TKI",
            "id_rincian":57
        },{
            "id_label":205,
            "label": "22",
            "nama": "Lainnya",
            "id_rincian":57
        },{
            "id_label":206,
            "label": "1",
            "nama": "Berusaha sendiri",
            "id_rincian":58
        },{
            "id_label":207,
            "label": "2",
            "nama": "Berusaha dibantu buruh tidak tetap/tidak dibayar",
            "id_rincian":58
        },{
            "id_label":208,
            "label": "3",
            "nama": "Berusaha dibantu buruh tetap/dibayar",
            "id_rincian":58
        },{
            "id_label":209,
            "label": "4",
            "nama": "Buruh/karyawan/pegawai swasta",
            "id_rincian":58
        },{
            "id_label":210,
            "label": "5",
            "nama": "PNS/TNI/Polri/BUMN/BUMD/anggota legislatif",
            "id_rincian":58
        },{
            "id_label":211,
            "label": "6",
            "nama": "Pekerja bebas pertanian",
            "id_rincian":58
        },{
            "id_label":212,
            "label": "7",
            "nama": "Pekerja bebas non-pertanian",
            "id_rincian":58
        },{
            "id_label":213,
            "label": "8",
            "nama": "Pekerja keluarga/tidak dibayar",
            "id_rincian":58
        },{
            "id_label":214,
            "label": "1",
            "nama": "Islam",
            "id_rincian":59
        },{
            "id_label":215,
            "label": "2",
            "nama": "Protestan",
            "id_rincian":59
        },{
            "id_label":216,
            "label": "3",
            "nama": "Katolik",
            "id_rincian":59
        },{
            "id_label":217,
            "label": "4",
            "nama": "Hindu",
            "id_rincian":59
        },{
            "id_label":218,
            "label": "5",
            "nama": "Buddha",
            "id_rincian":59
        },{
            "id_label":219,
            "label": "6",
            "nama": "Konghucu",
            "id_rincian":59
        },{
            "id_label":220,
            "label": "7",
            "nama": "Lainnya",
            "id_rincian":59
        },{
            "id_label":221,
            "label": "1",
            "nama": "Minahasa",
            "id_rincian":60
        },{
            "id_label":222,
            "label": "2",
            "nama": "Bolaang Mongondow",
            "id_rincian":60
        },{
            "id_label":223,
            "label": "3",
            "nama": "Sangir",
            "id_rincian":60
        },{
            "id_label":224,
            "label": "4",
            "nama": "Talaud",
            "id_rincian":60
        },{
            "id_label":225,
            "label": "5",
            "nama": "Siau",
            "id_rincian":60
        },{
            "id_label":226,
            "label": "6",
            "nama": "Jawa",
            "id_rincian":60
        },{
            "id_label":227,
            "label": "7",
            "nama": "Arab",
            "id_rincian":60
        },{
            "id_label":228,
            "label": "8",
            "nama": "China",
            "id_rincian":60
        },{
            "id_label":229,
            "label": "9",
            "nama": "Ambon",
            "id_rincian":60
        },{
            "id_label":230,
            "label": "10",
            "nama": "Dayak",
            "id_rincian":60
        },{
            "id_label":231,
            "label": "11",
            "nama": "Betawi",
            "id_rincian":60
        },{
            "id_label":232,
            "label": "12",
            "nama": "Bugis",
            "id_rincian":60
        },{
            "id_label":232,
            "label": "13",
            "nama": "Dayak",
            "id_rincian":60
        },{
            "id_label":233,
            "label": "14",
            "nama": "India",
            "id_rincian":60
        },{
            "id_label":234,
            "label": "15",
            "nama": "Madura",
            "id_rincian":60
        },{
            "id_label":235,
            "label": "16",
            "nama": "Melayu",
            "id_rincian":60
        },{
            "id_label":236,
            "label": "17",
            "nama": "Minang",
            "id_rincian":60
        },{
            "id_label":237,
            "label": "18",
            "nama": "Papua",
            "id_rincian":60
        },{
            "id_label":238,
            "label": "19",
            "nama": "Sunda",
            "id_rincian":60
        },{
            "id_label":239,
            "label": "20",
            "nama": "Timor",
            "id_rincian":60
        },{
            "id_label":240,
            "label": "21",
            "nama": "Lainnya",
            "id_rincian":60
        },{
            "id_label":241,
            "label": "1",
            "nama": "Alamat tempat tinggal dan KTP/KK di dalam desa.",
            "id_rincian":61
        },{
            "id_label":242,
            "label": "2",
            "nama": "Alamat tempat tinggal di dalam desa tapi KTP/KK di luar desa.",
            "id_rincian":61
        },{
            "id_label":243,
            "label": "3",
            "nama": "Alamat tempat tinggal diluar desa tapi KTP/KK di dalam desa",
            "id_rincian":61
        },{
            "id_label":244,
            "label": "1",
            "nama": "Kartu Keluarga Sejahtera (KKS)/ Kartu Perlindungan Sosial (KPS)",
            "id_rincian":124
        },{
            "id_label":245,
            "label": "2",
            "nama": "Kartu Indonesia Pintar (KIP)/ Bantuan Siswa Miskin (BSM)",
            "id_rincian":124
        },{
            "id_label":246,
            "label": "3",
            "nama": "Kartu Indonesia Sehat (KIS)/ BPJS Kesehatan /Jamkesmas",
            "id_rincian":124
        },{
            "id_label":247,
            "label": "8",
            "nama": "Jaminan sosial tenaga kerja (Jamsostek)/ BPJS ketenagakerjaan",
            "id_rincian":124
        },{
            "id_label":248,
            "label": "16",
            "nama": "Asuransi kesehatan lainnya",
            "id_rincian":124
        },{
            "id_label":249,
            "label": "32",
            "nama": "Program Keluarga Harapan (PKH)",
            "id_rincian":124
        },{
            "id_label":250,
            "label": "64",
            "nama": "Bantuan Pangan Non Tunai (BPNT)",
            "id_rincian":124
        },{
            "id_label":251,
            "label": "65",
            "nama": "Kredit Usaha Rakyat (KUR)",
            "id_rincian":124
        },{
            "id_label":252,
            "label": "66",
            "nama": "Bukan peserta bansos",
            "id_rincian":124
        },{
            "id_label":252,
            "label": "1",
            "nama": "Pekarangan",
            "id_rincian":63
        },{
            "id_label":253,
            "label": "2",
            "nama": "Sawah Irigasi",
            "id_rincian":64
        },{
            "id_label":254,
            "label": "3",
            "nama": "Sawah Tadah Hujan",
            "id_rincian":64
        },{
            "id_label":255,
            "label": "4",
            "nama": "Tegalan",
            "id_rincian":64
        },{
            "id_label":256,
            "label": "5",
            "nama": "Kolam",
            "id_rincian":64
        },{
            "id_label":257,
            "label": "5",
            "nama": "Kolam",
            "id_rincian":64
        },{
            "id_label":258,
            "label": "1",
            "nama": "Ada SPPT",
            "id_rincian":65
        },{
            "id_label":259,
            "label": "2",
            "nama": "Tidak Ada SPPT",
            "id_rincian":65
        },{
            "id_label":260,
            "label": "1",
            "nama": "SHM",
            "id_rincian":68
        },{
            "id_label":261,
            "label": "2",
            "nama": "HGB",
            "id_rincian":68
        },{
            "id_label":262,
            "label": "3",
            "nama": "Tidak Bersertifikat",
            "id_rincian":68
        },{
            "id_label": 265,
            "label": "1",
            "nama": "Padi",
            "id_rincian": 101
        },
        {
            "id_label": 266,
            "label": "2",
            "nama": "Palawija",
            "id_rincian": 101
        },
        {
            "id_label": 267,
            "label": "3",
            "nama": "Hortikultura",
            "id_rincian": 101
        },
        {
            "id_label": 268,
            "label": "4",
            "nama": "Karet",
            "id_rincian": 101
        },
        {
            "id_label": 269,
            "label": "5",
            "nama": "Kelapa Sawit",
            "id_rincian": 101
        },
        {
            "id_label": 270,
            "label": "6",
            "nama": "Kopi",
            "id_rincian": 101
        },
        {
            "id_label": 271,
            "label": "7",
            "nama": "Kakao",
            "id_rincian": 101
        },
        {
            "id_label": 272,
            "label": "8",
            "nama": "Kelapa",
            "id_rincian": 101
        },
        {
            "id_label": 273,
            "label": "9",
            "nama": "Lada",
            "id_rincian": 101
        },
        {
            "id_label": 274,
            "label": "10",
            "nama": "Cengkeh",
            "id_rincian": 101
        },
        {
            "id_label": 275,
            "label": "11",
            "nama": "Tembakau",
            "id_rincian": 101
        },
        {
            "id_label": 276,
            "label": "12",
            "nama": "Tebu",
            "id_rincian": 101
        },
        {
            "id_label": 277,
            "label": "13",
            "nama": "Sapi potong",
            "id_rincian": 101
        },
        {
            "id_label": 278,
            "label": "14",
            "nama": "Susu sapi",
            "id_rincian": 101
        },
        {
            "id_label": 279,
            "label": "15",
            "nama": "Domba",
            "id_rincian": 101
        },
        {
            "id_label": 280,
            "label": "16",
            "nama": "Ternak besar lainnya",
            "id_rincian": 101
        },
        {
            "id_label": 281,
            "label": "17",
            "nama": "Ayam pedaging",
            "id_rincian": 101
        },
        {
            "id_label": 282,
            "label": "18",
            "nama": "Telur Ayam",
            "id_rincian": 101
        },
        {
            "id_label": 283,
            "label": "19",
            "nama": "Ternak kecil lainnya",
            "id_rincian": 101
        },
        {
            "id_label": 284,
            "label": "20",
            "nama": "Perikanan tangkap",
            "id_rincian": 101
        },
        {
            "id_label": 285,
            "label": "21",
            "nama": "Perikanan budidaya",
            "id_rincian": 101
        },
        {
            "id_label": 286,
            "label": "22",
            "nama": "Bambu",
            "id_rincian": 101
        },
        {
            "id_label": 287,
            "label": "23",
            "nama": "Budidaya tanaman kehutanan",
            "id_rincian": 101
        },
        {
            "id_label": 288,
            "label": "24",
            "nama": "Pemungutan hasil hutan",
            "id_rincian": 101
        },
        {
            "id_label": 289,
            "label": "25",
            "nama": "Penangkapan satwa liar",
            "id_rincian": 101
        },
        {
            "id_label": 290,
            "label": "26",
            "nama": "Penangkaran Satwa Liar",
            "id_rincian": 101
        },
        {
            "id_label": 291,
            "label": "27",
            "nama": "Jasa pertanian",
            "id_rincian": 101
        },
        {
            "id_label": 292,
            "label": "28",
            "nama": "Pertambangan dan Penggalian",
            "id_rincian": 101
        },
        {
            "id_label": 293,
            "label": "29",
            "nama": "Industri kerajinan",
            "id_rincian": 101
        },
        {
            "id_label": 294,
            "label": "30",
            "nama": "Industri pengolahan",
            "id_rincian": 101
        },
        {
            "id_label": 295,
            "label": "31",
            "nama": "Perdagangan",
            "id_rincian": 101
        },
        {
            "id_label": 296,
            "label": "32",
            "nama": "Warung dan rumah makan",
            "id_rincian": 101
        },
        {
            "id_label": 297,
            "label": "33",
            "nama": "Angkutan",
            "id_rincian": 101
        },
        {
            "id_label": 298,
            "label": "34",
            "nama": "Pergudangan",
            "id_rincian": 101
        },
        {
            "id_label": 299,
            "label": "35",
            "nama": "Komunikasi",
            "id_rincian": 101
        },
        {
            "id_label": 300,
            "label": "36",
            "nama": "Jasa di luar pertanian",
            "id_rincian": 101
        },
        {
            "id_label": 301,
            "label": "37",
            "nama": "Karyawan tetap",
            "id_rincian": 101
        },
        {
            "id_label": 302,
            "label": "38",
            "nama": "Karyawan tidak tetap",
            "id_rincian": 101
        },
        {
            "id_label": 303,
            "label": "39",
            "nama": "TNI",
            "id_rincian": 101
        },
        {
            "id_label": 304,
            "label": "40",
            "nama": "PNS",
            "id_rincian": 101
        },
        {
            "id_label": 305,
            "label": "41",
            "nama": "TKI di luar negeri",
            "id_rincian": 101
        },
        {
            "id_label": 306,
            "label": "42",
            "nama": "Sumbangan",
            "id_rincian": 101
        },
        {
            "id_label": 307,
            "label": "43",
            "nama": "Lainnya",
            "id_rincian": 101
        },
        {
            "id_label": 308,
            "label": "1",
            "nama": "Semua",
            "id_rincian": 106
        },
        {
            "id_label": 309,
            "label": "2",
            "nama": "Sebagian",
            "id_rincian": 106
        },
        {
            "id_label": 310,
            "label": "3",
            "nama": "Tidak",
            "id_rincian": 106
        },{
            "id_label": "311",
            "label": "0",
            "nama": "Muntaber",
            "id_rincian": 114
        },
        {
            "id_label": "312",
            "label": "1",
            "nama": "Demam berdarah",
            "id_rincian": 114
        },
        {
            "id_label": "313",
            "label": "2",
            "nama": "Campak",
            "id_rincian": 114
        },
        {
            "id_label": "314",
            "label": "3",
            "nama": "Malaria",
            "id_rincian": 114
        },
        {
            "id_label": "315",
            "label": "4",
            "nama": "Flu burung/SARS",
            "id_rincian": 114
        },
        {
            "id_label": "316",
            "label": "5",
            "nama": "Covid-19",
            "id_rincian": 114
        },
        {
            "id_label": "317",
            "label": "6",
            "nama": "Hepatitis B",
            "id_rincian": 114
        },
        {
            "id_label": "318",
            "label": "7",
            "nama": "Hepatitis E",
            "id_rincian": 114
        },
        {
            "id_label": "319",
            "label": "8",
            "nama": "Difteri",
            "id_rincian": 114
        },
        {
            "id_label": "320",
            "label": "9",
            "nama": "Chikungunya",
            "id_rincian": 114
        },
        {
            "id_label": "321",
            "label": "10",
            "nama": "Leptospirosis",
            "id_rincian": 114
        },
        {
            "id_label": "322",
            "label": "11",
            "nama": "Kolera",
            "id_rincian": 114
        },
        {
            "id_label": "323",
            "label": "12",
            "nama": "Gizi buruk (marasmus dan kwasiorkor)",
            "id_rincian": 114
        },
        {
            "id_label": "324",
            "label": "13",
            "nama": "Jantung",
            "id_rincian": 114
        },
        {
            "id_label": "325",
            "label": "14",
            "nama": "TBC paru-paru",
            "id_rincian": 114
        },
        {
            "id_label": "326",
            "label": "15",
            "nama": "Kanker",
            "id_rincian": 114
        },
        {
            "id_label": "327",
            "label": "16",
            "nama": "Diabetes/kencing manis/ gula",
            "id_rincian": 114
        },
        {
            "id_label": "328",
            "label": "17",
            "nama": "Lumpuh",
            "id_rincian": 114
        },
        {
            "id_label": "329",
            "label": "18",
            "nama": "Lainnya",
            "id_rincian": 114
        },
        {
            "id_label": "330",
            "label": "1",
            "nama": "Rumah sakit",
            "id_rincian": 115
        },
        {
            "id_label": "331",
            "label": "2",
            "nama": "Rumah sakit bersalin",
            "id_rincian": 115
        },
        {
            "id_label": "332",
            "label": "3",
            "nama": "Poliklinik",
            "id_rincian": 115
        },
        {
            "id_label": "333",
            "label": "4",
            "nama": "Puskesmas",
            "id_rincian": 115
        },
        {
            "id_label": "334",
            "label": "5",
            "nama": "Puskesmas pembantu/pustu",
            "id_rincian": 115
        },
        {
            "id_label": "335",
            "label": "6",
            "nama": "Polindes",
            "id_rincian": 115
        },
        {
            "id_label": "336",
            "label": "7",
            "nama": "Poskesdes",
            "id_rincian": 115
        },
        {
            "id_label": "337",
            "label": "8",
            "nama": "Posyandu",
            "id_rincian": 115
        },
        {
            "id_label": "338",
            "label": "9",
            "nama": "Apotik",
            "id_rincian": 115
        },
        {
            "id_label": "339",
            "label": "10",
            "nama": "Toko obat",
            "id_rincian": 115
        },
        {
            "id_label": "340",
            "label": "11",
            "nama": "Rumah sakit",
            "id_rincian": 115
        },
        {
            "id_label": "341",
            "label": "12",
            "nama": "Rumah sakit bersalin",
            "id_rincian": 115
        },{
            "id_label":263,
            "label": "1",
            "nama": "Kumuh",
            "id_rincian":100
        },{
            "id_label":264,
            "label": "2",
            "nama": "Tidak Kumuh",
            "id_rincian":100
        }]
    }
  },
  mutations: {
      setKuesioner(state, e){
        state.kuesioner = e
        state.created = true
        state.opened = true
      },
      setOpen(state, e){
        state.opened = e
      },
      updateIsi(state, e){
        if(state[e.blok]){
            let i = state[e.blok].rincian.findIndex(r => Number(r.id_rincian) == Number(e.id_rincian))
            if(i >= 0)
                state[e.blok].rincian[i].isi = e.isi
        }
      },
      insertBlok4(state, isi){
        state.kuesioner.blok_4.isi.push(isi)
        state.kuesioner.blok_8.isi.push([isi[0], isi[1]].concat(state.kuesioner.blok_8.rincian.map(e => ({
            id_rincian: e.id_rincian,
            nama: e.nama,
            isi: e.isi
        }))))
        state.kuesioner.blok_9.isi.push([isi[0], isi[1]].concat(state.kuesioner.blok_9.rincian.map(e => ({
            id_rincian: e.id_rincian,
            nama: e.nama,
            isi: e.isi
        }))))
        state.kuesioner.blok_10.isi.push([isi[0], isi[1]].concat(state.kuesioner.blok_10.rincian.map(e => ({
            id_rincian: e.id_rincian,
            nama: e.nama,
            isi: e.isi
        }))))
      },
      insertBlok5(state, isi){
        state.kuesioner.blok_5.isi.push(isi)
      },
      deleteBlok4(state, index){
        state.kuesioner.blok_4.isi.splice(index, 1)
        state.kuesioner.blok_8.isi.splice(index, 1)
        state.kuesioner.blok_9.isi.splice(index, 1)
        state.kuesioner.blok_10.isi.splice(index, 1)
      },
      deleteBlok5(state, index){
        state.kuesioner.blok_5.isi.splice(index, 1)
      },
      editBlok4(state, e){
        state.kuesioner.blok_4.isi[e.index].isi = e.isi
      },
      editBlok5(state, e){
        state.kuesioner.blok_5.isi[e.index].isi = e.isi
      },
      editBlok8(state, e){
        state.kuesioner.blok_8.isi[e.index].isi = e.isi
      },
      editBlok9(state, e){
        state.kuesioner.blok_9.isi[e.index].isi = e.isi
      },
      editBlok10(state, e){
        state.kuesioner.blok_10.isi[e.index].isi = e.isi
      },
      setCreated(state, e){
          state.created = e
      }
  },
  actions: {
  },
  modules: {
  }
})
