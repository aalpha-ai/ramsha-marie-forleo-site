import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, source, tags } = body;
    const result = await subscribeUser({
      email,
      firstName,
      lastName,
      source,
      tags
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json(result);

  } catch (error) {
    console.error('Subscribe failed:', {
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    });
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

interface SubscribeResponse {
  success: boolean;
  message?: string;
  error?: string;
}

interface SubscribeParams {
  email: string;
  firstName: string;
  lastName?: string;
  source: string;
  tags?: string[];
}

async function subscribeUser(params: SubscribeParams): Promise<SubscribeResponse> {
  try {
    const response = await fetch(`${process.env.APP_URL}/api/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...params,
        clientId: process.env.CLIENT_ID,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || 'Failed to subscribe'
      };
    }

    return {
      success: true,
      message: 'Successfully subscribed'
    };

  } catch (error) {
    console.error('Error subscribing:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}