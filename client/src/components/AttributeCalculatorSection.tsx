import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

const TOTAL_POINTS = 80;
const MIN_ATTRIBUTE = 5;
const MAX_ATTRIBUTE = 15;

const attributes = [
  { name: "Astuto", short: "AST" },
  { name: "Discreto", short: "DIS" },
  { name: "Persuasivo", short: "PER" },
  { name: "Preciso", short: "PRE" },
  { name: "Rápido", short: "RAP" },
  { name: "Resoluto", short: "RES" },
  { name: "Vigilante", short: "VIG" },
  { name: "Vigoroso", short: "VGR" },
] as const;

type Attribute = (typeof attributes)[number]["name"];
type AttributeValues = Record<Attribute, string>;

const initialValues: AttributeValues = {
  Astuto: "10",
  Discreto: "10",
  Persuasivo: "10",
  Preciso: "10",
  Rápido: "10",
  Resoluto: "10",
  Vigilante: "10",
  Vigoroso: "10",
};

function parseAttribute(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export default function AttributeCalculatorSection() {
  const [values, setValues] = useState<AttributeValues>(initialValues);

  const summary = useMemo(() => {
    const numericValues = attributes.map(attribute =>
      parseAttribute(values[attribute.name])
    );
    const total = numericValues.reduce((sum, value) => sum + value, 0);
    const remaining = TOTAL_POINTS - total;
    const maxCount = numericValues.filter(value => value === MAX_ATTRIBUTE).length;
    const hasOutOfRange = numericValues.some(
      value => value < MIN_ATTRIBUTE || value > MAX_ATTRIBUTE
    );

    return {
      total,
      remaining,
      maxCount,
      hasOutOfRange,
      isValid: remaining === 0 && maxCount <= 1 && !hasOutOfRange,
    };
  }, [values]);

  const updateValue = (attribute: Attribute, nextValue: string) => {
    if (!/^\d{0,2}$/.test(nextValue)) {
      return;
    }

    setValues(current => ({
      ...current,
      [attribute]: nextValue,
    }));
  };

  const vigoroso = parseAttribute(values.Vigoroso);
  const resoluto = parseAttribute(values.Resoluto);
  const rapido = parseAttribute(values.Rápido);

  return (
    <div className="mx-auto max-w-3xl space-y-3 text-sm">
      <div>
        <h2
          className="mb-1 text-2xl text-amber-100 md:text-3xl"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
        >
          Cálculo de Atributos
        </h2>
        <p className="max-w-2xl text-[11px] leading-snug text-muted-foreground">
          Distribua 80 pontos. Cada atributo deve ficar entre 5 e 15. Apenas um
          atributo pode ser 15.
        </p>
      </div>

      <Card className="border-amber-900/30 bg-amber-950/10">
        <CardContent className="p-3">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <Metric label="Usados" value={summary.total} />
            <Metric
              label="Restantes"
              value={summary.remaining}
              tone={
                summary.remaining === 0
                  ? "ok"
                  : summary.remaining < 0
                    ? "bad"
                    : "default"
              }
            />
            <Metric
              label="Atributos 15"
              value={`${summary.maxCount}/1`}
              tone={summary.maxCount > 1 ? "bad" : "default"}
            />
            <Metric
              label="Status"
              value={summary.isValid ? "OK" : "Ajustar"}
              tone={summary.isValid ? "ok" : "bad"}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-card">
        <CardContent className="p-3">
          <div className="mb-2 flex items-center justify-between">
            <h3
              className="text-base font-bold text-amber-200"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Distribuição
            </h3>
            <span className="text-[10px] text-muted-foreground">
              mínimo 5 / máximo 15
            </span>
          </div>

          {attributes.map(attribute => {
            const value = parseAttribute(values[attribute.name]);
            const outOfRange = value < MIN_ATTRIBUTE || value > MAX_ATTRIBUTE;
            const maxRuleBroken =
              value === MAX_ATTRIBUTE && summary.maxCount > 1;
            const invalid = outOfRange || maxRuleBroken;

            return (
              <div
                key={attribute.name}
                className={cn(
                  "grid grid-cols-[1fr_72px_70px] items-center gap-2 rounded-md border px-2.5 py-1.5 sm:grid-cols-[1fr_82px_82px]",
                  invalid
                    ? "border-red-900/40 bg-red-950/10"
                    : "border-border/70 bg-secondary/10"
                )}
              >
                <div className="flex min-w-0 items-center gap-2">
                  <span className="w-8 shrink-0 rounded border border-amber-800/40 bg-amber-950/30 px-1.5 py-0.5 text-center text-[9px] font-bold text-amber-300">
                    {attribute.short}
                  </span>
                  <span className="truncate text-xs font-medium text-foreground">
                    {attribute.name}
                  </span>
                </div>
                <Input
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={values[attribute.name]}
                  onChange={event =>
                    updateValue(attribute.name, event.target.value)
                  }
                  aria-invalid={invalid}
                  className="h-7 border-amber-900/30 bg-background/40 px-2 text-center text-xs font-semibold text-amber-100"
                />
                <span
                  className={cn(
                    "text-right text-[10px] font-medium",
                    invalid ? "text-red-300" : "text-green-300"
                  )}
                >
                  {invalid ? "Inválido" : "OK"}
                </span>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="grid gap-1 text-[11px] text-muted-foreground sm:grid-cols-3 sm:gap-4">
          <span>
            <strong className="text-amber-200/80">Defesa:</strong> {rapido}
          </span>
          <span>
            <strong className="text-amber-200/80">Vitalidade:</strong>{" "}
            {vigoroso}
          </span>
          <span>
            <strong className="text-amber-200/80">Corrupção:</strong>{" "}
            {Math.ceil(resoluto / 2)}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setValues(initialValues)}
          className="inline-flex h-7 items-center justify-center gap-1.5 rounded-md border border-amber-900/30 bg-amber-950/10 px-2.5 text-xs text-amber-200/80 transition-colors hover:bg-amber-900/20 hover:text-amber-100"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Resetar
        </button>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string | number;
  tone?: "default" | "ok" | "bad";
}) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <p
        className={cn(
          "mt-0.5 text-lg font-bold md:text-xl",
          tone === "ok" && "text-green-300",
          tone === "bad" && "text-red-300",
          tone === "default" && "text-amber-100"
        )}
      >
        {value}
      </p>
    </div>
  );
}
