"use client"

import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabaseClient } from '@/supabase/supabaseClient';

export const supabaseSession = () => {
  const [_session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    session: _session,
  };
};