document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;  // אם יש גם שדה אימייל
    const message = document.getElementById('message').value;  // אם יש שדה הודעה

    // בדיקת אם השם לא ריק
    if (name.trim() === '') {
        alert('הכנס שם');
        return;
    }

    // הצגת הודעה עם שם המשתמש
    const successMessage = document.createElement('p');
    successMessage.textContent = `תודה, ${name}! פרטי יצירת הקשר נשמרו בהצלחה.`;
    successMessage.style.color = 'green';

    // הוספת ההודעה למקום מתאים (למשל מתחת לטופס)
    const formContainer = document.getElementById('formContainer'); // מיקום ההודעה
    formContainer.appendChild(successMessage);

    // אופציונלית - נקה את הטופס לאחר שליחה
    document.getElementById('contactForm').reset();
    
});
