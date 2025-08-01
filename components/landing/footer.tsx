import { Mail } from "lucide-react";

export function Footer() {
  return (
    <div className="flex items-center justify-center border-t px-20 py-10">
      <div className="container flex items-center justify-between">
        <p>© 2025 BrandName, All rights reserved</p>

        <p className="flex items-center gap-1">
          <Mail className="size-4" />
          noreply.chalkey@gmail.com
        </p>
      </div>
    </div>
  );
}
