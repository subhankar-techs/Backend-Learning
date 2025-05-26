const fullName="Subhankar Manna";

function shortName(fullName) {
  const divide = fullName.split(" ");
  const firstLetter = divide[0].charAt(0) + ".";
  const lastName= divide[1];
}
console.log(shortName(fullName));