function startTasbeeh() {
  const Status = document.getElementById("status");
  const startBtn = document.getElementById("startBtn");

  startBtn.disabled = true;

  const athkar = [
    { text: "سبحان الله", color: "white", target: 33 },
    { text: "الحمد لله", color: "#ff4d4d", target: 33 },
    { text: "الله أكبر", color: "#d4af37", target: 33 },
    { 
      text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير", 
      color: "#27ae60", 
      isFinal: true 
    }
  ];

  let currentIndex = 0;
  let count = 0;
  let intervalID;

  function updateMessage() {
    let currentThikr = athkar[currentIndex]; 

    if (currentThikr.isFinal) {
      Status.textContent = currentThikr.text; 
      Status.style.color = currentThikr.color;

      clearInterval(intervalID); 
      setTimeout(() => alert("في ميزان حسناتكم"), 1000); 
      startBtn.disabled = false; 
      return; 
    }

    count++;
    Status.textContent = currentThikr.text + " - " + count;
    Status.style.color = currentThikr.color;

    if (count === currentThikr.target) {
      currentIndex++; 
      count = 0;    
    }
  }

  intervalID = setInterval(updateMessage, 1000);
}