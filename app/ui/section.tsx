import { ReactNode } from 'react';

export default function Section({
  dark,
  children,
}: {
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section>
      <div className={dark == true ? 'dark' : 'light'}>{children}</div>
    </section>
  );
}
