import {
  createLessonRequest,
  deleteLessonRequest,
  getAllLessonsRequest,
  getLessonByIdRequest,
  payLessonRequest,
  updateLessonRequest,
} from "@/api/LessonsAPI";
import { toast } from "@/utils/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useGetAllLessons = () => {
  return useQuery({
    queryKey: ["all-lessons"],
    queryFn: getAllLessonsRequest,
    staleTime: 15 * 60 * 1000,
  });
};

const useGetLessonById = (id, options = {}) => {
  return useQuery({
    queryKey: ["lesson-id", id],
    queryFn: () => getLessonByIdRequest(id),
    staleTime: 15 * 60 * 1000,
    retry: false,
    enabled: !!id,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onError: (err) => {
      toast("error", err);
    },
    ...options,
  });
};

const usePayLesson = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (id) => payLessonRequest(id),
    onSuccess: () => {
      toast("success", "You fucking bought it, congrats");
      // refetch the lesson after buying it
      query.invalidateQueries({ queryKey: ["lesson-id",] });
    },
    onError: (err) => {
      toast("error", err, "the Lesson you trying to purchase does not exist");
    },
  });
};

// for admins adn dashboard
const useAddLesson = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: createLessonRequest,
    onSuccess: () => {
      toast("success", "Lesson has been created!");
      query.invalidateQueries({ queryKey: ["all-lessons"] });
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

const useUpdateLesson = () => {
  return useMutation({
    mutationFn: updateLessonRequest,
    onSuccess: () => {
      toast("success", "Lesson has been updated!");
      // run query.invalidquery lesson by id , can we pass the id?
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

const useDeleteLesson = () => {
  return useMutation({
    mutationFn: deleteLessonRequest,
    onSuccess: () => {
      toast("success", "deleted");
      // reload? see if the lesson on the btn changes value or maybe re treger the get lessons query
    },
    onError: (err) => {
      toast("error", err);
    },
  });
};

export {
  useGetAllLessons,
  useGetLessonById,
  usePayLesson,
  useAddLesson,
  useUpdateLesson,
  useDeleteLesson,
};
