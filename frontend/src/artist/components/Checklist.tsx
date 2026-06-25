import {
  CheckCircle2,
  Circle,
} from "lucide-react";

type Props = {
  completed: boolean;
  title: string;
};

export default function Checklist({
  completed,
  title,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      {completed ? (
        <CheckCircle2
          size={22}
          className="text-green-600"
        />
      ) : (
        <Circle
          size={22}
          className="text-gray-300"
        />
      )}

      <span
        className={
          completed
            ? "font-medium text-[#1B1B1B]"
            : "text-gray-500"
        }
      >
        {title}
      </span>
    </div>
  );
}