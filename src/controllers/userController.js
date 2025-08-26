/* eslint-disable no-undef */
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Exported function
async function signUpUser() {
  const email = "admin@gmail.com";
  const full_name = "David Dinh";
  const password = "Passw0rd!123";

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name }, // Supabase stores extra fields in user_metadata
    },
  });

  if (error) throw error;

  console.log("Signed up user:", data.user.id, email);
  return data.user; // so other files can use the created user
}

// for later pass in req here
async function signInUser() {
  const email = "admin@gmail.com";
  const password = "Passw0rd!123";

  // sign in (or sign up, then sign in)
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) console.log(error);

  const token = data.session.access_token;
  console.log("Got token:", token);

  // now call your backend API with the JWT in the Authorization header
  const res = await fetch("http://localhost:3000/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  console.log("API status:", res.status);
  console.log("API response:", await res.json());
}

if (require.main === module) {
  signInUser().catch((err) => {
    console.error("❌ Sign-in failed:", err.message);
    process.exit(1);
  });
}

module.exports = { signInUser };
