// let sandwiches = ["turkey", "tuna", "ham", "pb&j"];
// for (let i of sandwiches) {
//   console.log(i);
// }
// let str = "hello";
// let str2 = "world";
// console.log(str.concat(str2));
// let greeting = "Hi, universe!";
// let message = "How is the weather today?";
// let str2 = `<h1>${greeting}</h1><p>${message}</p>`;
// console.log(str2);
let wizards = ["Hermione", "Neville", "Gandalf", "Radagast"];
let showHeading = true;

let str3 = `${showHeading ? "<h1>Awesome Wizards</h1>" : ""}
	${(function () {
    if (wizards.length > 3) {
      return "<p>There are at least three wizards.</p>";
    }
    return "<p>There are fewer than three wizards.</p>";
  })()}
	<ul>
		${wizards
      .map(function (wizard) {
        return `<li>${wizard}</li>`;
      })
      .join("")}
	</ul>`;

console.log(str3);
