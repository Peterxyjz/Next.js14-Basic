# 06 - Routing

Tài liệu:
<https://nextjs.org/docs/app/building-your-application/routing>

Routing trong Nextjs dựa trên tên folder và page.tsx

## Chuyển trang

There are four ways to navigate between routes in Next.js:

- Using the ```<Link>``` Component

```bash
import Link from "next/link";

export default function Home() {
  return <main>
    <ul>
      <li>
        <Link href={'/login'}>
          Login
        </Link>
      </li>
      <li>
        <Link href={'/register'}>
          Register
        </Link>
      </li>
    </ul>
  </main>
}
```

- Using the useRouter hook (Client Components)

Lưu ý: Chỉ dùng được với use client
Mặc định khi tạo là server components ==> Không dùng được hooks
-> Khắc phục bằng cách thêm 'use client'

Đọc thêm: [Cách dùng Client trong Server Components](./common/ClientTrongServerComponets.md)

```bash
'use client';
import { useRouter } from "next/navigation";

export default function ButtonRedirect() {
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/login');
    }
    return (
        <button
            onClick={handleNavigate}
        >
            Chuyển sang Login
        </button>
    )
}
```

- Using the redirect function (Server Components)

Lưu ý: có thể dùng được trong Client Components nhưng không chạy đc trong event handler

```bash
import { redirect } from "next/navigation"

const isAuth = false;
export default function Home() {
  if (!isAuth) {
    redirect('/login');
  }
}
```

- Using the native History API

Ưu tiên nên dùng: Thẻ ```<Link>```

[Phần trước đó](./05-Css-Style.md) || [Phần tiếp theo](./06-Routing.md)
