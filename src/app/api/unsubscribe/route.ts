import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const subscriberId = request.nextUrl.searchParams.get('sid');

    if (!subscriberId) {
      console.error('Unsubscribe failed - Missing subscriber ID');
      return NextResponse.redirect(new URL('/unsubscribe', request.nextUrl.origin));
    }

    await unsubscribeUser(Number(subscriberId));

    return NextResponse.redirect(new URL('/unsubscribe', request.nextUrl.origin));

  } catch (error) {
    console.error('Unsubscribe failed:', {
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    });

    return NextResponse.redirect(new URL('/unsubscribe', request.nextUrl.origin));
  }
}

interface UnsubscribeResponse {
  success: boolean;
  message?: string;
  error?: string;
}

async function unsubscribeUser(subscriberId: number): Promise<UnsubscribeResponse> {
  try {
    const response = await fetch(`${process.env.APP_URL}/api/unsubscribe?sid=${subscriberId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: 'Failed to unsubscribe'
      };
    }

    return {
      success: true,
      message: 'Successfully unsubscribed'
    };

  } catch (error) {
    console.error('Error unsubscribing:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}