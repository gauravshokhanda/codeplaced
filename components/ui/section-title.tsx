interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-5xl font-bold text-primary mb-4 animate-fade-up">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground animate-fade-up">
          {subtitle}
        </p>
      )}
    </div>
  );
}