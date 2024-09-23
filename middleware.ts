import { NextRequest, NextResponse } from 'next/server'
import { type CookieOptions, createServerClient } from '@supabase/ssr'
import { User } from '@supabase/auth-js'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { pathname } = request.nextUrl

  const redirection = handleRedirection(user, pathname, request)
  if (redirection) {
    return redirection
  }

  return response
}

function handleRedirection(
  user: User | null,
  pathName: string,
  request: NextRequest
): NextResponse | null {
  if (!user && pathName !== '/') {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  return null
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
}
