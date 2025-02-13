function checkAnswers() {
    let q1 = document.getElementById("q1").value.trim().toLowerCase();
    let q2 = document.getElementById("q2").value.trim();
    let q3 = document.getElementById("q3").value.trim().toLowerCase();
    let q4 = document.getElementById("q4").value.trim().toLowerCase();
    let q5 = document.getElementById("q5").value.trim();

    let correctAnswers = {
        q1: "star",
        q2: "4",
        q3: "ma",
        q4: "ya",
        q5: "2020"
    };

    if (q1 === correctAnswers.q1 && q2 === correctAnswers.q2 && q3 === correctAnswers.q3 && q4 === correctAnswers.q4 && q5 === correctAnswers.q5) {
        let password = correctAnswers.q3 + correctAnswers.q4 + correctAnswers.q5;
        document.getElementById("quiz").classList.add("hidden");
        document.getElementById("passwordSection").classList.remove("hidden");
        alert("🎉 Correct! Your secret password is: " + password);
    } else {
        alert("❌ Oops! Some answers are incorrect. Try again!");
    }
}

function checkPassword() {
    let inputPassword = document.getElementById("passwordInput").value.trim().toLowerCase();
    let correctPassword = "maya2020";

    if (inputPassword === correctPassword) {
        document.getElementById("passwordSection").classList.add("hidden");
        document.getElementById("messageBox").classList.remove("hidden");
        document.getElementById("valentineMessage").innerHTML = `
            <strong>💌 To My Love, My Heartbeat 💌</strong><br><br>
            My dearest Poonakutty, ❤️✨<br><br>
            From the very first moment our eyes met, my heart whispered, my life changed forever, because I found the most precious person in the world—you. 🌎💕 Every moment with you feels like a dream, a beautiful love story I never want to wake up from. 🥰<br><br>
            You are my safe place, my greatest happiness, and my reason to smile. 😊💖 The way you hold my hand, the way you laugh, the way you simply exist—everything about you is magic. ✨ You bring light into my darkest days, you are my sunshine after every storm. 🌦️☀️ With you, even the simplest moments feel extraordinary. ❤️<br><br>
            No words are enough to describe how much I love you. Every heartbeat of mine whispers your name. 🫀💞 You are not just my love—you are my home, my heart, my forever. 🏡💕 No matter where life takes us, I promise, my love for you will never change. I will love you through all seasons, through all ups and downs, through all of eternity. ❤️♾️<br><br>
            <strong>Forever Yours,</strong><br>
            <em>Your Rowdy ❤️🔥</em>
        `;
    } else {
        alert("💔 Wrong password! Try again!");
    }
}
