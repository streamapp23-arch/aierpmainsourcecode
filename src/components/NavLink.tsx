import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ href, children, className, onClick }: NavLinkProps) => {
  // Check if it's an internal route or hash link
  const isInternalRoute = href.startsWith('/') && !href.startsWith('/#');

  if (isInternalRoute) {
    return (
      <Link to={href} className={cn(className)} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={cn(className)} onClick={onClick}>
      {children}
    </a>
  );
};

export default NavLink;
