import { useRouter } from "next/router";

export default function MovieDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-8 text-textPrimary">
      <h1 className="text-2xl font-bold">Movie Details for ID: {id}</h1>
    </div>
  );
}
