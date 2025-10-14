const bcrypt = require("bcrypt");

// const hashPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(salt);
//   console.log(hash);
// };

const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 14);
  console.log(hash);
};



const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log("LOGGED YOU IN SUCCESSFUL MATCH!");
  } else {
    console.log("INCORRECT!!");
  }
};
// hashPassword("spider");

login("spider", "$2b$14$u6KNhP.tVFeFN8IXrlivmuxUTSaZPkt8KBwpHgE4w1teq2rxvTZp.");
