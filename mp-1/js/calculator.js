function getValues() {
  const x = Number(document.getElementById("a").value);
  const y = Number(document.getElementById("b").value);
  return [x, y];
}

function show(result) {
  const out = document.getElementById("output");
  out.innerHTML = result;
  out.className = result < 0 ? "negative" : "";
}

function addNumbers() {
  const [x, y] = getValues();
  show(x + y);
}

function subNumbers() {
  const [x, y] = getValues();
  show(x - y);
}

function mulNumbers() {
  const [x, y] = getValues();
  show(x * y);
}

function divNumbers() {
  const [x, y] = getValues();
  show(x / y);
}

function power() {
  const [x, y] = getValues();
  let r = 1;
  for (let i = 0; i < y; i++) {
    r *= x;
  }
  show(r);
}

function clearAll() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  const out = document.getElementById("output");
  out.innerHTML = "";
  out.className = "";   // ← 清除负数红色样式
}
