import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { supabase } from "../utils/supabaseClient";

function Profile() {
  const [profile, setProfile] = useState(null);
  const router = useRouter();
  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const profileData = await supabase.auth.user();
    if (!profileData) {
      router.push("/login");
    } else {
      setProfile(profileData);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
  }

  if (!profile) return null;
  return (
    <div>
      <h2>Hello, {profile.email}</h2>
      <p>User ID: {profile.id}</p>
      <button onClick={signOut}>Logout</button>
    </div>
  );
}

export default Profile;
