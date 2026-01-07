// src/ui/card.tsx
export const Card = ({ children, className="" }) => (
  <div className={`border rounded-2xl p-4 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className="" }) => (
  <div className={`flex gap-4 ${className}`}>
    {children}
  </div>
);
