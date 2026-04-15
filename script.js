// Efecto de aparicion suave en la linea del terminal al cargar
document.addEventListener('DOMContentLoaded', () => {
    const typingLine = document.querySelector('.typing-line');
    if (typingLine) {
        typingLine.style.opacity = '0';
        setTimeout(() => {
            typingLine.style.transition = 'opacity 0.6s ease';
            typingLine.style.opacity = '1';
        }, 200);
    }

    // Animacion de entrada progresiva para cada fila de la tabla
    const rows = document.querySelectorAll('.participants-table tbody tr');
    rows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateY(10px)';
        setTimeout(() => {
            row.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
        }, 300 + index * 120);
    });
});
