$('form#form-mobil').on('submit', function (e) {
  e.preventDefault()
  var payload = {
    name: $('#car-name').val(),
    brand: $('#car-brand').val(),
    telp: $('#car-telp').val(),
    email: $('#car-email').val(),
    desc: $('#car-desc').val()
  }

  var dataNotComplete = Object.keys(payload).find(function(key) {
    return !payload[key]
  })

  if (dataNotComplete) {
    $('#error-msg').text(dataNotComplete + ' masih kosong')
  } else {
    axios.post('/api/register-car').then(function (resp) {
      var res = resp.data
      if (res.status) {
        $('#error-msg').text('')
        $('#success-msg').text('Pendaftaran berhasil!!, silahkan tunggu tim kami untuk menghubungi anda di nomor dan alamat email yang telah di berikan')
        $('form#form-mobil').find('input, textarea').val('')
      } else {
        $('#error-msg').text(res.data)
      }
    }).catch(function (err) {
      console.error(err)
      $('#error-msg').text(err)
    })
  }
})