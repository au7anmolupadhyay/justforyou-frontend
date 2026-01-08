export const Card = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`border rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {children}
    </div>
  );
};
