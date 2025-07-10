import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const filename = searchParams.get("filename")

    if (!filename) {
      return NextResponse.json({ error: "Filename is required" }, { status: 400 })
    }

    // Mock upload response
    const mockBlob = {
      url: `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(filename)}`,
      downloadUrl: `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(filename)}`,
      pathname: filename,
      contentType: "image/jpeg",
      contentDisposition: `attachment; filename="${filename}"`,
    }

    return NextResponse.json(mockBlob)
  } catch (error) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
