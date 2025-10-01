const promotion = [
  "Café + Bolo de chocolate por R$9,00!",
  "Leve 2 cafés e ganhe um pão de queijo!",
  "Combo da tarde: Cappuccino + Brownie por R$12,00!"
];

const button = document.getElementById('seePromotion');
const message = document.getElementById('messagePromotion');
if (button && message) { // garante que os elementos existem
  button.addEventListener('click', () => {
    const sortition = Math.floor(Math.random() * promotion.length);
    message.style.opacity = 0; // desaparece
    setTimeout(() => {
      message.textContent = promotion[sortition];
      message.style.opacity = 1; // reaparece
    }, 200);
  });
} else {
  console.error("Elemento não encontrado no HTML");
}
