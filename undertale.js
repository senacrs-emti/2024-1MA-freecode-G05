const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 500;

// Configurações do jogador
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    speed: 6,
    color: "#04a31e",
    health: 100,
    shield: false,
    shieldDuration: 0,
    speedBoost: false,
    speedBoostDuration: 0,
    weapon: 'normal',  // Tipo de arma do jogador
    weaponLevel: 1,    // Nível da arma
    lives: 3           // Vidas do jogador
};

// Controle de teclas
const keys = { up: false, down: false, left: false, right: false };

// Projéteis
let projectiles = [];
const maxProjectiles = 20;
const projectileSpeed = 4;
const spawnRate = 1000;
let stage = 1;

// Inimigos
let enemies = [];
const enemySpeed = 3;
let score = 0; // Pontuação
let healthBar = document.getElementById("health"); // Elemento de saúde

// Itens no jogo
let items = [];

// Fases e obstáculos
let obstacles = [];
let bosses = [];

// Função para desenhar o jogador
function drawPlayer() {
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = player.shield ? "blue" : "white";  // Escudo
    ctx.stroke();
    ctx.closePath();
}

// Função para desenhar obstáculos
function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.fillStyle = "gray";
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

// Função para desenhar inimigos
function drawEnemies() {
    enemies.forEach(enemy => {
        ctx.beginPath();
        ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
        ctx.fillStyle = enemy.type === "shooter" ? "orange" : "red";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
    });
}

// Função para desenhar boss
function drawBoss() {
    bosses.forEach(boss => {
        ctx.beginPath();
        ctx.arc(boss.x, boss.y, boss.radius, 0, Math.PI * 2);
        ctx.fillStyle = "purple";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
    });
}

// Função para desenhar itens
function drawItems() {
    items.forEach(item => {
        ctx.beginPath();
        ctx.arc(item.x, item.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = item.type === "health" ? "green" : "yellow";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
    });
}

// Função para desenhar a pontuação
function drawScore() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Pontuação: " + score, 10, 30);
}

// Função para criar projéteis
function spawnProjectileCross() {
    const size = 20;
    const speed = projectileSpeed * 2.5;
    if (projectiles.length < maxProjectiles) {
        // Gerar 4 projéteis (cima, baixo, esquerda, direita)
        projectiles.push({ x: player.x, y: 0, width: size, height: size, velocityX: 0, velocityY: speed });
        projectiles.push({ x: player.x, y: canvas.height, width: size, height: size, velocityX: 0, velocityY: -speed });
        projectiles.push({ x: 0, y: player.y, width: size, height: size, velocityX: speed, velocityY: 0 });
        projectiles.push({ x: canvas.width, y: player.y, width: size, height: size, velocityX: -speed, velocityY: 0 });
    }
}

// Função para gerar inimigos
function spawnEnemies() {
    const radius = 15;
    if (enemies.length < 5) {
        enemies.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: radius,
            speed: enemySpeed,
            type: Math.random() > 0.5 ? "shooter" : "melee"  // Tipo de inimigo
        });
    }
}

// Função para gerar boss
function spawnBoss() {
    const radius = 50;
    bosses.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: radius,
        health: 200,
        speed: 2,
        attackPattern: "shoot" // Padrão de ataque do boss
    });
}

// Função para gerar itens
function spawnItem() {
    const itemType = Math.random() > 0.5 ? "health" : "speed";
    items.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        type: itemType
    });
}

// Função para gerar obstáculos
function spawnObstacle() {
    obstacles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: 50 + Math.random() * 50,
        height: 50 + Math.random() * 50
    });
}

// Função para detectar colisões
function isColliding(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}

