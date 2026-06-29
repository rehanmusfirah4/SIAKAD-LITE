var formLogin = document.getElementById('formLogin');

if(formLogin !== null){
    formLogin.addEventListener('submit', function(event){
        event.preventDefault();
    
        var nim = document.getElementById('inputNim').value;
        var password = document.getElementById('inputPassword').value;
    
        var pesanError = document.getElementById('pesanError');
    
        var nimBenar = '250212017';
        var passwordBenar = 'Rehan123';
    
        if(nim === nimBenar && password === passwordBenar){
            window.location.href = 'dashboard.html';
        }else{
            pesanError.classList.remove('d-none');
        }
    
    });

}


var elemenTabel = document.getElementById('isiTabel');

if (elemenTabel !== null) {
  var dataJadwal = [
    { matakuliah: 'Jaringan Komputer', waktu: '07.45 - 09.25', ruang: 'Bengkel Komputer Tarbiyah B', status:'Berlangsung' },
    { matakuliah: 'Pemrograman Web', waktu: '10.25 - 12.55', ruang: 'Lab Multifungsi', status: 'Akan Datang' },
    { matakuliah: 'Struktur Data', waktu: '14.00 - 15.40', ruang: 'Tarbiyah A Lantai 1', status: 'Akan Datang' },
    { matakuliah: 'Bahasa Inggris', waktu: '14.00 - 15.40', ruang: 'RKU lantai 2', status: 'Akan Datang' },
    { matakuliah: 'Psikologi Pendidikan', waktu: '15.40 - 18.05', ruang: 'Tarbiyah A', status: 'Akan Datang' }
  ];

  var isiBaris = '';

  for (var i = 0; i < dataJadwal.length; i++) {
    var jadwalIni = dataJadwal[i];
    var badgeStatus = '';

    if (jadwalIni.status === 'Berlangsung') {
      badgeStatus = '<span class="badge bg-success">Berlangsung</span>';
    } else {
      badgeStatus = '<span class="badge bg-secondary">Akan Datang</span>';
    }

    isiBaris += '<tr>';
    isiBaris += '<td>' + (i + 1) + '</td>';
    isiBaris += '<td>' + jadwalIni.matakuliah + '</td>';
    isiBaris += '<td>' + jadwalIni.waktu + '</td>';
    isiBaris += '<td>' + jadwalIni.ruang + '</td>';
    isiBaris += '<td>' + badgeStatus + '</td>';
    isiBaris += '</tr>';
  }

  elemenTabel.innerHTML = isiBaris;
}

var elemenMatkul = document.getElementById('tabelMatkul');

if (elemenMatkul !== null) {
  var dataMatkul = [
    { kode: 'PW02', nama: 'Jaringan Komputer', sks: 3, status: 'proses', dosen: 'Oris Krianto Sulaiman, S.T., M.Kom.	', hari: 'Selasa', jam: '07.45 - 10.20' },
    { kode: 'JRK02', nama: 'Pemrograman Web', sks: 3, status: 'proses', dosen: 'Ridwan, S.S.T.,M.T.', hari: 'Selasa', jam: '10.20 - 12.55' },
    { kode: 'STD05', nama: 'Struktur Data', sks: 2, status: 'lulus', dosen: 'Qurrata A’yuni, S.T., M.T', hari: 'Kamis', jam: '07.45 - 09.25' },
    { kode: 'PPE26', nama: 'Psikologi Pendidikan', sks: 2, status: 'lulus', dosen: 'Isnawardatul Bararah, S.Ag., M.Pd.', hari: 'Rabu', jam: '11.15 - 12.55' },
    { kode: 'BIN36', nama: 'Bahasa Inggris', sks: 2, status: 'lulus', dosen: 'Nur Akmaliyah, S.Pd.I., M.A.', hari: 'Jumat', jam: '14.00 - 15.40' },
    { kode: 'LKD38', nama: 'Literasi Komputer dan Digital', sks: 2, status: 'lulus', dosen: 'Akrimy, S.Pd., M.Pd.', hari: 'Sabtu', jam: '07.45 - 09.25' }
  ];

  function tampilkanTabel(filter) {

    var keyword = "";

    if(document.getElementById("inputCari")){
        keyword = document.getElementById("inputCari").value.toLowerCase();
    }

    var baris = "";

    for(var i=0;i<dataMatkul.length;i++){

        var mk = dataMatkul[i];

        if(
            (filter=="semua" || mk.status==filter)
            &&
            mk.nama.toLowerCase().includes(keyword)
        ){

            var badge="";

            if(mk.status=="lulus"){
                badge='<span class="badge bg-success">Lulus</span>';
            }else{
                badge='<span class="badge bg-primary">Sedang Diambil</span>';
            }

            baris+="<tr>";
            baris+="<td>"+mk.kode+"</td>";
            baris+="<td>"+mk.nama+"</td>";
            baris+="<td>"+mk.sks+"</td>";
            baris+="<td>"+badge+"</td>";
            baris+='<td><button class="btn btn-info btn-sm" onclick="bukaModal('+i+')">Detail</button></td>';
            baris+="</tr>";

        }

    }

    elemenMatkul.innerHTML=baris;

}

    
  window.bukaModal = function(indeks) {
    var mk = dataMatkul[indeks];
    document.getElementById('judulModal').innerHTML = mk.nama;

    var kontenModal = '<table class="table table-sm">';
    kontenModal += '<tr><th>Kode MK</th><td>' + mk.kode + '</td></tr>';
    kontenModal += '<tr><th>SKS</th><td>' + mk.sks + ' SKS</td></tr>';
    kontenModal += '<tr><th>Dosen</th><td>' + mk.dosen + '</td></tr>';
    kontenModal += '<tr><th>Hari</th><td>' + mk.hari + '</td></tr>';
    kontenModal += '<tr><th>Jam</th><td>' + mk.jam + '</td></tr>';
    kontenModal += '</table>';

    document.getElementById('isiModal').innerHTML = kontenModal;

    var modal = new bootstrap.Modal(document.getElementById('modalDetail'));
    modal.show();
  };

  var tombolFilter = document.querySelectorAll('#grupFilter button');

  for (var j = 0; j < tombolFilter.length; j++) {
    tombolFilter[j].addEventListener('click', function() {
      var nilaiFilter = this.getAttribute('data-filter');
      tampilkanTabel(nilaiFilter);
    });
  }

  tampilkanTabel('semua');
}

