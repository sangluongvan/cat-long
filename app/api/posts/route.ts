import { type NextRequest, NextResponse } from "next/server"

// Mock data for posts
const mockPosts = [
  {
    id: "1",
    title: "Ngày đầu tiên Long về nhà",
    content: "<p>Hôm nay là một ngày đặc biệt - ngày đầu tiên Long về với gia đình chúng tôi...</p>",
    excerpt: "Câu chuyện về ngày đầu tiên chú mèo nhỏ bé đến với gia đình chúng tôi...",
    featured_image: "/placeholder.svg?height=400&width=800",
    category: "Kỷ niệm",
    tags: ["Long", "Kỷ niệm", "Ngày đầu", "Gia đình"],
    status: "published",
    author: "Admin",
    views: 234,
    likes: 45,
    created_at: "2024-01-15T00:00:00Z",
    updated_at: "2024-01-15T00:00:00Z",
  },
  {
    id: "2",
    title: "Những trò nghịch ngợm của Long",
    content: "<p>Long là một chú mèo rất nghịch ngợm! Mỗi ngày, chú đều có những trò tinh nghịch...</p>",
    excerpt: "Hôm nay Long lại làm một trò nghịch ngợm khiến cả nhà cười không ngừng...",
    featured_image: "/placeholder.svg?height=400&width=800",
    category: "Hài hước",
    tags: ["Long", "Nghịch ngợm", "Hài hước", "Đời thường"],
    status: "published",
    author: "Admin",
    views: 189,
    likes: 67,
    created_at: "2024-01-10T00:00:00Z",
    updated_at: "2024-01-10T00:00:00Z",
  },
  {
    id: "3",
    title: "Long và món đồ chơi yêu thích",
    content: "<p>Sau nhiều lần thử nghiệm, chúng tôi đã tìm ra những món đồ chơi mà Long yêu thích nhất!</p>",
    excerpt: "Khám phá những món đồ chơi mà Long yêu thích nhất và cách chúng tôi chọn...",
    featured_image: "/placeholder.svg?height=400&width=800",
    category: "Đồ chơi",
    tags: ["Long", "Đồ chơi", "Sở thích", "Mua sắm"],
    status: "published",
    author: "Admin",
    views: 156,
    likes: 32,
    created_at: "2024-01-05T00:00:00Z",
    updated_at: "2024-01-05T00:00:00Z",
  },
]

export async function GET() {
  try {
    // Return mock data instead of database query
    return NextResponse.json({ posts: mockPosts })
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Create mock post
    const newPost = {
      id: Date.now().toString(),
      ...body,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      views: 0,
      likes: 0,
    }

    return NextResponse.json({ post: newPost }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
