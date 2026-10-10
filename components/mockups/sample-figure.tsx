export function SampleFigure({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <figure>
      <div aria-hidden="true" className="pointer-events-none min-w-0 select-none">
        {children}
      </div>
      <figcaption className="mt-3 text-center text-xs leading-5 text-muted">{label}</figcaption>
    </figure>
  );
}
