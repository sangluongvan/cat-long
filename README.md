# Blog của Long - Cat Blog Website

Một trang web blog cá nhân dành riêng cho chú mèo Long, được xây dựng với Next.js 15, Supabase và Vercel.

## ✨ Tính năng

### 🏠 Frontend
- **Trang chủ**: Hero section, thống kê, bài viết mới nhất
- **Blog**: Danh sách bài viết với filter và phân trang
- **Chi tiết bài viết**: Nội dung đầy đủ với comments
- **Gallery**: Thư viện ảnh/video của Long
- **About**: Thông tin chi tiết về Long
- **Responsive design**: Hoạt động tốt trên mọi thiết bị

### 🔧 Admin Panel
- **Dashboard**: Thống kê tổng quan
- **Quản lý bài viết**: Tạo, sửa, xóa bài viết
- **Rich text editor**: Editor WYSIWYG
- **Media manager**: Upload và quản lý ảnh/video
- **Comment moderation**: Duyệt bình luận
- **Authentication**: Bảo mật admin area

### 🚀 Technical Features
- **Next.js 15**: App Router, Server Components
- **Supabase**: Database, Authentication
- **Vercel Blob**: File storage
- **Tailwind CSS**: Styling
- **TypeScript**: Type safety
- **SEO optimized**: Meta tags, structured data

## 🛠️ Cài đặt và Chạy

### 1. Clone repository
\`\`\`bash
git clone <repository-url>
cd long-cat-blog
\`\`\`

### 2. Cài đặt dependencies
\`\`\`bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
\`\`\`

### 3. Thiết lập môi trường

Tạo file `.env.local` từ `.env.example`:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Cập nhật các biến môi trường:
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
\`\`\`

### 4. Thiết lập Database

1. Tạo project mới trên [Supabase](https://supabase.com)
2. Chạy SQL scripts trong thư mục `scripts/`:
   - `create-database.sql`: Tạo tables
   - `seed-data.sql`: Thêm dữ liệu mẫu

### 5. Chạy development server
\`\`\`bash
npm run dev
\`\`\`

Mở [http://localhost:3000](http://localhost:3000) để xem website.

## 📁 Cấu trúc Project

\`\`\`
├── app/
│   ├── admin/              # Admin panel
│   ├── api/                # API routes
│   ├── blog/               # Blog pages
│   ├── gallery/            # Gallery page
│   ├── about/              # About page
│   └── actions/            # Server actions
├── components/
│   ├── ui/                 # UI components
│   └── rich-text-editor.tsx
├── lib/
│   └── supabase.ts         # Supabase client
├── scripts/
│   ├── create-database.sql
│   └── seed-data.sql
└── middleware.ts           # Route protection
\`\`\`

## 🚀 Deploy lên Vercel

### 1. Push code lên GitHub
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

### 2. Deploy trên Vercel
1. Truy cập [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import repository từ GitHub
4. Thêm environment variables
5. Deploy!

### 3. Thiết lập Vercel Blob
1. Trong Vercel Dashboard, vào Storage tab
2. Tạo Blob store mới
3. Copy token vào environment variables

## 🔐 Admin Access

- URL: `/admin/auth`
- Demo credentials:
  - Email: `admin@longblog.com`
  - Password: `admin123`

## 📝 Sử dụng

### Tạo bài viết mới
1. Đăng nhập admin panel
2. Vào "Bài viết" → "Tạo bài viết mới"
3. Điền thông tin và nội dung
4. Upload ảnh đại diện
5. Chọn danh mục và tags
6. Lưu nháp hoặc đăng ngay

### Upload media
1. Vào "Thư viện" trong admin panel
2. Drag & drop files hoặc click "Chọn file"
3. Files sẽ được upload lên Vercel Blob

### Quản lý comments
1. Comments sẽ hiển thị trong Dashboard
2. Có thể approve/reject từ admin panel

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa `tailwind.config.ts`:
\`\`\`js
colors: {
  primary: {
    500: '#f97316', // Orange
    600: '#ea580c',
  }
}
\`\`\`

### Thêm tính năng mới
1. Tạo component trong `components/`
2. Thêm API route trong `app/api/`
3. Cập nhật database schema nếu cần

## 🐛 Troubleshooting

### Lỗi Supabase connection
- Kiểm tra URL và API keys
- Đảm bảo RLS policies được thiết lập đúng

### Lỗi upload file
- Kiểm tra Vercel Blob token
- Đảm bảo file size không quá 50MB

### Lỗi build
- Chạy `npm run lint` để kiểm tra lỗi
- Kiểm tra TypeScript errors

## 📞 Support

Nếu gặp vấn đề, hãy tạo issue trên GitHub repository.

## 📄 License

MIT License - xem file LICENSE để biết thêm chi tiết.
