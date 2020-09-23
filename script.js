const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]
let selectElement = document.querySelector('#submit')
submit.addEventListener('click', () => {
  let select1 = document.querySelector('#currency-select1').value
  let select2 = document.querySelector('#currency-select2').value
  let input = parseInt(document.querySelector('#input').value)
  fetch(`https://api.exchangeratesapi.io/latest?base=${select1}`)
  .then(response => response.json())
  .then(data => {
    let rate = input * data.rates[select2]
    let result = document.querySelector('.result')
    result.textContent = rate
})
})

// parseInt looks at a string value and turns it into an integer

// line 41 sets the base for which currency you are starting with

// data.rates grabs just the rates from the data in the api (insomnia)