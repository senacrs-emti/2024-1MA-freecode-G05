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
    color: "#04a31e", // Amarelo ouro
    health: 100
};

// Controle de teclas
const keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

// Projéteis
let projectiles = [];
const projectileSpeed = 4;
const spawnRate = 1000;
let stage = 1;

// Função para desenhar o jogador
function drawPlayer() {
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();
}

// Função para gerar projéteis
function spawnProjectileCross() {
    const size = 20;
    const speed = projectileSpeed * 2.5;

    // Gerar 4 projéteis (cima, baixo, esquerda, direita)
    projectiles.push({ x: player.x, y: 0, width: size, height: size, velocityX: 0, velocityY: speed });
    projectiles.push({ x: player.x, y: canvas.height, width: size, height: size, velocityX: 0, velocityY: -speed });
    projectiles.push({ x: 0, y: player.y, width: size, height: size, velocityX: speed, velocityY: 0 });
    projectiles.push({ x: canvas.width, y: player.y, width: size, height: size, velocityX: -speed, velocityY: 0 });
}

// Função para projéteis teleguiados
function spawnHomingProjectile() {
    const size = 15;
    const projectile = {
        x: Math.random() > 0.5 ? 0 : canvas.width, // Nasce na borda esquerda ou direita
        y: Math.random() * canvas.height,
        width: size,
        height: size,
        speed: 3,
        homing: true, // Segue o jogador
    };
    projectiles.push(projectile);
}

// Projéteis que mudam de direção
function spawnCurvedProjectile() {
    const size = 20;
    let direction = Math.random() > 1 ? 1 : -1;

    let projectile = {
        x: 0,
        y: Math.random() * canvas.height,
        width: size,
        height: size,
        velocityX: projectileSpeed,
        velocityY: direction * projectileSpeed / 2,
        curved: true
    };

    projectiles.push(projectile);
}

// Função para gerar projéteis de várias formas
function spawnProjectilesByStage() {
    switch (stage) {
        case 1:
            spawnProjectileCross();
            break;
        case 2:
            spawnCurvedProjectile();
            break;
        case 3:
            spawnHomingProjectile();
            break;
    }
}

// Eventos de teclado
document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowUp") keys.up = true;
    if (e.code === "ArrowDown") keys.down = true;
    if (e.code === "ArrowLeft") keys.left = true;
    if (e.code === "ArrowRight") keys.right = true;
});

document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowUp") keys.up = false;
    if (e.code === "ArrowDown") keys.down = false;
    if (e.code === "ArrowLeft") keys.left = false;
    if (e.code === "ArrowRight") keys.right = false;
});

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

    // Desenhar o jogador
    drawPlayer();

    // Atualizar e desenhar projéteis
    projectiles.forEach((projectile, index) => {
        if (projectile.homing) {
            // Projétil teleguiado
            const angle = Math.atan2(player.y - projectile.y, player.x - projectile.x);
            projectile.x += Math.cos(angle) * projectile.speed;
            projectile.y += Math.sin(angle) * projectile.speed;
        } else if (projectile.curved) {
            // Projétil curvado
            projectile.velocityY += Math.random() > 0.5 ? 0.1 : -0.1;
            projectile.x += projectile.velocityX;
            projectile.y += projectile.velocityY;
        } else {
            // Projétil normal
            projectile.x += projectile.velocityX;
            projectile.y += projectile.velocityY;
        }

        // Desenhar projétil
        ctx.fillStyle = "red";
        ctx.fillRect(projectile.x, projectile.y, projectile.width, projectile.height);

        // Verificar colisão com o jogador
        if (isColliding({ x: player.x - player.radius, y: player.y - player.radius, width: player.radius * 2, height: player.radius * 2 }, projectile)) {
            player.health -= 10;
            document.getElementById("health").innerText = player.health;

            // Remover projétil atingido
            projectiles.splice(index, 1);

            // Se a saúde acabar, reiniciar
            if (player.health <= 0) {
                alert("Você perdeu! Tente de novo.");
                player.health = 100;
                document.getElementById("health").innerText = player.health;
                projectiles.length = 0;
                stage = 1;
                document.getElementById('stage').innerText = stage;
            }
        }

        // Remover projéteis fora da tela
        if (projectile.x < 0 || projectile.x > canvas.width || projectile.y < 0 || projectile.y > canvas.height) {
            projectiles.splice(index, 1);
        }
    });

    // Solicitar o próximo quadro
    requestAnimationFrame(update);
}

// Função de mudança de fase
function changeStage() {
    stage++;
    if (stage > 3) stage = 1;
    document.getElementById('stage').innerText = stage;
}

// Iniciar o jogo
setInterval(spawnProjectilesByStage, spawnRate);
setInterval(changeStage, 15000); // Muda de fase a cada 15 segundos
update();
