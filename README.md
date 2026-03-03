# Bạc Phú Quý Đà Nẵng — Vàng Bạc Ngân Lượng

Website landing page cho đại lý bạc Phú Quý tại Đà Nẵng. Dự án [Next.js](https://nextjs.org).

## Cách cập nhật (Update)

### 1. Cập nhật dependencies

Mỗi lần kéo code mới hoặc cần cập nhật thư viện:

```bash
npm install
```

Nếu muốn nâng Next.js / thư viện lên bản mới nhất (an toàn bảo mật):

```bash
npm update
npm audit fix
```

### 2. Chạy local

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

### 3. Build & deploy

**Build thử trên máy:**

```bash
npm run build
npm run start
```

**Deploy lên Vercel:**

- Đẩy code lên GitHub/GitLab rồi kết nối repo với Vercel — mỗi lần `git push` sẽ tự deploy.
- Hoặc dùng Vercel CLI: `npx vercel` (đăng nhập lần đầu nếu cần).

---

## Cấu trúc chính

- `src/app/` — Trang chủ, layout, metadata
- `src/components/` — Header, Hero, Services, About, Testimonials, Contact, Footer

## Công nghệ

- Next.js 16, React 19, TypeScript, Tailwind CSS
