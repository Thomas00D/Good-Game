import { supabaseClient } from '@/supabase/supabaseClient';

export const signOut = async () => {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    throw Object.assign(new Error(error.message), { status: error.status });
  }

  // Rediriger l'utilisateur vers la page d'accueil après la déconnexion
  window.location.href = '/';

  return true;
};
