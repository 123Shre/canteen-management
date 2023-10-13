// This page is not in use



import bcrypt from "bcrypt";

const saltRs = 10;
// email=shreyashamr1308@gmail.com
const Password = "Shreyash";
bcrypt.hash(Password, saltRs, function (err, hash) {
  // Store hash in your password DB.

  //   hashkey
  //   $2b$10$C3CMaJfIZGMaDCCS.62cP.gZ/woR0Chjg.7Lf00izfjgdojloXkmu
  console.log(hash);
  console.log(err);
});
