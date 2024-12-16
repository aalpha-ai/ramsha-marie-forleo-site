import { Blog } from '@/types/blogs.types';
import { NextResponse } from 'next/server';

// Mark the route as dynamic
export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Number(searchParams.get('limit')) || 10;
    const clientId = searchParams.get('clientId') || process.env.CLIENT_ID || '';

    const result = await getBlogs(limit, clientId);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }
    return NextResponse.json({
      success: result.success,
      data: result.data,
    });

  } catch (error) {
    console.error('Failed to fetch blogs:', {
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    });
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

interface BlogResponse {
  success: boolean;
  data?: {
    blogs: Blog[];
    total: number;
  };
  error?: string;
}

async function getBlogs(limit: number = 10, clientId: string): Promise<BlogResponse> {
  try {
    const url = `${process.env.APP_URL}/api/blog?limit=${limit}&clientId=${clientId}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
      cache: 'no-store',
    });

    const result = await response.json();
    if (!response.ok) {
      return {
        success: false,
        error: result.message || 'Failed to fetch blogs'
      };
    }

    return {
      success: result.success,
      data: result.data,
    };

  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}
