# Blog của Long - Cat Blog Website

Một trang web blog cá nhân dành riêng cho chú mèo Long, được xây dựng với Next.js 15 và mock data.

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
- **Settings**: Cài đặt website
- **Authentication**: Bảo mật admin area

### 🚀 Technical Features
- **Next.js 15**: App Router, Server Components
- **Mock Data**: Hoạt động mà không cần database
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

### 3. Chạy development server
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
└── scripts/
    ├── create-database.sql
    └── seed-data.sql
\`\`\`

## 🚀 Deploy

### Vercel (Recommended)
1. Push code lên GitHub
2. Connect repository với Vercel
3. Deploy tự động

### Các platform khác
- Netlify
- Railway
- Render

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

### Cài đặt website
1. Vào "Cài đặt" trong admin panel
2. Tùy chỉnh thông tin website
3. Cấu hình SEO, theme, etc.

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
3. Cập nhật mock data nếu cần

## 🔄 Chuyển sang Database thật

Để sử dụng database thật (Supabase):

1. Tạo project Supabase
2. Cập nhật `.env.local`:
   \`\`\`
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_key
   \`\`\`
3. Chạy SQL scripts trong `scripts/`
4. Update `lib/supabase.ts` để sử dụng Supabase thật

## 🐛 Troubleshooting

### Build errors
- Đảm bảo tất cả dependencies đã được cài đặt
- Chạy `npm run lint` để kiểm tra lỗi

### Mock data không hiển thị
- Kiểm tra console để xem lỗi
- Đảm bảo API routes hoạt động

## 📞 Support

Nếu gặp vấn đề, hãy tạo issue trên GitHub repository.

## 📄 License

MIT License - xem file LICENSE để biết thêm chi tiết.
