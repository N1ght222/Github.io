/* Тёмная тема */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #000;
  color: #fff;
  overflow-x: hidden;
  position: relative;
}

main.card {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background-color: #111;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 0, 128, 0.5);
}

h1 {
  margin: 0 0 10px 0;
  color: #ff6b9a;
}

.message {
  font-size: 18px;
  margin-bottom: 20px;
}

button {
  padding: 10px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  background-color: #ff6b9a;
  color: #fff;
}

button:hover {
  background-color: #ff88aa;
}

.surprise {
  margin-top: 20px;
  padding: 15px;
  background-color: #222;
  border-radius: 10px;
}

.hidden {
  display: none;
}

/* Эффект сердечек */
#hearts-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1000;
}

.heart {
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  transform: rotate(-45deg);
  animation: fall 5s linear infinite;
}

.heart::before,
.heart::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
}

.heart::before {
  top: -10px;
  left: 0;
}

.heart::after {
  left: 10px;
  top: 0;
}

@keyframes fall {
  0% { transform: translateY(-50px) rotate(-45deg); opacity: 1; }
  100% { transform: translateY(110vh) rotate(-45deg); opacity: 0; }
}
