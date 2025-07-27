const currency = [
  "USD", // United States Dollar
  "PKR", // Pakistani Rupee
  "INR", // Indian Rupee
  "EUR", // Euro
  "GBP", // British Pound
  "AUD", // Australian Dollar
  "CAD", // Canadian Dollar
  "JPY", // Japanese Yen
  "CNY", // Chinese Yuan
  "SAR", // Saudi Riyal
  "AED", // UAE Dirham
  "TRY", // Turkish Lira
  "CHF", // Swiss Franc
  "RUB", // Russian Ruble
  "BDT", // Bangladeshi Taka
  "MYR", // Malaysian Ringgit
  "SGD", // Singapore Dollar
  "ZAR", // South African Rand
  "LKR", // Sri Lankan Rupee
  "IDR", // Indonesian Rupiah
  "THB", // Thai Baht
  "EGP", // Egyptian Pound
  "NGN", // Nigerian Naira
  "PHP", // Philippine Peso
  "BRL", // Brazilian Real
  "ARS", // Argentine Peso
  "MXN", // Mexican Peso
  "NZD", // New Zealand Dollar
  "QAR", // Qatari Riyal
  "KWD", // Kuwaiti Dinar
  "VND", // Vietnamese Dong
  "DKK", // Danish Krone
  "NOK", // Norwegian Krone
  "SEK", // Swedish Krona
  "HKD", // Hong Kong Dollar
  "JOD", // Jordanian Dinar
  "IQD", // Iraqi Dinar
  "AFN", // Afghan Afghani
  "OMR", // Omani Rial
  "BHD"  // Bahraini Dinar
];

//From currency section
const fromContainer= document.querySelector(".fromCurrency")
const fromSelect = document.createElement("select");
fromSelect.id = 'fromSelect'
fromContainer.appendChild(fromSelect);

currency.forEach((x)=>{
    const fromOption = document.createElement("option");
    fromOption.id = 'fromOption';
    fromOption.innerHTML = x;
    fromSelect.appendChild(fromOption)
})

//To currency section
const toContainer= document.querySelector(".toCurrency");
const toSelect = document.createElement("select");
toSelect.id = 'toSelect';
toContainer.appendChild(toSelect);

// Creating options 
currency.forEach((element)=>{
  const toOption = document.createElement("option");
  toOption.id = 'toOption';
  toOption.innerHTML = element;
  toSelect.appendChild(toOption);
})

async function currencyGetter(){
    // select from section
    const selectFrom = document.getElementById("fromSelect");
    const selectedFrom_Value = selectFrom.value.toUpperCase();
    // select to section
    const selectTo = document.getElementById("toSelect");
    const selectedTo_Value = selectTo.value.toUpperCase();
    // Amount
    const input = document.getElementById("amount");
    const amount = input.value;
    console.log("Selected Currency:", selectedFrom_Value,selectedTo_Value);
    const key = '7854c7eec4-4ef7777781-t027ui'
    const url = `https://api.fastforex.io/convert?from=${selectedFrom_Value}&to=${selectedTo_Value}&amount=${amount}&api_key=${key}`
    
    try {
       const response = await fetch(url);
       const data  = await response.json();
        if (amount == "") {
              alert("Please enter some amount in the input field.")
            }
            
            const convertedAmount = document.getElementById("text");
            convertedAmount.innerHTML =   `${amount + " " + data.base} = ${Math.round(data["result"][`${selectedTo_Value}`]) + " " + selectedTo_Value}`
            
          } catch (error) {
              console.log("ERROR");
    }
}
