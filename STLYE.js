function hideOverlay() {
  const overlay = document.querySelector('.overlay');
  overlay.style.display = 'none';
}

document.querySelectorAll('.image-numbered img').forEach((image) => {
    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left; // 滑鼠相對圖片的 X 軸位置
        const y = e.clientY - rect.top;  // 滑鼠相對圖片的 Y 軸位置

        const rotateX = ((y / rect.height) - 0.5) * 20; // 計算 X 軸旋轉角度
        const rotateY = ((x / rect.width) - 0.5) * -20; // 計算 Y 軸旋轉角度

        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'rotateX(0deg) rotateY(0deg)'; // 重置動畫
    });
});
const images = document.querySelector('.images');
const imagesRotator = document.querySelector('.images__rotator');
const rotationAngles = { x: -4, y: 200, z: 0 };

document.body.addEventListener('wheel', (e) => {
  const friction = 12;
  const wheel = e.deltaY / friction;

  rotationAngles.y -= wheel;
});

document.body.addEventListener('mousemove', (e) => {
  const y = e.clientY - window.innerHeight / 2;
  const x = e.clientX - window.innerWidth / 2;
  rotationAngles.x = y / 60;
  rotationAngles.z = x / 100;
});

function runAnimations() {
  animateImages();
  animateImagesRotator();
  requestAnimationFrame(runAnimations);
}

function animateImages() {
  images.style.transform = `rotateX(${rotationAngles.x}deg) rotateZ(${rotationAngles.z}deg)`;
}

function animateImagesRotator() {
  imagesRotator.style.transform = `rotateY(${rotationAngles.y}deg)`;
}

document.addEventListener('DOMContentLoaded', runAnimations);
function showOverlay(imageElement) {
  const overlay = document.querySelector('.overlay');
  const overlayImage = overlay.querySelector('.linebox img');

  // 獲取被點擊圖片的來源並設置為放大圖片
  overlayImage.src = imageElement.querySelector('img').src;

  // 顯示遮罩
  overlay.style.display = 'flex';
}