var inputCari = document.getElementById("inputCari");

if(inputCari){

    inputCari.addEventListener("input",function(){

        tampilkanTabel("semua");

    });

}

var elemenFormData = document.getElementById('formData');

if (elemenFormData !== null) {
  elemenFormData.addEventListener('submit', function(event) {
    event.preventDefault();

    var nama = document.getElementById('inputNama').value.trim();
    var email = document.getElementById('inputEmail').value.trim();
    var hp = document.getElementById('inputHp').value.trim();
    var jurusan = document.getElementById('inputJurusan').value;
    var alamat = document.getElementById('inputAlamat').value.trim();

    var semuaInput = document.querySelectorAll('.form-control, .form-select');
    for (var k = 0; k < semuaInput.length; k++) {
      semuaInput[k].classList.remove('is-invalid');
    }

    var adaError = false;

    if (nama === '') {
      document.getElementById('inputNama').classList.add('is-invalid');
      adaError = true;
    }

    if (email === '') {
      document.getElementById('inputEmail').classList.add('is-invalid');
      adaError = true;
    }

    if (jurusan === '') {
      document.getElementById('inputJurusan').classList.add('is-invalid');
      adaError = true;
    }

    if (adaError === true) {
      return;
    }

    var pesanSukses = document.getElementById('pesanSukses');
    pesanSukses.classList.remove('d-none');

    var namajurusan = '';
    if (jurusan === 'TI') {
      namajurusan = 'Pendidikan Teknologi  Informasi';
    } else if (jurusan === 'SI') {
      namajurusan = 'Bahasa Inggris';
    } else {
      namajurusan = 'Teknik Pertanian';
    }

    var isiPratinjau = '';
    isiPratinjau += '<p><strong>Nama:</strong> ' + nama + '</p>';
    isiPratinjau += '<p><strong>Email:</strong> ' + email + '</p>';

    if (hp !== '') {
      isiPratinjau += '<p><strong>No. HP:</strong> ' + hp + '</p>';
    }

    isiPratinjau += '<p><strong>Jurusan:</strong> ' + namajurusan + '</p>';

    if (alamat !== '') {
      isiPratinjau += '<p><strong>Alamat:</strong> ' + alamat + '</p>';
    }

    document.getElementById('isiPratinjau').innerHTML = isiPratinjau;
    document.getElementById('pratinjauData').classList.remove('d-none');

    window.scrollTo(0, 0);
  });
}

if (document.getElementById("totalSks")) {

    animasiAngka("totalSks", 20, "");
    animasiAngka("nilaiIpk", 3.92, "");
    animasiAngka("persenHadir", 95, "%");

}

function animasiAngka(id, target, simbol) {

    var angka = 0;

    var interval = setInterval(function(){

        angka += target / 40;

        if(angka >= target){
            angka = target;
            clearInterval(interval);
        }

        if(target % 1 !== 0){
            document.getElementById(id).innerHTML = angka.toFixed(2) + simbol;
        }else{
            document.getElementById(id).innerHTML = Math.floor(angka) + simbol;
        }

    },30);

}

var btnKeluar = document.getElementById("btnKeluar");

if(btnKeluar){

    btnKeluar.addEventListener("click",function(event){

        event.preventDefault();

        var setuju = confirm("Apakah Anda yakin ingin keluar?");

        if(setuju){
            window.location.href="index.html";
        }

    });

}