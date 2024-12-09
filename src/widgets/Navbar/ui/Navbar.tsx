import { classNames } from 'shared/lib/classNames/classNames';
import { BugButton } from 'app/providers/ErrorBoundary/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <BugButton />
    </div>
  </div>
);
