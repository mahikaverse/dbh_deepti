import React from "react";

type StatCardProps = {
  title: string;
  value: string;
  growth: string;
  icon?: React.ReactNode;
};

export default function StatCard({
  title,
  value,
  growth,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-[28px] border border-[#ECE6DB] bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1B1B1B]">
            {value}
          </h2>
        </div>

        {icon && (
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF8F4]">
            {icon}
          </div>
        )}
      </div>

      <p className="mt-4 text-sm font-medium text-green-600">
        {growth}
      </p>
    </div>
  );
}