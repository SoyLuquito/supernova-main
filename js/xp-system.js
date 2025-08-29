// Sistema de XP e HP
class XpSystem {
  static calculateMaxHp(level) {
    return 100 + Math.pow(level, 2) * 2;
  }

  static calculateXpNeeded(level) {
    return 94495 * Math.pow(1.05826, level);
  }

  static updatePlayerUI(playerData) {
    // Atualiza o nível
    document.getElementById('classe-personagem').textContent = 
      `${capitalizeFirstLetter(playerData.classe)} - Nível ${playerData.nivel}`;
    
    // Atualiza HP
    const maxHp = this.calculateMaxHp(playerData.nivel);
    updateStatusBar('.hp-bar', playerData.hp, maxHp);
    
    // Atualiza XP
    const xpNeeded = this.calculateXpNeeded(playerData.nivel);
    updateStatusBar('.xp-bar', playerData.experiencia, xpNeeded);
  }
}

// Função auxiliar (já existente no seu código)
function capitalizeFirstLetter(string) {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
}

// Função auxiliar (já existente no seu código)
function updateStatusBar(selector, current, max) {
  if (current !== undefined && max !== undefined) {
    const percent = (current / max) * 100;
    const bar = document.querySelector(selector);
    if (bar) {
      bar.style.width = `${percent}%`;
      if (bar.nextElementSibling) {
        bar.nextElementSibling.textContent = `${Math.floor(current)}/${Math.floor(max)}`;
      }
    }
  }
}