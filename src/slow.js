export default function slow() {
  fib(35)
}

function fib(i) {
  return i <= 1 ? 1 : fib(i - 1) * fib(i - 2);
}
