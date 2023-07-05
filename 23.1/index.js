const fs = require("fs");

// fs.writeFile(
//   "message.txt",
//   "Hello, there. If this works, I'll see a new text file that replaces the one that came with the project",
//   (error) => {
//     if (error) throw error;
//     console.log("The file has been saved!");
//   }
// );

fs.readFile("message.txt", "utf8", (error, data) => {
  if (error) throw error;
  console.log(data);
});
