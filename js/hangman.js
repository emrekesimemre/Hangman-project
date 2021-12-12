// const list = []

// const cities = async () => {
//   let response = await axios(
//     'https://gist.githubusercontent.com/serong/9b25594a7b9d85d3c7f7/raw/9904724fdf669ad68c07ab79af84d3a881ff8859/iller.json'
//   );
//   let cityList = response.data;
//   console.log(cityList);
//   newCityList = Object.values(cityList);
//   console.log(newCityList);
//   newCityList.forEach((item) => {
//     list.push(item)
//   })
// };
// cities();
// console.log(list);
// const newList = Array.from(list)
// console.log(newList);

let cityList = [
  'ADANA',
  'ADIYAMAN',
  'AFYONKARAHİSAR',
  'AĞRI',
  'AMASYA',
  'ANKARA',
  'ANTALYA',
  'ARTVİN',
  'AYDIN',
  'BALIKESİR',
  'BİLECİK',
  'BİNGÖL',
  'BİTLİS',
  'BOLU',
  'BURDUR',
  'BURSA',
  'ÇANAKKALE',
  'ÇANKIRI',
  'ÇORUM',
  'DENİZLİ',
  'DİYARBAKIR',
  'EDİRNE',
  'ELAZIĞ',
  'ERZİNCAN',
  'ERZURUM',
  'ESKİŞEHİR',
  'GAZİANTEP',
  'GİRESUN',
  'GÜMÜŞHANE',
  'HAKKARİ',
  'HATAY',
  'ISPARTA',
  'MERSİN',
  'İSTANBUL',
  'İZMİR',
  'KARS',
  'KASTAMONU',
  'KAYSERİ',
  'KIRKLARELİ',
  'KIRŞEHİR',
  'KOCAELİ',
  'KONYA',
  'KÜTAHYA',
  'MALATYA',
  'MANİSA',
  'KAHRAMANMARAŞ',
  'MARDİN',
  'MUĞLA',
  'MUŞ',
  'NEVŞEHİR',
  'NİĞDE',
  'ORDU',
  'RİZE',
  'SAKARYA',
  'SAMSUN',
  'SİİRT',
  'SİNOP',
  'SİVAS',
  'TEKİRDAĞ',
  'TOKAT',
  'TRABZON',
  'TUNCELİ',
  'ŞANLIURFA',
  'UŞAK',
  'VAN',
  'YOZGAT',
  'ZONGULDAK',
  'AKSARAY',
  'BAYBURT',
  'KARAMAN',
  'KIRIKKALE',
  'BATMAN',
  'ŞIRNAK',
  'BARTIN',
  'ARDAHAN',
  'IĞDIR',
  'YALOVA',
  'KARABÜK',
  'KİLİS',
  'OSMANİYE',
  'DÜZCE',
];

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];

function randomWord() {
  answer=
    cityList[
      Math.floor(Math.random() * cityList.length)
    ];
    
}

function generateButtons() {
  let buttonsHTML = 'ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ'
    .split('')
    .map(
      (letter) =>
        `
  <button class = "btn btn-lg btn-primary m-2"
  id= '` +
        letter +
        `'
  onClick="handleGuess('` +
        letter +
        `')">` +
        letter +
        `</button>

  `
    )
    .join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

document.getElementById('maxWrong').innerHTML = maxWrong;

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = `./image/${mistakes}.jpg`;
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById(
      'wordSpotlight'
    ).innerHTML = ` The answer was: ${answer}`;
    document.getElementById('keyboard').innerHTML = 'You Lost!!';
  }
}

function guessedWord() {
  wordStatus = answer
    .split('')
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : ' _ '))
    .join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}
randomWord();
generateButtons();
guessedWord();
