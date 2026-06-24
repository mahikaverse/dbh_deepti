export default function PageContainer({
  children,
}: any) {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {children}
    </div>
  );
}