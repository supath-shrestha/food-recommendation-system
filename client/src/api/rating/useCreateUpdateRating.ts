import asyncHandler from "@/utils/asyncHandler";
import ApiResponse from "../ApiResponse";
import axiosInstance from "../axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiError from "../ApiError";

const createUpdateRating = async ({
  ratingId,
  rating,
}: {
  ratingId:string;
  rating: number;
}) => {
  return await asyncHandler(
    (): Promise<ApiResponse<boolean>> =>
      axiosInstance.post(`/ratings/${ratingId}`, { rating })
  );
};

const useCreateUpdateRating = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUpdateRating,
    onError: (err: ApiError) => err,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-ratings"],
      });
    },
  });
};

export default useCreateUpdateRating
