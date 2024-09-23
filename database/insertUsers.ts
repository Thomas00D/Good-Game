import { supabaseClient } from '@/supabase/supabaseClient'

export const insertUsers = () => {
  const insertUserById = async (
    pseudo: string,
    language: string,
    age: number,
    picture: string,
    status: string
  ) => {
    const { data, error } = await supabaseClient
      .from('users')
      .insert({
        pseudo: pseudo,
        language: language,
        age: age,
        picture: picture,
        status: status,
      })
      .select()

    if (error) {
      throw Object.assign(new Error(error.message), { code: error.code })
    }

    return data
  }

  return {
    insertUserById,
  }
}
