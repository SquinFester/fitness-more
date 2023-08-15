import { getAuthSession } from "@/lib/auth";
const Layout = async ({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) => {
  const session = await getAuthSession();

  return <>{session ? children : authModal}</>;
};
export default Layout;
