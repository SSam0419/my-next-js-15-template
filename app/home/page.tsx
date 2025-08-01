import { MockTableComponent } from "@/components/mock-table-component";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  return (
    <>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      <MockTableComponent />
    </>
  );
}
