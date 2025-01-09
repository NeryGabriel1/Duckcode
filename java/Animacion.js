// Interacción opcional
document.addEventListener("DOMContentLoaded", () => {
    console.log("Sección animada lista.");
  
    // Interacción al pasar el mouse por los objetos flotantes
    const floatingObjects = document.querySelectorAll('.floating-object');
    floatingObjects.forEach(obj => {
      obj.addEventListener('mouseenter', () => {
        obj.style.transform = 'scale(1.2)'; // Agrandar
      });
      obj.addEventListener('mouseleave', () => {
        obj.style.transform = 'scale(1)';
      });
    });
  });
  