const Button = ({ children, className }) => (
    <button className={`px-6 py-3 bg-[#E06033] text-white rounded-md hover:bg-[#c04e2a] transition ${className}`}>
      {children}
    </button>
  );
  