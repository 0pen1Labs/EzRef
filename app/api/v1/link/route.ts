import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (request: NextRequest) => {
  const req = await request.json()
  const { userId, redirectToSignIn } = auth()

  const count = 10
  const page = req.page || 1
  console.log('page', page)

  if (userId) {
    try {
      if (page <= 0) {
        return Response.json(
          { message: 'page number is not valid' },
          { status: 400 },
        )
      }

      const links = await prisma.refLinks.findMany({
        where: {
          clerkId: userId,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: count,
        skip: count * (page - 1),
      })

      const totalLinks = await prisma.refLinks.count({
        where: { clerkId: userId },
      })

      const totalPage = Math.ceil(totalLinks / count)
      const totalItem = links.length
      const nextPage = page === totalPage ? null : page + 1
      const previousPage = page === 1 ? null : page - 1
      const currentPage = page

      return Response.json(
        { links, totalItem, nextPage, previousPage, totalPage, currentPage },
        { status: 200 },
      )
    } catch (error) {
      return Response.json({ message: 'Something went wrong' }, { status: 500 })
    }
  } else {
    return NextResponse.redirect(new URL('/sign-in', request.nextUrl.basePath))
  }
}

export const DELETE = async (request: NextRequest) => {
  const { userId } = auth()
  const req = await request.json()

  if (userId) {
    try {
    } catch (error) {}
  } else {
    return
  }
}
