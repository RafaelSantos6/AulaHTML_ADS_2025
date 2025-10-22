
// Único listener para o botão calcular

function confirmar() {
const titulo = document.getElementById('titulo').value.trim();
const duracaoRaw = document.getElementById('duracao').value;
const duracao = parseInt(duracaoRaw, 10);
const saida = document.getElementById('saida');

// Validações básicas
const faltaTitulo = !titulo;
const duracaoInvalida = isNaN(duracao) || duracao < 0 || duracaoRaw === '';

if (faltaTitulo && duracaoInvalida) {
    saida.textContent = 'Por favor, preencha o título e a duração do filme.';
    return;
}

 const partes = [];
if (faltaTitulo) partes.push('Título não informado');
else partes.push(`Nome do filme: ${titulo}`);

if (duracaoInvalida) partes.push('Duração inválida');
else {
    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;
     partes.push(`Duração: ${horas}h ${minutos}m`);
 }

 // Mostra as informações juntas
saida.textContent = partes.join(' — ');
        }

// Vincula botão ao handler confirmar
document.getElementById('btnConfirmar').addEventListener('click', confirmar);
