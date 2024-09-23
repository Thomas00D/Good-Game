import { supabaseClient } from '@/supabase/supabaseClient';
import { authRedirectionURL } from '@/utils/previewConfig';

export const signInWithDiscord = async () => {
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      redirectTo: authRedirectionURL, // URL de redirection vers Discord gérée par Supabase
    },
  });

  if (error) {
    throw Object.assign(new Error(error.message), { status: error.status });
  }

  // A ce stade, la redirection vers Discord est gérée par Supabase
  return data;
};
