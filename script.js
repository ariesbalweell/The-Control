const connectBtn = document.getElementById("connect-btn");
const autoBtn = document.getElementById("auto-btn");
const statusDiv = document.getElementById("status");
const walletAddr = document.getElementById("wallet-address");
const walletBal = document.getElementById("wallet-balance");

connectBtn.addEventListener("click", () => {
  walletAddr.textContent = "0xFAKE1234DEMO5678";
  walletBal.textContent = "2.35 ETH";
  connectBtn.textContent = "Connected (Demo)";
  connectBtn.disabled = true;
});

autoBtn.addEventListener("click", () => {
  statusDiv.textContent = "Status: Auto Spend Active ✅";
  statusDiv.style.color = "#00ff88";
  autoBtn.textContent = "Active (Demo Mode)";
  autoBtn.disabled = true;
});