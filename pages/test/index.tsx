import { useTest } from "hooks/api/useTest";

export default function Index() {
  const { data, error, isLoading } = useTest();
  console.log(data);
  return (
    <div>

    </div>
  );
}
