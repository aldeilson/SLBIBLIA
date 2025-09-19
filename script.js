const antigoTestamento = [
  "Gênesis",
  "Êxodo",
  "Levítico",
  "Números",
  "Deuteronômio",
  "Josué",
  "Juízes",
  "Rute",
  "1 Samuel",
  "2 Samuel",
  "1 Reis",
  "2 Reis",
  "1 Crônicas",
  "2 Crônicas",
  "Esdras",
  "Neemias",
  "Ester",
  "Jó",
  "Salmos",
  "Provérbios",
  "Eclesiastes",
  "Cânticos",
  "Isaías",
  "Jeremias",
  "Lamentações",
  "Ezequiel",
  "Daniel",
  "Oséias",
  "Joel",
  "Amós",
  "Obadias",
  "Jonas",
  "Miquéias",
  "Naum",
  "Habacuque",
  "Sofonias",
  "Ageu",
  "Zacarias",
  "Malaquias",
]

const novoTestamento = [
  "Mateus",
  "Marcos",
  "Lucas",
  "João",
  "Atos",
  "Romanos",
  "1 Coríntios",
  "2 Coríntios",
  "Gálatas",
  "Efésios",
  "Filipenses",
  "Colossenses",
  "1 Tessalonicenses",
  "2 Tessalonicenses",
  "1 Timóteo",
  "2 Timóteo",
  "Tito",
  "Filemom",
  "Hebreus",
  "Tiago",
  "1 Pedro",
  "2 Pedro",
  "1 João",
  "2 João",
  "3 João",
  "Judas",
  "Apocalipse",
]

const livros = [...antigoTestamento, ...novoTestamento]


function sortearLivro() {
  const indice = Math.floor(Math.random() * livros.length)
  const livro = livros[indice]

  livroAtual = livro

  let testamento = ""
  if (antigoTestamento.includes(livro)) {
    testamento = "📜 Antigo Testamento"
  } else {
    testamento = "✝️ Novo Testamento"
  }

  document.getElementById("resultado").innerHTML =
    "📖 " + livro + "<br>" + testamento

      resultado.classList.add("sorteado")
  }