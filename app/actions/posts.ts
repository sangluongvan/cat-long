"use server"

import { createServerClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function createPost(formData: FormData) {
  try {
    const supabase = createServerClient()

    const postData = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      excerpt: formData.get("excerpt") as string,
      category: formData.get("category") as string,
      featured_image: formData.get("featured_image") as string,
      status: formData.get("status") as string,
      tags: JSON.parse((formData.get("tags") as string) || "[]"),
      author: "Admin",
      created_at: new Date().toISOString(),
    }

    const { data, error } = await supabase.from("posts").insert([postData]).select().single()

    if (error) {
      return { success: false, error: error.message }
    }

    revalidatePath("/blog")
    revalidatePath("/admin")

    return { success: true, post: data }
  } catch (error) {
    return { success: false, error: "Failed to create post" }
  }
}

export async function updatePost(id: string, formData: FormData) {
  try {
    const supabase = createServerClient()

    const postData = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      excerpt: formData.get("excerpt") as string,
      category: formData.get("category") as string,
      featured_image: formData.get("featured_image") as string,
      status: formData.get("status") as string,
      tags: JSON.parse((formData.get("tags") as string) || "[]"),
      updated_at: new Date().toISOString(),
    }

    const { data, error } = await supabase.from("posts").update(postData).eq("id", id).select().single()

    if (error) {
      return { success: false, error: error.message }
    }

    revalidatePath("/blog")
    revalidatePath("/admin")

    return { success: true, post: data }
  } catch (error) {
    return { success: false, error: "Failed to update post" }
  }
}

export async function deletePost(id: string) {
  try {
    const supabase = createServerClient()

    const { error } = await supabase.from("posts").delete().eq("id", id)

    if (error) {
      return { success: false, error: error.message }
    }

    revalidatePath("/blog")
    revalidatePath("/admin")

    return { success: true }
  } catch (error) {
    return { success: false, error: "Failed to delete post" }
  }
}
