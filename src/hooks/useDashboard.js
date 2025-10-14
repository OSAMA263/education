import { useGetAllExams } from "./useExams";
import { useGetAllLessons } from "./useLessons";
import { useAllUsers } from "./useUser";

export default function AllDashboardData() {
  const {
    data: users,
    isLoading: usersLoading,
    error: usersError,
  } = useAllUsers();

  const students = users?.filter((user) => user?.role === "student");
  const admins = users?.filter((user) => user?.role === "admin");

  const {
    data: lessons,
    isLoading: lessonsLoading,
    error: lessonsError,
  } = useGetAllLessons();
  const {
    data: exams,
    isLoading: examsLoading,
    error: examsError,
  } = useGetAllExams();


  const isLoading = Boolean(usersLoading || lessonsLoading || examsLoading);

  const error = usersError || lessonsError || examsError || null;

  return { admins, students, lessons, exams, isLoading, error };
}
