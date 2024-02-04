import CommonPageWrapper from "@/views/CommonPageWrapper/CommonPageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liked list - Sweetify",
};

interface SearchFilterProps {
  children: React.ReactNode;
}

const MyListLayout: React.FC<SearchFilterProps> = ({ children }) => {
  return <CommonPageWrapper>{children}</CommonPageWrapper>;
};

export default MyListLayout;
