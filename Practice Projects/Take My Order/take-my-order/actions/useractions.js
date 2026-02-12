// actions/useractions.js

// Dummy fetch function
export async function fetchuser(username) {
  return {
    name: username,
    email: "test@gmail.com",
    username: username,
    profilepic: "",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: "",
  };
}

// Dummy update function
export async function updateProfile(e, username) {
  console.log("Updating profile for:", username);
  return true;
}
