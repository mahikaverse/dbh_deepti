interface Props {
  text: string;
}

export default function PrimaryButton({
  text,
}: Props) {
  return (
    <button className="bg-[#C79A3B] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
      {text}
    </button>
  );
}