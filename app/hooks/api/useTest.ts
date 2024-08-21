import fetcher from "@/utils/fetcher";
import useSWR from "swr";

export function useTest() {
  const { data, error, isLoading } = useSWR(
    "https://multiembed.mov/directstream.php?video_id=tt0012349",
    fetcher,
    {
      refreshInterval: 2000,
    }
  );

  return { data, error, isLoading };
}