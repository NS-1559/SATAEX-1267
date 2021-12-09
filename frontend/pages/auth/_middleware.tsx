import { NextRequest, NextResponse } from 'next/server';
import { COOKIE_NAME } from '@constants/configs';

export function middleware(req: NextRequest) {
  const token = req.cookies[COOKIE_NAME];
  if (token) {
    return NextResponse.redirect('/');
  }
}
