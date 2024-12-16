import { Blog } from '@/types/blogs.types';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const blogId = Number(params.id);
    if (isNaN(blogId)) {
      return NextResponse.json(
        { error: 'Invalid blog ID' },
        { status: 400 }
      );
    }

    const result = await getBlogById(blogId);

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
    console.error('Failed to fetch blog:', {
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    });
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


interface SingleBlogResponse {
  success: boolean;
  data?: {
    blog: Blog;
  };
  error?: string;
}

async function getBlogById(id: number): Promise<SingleBlogResponse> {
  try {
    const clientId = process.env.CLIENT_ID || '';
    const url = `${process.env.APP_URL}/api/blog/${id}?clientId=${clientId}`;
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
        error: result.message || 'Failed to fetch blog'
      };
    }
    return {
      success: result.success,
      data: result.data
    };

  } catch (error) {
    console.error('Error fetching blog:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}