const Card = ({ children, className }) => (
    <div className={`bg-gray-800 p-6 rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );
  const CardContent = ({ children }) => <div>{children}</div>;
  