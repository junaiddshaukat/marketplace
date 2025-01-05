import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (!token) {
    return NextResponse.json({ isLoggedIn: false }, { status: 401 })
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    })

    if (response.ok) {
      return NextResponse.json({ isLoggedIn: true }, { status: 200 })
    } else {
      return NextResponse.json({ isLoggedIn: false }, { status: 401 })
    }
  } catch (error) {
    console.error('Error checking authentication:', error)
    return NextResponse.json({ isLoggedIn: false }, { status: 500 })
  }
}

