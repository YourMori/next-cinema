import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";

export function useLogout() {
  const { status } = useSession();

  async function logout() {
    if (status !== "authenticated") {
      toast.error("Вы уже вышли из аккаунта");
      return;
    }

    try {
      await signOut({ redirect: false });
    } catch (error) {
      console.error("Error [LOGOUT]", error);
      toast.error("Ошибка при выходе из аккаунта");
    }
  }

  return logout;
}