// Função de atualização do jogo
function update() {
    // Movimento do jogador
    if (keys.up && player.y > player.radius) player.y -= player.speed;
    if (keys.down && player.y < canvas.height - player.radius) player.y += player.speed;
    if (keys.left && player.x > player.radius) player.x -= player.speed;
    if (keys.right && player.x < canvas.width - player.radius) player.x += player.speed;

    // Limpar a tela
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar o jogador, obstáculos, inimigos, boss, itens e pontuação
    drawPlayer();
    drawScore();
    drawEnemies();
    drawBoss();
    drawItems();
    drawObstacles();

    // Atualizar projéteis
    for (let i = 0; i < projectiles.length; i++) {
        let projectile = projectiles[i];

        projectile.x += projectile.velocityX;
        projectile.y += projectile.velocityY;

        // Desenhar projétil
        ctx.fillStyle = "red";
        ctx.fillRect(projectile.x, projectile.y, projectile.width, projectile.height);

        // Verificar colisões com inimigos
        for (let j = 0; j < enemies.length; j++) {
            if (isColliding(projectile, enemies[j])) {
                enemies.splice(j, 1); // Remover inimigo
                score += 10; // Aumentar a pontuação
                projectiles.splice(i, 1); // Remover projétil
                i--; // Ajustar o índice
                break;
            }
        }

        // Verificar colisão com o boss
        for (let j = 0; j < bosses.length; j++) {
            if (isColliding(projectile, bosses[j])) {
                bosses[j].health -= 10; // Diminuir vida do boss
                if (bosses[j].health <= 0) {
                    bosses.splice(j, 1); // Remover boss derrotado
                    score += 100; // Aumentar pontuação ao derrotar o boss
                }
                projectiles.splice(i, 1); // Remover projétil
                i--; // Ajustar o índice
                break;
            }
        }

        // Remover projéteis fora da tela
        if (projectile.x < 0 || projectile.x > canvas.width || projectile.y < 0 || projectile.y > canvas.height) {
            projectiles.splice(i, 1);
            i--; // Ajustar o índice após remoção
        }
    }

    // Atualizar inimigos
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        // Movimento dos inimigos
        const angle = Math.atan2(player.y - enemy.y, player.x - enemy.x);
        enemy.x += Math.cos(angle) * enemy.speed;
        enemy.y += Math.sin(angle) * enemy.speed;

        // Verificar colisão com o jogador
        if (isColliding(player, enemy)) {
            if (!player.shield) {
                player.health -= 10;
                healthBar.innerText = player.health;
            }
            enemies.splice(i, 1); // Remover inimigo
            i--; // Ajustar o índice após remoção
        }
    }

    // Atualizar boss
    for (let i = 0; i < bosses.length; i++) {
        let boss = bosses[i];
        // Movimento e ataques do boss
        const angle = Math.atan2(player.y - boss.y, player.x - boss.x);
        boss.x += Math.cos(angle) * boss.speed;
        boss.y += Math.sin(angle) * boss.speed;

        // Padrão de ataque do boss
        if (boss.attackPattern === "shoot") {
            // Boss atira projéteis em direção ao jogador
            spawnProjectileCross();
        }

        // Verificar colisão com o jogador
        if (isColliding(player, boss)) {
            if (!player.shield) {
                player.health -= 20;
                healthBar.innerText = player.health;
            }
        }
    }

    // Atualizar itens
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        if (isColliding(player, item)) {
            if (item.type === "health") {
                player.health = Math.min(player.health + 20, 100);
                healthBar.innerText = player.health;
            } else if (item.type === "speed") {
                player.speedBoost = true;
                player.speedBoostDuration = 300; // Duração do power-up
            }
            items.splice(i, 1); // Remover item
            i--; // Ajustar o índice após remoção
        }
    }

    // Aplicar aumento de velocidade
    if (player.speedBoost && player.speedBoostDuration > 0) {
        player.speed = 10;
        player.speedBoostDuration--;
    } else {
        player.speed = 6;
    }

    // Spawn de inimigos, boss e obstáculos
    if (Math.random() < 0.05) spawnEnemies();
    if (Math.random() < 0.02) spawnBoss();
    if (Math.random() < 0.1) spawnItem();
    if (Math.random() < 0.05) spawnObstacle();
    
    // Game Over caso a vida do jogador chegue a 0
    if (player.health <= 0) {
        alert("Game Over! Sua pontuação final foi: " + score);
        resetGame();
    }

    // Loop de atualização
    requestAnimationFrame(update);
}

// Função para resetar o jogo
function resetGame() {
    player.health = 100;
    player.lives--;
    score = 0;
    enemies = [];
    items = [];
    bosses = [];
    obstacles = [];
    if (player.lives > 0) {
        update();
    } else {
        alert("Você perdeu todas as vidas!");
    }
}

// Escuta das teclas
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") keys.up = true;
    if (e.key === "ArrowDown") keys.down = true;
    if (e.key === "ArrowLeft") keys.left = true;
    if (e.key === "ArrowRight") keys.right = true;
    if (e.key === " ") spawnProjectileCross();  // Tiro
});
document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowUp") keys.up = false;
    if (e.key === "ArrowDown") keys.down = false;
    if (e.key === "ArrowLeft") keys.left = false;
    if (e.key === "ArrowRight") keys.right = false;
});

// Iniciar o jogo
update();
