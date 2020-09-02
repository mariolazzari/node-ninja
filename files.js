const fs = require("fs");

// read file
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// write file
fs.writeFile("./docs/blog2.txt", "second blog post", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("blog2.txt written.");
});

// dir
const dir = "./assets";

if (fs.existsSync(dir)) {
  fs.rmdir(dir, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`${dir} dir deleted.`);
  });
} else {
  fs.mkdir(dir, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`${dir} dir created.`);
  });
}

// delete files
const file = "delete.me";
if (fs.existsSync(file)) {
  fs.unlink(file, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`${file} deleted.`);
  });
} else {
  fs.writeFile(file, "delete this file", (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`${file} created.`);
  });
}
