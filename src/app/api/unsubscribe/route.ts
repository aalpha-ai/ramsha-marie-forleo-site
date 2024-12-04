import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    console.log('Unsubscribe request received:', {
      url: request.url,
      timestamp: new Date().toISOString()
    });

    const { searchParams } = new URL(request.url);
    const subscriberId = searchParams.get('sid');
    if (!subscriberId) {
      console.error('Unsubscribe failed - Missing subscriber ID:', {
        url: request.url,
        params: Object.fromEntries(searchParams),
        timestamp: new Date().toISOString()
      });
      return NextResponse.redirect(new URL('/unsubscribe', request.url));
    }

    console.log('Processing unsubscribe request:', {
      subscriberId,
      timestamp: new Date().toISOString()
    });

    const result = await unsubscribeUser(Number(subscriberId));

    console.log('Unsubscribe successful:', {
      subscriberId,
      timestamp: new Date().toISOString()
    });

    return NextResponse.redirect(new URL('/unsubscribe', request.url));

  } catch (error) {
    console.error('Unsubscribe failed:', {
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      timestamp: new Date().toISOString()
    });
    return NextResponse.redirect(new URL('/unsubscribe', request.url));
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

    const data = await response.json();

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