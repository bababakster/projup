// Firebase Configuration - הוסף את פרטי Firebase שלך
const firebaseConfig = {
  apiKey: "AIzaSyAN1OEyU7wzQGqDWY4JXLfPXmPVge44oEQ",
  authDomain: "proj-b910d.firebaseapp.com",
  projectId: "proj-b910d",
  storageBucket: "proj-b910d.firebasestorage.app",
  messagingSenderId: "917030679502",
  appId: "1:917030679502:web:23a542ab87f56c5bbcb19f",
  measurementId: "G-FLF637WEKR"
};


// אתחול Firebase
firebase.initializeApp(firebaseConfig);

// הוספת מאזין להגשמת טופס ההתחברות
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // למנוע רענון של הדף

  // קבלת הערכים מהטופס
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // התחברות עם אימייל וסיסמה דרך Firebase Authentication
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // התחברות הצליחה
          const user = userCredential.user;
          console.log('התחברת בהצלחה:', user);

          // סגור את ה-modal של ההתחברות
          document.getElementById('authModal').style.display = 'none'; // סגור את החלון

          // הצג את חלק חיישן המרחק
          document.getElementById('sensorSection').style.display = 'block'; // הצג את חיישן המרחק

          // אם תרצה להוסיף מעבר לדף אחר (למשל עמוד חיישן המרחק)
          // window.location.href = "sensor.html"; 
      })
      .catch((error) => {
          // שגיאה בהתחברות
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('שגיאה בהתחברות:', errorMessage);
          alert('הייתה שגיאה בהתחברות: ' + errorMessage);
      });
});

